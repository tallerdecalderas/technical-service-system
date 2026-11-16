# Inventario, proveedores, precios e importación

**Fase:** 6.  
**Estado:** catálogo de lectura, administración de proveedores/ofertas,
cotización, precios e importación por CSV implementados en Go. La carga de
precios de catálogo se hace por archivo CSV aportado por Administración; la
sincronización de servicios con Google Sheets es un flujo separado y no forma
parte del catálogo de precios. Las tablas y columnas nuevas requieren una
migración aditiva que aplica el operador; la API no ejecuta DDL.

## Catálogo

El catálogo representa repuestos disponibles para servicios. La relación
física existente es `public."inventoryItem"`; no existe `public.products`.
No crear un catálogo físico paralelo ni usar/actualizar el campo heredado
`stock`: el control de stock físico está fuera de alcance.

La empresa es el contexto del catálogo. El código debe ser único según la
restricción física vigente y el contrato multiempresa aprobado. Una línea
`ServicePart` solo puede usar un ítem del catálogo de la misma empresa que el
servicio.

ADMIN administra y publica el catálogo; TECHNICIAN solo consulta la lista de
precios autorizada y sus campos visibles. Nunca incluir costos internos en
respuestas al técnico.

## Decisiones cerradas de proveedores y precios

- Un proveedor pertenece a una empresa. El nombre es obligatorio, se recorta y
  admite hasta 200 runas; la combinación `("companyId", name)` es única.
- Un artículo puede tener varias ofertas históricas, pero **una sola oferta
  activa** a la vez. Crear o reactivar una oferta desactiva las demás del mismo
  artículo.
- La oferta guarda el costo del proveedor en USD (`costUsd`). No se controla
  stock ni cantidades comprometidas.
- Existe una cotización por fecha (`exchangeRate.rateDate` única) y se usa la
  más reciente por `rateDate` para calcular e importar precios. Si no hay
  cotización, la operación que la requiera responde `422`.
- Los porcentajes son puntos porcentuales decimales, no fracciones. El margen
  editable admite `0` a `1000`.
- El cálculo oficial, siempre con decimales exactos y redondeo HALF_UP a dos
  decimales en los importes monetarios, es:

```text
costInitList = costUsd × cotización
costPrice    = costInitList × (1 + company.costMarkupPercent / 100)
sellPrice    = costPrice × (1 + marginPercent / 100)
techPrice    = costPrice × (1 + marginPercent / 100)
ganancia     = sellPrice - costPrice
```

`costInitList` y `costPrice` son internos de Administración. El técnico solo
recibe `techPrice`, código, nombre, unidad y los metadatos de versión. La
respuesta de Administración incluye costos, margen y ganancia.

## Endpoints

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/api/v1/catalog/prices` | Lista paginada con proyección según rol |
| GET/POST | `/api/v1/catalog/providers` | ADMIN lista/crea proveedores de sus empresas |
| PATCH | `/api/v1/catalog/providers/{id}` | ADMIN renombra o activa/desactiva |
| GET/POST | `/api/v1/catalog/offers` | ADMIN lista/crea ofertas por artículo |
| PATCH | `/api/v1/catalog/offers/{id}` | ADMIN corrige costo o activa/desactiva |
| GET | `/api/v1/catalog/exchange-rates/latest` | ADMIN consulta la última cotización |
| POST | `/api/v1/catalog/exchange-rates` | ADMIN carga/actualiza la cotización de una fecha |
| PATCH | `/api/v1/catalog/items/{id}` | ADMIN corrige margen, precio técnico o estado |
| POST | `/api/v1/catalog/import` | ADMIN importa/publica catálogo mediante archivo CSV (`multipart/form-data`) |

Las mutaciones requieren `Idempotency-Key`, sesión, CSRF y `Origin` confiable.
Los filtros no documentados se rechazan. `companyId` debe pertenecer al actor.

## Importación de lista

Solo ADMIN inicia explícitamente. El origen del catálogo es un archivo CSV
subido por Administración; el sistema valida el archivo completo, rechaza
códigos duplicados y publica atómicamente una nueva versión. Si la lectura,
validación o persistencia falla, conserva la versión activa anterior.
Registra usuario, fecha, resultado y referencia/version publicada. La
importación no modifica snapshots de repuestos ya usados.

El endpoint `POST /api/v1/catalog/import` recibe `multipart/form-data` con el
parámetro `companyId` y el archivo `file` (.csv). El backend soporta delimitadores
por coma (`,`) o punto y coma (`;`), y codificación UTF-8 (con o sin BOM).

La integración con Google Sheets es exclusiva de la sincronización de agenda y
servicios (Fase 7); no es el origen del catálogo de precios. Si en el futuro se
habilitara una importación alternativa desde una hoja externa, constituiría un
adaptador secundario y no el mecanismo principal del sistema.

### Columnas del CSV

La primera fila es el encabezado. Se normalizan mayúsculas, espacios y
acentos. Columnas obligatorias:

| Columna | Regla |
|---|---|
| `codigo` | Obligatorio, hasta 100 caracteres; único en la hoja sin distinguir mayúsculas |
| `nombre` | Obligatorio, hasta 300 caracteres |
| `proveedor` | Obligatorio, hasta 200 caracteres |
| `costoUSD` | Decimal no negativo, hasta seis decimales |
| `margen` | Porcentaje no negativo, máximo `1000`, hasta seis decimales |

Columna opcional: `unidad` (texto). Se aceptan alias razonables documentados en
el código (`code`, `name`, `provider`, `cost`, `margin`, `unit`). Cualquier
error de fila o encabezado rechaza la importación completa y devuelve
`422 VALIDATION_ERROR` con el detalle por fila; se registra un intento
`FAILED` sin tocar el catálogo activo.

La publicación es una transacción única: crea/actualiza proveedores, ítems y
ofertas, desactiva los ítems que ya no figuran, marca la importación como
`PUBLISHED` y la deja como versión activa de la empresa. La oferta activa de
cada ítem queda asociada al proveedor y costo de la hoja.

La importación guarda en `sourceRef` el nombre original del archivo CSV
cargado (ej. `lista-proveedor-2026.csv`). Los registros de intento fallido
(`FAILED`) almacenan el conteo y la lista de errores por fila en formato JSONB
para auditoría y corrección.

## Persistencia requerida para la migración del operador

El esquema auditado no tiene `catalogProvider`, `catalogOffer`,
`exchangeRate` ni `catalogImport`, y `servicePart`/`settlementPart` no tienen
las columnas de proveedor/cotización. La API no crea nada al arrancar.

### Proveedores, ofertas y cotización

```sql
create table if not exists public."catalogProvider" (
  id uuid primary key default gen_random_uuid(),
  "companyId" uuid not null references public.company(id),
  name text not null check (length(btrim(name)) between 1 and 200),
  "isActive" boolean not null default true,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  unique ("companyId", name)
);

