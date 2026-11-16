# Backend Go — TechService

## Objetivo

El backend Go es la única API de TechService para operaciones de negocio. Vive
en el repositorio independiente `technical-service-backend` y es responsable
de autenticación, autorización, reglas de negocio, persistencia SQL,
integraciones y acceso controlado a archivos.

Next.js permanece como frontend. Puede solicitar datos desde el navegador o desde sus componentes de renderizado del servidor, pero debe consumir la misma API Go. No debe mantener reglas de negocio, conexiones a PostgreSQL ni acceso privilegiado a R2.

La arquitectura objetivo se está implementando en el backend Go. Next.js
todavía usa Prisma mientras se completa primero el backend; la migración del
frontend y el retiro de su lógica interna ocurren después, según el plan maestro.

## Responsabilidades

Go debe:

- Autenticar usuarios y validar su sesión en las operaciones protegidas.
- Autorizar acciones por rol, propiedad y estado del recurso.
- Validar entrada y aplicar las reglas documentadas en `./reglas-negocio.md`.
- Leer y escribir en Supabase PostgreSQL con SQL parametrizado, sin ORM.
- Coordinar acceso a Cloudflare R2 (archivos), Resend y Google Sheets.
- Devolver errores consistentes y no ocultar fallas.
- Registrar eventos operativos y de integración necesarios para diagnóstico.

La interfaz puede ocultar acciones no disponibles para facilitar el uso, pero esto no reemplaza la autorización de Go.

## Organización recomendada

La estructura hexagonal portable se documenta en `../ingeneri/backend-architecture.md`.
Como referencia, el repositorio backend tendrá:

```text
technical-service-backend/
  cmd/
    api/                 # Inicio del servidor HTTP
  internal/
    domain/              # Entidades, reglas y errores
    application/         # Casos de uso
    ports/               # Interfaces inbound/outbound
    adapters/            # HTTP, PostgreSQL, R2 (S3-compatible) y proveedores
    config/               # Configuración y validación de entorno
  migrations/            # Migraciones SQL versionadas
```

No se deben importar detalles de `internal/repository` desde handlers de HTTP ni desde la interfaz Next. Los handlers validan el protocolo; la lógica de negocio coordina dominio y repositorios.

## Acceso a Supabase PostgreSQL

- Conectar únicamente desde Go mediante la conexión PostgreSQL privada del proyecto Supabase.
- Usar un driver de Go y SQL parametrizado; no incorporar un ORM.
- Mantener transacciones para operaciones que deban persistirse como una unidad.
- Evitar consultas N+1, paginar resultados y seleccionar solo los campos requeridos.
- Mantener credenciales y URLs de conexión en variables de entorno del backend.
- No asumir que RLS conoce al usuario autenticado por Go. La autorización del backend siempre se aplica; RLS requiere una estrategia explícita de contexto de identidad para servir como protección adicional.

## Esquema Supabase

Supabase ya contiene las migraciones oficiales y es la fuente del esquema.
El backend Go no genera migraciones desde Prisma ni cambia el esquema al
iniciar. Los cambios futuros se gestionan mediante el mecanismo de migraciones
adoptado por Supabase y se verifican antes de desplegar.

El contrato `prisma/contract.prisma`, las migraciones Prisma existentes y `generated/` describen la aplicación actual. No deben usarse como capa de acceso del backend Go. El esquema SQL objetivo se documentará y migrará como parte de las funcionalidades que se implementen.

La documentación portable del repositorio Go está en `../.backend/` mientras
se trabaja en este repositorio. La correspondencia completa entre rutas
actuales, servicios Prisma, endpoints Go y criterio de retiro está en
`../ejecuciones/implementation-plan.md`.

## Autenticación y autorización

### Login

Supabase Auth valida inicialmente las credenciales y Go valida la identidad,
resuelve el usuario interno y crea la sesión autenticada. La contraseña nunca
se devuelve ni se registra. Las sesiones y cookies deben usar atributos
seguros, con `HttpOnly` y `Secure` en producción; la política `SameSite`, CORS
y CSRF debe coincidir con los dominios donde se desplieguen frontend y API.

