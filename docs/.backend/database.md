# Esquema de datos del backend Go

## Propósito

Este documento define la perspectiva física del backend: PostgreSQL en
Supabase, SQL sin ORM, migraciones versionadas y repositorios hexagonales. El
modelo funcional compartido está en
[modelo-dominio.md](../modelo-dominio.md).

## Acceso a datos: estado actual y objetivo

Actualmente, Next.js todavía ejecuta lógica de negocio mediante Route Handlers
y Prisma. El navegador no importa `pgx`, ejecuta SQL ni recibe credenciales de
PostgreSQL.

El objetivo es que Go sea el único componente autorizado a leer o escribir la
base. Primero se completa el backend Go y se verifica en cada fase mediante
compilación, arranque y health checks HTTP 200; después Next.js cambia a
cliente HTTP de Go. Las pruebas automatizadas se abordan al finalizar backend
y frontend. El backend interno,
Route Handlers y servicios Prisma actuales se conservan hasta completar y
verificar la migración del frontend, y se retiran en la fase final.

## Baseline físico confirmado

La inspección de solo lectura del proyecto `bniquenbqwibyxychnva` confirmó el
2026-11-05 estas 13 relaciones públicas existentes, todas con cero filas:
`activityLog`, `client`, `company`, `estimate`, `inventoryItem`, `payment`,
`service`, `serviceCategory`, `servicePart`, `settlement`, `settlementItem`,
`settlementPart` y `user`.

Para esta Fase 2 no existe una base local/de desarrollo ni un repositorio Git
en este espacio. La inspección se realizó únicamente contra producción con
consultas de solo lectura y sin ejecutar migraciones; el usuario gestiona su
aplicación. Esto es una restricción de esta ejecución, no una política para
aplicar cambios productivos sin una revisión previa.

El proyecto no tiene `public.products`, `public.users` ni `public.companies`.
El catálogo físico actual es `public."inventoryItem"`; contiene una columna
`stock`, cuyo comportamiento funcional permanece fuera de alcance hasta la
revisión de inventario. Los nombres físicos y columnas heredados conservan
mayúsculas/minúsculas; los adaptadores PostgreSQL deben citarlos correctamente.

Las relaciones existentes tienen claves, restricciones e índices para las
relaciones y consultas de servicios/rendiciones; no se encontraron funciones
de aplicación en el esquema `public`. El contrato físico no coincide por
completo con el contrato objetivo:

- `service.status` permite `PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`
  y `CLOSED`. El frontend aún usa `CLOSED` para el cierre administrativo; no
  restringir el estado hasta migrar ese flujo.
- Todas las tablas públicas observadas tienen RLS deshabilitado. No se
  encontraron políticas ni triggers de negocio.
- `settlementItem` y `settlementPart` existen, pero no se encontraron triggers
  de inmutabilidad. No asumir que el snapshot ya esté protegido en la base.
- `serviceExpense`, `settlementExpense`, `settlementAdjustment`,
  `catalogProvider`, `catalogOffer`, `exchangeRate` y `catalogImport` no
  existen en el esquema auditado. Para Fase 6, el operador debe aplicar de
  forma controlada las migraciones aditivas descritas en las fichas de gastos,
  inventario/proveedores y rendiciones; la aplicación no ejecuta DDL.
- `settlement` carece de `companyRate`, totales de gastos/seguros/ajustes,
  `techBalance` y `createdById`; `servicePart` y `settlementPart` carecen de
  `providerName`, `costUsd` y `exchangeRate`.
- La migración `20261105161000` crea solamente `user_identities`, enlazada con
  `public."user"`; no crea ni renombra tablas heredadas. Según el historial
  remoto compartido por el usuario el 2026-11-06, está aplicada en producción.
- La migración `20261105205907` agrega sesiones y membresías de empresa; el
  usuario confirma que está aplicada en producción.
- Las migraciones `20261107143445` y `20261107143721` preparan el
  almacenamiento de respuestas idempotentes y hacen opcional
  `service."technicianId"`, respectivamente; el usuario confirma que están
  aplicadas. Esta actualización documental no consultó producción. El backend
  no modifica el esquema al arrancar.

## Entidades lógicas y mapeo físico

Los nombres lógicos del backend no implican que esas tablas normalizadas ya
existan. Los adaptadores deben usar las relaciones físicas actuales durante
la transición:

