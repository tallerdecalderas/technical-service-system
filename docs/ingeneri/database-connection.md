# Conexión y migraciones de base de datos

Este documento cubre la operación de conexión, pool, transacciones y
migraciones SQL. El esquema de tablas, entidades y restricciones está en
[`../.backend/database.md`](../.backend/database.md).

## Decisión técnica

El backend Go usa PostgreSQL administrado por Supabase mediante SQL directo,
sin ORM. El adaptador de persistencia usa `github.com/jackc/pgx/v5` y
`pgxpool` para las conexiones de runtime. Los casos de uso dependen de
interfaces de repositorio y no conocen `pgx`, PostgreSQL ni Supabase.

PostgreSQL es la fuente oficial de datos. Cloudflare R2 se usa únicamente
para binarios y sus metadatos se registran en PostgreSQL.

## Conexiones separadas

Se configuran dos URLs distintas:

- `DATABASE_RUNTIME_URL`: conexión usada por la API durante la operación
  normal. Usa un pool persistente.
- `DATABASE_MIGRATION_URL`: conexión exclusiva para ejecutar migraciones. Se
  usa desde un comando o job controlado, nunca desde cada instancia de la API.

La URL de migraciones debe preferir la conexión directa de PostgreSQL cuando
el entorno de ejecución soporte IPv6. Si el hosting es IPv4-only, se puede
usar Supavisor en modo sesión. El pooler de transacciones se reserva para
procesos efímeros y requiere revisar compatibilidad con prepared statements y
estado de sesión.

No se debe abrir una conexión nueva por request. La aplicación crea un único
pool al iniciar, valida la conexión con `Ping` y lo cierra durante el apagado
ordenado.

## Variables de configuración

Variables mínimas:

```env
DATABASE_RUNTIME_URL=postgres://user:password@host:5432/postgres?sslmode=verify-full
DATABASE_MIGRATION_URL=postgres://user:password@host:5432/postgres?sslmode=verify-full
DATABASE_MAX_OPEN_CONNS=10
DATABASE_MIN_CONNS=0
DATABASE_MAX_CONN_LIFETIME=30m
DATABASE_MAX_CONN_IDLE_TIME=5m
DATABASE_CONNECT_TIMEOUT=5s
DATABASE_QUERY_TIMEOUT=10s
```

Los valores reales se cargan desde el entorno o un gestor de secretos. Nunca
se versionan contraseñas, URLs completas con credenciales, certificados
privados ni claves de Supabase.

`sslmode=disable` solo puede utilizarse en una base local de pruebas. Los
entornos compartidos y productivos deben validar TLS y el certificado del
servidor.

## Inicialización del pool

El adaptador PostgreSQL debe:

1. Parsear la URL y validar que no esté vacía.
2. Crear `pgxpool.Config` desde la configuración tipada.
3. Aplicar máximos/mínimos de conexiones, lifetime e idle time.
4. Configurar timeout de conexión y crear el pool.
5. Ejecutar `Ping` antes de publicar el servidor HTTP.
6. Exponer health checks separados para proceso y dependencia de base de
   datos.
7. Cerrar el pool después de detener el servidor HTTP y dejar terminar las
   operaciones en curso.

Cada request debe propagar `context.Context` al repositorio y aplicar un
timeout de consulta. Un timeout debe devolver un error explícito y observable,
no una respuesta exitosa vacía.

Los límites iniciales son una configuración de partida. Deben ajustarse según
el límite de conexiones de Supabase, el número de réplicas y la latencia
observada:

```text
conexiones_totales ≈ DATABASE_MAX_OPEN_CONNS × réplicas
```

El total nunca debe superar el límite disponible para el proyecto.

`pgxpool` administra conexiones mínimas (`DATABASE_MIN_CONNS`), máximas
(`DATABASE_MAX_OPEN_CONNS`) y el tiempo máximo de inactividad
(`DATABASE_MAX_CONN_IDLE_TIME`); no expone un límite separado de cantidad de
conexiones idle como `database/sql`.