### Recuperación de contraseña

Resend se utiliza para enviar el mensaje de recuperación, no para autenticar usuarios. Go genera un token aleatorio de un solo uso, limita su vigencia, conserva el token de forma segura, evita reutilizaciones y actualiza la contraseña solo después de validarlo. Las respuestas no deben revelar si una dirección está registrada.

### Autorización

Cada handler protegido debe validar la sesión y delegar la autorización según rol, propiedad del recurso y reglas de transición. No confiar en identificadores de técnico enviados por el cliente cuando el usuario autenticado determina esa relación.

## Cloudflare R2

Los archivos se almacenan fuera de PostgreSQL en Cloudflare R2 (API S3-compatible). Go valida el usuario, el servicio/entidad asociada, el tipo y el tamaño antes de emitir una URL firmada de vida corta para carga o descarga. Nunca se envían credenciales de R2 al frontend. Los detalles de keys, metadatos y reglas de acceso están en
`../ingeneri/storage.md`.

## Resend y Google Sheets

- Resend: entrega de correo de recuperación de contraseña; los errores deben registrarse sin exponer tokens.
- Google Sheets: exportación unidireccional de agenda e importación administrativa de catálogo, documentadas como procesos diferentes en `./integraciones/googlesheets.md`.
- Una falla externa no debe invalidar ni borrar datos operativos ya guardados.

## API, errores y observabilidad

El contrato canónico de rutas, formatos de respuesta, validación, paginación,
autenticación e idempotencia está en `../.backend/api.md`. La API se versiona
bajo `/api/v1`; cada recurso Go se habilita junto con la funcionalidad
correspondiente y no duplica reglas en Next.js.

Los logs deben incluir correlación por petición y datos suficientes para diagnosticar errores, sin contraseñas, tokens de sesión, tokens de recuperación ni secretos. La API debe informar errores de validación, autorización, conflicto y dependencia externa con una respuesta consistente.

## Verificación y pruebas

En cada fase backend ejecutable (1–7) se ejecuta
`go build -buildvcs=false ./...`, se inicia la API con las variables
configuradas por el operador y se comprueba HTTP 200 en `/health/live` y
`/health/ready`. En cada fase frontend se ejecuta
`pnpm build`, se inicia Next.js con `pnpm start` y se comprueba HTTP 200 en
`/login`. No se crean ni ejecutan pruebas automatizadas durante las fases
intermedias; se abordan en una única validación global al completar backend y
frontend. El usuario configura las variables privadas. Cualquier prueba o
comando que escriba datos en producción requiere consultarle y recibir
autorización explícita.

Orden de implementación y migración:

1. Completar en Go los módulos de negocio, Storage e integraciones, manteniendo
   el frontend actual.
2. Con el backend listo, migrar el frontend completo para consumir la API Go.
3. Verificar reglas de negocio y permisos por rol y capacidad.
4. Solo después, retirar el código equivalente de Next.js, Prisma y las
   dependencias obsoletas.

No mantener dos implementaciones activas de la misma regla después de validar la migración.

## Configuración

La configuración se lee desde el entorno del backend. Los nombres concretos se definen en la implementación; como mínimo se necesitarán valores para la conexión PostgreSQL, entorno/puerto HTTP, Resend y Cloudflare R2 (endpoint, credenciales y bucket). Los secretos no se guardan en el repositorio ni se exponen como variables públicas de Next.js.

Los valores de desarrollo de ejemplo deben ser ficticios. La documentación de despliegue, todavía independiente del proveedor, está en
`../ingeneri/infrastructure.md`.

El backend separado debe incluir un `example.env` versionado con todas las
variables requeridas y valores ficticios. Las claves reales se cargan solo en
el entorno del backend o en un gestor de secretos.
