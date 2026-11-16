# Configuración del backend

El repositorio Go debe versionar `example.env` con nombres documentados y
valores ficticios. El archivo `.env` real se ignora y las claves de producción
se cargan desde el entorno o un gestor de secretos.

```env
APP_ENV=development
API_PORT=8080
DATABASE_RUNTIME_URL=postgres://user:password@db.example.supabase.co:5432/postgres?sslmode=verify-full
DATABASE_MIGRATION_URL=postgres://user:password@db.example.supabase.co:5432/postgres?sslmode=verify-full
DATABASE_MAX_OPEN_CONNS=10
DATABASE_MIN_CONNS=0
DATABASE_MAX_CONN_LIFETIME=30m
DATABASE_MAX_CONN_IDLE_TIME=5m
DATABASE_CONNECT_TIMEOUT=5s
DATABASE_QUERY_TIMEOUT=10s
SUPABASE_URL=https://project-ref.supabase.co
SUPABASE_AUTH_API_KEY=sb_publishable_replace-with-project-key
SUPABASE_JWT_SECRET=replace-with-server-only-jwt-secret-at-least-32-chars
SUPABASE_PASSWORD_RESET_REDIRECT_URL=http://localhost:3000/reset-password

# Almacenamiento de objetos (local para desarrollo, r2 para Cloudflare R2)
STORAGE_PROVIDER=local
STORAGE_LOCAL_DIR=./uploads
STORAGE_ENDPOINT=https://replace-with-account-id.r2.cloudflarestorage.com
STORAGE_REGION=auto
STORAGE_ACCESS_KEY_ID=replace-with-r2-access-key-id
STORAGE_SECRET_ACCESS_KEY=replace-with-r2-secret-access-key
STORAGE_BUCKET_NAME=private-service-files-dev
STORAGE_UPLOAD_URL_TTL=5m
STORAGE_DOWNLOAD_URL_TTL=2m
STORAGE_MAX_IMAGE_SIZE_BYTES=10485760
STORAGE_MAX_DOCUMENT_SIZE_BYTES=20971520

RESEND_API_KEY=re_replace-with-private-key
RESEND_FROM_EMAIL=no-reply@example.com
SESSION_COOKIE_NAME=tech-service-session
CSRF_COOKIE_NAME=tech-service-csrf
SESSION_TTL=168h
PASSWORD_RESET_TTL=30m
CORS_ALLOWED_ORIGINS=http://localhost:3000
CSRF_TRUSTED_ORIGINS=http://localhost:3000
LOG_LEVEL=debug
GOOGLE_SHEETS_CREDENTIALS_JSON=replace-with-secret-manager-reference
GOOGLE_SHEETS_SPREADSHEET_ID=replace-with-spreadsheet-id
GOOGLE_SHEETS_CATALOG_RANGE=A1:Z10000
```

La API carga solo `DATABASE_RUNTIME_URL` y usa un pool persistente.
`DATABASE_MIGRATION_URL` es exclusiva de comandos o jobs de migración y no se
carga en el proceso HTTP. Las migraciones nunca se ejecutan automáticamente
desde cada réplica. Consulta
[Conexión y migraciones SQL](../ingeneri/database-connection.md) para TLS,
límites del pool, transacciones y el procedimiento sin ORM.

La aplicación Go no carga automáticamente `.env`; el entorno debe exportarse
antes de iniciar el proceso. En producción, utilizar el gestor de secretos de
la plataforma.

`CORS_ALLOWED_ORIGINS` es una lista separada por comas de orígenes exactos,
sin comodines ni rutas. En `staging` y `production` deben usar HTTPS.

Nunca se usan secretos como variables públicas de Next.js.

## Identidad y autenticación

Supabase Auth es el proveedor inicial de identidad. La Fase 3 valida
localmente tokens HS256 con `SUPABASE_JWT_SECRET` y rechaza firma, `iss`,
`aud`, `sub`, `nbf` o expiración inválidos. El issuer se deriva de
`SUPABASE_URL` (`/auth/v1`) y la audiencia aceptada es `authenticated`.
La API key para Auth puede ser publishable; no se necesita una clave
`service_role` para el flujo de login.

El `sub` del JWT se vincula a `user_identities.provider_subject`; la
autorización usa el `users.id` interno, su estado y sus roles. La sesión de
aplicación y la cookie son responsabilidad de Go. No se debe usar el JWT como
identificador de negocio ni guardar tokens en logs.

El cliente frontend usa `NEXT_PUBLIC_API_URL`, que es una URL pública y no una
credencial, para llamar directamente a Go. El secreto JWT se mantiene solo en
el backend. Un cambio de
proveedor requiere implementar otro adaptador `IdentityProvider`, migrar los
vínculos de identidad y conservar las tablas de negocio. Ver también
[Autenticación y sesión](./authentication.md).

## Almacenamiento de objetos (Cloudflare R2)

Cloudflare R2 es el proveedor exclusivo para almacenamiento de objetos. **Supabase Storage no se utiliza.**

- `STORAGE_ENDPOINT`: endpoint S3 de la cuenta Cloudflare R2 (`https://<ACCOUNT_ID>.r2.cloudflarestorage.com`).
- `STORAGE_REGION`: `auto` para Cloudflare R2.
- `STORAGE_ACCESS_KEY_ID` y `STORAGE_SECRET_ACCESS_KEY`: credenciales S3 del token R2, con permisos mínimos de lectura/escritura de objetos y limitados al bucket del entorno. Nunca exponer en el frontend.
- `STORAGE_BUCKET_NAME`: bucket privado del entorno (por ejemplo, `private-service-files-dev`, `private-service-files-prod`).
- `STORAGE_UPLOAD_URL_TTL`: tiempo de expiración de las URLs `PUT` prefirmadas (valor recomendado: `5m`).
- `STORAGE_DOWNLOAD_URL_TTL`: tiempo de expiración de las URLs `GET` prefirmadas de descarga (valor recomendado: `2m`).
- `STORAGE_MAX_IMAGE_SIZE_BYTES`: tope máximo de bytes para imágenes (ejemplo: `10485760`, 10 MiB).
- `STORAGE_MAX_DOCUMENT_SIZE_BYTES`: tope máximo de bytes para documentos (ejemplo: `20971520`, 20 MiB).

Ver especificación técnica completa en [Módulo Archivos y Storage](./modulos/archivos-storage.md) y [Almacenamiento transversal](../ingeneri/storage.md).