El proceso HTTP solo carga `DATABASE_RUNTIME_URL`. `DATABASE_MIGRATION_URL`
queda fuera de su configuración y se entrega únicamente al proceso controlado
que aplica migraciones. Así las credenciales de DDL no quedan disponibles para
la API en runtime.

## SQL y repositorios

- Usar consultas SQL explícitas y parametrizadas; nunca concatenar valores del
  usuario.
- Mantener las consultas cerca del adaptador PostgreSQL o en archivos SQL
  versionados cuando sean extensas.
- Seleccionar únicamente las columnas necesarias.
- Paginar listados con un límite máximo validado por el servidor.
- Crear índices para filtros y claves foráneas que se usen en rutas críticas.
- Evitar N+1: cargar relaciones con consultas diseñadas para el caso de uso.
- Convertir errores de `pgx` a errores de dominio o aplicación en un único
  punto del adaptador.
- No incluir parámetros sensibles, tokens ni URLs firmadas en logs.

Ejemplo de consulta parametrizada:

```go
row := pool.QueryRow(ctx, `
  SELECT id, status
  FROM services
  WHERE id = $1 AND technician_id = $2
`, serviceID, technicianID)
```

La autorización de propiedad y rol se verifica en el caso de uso. Las
condiciones de propiedad también deben aparecer en las consultas de lectura o
escritura para reducir el riesgo de acceso cruzado.

## Transacciones

Una transacción se usa cuando varias escrituras deben confirmarse o
cancelarse juntas, por ejemplo cerrar un servicio y registrar su cobro.

Reglas:

1. Obtener la conexión transaccional desde el pool.
2. Configurar un timeout de contexto.
3. Ejecutar todas las operaciones relacionadas dentro de la transacción.
4. Hacer `ROLLBACK` ante cualquier error.
5. Hacer `COMMIT` solo después de validar todas las reglas.
6. Mantener la transacción corta y no incluir llamadas HTTP, R2 o correo.

Las operaciones externas se coordinan fuera de la transacción mediante estados
explícitos, reintentos e idempotencia. No se mantiene una conexión de
PostgreSQL bloqueada mientras se espera a Cloudflare R2 o Resend.

## Cambios de esquema sin Prisma

Supabase ya contiene las migraciones oficiales del esquema. Las nuevas
migraciones SQL versionadas viven en `supabase/migrations/` en la raíz del
proyecto compartido, que es la ruta reconocida por Supabase CLI. No se guardan
copias dentro de `technical-service-backend/migrations/`, no se regeneran desde
Prisma y no se ejecutan al iniciar la API.

Supabase CLI mantiene el historial remoto de migraciones. Los cambios
destructivos deben evitarse; si un cambio requiere revertir una migración ya
aplicada, debe prepararse una nueva migración compensatoria después de evaluar
los datos y dependencias.

`DATABASE_MIGRATION_URL` se usa solo con herramientas que aceptan un DSN
directo, como `psql` o un job de migración propio. Supabase CLI trabaja con el
proyecto enlazado y su mecanismo de autenticación/contraseña; la API HTTP no
carga ni recibe esta variable.

Flujo recomendado:

```text
crear SQL → revisar → verificar el proyecto destino → usuario aplica en producción
→ verificar historial/esquema con consultas de solo lectura
```

La herramienta mantiene una tabla de versión y falla ante una migración
incompleta. Un estado sucio debe resolverse manualmente después de investigar
la causa; no se debe borrar la tabla de control ni marcar una versión como
aplicada sin verificar el esquema. Este proyecto actualmente no tiene una base
local, temporal o de staging; las pruebas que escriban en producción requieren
consultar primero al usuario y su autorización explícita. El usuario ejecuta
los comandos de migración desde su consola.

