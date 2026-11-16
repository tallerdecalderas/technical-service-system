# Infraestructura — TechService

## Alcance

La infraestructura objetivo separa el frontend web, el backend Go y los servicios gestionados de Supabase. El proveedor de hosting de Next.js y Go todavía no está definido; este documento especifica responsabilidades y requisitos sin elegir proveedor ni agregar configuración ejecutable.

```text
Usuarios
   │ HTTPS
   ├──────────────> Frontend Next.js / PWA
   │                         │ API HTTP
   └─────────────────────────┴────────────> Backend Go
                                                ├── PostgreSQL de Supabase
                                                ├── Cloudflare R2 (archivos)
                                                └── Resend
```

## Componentes

### Frontend Next.js

- Entrega la interfaz responsive y los recursos de la PWA.
- Consume operaciones de negocio exclusivamente desde la API Go.
- No requiere acceso directo a PostgreSQL ni secretos de Supabase.
- Puede tener configuración pública limitada a los datos no sensibles necesarios para conectar a la API.

### Backend Go

- Servicio HTTP independiente, desarrollado en el repositorio separado `technical-service-backend`; mientras se prepara ese repositorio, su documentación vive en `../.backend/`.
- Mantiene autenticación, autorización, reglas de negocio, acceso SQL, integraciones y emisión de URLs firmadas para Cloudflare R2.
- Se conecta a Supabase PostgreSQL desde un entorno seguro de servidor.
- Debe disponer de health check, logs estructurados, límites de petición y cierre ordenado.
- La configuración exacta de proceso, réplicas y escalado se definirá al seleccionar el proveedor.

### Supabase

- PostgreSQL es la fuente de verdad.
- Storage guarda los archivos binarios en Cloudflare R2 (API S3-compatible). Go emite URLs prefirmadas y el navegador transfiere directamente a R2.
- Las credenciales de backend con privilegios se mantienen como secretos server-side.
- RLS no sustituye la autorización de Go; solo se considera defensa adicional cuando la identidad de Go se propaga de manera comprobable.
- La conexión a base debe usar TLS y el pooler/endpoint recomendado para el entorno de ejecución seleccionado.

### Resend

Se utiliza para entregar los correos de recuperación de contraseña. La API key y el dominio/verificación de envío son configuración privada del backend.

## Configuración y secretos

Los siguientes valores son ejemplos de nombres, no valores que deban incluirse en el repositorio:

- `DATABASE_RUNTIME_URL`: conexión PostgreSQL usada por Go en runtime.
- `DATABASE_MIGRATION_URL`: conexión reservada para operaciones controladas de
  esquema en Supabase.
- `SUPABASE_URL`: endpoint de Supabase requerido para Auth.
- `STORAGE_ENDPOINT`: endpoint S3 de Cloudflare R2 (`https://<ACCOUNT_ID>.r2.cloudflarestorage.com`).
- `STORAGE_ACCESS_KEY_ID`: clave de acceso del token R2 (server-side).
- `STORAGE_SECRET_ACCESS_KEY`: secreto del token R2 (server-side).
- `STORAGE_BUCKET_NAME`: bucket privado del entorno.
- `STORAGE_REGION`: `auto` para R2.
- `SUPABASE_SERVICE_ROLE_KEY`: clave privilegiada, solo en backend y solo si se necesita para operaciones server-side.
- `RESEND_API_KEY`: clave privada de envío de correo.
- `API_PORT` y `APP_ENV`: puerto y entorno del servicio Go.
- URL/base de la API configurada para Next.js, sin incluir secretos.

No publicar claves en `NEXT_PUBLIC_*`, JavaScript del navegador, logs, capturas ni archivos versionados. Usar secretos del proveedor en producción y un archivo local ignorado por Git para desarrollo.

## Red, sesión y CORS

El navegador usa HTTPS para el frontend y la API. El dominio y la estrategia de sesión aún deben definirse junto con el hosting. Si frontend y API tienen orígenes diferentes, configurar CORS para los orígenes permitidos y credenciales requeridas; no usar comodines con credenciales. Configurar cookies `Secure`, `HttpOnly`, `SameSite` y protecciones CSRF coherentes con esos dominios.

Los navegadores no acceden directamente a PostgreSQL. Las operaciones de carga/descarga usan URLs prefirmadas de corta duración que Go emite después de comprobar autorización; el navegador transfiere directamente contra Cloudflare R2.

## Despliegue y operación

Cada entorno (desarrollo, prueba y producción) debe tener configuración, datos y credenciales separados. Las migraciones SQL se revisan y aplican antes de desplegar una versión de Go que dependa del nuevo esquema.

La operación debe contemplar:

- Health checks del servicio Go y alertas ante indisponibilidad.
- Logs y errores de integraciones con datos sensibles redactados.
- Backups y procedimiento probado de recuperación para PostgreSQL.
- Límites de tamaño/tipo de carga, expiración de URLs firmadas, cuotas de R2 y CORS del bucket.
- Rotación de secretos y mínimo privilegio.
- TLS en tránsito y control de acceso al panel/proyecto Supabase.

Los proveedores, dominios, regiones, tamaños de instancia, pipelines y comandos de despliegue quedan pendientes hasta que se decida dónde alojar frontend y backend.

## Desarrollo local

El frontend y el backend se ejecutarán como procesos separados, cada uno con sus variables de entorno. La configuración de Supabase debe apuntar al proyecto/entorno de desarrollo y no a producción. No se presupone Docker ni `docker-compose`; si se decide incorporarlo, deberá documentarse como una decisión aparte.

## Documentos relacionados

- Arquitectura lógica: `./architecture.md`
- Responsabilidades y estructura de Go: `../backend.md`
- Contrato HTTP: `../.backend/api.md`
- Archivos: `./storage.md`
