# Arquitectura del backend Go

## Responsabilidad

Go concentra autorización, reglas de negocio, persistencia SQL, auditoría,
Storage e integraciones. Supabase Auth provee inicialmente la identidad y
Supabase PostgreSQL es la fuente oficial de datos; Cloudflare R2 conserva
los archivos binarios mediante un adaptador S3-compatible.

Next.js no ejecuta reglas de negocio, no consulta PostgreSQL, no autentica
directamente contra Supabase y no recibe credenciales privadas. Solo presenta
la interfaz y consume `/api/v1`.

## Arquitectura hexagonal

```text
                 ┌─────────────────────────────┐
                 │        Adaptadores entrada  │
                 │ HTTP, middleware, DTOs      │
                 └──────────────┬──────────────┘
                                │
                 ┌──────────────▼──────────────┐
                 │       Aplicación             │
                 │ casos de uso y puertos       │
                 └──────────────┬──────────────┘
                                │
                 ┌──────────────▼──────────────┐
                 │         Dominio              │
                 │ entidades, reglas, errores   │
                 └──────────────┬──────────────┘
                                │
                 ┌──────────────▼──────────────┐
                 │    Puertos de salida         │
                 │ repositorios, correo, files │
                 └──────────────┬──────────────┘
                                │
       ┌────────────────────────┼────────────────────────┐
       ▼                        ▼                        ▼
 PostgreSQL/SQL          Cloudflare R2 (S3-compat.)   Resend/Sheets
```

## Estructura del repositorio

```text
cmd/api/
internal/
  domain/
  application/
  ports/inbound/
  ports/outbound/
  adapters/http/
  adapters/postgres/
  adapters/storage/s3compatible/
  adapters/resend/
  adapters/googlesheets/
  config/
  observability/
tests/
example.env
```

Las migraciones Supabase viven en `supabase/migrations/` en la raíz del
proyecto compartido, no dentro del backend. El binario Go nunca las aplica al
iniciar.

El dominio no importa HTTP, SQL, Prisma, Supabase ni frameworks. Los casos de
uso dependen de interfaces; los adaptadores implementan esas interfaces.

## Persistencia

- SQL parametrizado con driver Go, sin ORM.
- Transacciones explícitas para operaciones atómicas.
- Migraciones SQL versionadas.
- Consultas paginadas y sin N+1.
- Autorización en Go; RLS solo es defensa adicional si se propaga identidad
  de forma explícita y verificable.

Supabase Auth valida la identidad externa y emite JWT. Go valida la firma,
`iss`, `aud`, `sub` y expiración, resuelve el usuario interno y aplica roles,
propiedad, transiciones y auditoría.

El dominio depende de un puerto `IdentityProvider`, no de tipos de Supabase.
El adaptador actual puede validar JWT de Supabase; un adaptador futuro puede
usar otro proveedor sin cambiar casos de uso ni tablas operativas.

La conexión de runtime y la conexión exclusiva para migraciones se mantienen
separadas. La configuración de `pgxpool`, los timeouts, el cierre ordenado y
el procedimiento de migración están definidos en
[Conexión y migraciones SQL](./database-connection.md).