## Compatibilidad durante la migración

Las migraciones de cambios funcionales siguen el patrón expandir-migrar-
contraer:

1. **Expandir:** agregar tablas o columnas nuevas sin romper el código actual.
2. Desplegar código que pueda leer el formato anterior y el nuevo.
3. Migrar o validar los datos existentes en un job controlado.
4. Cambiar las lecturas y escrituras al formato nuevo.
5. **Contraer:** eliminar columnas, índices u objetos antiguos en una
   migración posterior, cuando ya no existan consumidores.

Las migraciones no deben depender de datos de desarrollo ni borrar datos en
producción como efecto implícito. Toda operación destructiva requiere una
revisión explícita, respaldo verificado y procedimiento de recuperación.

## Compatibilidad con Prisma

El contrato Prisma actual sirve como inventario inicial, no como contrato
definitivo del backend Go. Antes de retirar Prisma:

1. Comparar `prisma/contract.prisma` con el esquema real de Supabase.
2. Exportar y revisar índices, restricciones, enums, valores por defecto y
   relaciones existentes.
3. No crear una migración inicial desde Prisma: Supabase ya contiene las
   migraciones oficiales y es la fuente del esquema.
4. Completar y probar en Go el alcance de backend acordado, sin migrar todavía
   las pantallas ni retirar el consumidor actual de Next.js.
5. Migrar el frontend a Go una vez listo el backend y comprobar lecturas,
   escrituras, permisos y transiciones.
6. Retirar Prisma únicamente al final, cuando el frontend ya no tenga
   consumidores activos.

No se ejecuta `CREATE TABLE` desde el backend contra producción como parte del
desacoplamiento. Los cambios futuros se gestionan mediante el flujo de
migraciones adoptado por Supabase.

### Límite operativo de la Fase 2

El proyecto objetivo de esta ejecución es `bniquenbqwibyxychnva`. No hay una
base local/de desarrollo ni un repositorio Git en el espacio de trabajo; no
hace falta configurar una base local ni subir cambios a un repositorio. La
inspección de esta fase se hizo únicamente contra producción con consultas de
solo lectura. Por decisión del usuario, producción es la única base disponible.
El agente no aplica migraciones; el usuario las revisa y ejecuta desde su
consola, y comparte el resultado sanitizado.

### Baseline de Supabase Auth

El esquema administrado por Supabase Auth (`auth.*`) queda fuera del control de
los cambios de negocio. No se modifican sus tablas, triggers ni políticas
internas. En el proyecto confirmado, el usuario interno es `public."user"`;
`user_identities` fue agregada por la migración `20261105161000`, que el usuario
confirmó como aplicada en producción el 2026-11-06. El usuario informó
posteriormente que también aplicó `20261105205907` para sesiones y membresías;
falta confirmar ese estado con un historial remoto actualizado. La verificación
documenta esos objetos y las tablas de dominio sin crear una dependencia con
`auth.users`.

Antes del primer despliegue se verifica que el proyecto tenga habilitado el
proveedor de identidad elegido, que el issuer y audience coincidan con la
configuración de la API y que existan respaldos. Las migraciones posteriores
pueden agregar vínculos, índices y datos de negocio, pero nunca asumen que
`auth.users` sea una tabla de dominio estable.

## Operación y recuperación

- Ejecutar migraciones con una identidad separada y permisos mínimos.
- Respaldar y verificar la capacidad de restauración antes de cambios
  destructivos.
- Medir latencia, errores, saturación del pool y consultas lentas.
- Probar migraciones hacia adelante y rollback en una base temporal.
- Documentar el procedimiento para resolver una migración fallida.
- Usar despliegues backward-compatible cuando haya más de una réplica.

Esta estrategia mantiene la base de datos controlada por SQL, evita acoplar el
dominio a una herramienta de persistencia y permite migrar gradualmente desde
los Route Handlers y servicios Prisma actuales.