create index if not exists "catalogProvider_company_active_idx"
  on public."catalogProvider" ("companyId", "isActive", name);

create table if not exists public."exchangeRate" (
  id uuid primary key default gen_random_uuid(),
  "rateDate" date not null unique,
  rate numeric not null check (rate > 0),
  "createdById" uuid not null references public."user"(id),
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create index if not exists "exchangeRate_date_idx"
  on public."exchangeRate" ("rateDate" desc);

create table if not exists public."catalogOffer" (
  id uuid primary key default gen_random_uuid(),
  "companyId" uuid not null references public.company(id),
  "inventoryItemId" uuid not null references public."inventoryItem"(id) on delete cascade,
  "providerId" uuid not null references public."catalogProvider"(id),
  "costUsd" numeric not null check ("costUsd" >= 0),
  "isActive" boolean not null default true,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create unique index if not exists "catalogOffer_active_item_key"
  on public."catalogOffer" ("inventoryItemId") where "isActive";

create index if not exists "catalogOffer_company_provider_idx"
  on public."catalogOffer" ("companyId", "providerId");

create table if not exists public."catalogImport" (
  id uuid primary key default gen_random_uuid(),
  "companyId" uuid not null references public.company(id),
  "startedById" uuid not null references public."user"(id),
  status text not null check (status in ('PUBLISHED', 'FAILED')),
  "sourceRef" text,
  "rowCount" integer not null default 0 check ("rowCount" >= 0),
  "itemCount" integer not null default 0 check ("itemCount" >= 0),
  "errorCount" integer not null default 0 check ("errorCount" >= 0),
  errors jsonb not null default '[]'::jsonb,
  "isActive" boolean not null default false,
  "startedAt" timestamptz not null default now(),
  "finishedAt" timestamptz,
  "updatedAt" timestamptz not null default now()
);

create unique index if not exists "catalogImport_active_company_key"
  on public."catalogImport" ("companyId") where "isActive";

create index if not exists "catalogImport_company_started_idx"
  on public."catalogImport" ("companyId", "startedAt" desc);

alter table public."servicePart"
  add column if not exists "providerName" text,
  add column if not exists "costUsd" numeric check ("costUsd" is null or "costUsd" >= 0),
  add column if not exists "exchangeRate" numeric check ("exchangeRate" is null or "exchangeRate" > 0);

alter table public."settlementPart"
  add column if not exists "providerName" text,
  add column if not exists "costUsd" numeric check ("costUsd" is null or "costUsd" >= 0),
  add column if not exists "exchangeRate" numeric check ("exchangeRate" is null or "exchangeRate" > 0);
```

La restricción global heredada `inventoryItem_code_key` sobre `code` sigue
vigente. Mientras exista, un código no puede repetirse entre empresas y una
importación que lo intente falla completa; no se elimina esa restricción sin
una decisión explícita del operador.

## Caché y snapshots

La PWA puede mantener una copia mínima de la lista técnica con `version` y
`updatedAt`; la respuesta de Go indica si existe una versión nueva. Una falla
de sincronización conserva la versión local anterior. La caché no es fuente
oficial.

Al agregar un repuesto a un servicio se toma snapshot de nombre, proveedor,
cantidad, costos/precio y cotización. Un cambio del catálogo nunca altera ese
snapshot ni una rendición liquidada.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Módulo frontend Inventario](../../.frontend/modulos/Inventario.md)
- [Integración Google Sheets](../../.frontend/integraciones/googlesheets.md)
- [Esquema backend](../database.md)
- [Contrato API](../api.md)
- [Fase 6](../../ejecuciones/backend-implementation-plan.md)
