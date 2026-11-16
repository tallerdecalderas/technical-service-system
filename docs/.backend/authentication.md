# Autenticación y sesión

## Arquitectura

Supabase Auth verifica la contraseña. Go valida el JWT recibido por firma
HS256, issuer, audience, sujeto, `nbf` y expiración; después resuelve el sujeto
únicamente mediante `public.user_identities`. No se enlazan cuentas por correo
ni se usa metadata del JWT para elegir roles.

Go emite una sesión opaca y revocable. PostgreSQL almacena solo los hashes
SHA-256 del token de sesión y del token CSRF. El cliente frontend se comunica
directamente con la API Go para autenticarse; Next.js no actúa como BFF ni
mantiene rutas de autenticación de servidor en la arquitectura final.

## Variables de entorno

Configurar en el entorno privado de `technical-service-backend`:

| Variable | Obligatoria | Uso |
|---|---:|---|
| `DATABASE_RUNTIME_URL` | Sí | Conexión runtime de Go; no se usa `DATABASE_URL` como alternativa |
| `SUPABASE_URL` | Sí | Origen del proyecto Supabase |
| `SUPABASE_AUTH_API_KEY` | Sí | Publishable key (o anon key heredada) para las llamadas Auth; solo server-side en esta integración |
| `SUPABASE_JWT_SECRET` | Sí | Secreto JWT HS256 del proyecto, nunca una API key |
| `SUPABASE_PASSWORD_RESET_REDIRECT_URL` | En staging/producción | URL HTTPS del frontend, normalmente `/reset-password`, habilitada en Redirect URLs de Supabase Auth |
| `SESSION_TTL` | No | Duración de sesión Go; predeterminado `168h` |
| `SESSION_COOKIE_NAME` | No | Cookie opaca; predeterminado `tech-service-session` |
| `CSRF_COOKIE_NAME` | No | Cookie CSRF legible por el navegador; predeterminado `tech-service-csrf` |
| `CSRF_TRUSTED_ORIGINS` | No | Orígenes exactos separados por coma; por defecto usa `CORS_ALLOWED_ORIGINS` |

El frontend necesita `NEXT_PUBLIC_API_URL` apuntando al origen de la API Go.
Si se cambian `SESSION_COOKIE_NAME` o `CSRF_COOKIE_NAME`, configurar el mismo
nombre en el entorno del servidor Next.js (`SESSION_COOKIE_NAME` y
`NEXT_PUBLIC_CSRF_COOKIE_NAME`). No agregar `SUPABASE_JWT_SECRET`, service-role
keys ni contraseñas a variables `NEXT_PUBLIC_*`, `.env` versionados o al chat.

En desarrollo local se permite HTTP. En staging y producción, Supabase, el
origen de recuperación, CORS y CSRF deben usar HTTPS. El frontend debe estar
incluido como URL de redirección permitida en Supabase Auth. Las cookies son
`HttpOnly`, `SameSite=Lax` y `Secure` fuera de desarrollo.

## Endpoints Go

| Método y ruta | Comportamiento |
|---|---|
| `POST /api/v1/auth/login` | Valida credenciales, vínculo interno, usuario activo y membresías; emite cookies |
| `GET /api/v1/auth/session` | Valida la sesión persistida y devuelve perfil interno y empresas activas |
| `POST /api/v1/auth/logout` | Exige Origin y CSRF válidos, revoca la sesión y elimina cookies |
| `POST /api/v1/auth/password/forgot` | Solicita recuperación; la respuesta no revela si existe el correo |
| `POST /api/v1/auth/password/reset` | Valida el JWT de recuperación y delega el cambio de contraseña a Supabase Auth |

Las operaciones POST requieren un `Origin` exacto de `CSRF_TRUSTED_ORIGINS`.
Logout también requiere el token de la cookie CSRF en `X-CSRF-Token`; Go compara
el hash con el valor persistido. Login y recuperación no exponen tokens del
proveedor en sus respuestas. Las tasas de login también están sujetas a los
límites configurados en Supabase Auth; Go conserva el estado HTTP 429 del
proveedor en las rutas de login y recuperación/reset.

La verificación JWT implementada acepta actualmente HS256 usando el secreto
legacy del proyecto en `SUPABASE_JWT_SECRET`. No desplegar con una clave de
firma asimétrica sin migrar el verificador a JWKS y probar esa configuración.
Los eventos de login, logout y recuperación se registran estructuradamente sin
correo, contraseña ni tokens; esto complementa, pero no sustituye, la auditoría
durable de acciones de negocio.

## Aprovisionamiento inicial

No hay auto-registro ni enlace automático por correo. Antes del primer login,
una persona operadora debe:

1. Crear la identidad en Supabase Auth y anotar su UUID de Auth.
2. Crear el usuario interno en `public."user"` con rol `ADMIN` o `TECHNICIAN`.
   La columna heredada `passwordHash` debe recibir un valor no vacío, pero ya
   no participa en el login Supabase.
3. Crear o seleccionar una empresa activa y registrar la fila de membresía en
   `public.user_company_memberships`.
4. Insertar en `public.user_identities` el proveedor `supabase`, el UUID de
   Auth como `provider_subject` y el ID interno como `user_id`.
5. Verificar los IDs, el estado activo, el rol y la membresía antes de probar
   el acceso.

La estructura inicial de los vínculos se encuentra en
`supabase/migrations/20261105161000_service_compatibility_foundation.sql`; las
sesiones y membresías de empresa están en
`supabase/migrations/20261105205907_fase_3_auth_sessions_and_memberships.sql`.
Estas migraciones se revisan y aplican por el operador; la API nunca modifica
el esquema al arrancar.

## Estado y validación

El usuario confirma que la autenticación está lista y que las migraciones
requeridas están aplicadas. Esta actualización documental no consultó la base
remota ni ejecutó un login integrado.

En las fases de desarrollo no se crean ni ejecutan pruebas automatizadas. La
validación operativa backend por fase es compilar con
`go build -buildvcs=false ./...`, iniciar la API con variables configuradas por
el operador y comprobar HTTP 200 en `/health/live` y `/health/ready`. Las
pruebas automatizadas se abordan en una única validación global al completar
backend y frontend. Cualquier comprobación que escriba datos en producción
requiere consultar y recibir autorización explícita del usuario; nunca pedir
secretos por chat.