| Entidad lógica | Relación física actual | Responsabilidad |
|---|---|---|
| `users` | `"user"` | Identidad interna, rol, contacto y estado |
| `user_identities` | `user_identities` (migración aplicada según historial remoto del 2026-11-06) | Vínculos entre usuarios internos y proveedores externos |
| `companies` | `company` | Empresa, recargos y margen por defecto |
| `clients` | `client` | Datos del cliente e historial |
| `service_categories` | `serviceCategory` | Categorías activas de servicio |
| `services` | `service` | Orden, agenda, estado, importes y relaciones |
| `payments` | `payment` | Cobro, deuda y método del servicio |
| `inventory_items` | `inventoryItem` | Catálogo heredado; política de stock por definir |
| `service_parts` | `servicePart` | Repuestos operativos y precios heredados |
| `service_expenses` | `serviceExpense` (migración pendiente del operador) | Gasto asociado al servicio: concepto, importe, moneda y actor |
| `catalog_providers` | `catalogProvider` (migración pendiente del operador) | Proveedor por empresa |
| `catalog_offers` | `catalogOffer` (migración pendiente del operador) | Oferta histórica de proveedor; una activa por artículo |
| `exchange_rates` | `exchangeRate` (migración pendiente del operador) | Cotización USD por fecha |
| `catalog_imports` | `catalogImport` (migración pendiente del operador) | Versión publicada o intento fallido de importación |
| `estimates` | `estimate` | Presupuesto opcional del servicio |
| `settlements` | `settlement` | Cabecera de rendición y totales heredados |
| `settlement_items` | `settlementItem` | Detalle económico heredado |
| `settlement_parts` | `settlementPart` | Detalle histórico de repuestos |
| `settlement_expenses` | `settlementExpense` (migración pendiente del operador) | Snapshot de gastos por servicio |
| `settlement_adjustments` | `settlementAdjustment` (migración pendiente del operador) | Seguros, otros ajustes, descuentos y adelantos |
| `activity_logs` | `activityLog` | Auditoría de acciones sobre servicios |
| `stored_objects` | Cloudflare R2; migración pendiente del operador | Metadatos de archivos: propiedad, estado, key R2, entidad relacionada y ciclo de vida. Ver [archivos-storage.md](modulos/archivos-storage.md) |

Los nombres SQL son una decisión del backend; los nombres JSON de la API no
tienen que coincidir con ellos.

## Tipos y restricciones

- Identificadores: `uuid`.
- Fechas: `timestamptz`.
- Importes y porcentajes: `numeric`, nunca `float`.
- Cantidades: `numeric` cuando puedan tener fracción.
- Estados y roles: `text` con `CHECK` o tipos equivalentes versionados.
- Metadata de auditoría: `jsonb`, sin secretos ni tokens.
- Claves foráneas para todas las relaciones del dominio.
- El identificador interno de negocio es `public."user".id` y no depende de
  `auth.users.id`.
- `client` no tiene relación física con `company`; administración opera sobre
  el listado global, y la visibilidad del técnico se determina por servicios
  asignados. Al entrar a la ficha, el historial del cliente incluye sus
  servicios relacionados de acuerdo con la regla de negocio.
- La migración local preparada agrega `user_identities` con `provider`,
  `provider_subject`, fecha de vinculación y estado; la combinación
  proveedor/sujeto es única.
- No se crean claves foráneas desde tablas de negocio hacia `auth.users`.
- `services.order_number` único.
- `payments.service_id` único para mantener un pago por servicio.
- `estimates.service_id` único para mantener un presupuesto por servicio.
- `inventory_items` objetivo único por empresa y código; la relación heredada
  tiene una unicidad global por `code` y otra por `("companyId", code)`.
- La relación heredada contiene `stock`; el backend no cambia ni interpreta
  ese campo hasta aprobar el contrato de inventario.
- La migración de `serviceExpense` debe usar `id`, `serviceId`, `concept`,
  `amount numeric`, `currency` restringida a `ARS`/`USD`, `recordedById`,
  `createdAt` y `updatedAt`; debe tener FKs a `service` y `user`, importe
  positivo e índice por `("serviceId", "createdAt", id)`.
- `catalogProvider` es único por `("companyId", name)`; `catalogOffer` exige
  una sola oferta activa por `inventoryItemId`; `exchangeRate` es única por
  `rateDate`; `catalogImport` mantiene una versión activa por empresa.
- `settlement` incorpora `companyRate` (fracción `0..1`, por defecto `0.5`),
  totales de gastos/seguros/otros/descuentos/adelantos, `techBalance` y
  `createdById`. `settlementExpense` y `settlementAdjustment` referencian la
  rendición con `ON DELETE CASCADE` para permitir regenerar un borrador
  `PENDING` sin tocar una rendición liquidada.
- `servicePart` y `settlementPart` incorporan `providerName`, `costUsd` y
  `exchangeRate` como snapshot nullable; el snapshot no se recalcula al leer.
- Los gastos de servicio mantienen concepto, importe, moneda y usuario de
  registro; sus snapshots de rendición son inmutables después de `LIQUIDATED`.
- La inmutabilidad de snapshots es un requisito de aplicación. El esquema
  heredado solo restringe `settlement.status` a `PENDING`/`PAID`; no hay
  triggers de inmutabilidad. Go bloquea correcciones cuando el estado es
  `PAID`/`LIQUIDATED` y conserva los snapshots históricos.

El backend debe conservar las restricciones de propiedad: un
`service_part` solo puede referir un `inventory_item` de la misma empresa del
servicio. Si la restricción no puede expresarse completamente con una clave
foránea, la valida el caso de uso dentro de una transacción.

## Índices mínimos

Las consultas críticas deben indexar:

- técnico, estado y fecha programada de `services`;
- empresa y fecha de `services`;
- cliente de `services`;
- empresa y código/nombre de `inventory_items`;
- servicio y fecha de `activity_logs`;
- servicio, fecha e id de `service_expenses`;
- empresa, estado y nombre de `catalog_providers`;
- empresa, proveedor y artículo de `catalog_offers`;
- fecha de `exchange_rates`;
- empresa y fecha de `catalog_imports`;
- técnico y período/estado de `settlements`;
- rendición, servicio y tipo de `settlement_expenses`/`settlement_adjustments`;
- claves foráneas de relaciones y snapshots.

Los índices adicionales se agregan a partir de consultas observadas, no por
anticipación sin evidencia.

## Cambios aditivos de Fase 6

Las migraciones de referencia para el operador están en:

- [gastos](modulos/gastos.md): `serviceExpense`;
- [inventario, proveedores y precios](modulos/inventario-proveedores-precios.md):
  `catalogProvider`, `catalogOffer`, `exchangeRate`, `catalogImport` y las
  columnas de snapshot de `servicePart`/`settlementPart`;
- [rendiciones](modulos/rendiciones.md): columnas nuevas de `settlement`,
  `settlementExpense` y `settlementAdjustment`.

La aplicación no ejecuta ninguna de estas migraciones al arrancar.

## Modelo de repositorios

Los puertos de salida exponen operaciones del dominio, no `*sql.Rows` ni
modelos Prisma. Los adaptadores PostgreSQL:

1. reciben un contexto con timeout;
2. ejecutan SQL parametrizado;
3. convierten filas a entidades o resultados de aplicación;
4. traducen errores de unicidad, ausencia y conflicto;
5. registran métricas sin datos sensibles.

Las escrituras que cambian varias entidades usan una transacción corta. No se
mantiene una transacción abierta mientras se llama a Storage, Resend o Google
Sheets.

## Esquema y cambios futuros

Supabase PostgreSQL ya contiene las migraciones oficiales y es la fuente del
esquema existente. Prisma no es una fuente de migraciones del backend Go y no
se deben regenerar tablas desde `prisma/contract.prisma`.

Los cambios futuros de esquema deben ejecutarse mediante el mecanismo de
migraciones adoptado por Supabase, con revisión y despliegue controlado. La
API usa `DATABASE_RUNTIME_URL` y nunca cambia el esquema al arrancar.

Orden de transición:

1. Comparar `prisma/contract.prisma` con el esquema real de Supabase como
   referencia obsoleta.
2. Validar que el esquema existente cumple el contrato aprobado.
3. Aplicar cambios mediante el mecanismo de Supabase, nunca desde Prisma ni al
   arrancar la API.
4. Validar conteos, claves, snapshots y compatibilidad.
5. Cambiar el caso de uso y el frontend por capacidad.
6. Eliminar objetos obsoletos solo después de verificar consumidores.

## Fuente de datos actual

El esquema confirmado de `bniquenbqwibyxychnva` es la fuente física vigente.
`prisma/contract.prisma` es referencia de migración, no una dependencia del
backend. Las tablas de negocio heredadas están vacías a la fecha de inspección,
pero se conservan para no romper consumidores activos. No se crea una segunda
representación normalizada paralela.

## Identidad interna y salida futura

La relación `public."user"` representa actualmente la identidad operativa:
rol, estado, empresa, auditoría y relaciones de negocio. La migración local
preparada agrega `user_identities` para vincularla a un sujeto externo y no
crea una FK a `auth.users`. La política de proveedores por usuario se limita
por la unicidad proveedor/sujeto; el `provider_subject` nunca será clave
primaria de servicios, pagos o rendiciones.

Al reemplazar Supabase Auth, se agrega un adaptador que implemente el puerto
`IdentityProvider`, se migran los vínculos de `user_identities` y se conserva
`public."user"` junto con todo el historial. Las contraseñas no se migran como
texto ni hash interoperable por defecto: los usuarios deben completar
recuperación o restablecimiento con el nuevo proveedor.
