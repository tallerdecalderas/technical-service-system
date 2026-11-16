# Rendiciones

**Fase:** 6.  
**Estado:** contrato cerrado e implementado en Go. La migración aditiva de
`settlement`, `settlementExpense` y `settlementAdjustment` la aplica el
operador; la API no ejecuta DDL.

## Propósito

Una rendición consolida cobros, repuestos, gastos, seguros y ajustes de un
técnico para un período. Administración revisa y liquida. El resultado
liquidado es un registro económico histórico inmutable.

## Ciclo y acceso

- ADMIN consulta, prepara, corrige y liquida rendiciones dentro de sus
  empresas.
- TECHNICIAN consulta solo las propias.
- El período es un rango de fechas **inclusivo** en zona fija ART (`UTC-3`):
  desde `startDate 00:00:00` hasta `endDate 23:59:59.999999`.
- Un técnico no puede tener períodos solapados. La generación toma un lock de
  asesoría por técnico para serializar solicitudes concurrentes.
- Si ya existe un borrador `PENDING` con **exactamente** el mismo período, se
  reemplaza de forma transaccional. Cualquier otro solapamiento, o un período
  ya liquidado, responde `409 CONFLICT`.
- La API expone `PENDING` y `LIQUIDATED`. La base heredada solo admite
  `PENDING` y `PAID`; `PAID` se proyecta como `LIQUIDATED` en las respuestas.
- Antes de liquidar se pueden corregir etiqueta, porcentaje de empresa, seguros
  y ajustes. Al liquidar se congelan el detalle, los porcentajes y los totales.
- Una rendición liquidada no puede editarse, regenerarse ni recalcularse desde
  servicios, catálogo, cotización o gastos actuales.

## Elegibilidad de cobros

La generación incluye los pagos:

- del técnico indicado, que debe existir, estar activo y tener rol
  `TECHNICIAN`;
- con `payment.createdAt` dentro del período ART;
- de servicios cuya empresa pertenece al ADMIN que genera;
- opcionalmente filtrados por `companyId`, que también debe pertenecer al
  ADMIN;
- que todavía no estén asociados a otra rendición (`settlementId is null`).

Si no hay pagos elegibles, la operación responde `422`. Cada pago queda
asociado a la rendición generada.

## Cálculo

La fórmula oficial usa decimales exactos. Los importes monetarios se redondean
HALF_UP a dos decimales; los porcentajes se guardan como fracción (`0.5` =
50 %).

```text
baseServicio   = cobrado - costoRepuestos - gastosDelServicio
baseNeta       = totalCobrado
               - totalRepuestos
               - totalGastos
               - totalSeguros
               - otrosAjustes

importeEmpresa = redondear(baseNeta × porcentajeEmpresa, 2)
importeTecnico = baseNeta - importeEmpresa
saldoTecnico   = importeTecnico - descuentos - adelantos
```

- Repuestos, gastos, seguros y otros ajustes se descuentan **antes** de
  repartir el porcentaje de empresa y el importe del técnico.
- Descuentos y adelantos se descuentan **después**, del saldo del técnico.
- Los gastos en USD se convierten a ARS con la cotización más reciente; si no
  hay cotización, la generación responde `422`.
- El porcentaje de empresa se informa por rendición; por defecto `0.5` y debe
  estar entre `0` y `1`.
- Los seguros y otros ajustes se distribuyen entre los servicios para que el
  detalle por línea mantenga subtotales coherentes; los totales de cabecera son
  la fuente oficial.
- Cada rendición conserva snapshots de servicios (`settlementItem`), repuestos
  (`settlementPart`), gastos (`settlementExpense`), porcentajes, ajustes,
  totales y actores/fechas relevantes. No se recalculan al leer.

## Endpoints

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/api/v1/settlements` | Lista paginada dentro del alcance autorizado |
| POST | `/api/v1/settlements` | ADMIN genera una rendición |
| GET | `/api/v1/settlements/{id}` | Consulta cabecera y snapshot completo |
| PATCH | `/api/v1/settlements/{id}` | ADMIN corrige etiqueta, porcentaje, seguros o ajustes |
| POST | `/api/v1/settlements/{id}/liquidate` | ADMIN liquida |

Filtros de lista: `technicianId`, `companyId`, `status`, `dateFrom`, `dateTo`,
`page`, `pageSize`. Las mutaciones requieren `Idempotency-Key`, sesión, CSRF y
`Origin` confiable. Generar y liquidar son idempotentes y transaccionales.

Cada generación, corrección y liquidación escribe `ActivityLog` en los
servicios incluidos con las acciones `SETTLEMENT_GENERATED`,
`SETTLEMENT_UPDATED` y `SETTLEMENT_LIQUIDATED`.

## Persistencia requerida para la migración del operador

La tabla `settlement` existe, pero no tiene los totales ampliados ni los
actores nuevos. `settlementExpense` y `settlementAdjustment` no existen. La
migración aditiva de referencia es:

```sql
alter table public.settlement
  add column if not exists "companyRate" numeric not null default 0.5
    check ("companyRate" >= 0 and "companyRate" <= 1),
  add column if not exists "totalExpenses" numeric not null default 0,
  add column if not exists "totalInsurance" numeric not null default 0,
  add column if not exists "totalOtherAdjustments" numeric not null default 0,
  add column if not exists "totalDiscounts" numeric not null default 0,
  add column if not exists "totalAdvances" numeric not null default 0,
  add column if not exists "techBalance" numeric not null default 0,
  add column if not exists "createdById" uuid references public."user"(id);

create table if not exists public."settlementExpense" (
  id uuid primary key default gen_random_uuid(),
  "settlementId" uuid not null references public.settlement(id) on delete cascade,
  "serviceId" uuid not null references public."service"(id),
  "expenseId" uuid references public."serviceExpense"(id),
  concept text not null,
  amount numeric not null check (amount >= 0),
  currency text not null check (currency in ('ARS', 'USD')),
  "amountArs" numeric not null check ("amountArs" >= 0),
  "createdAt" timestamptz not null default now()
);

create index if not exists "settlementExpense_settlement_service_idx"
  on public."settlementExpense" ("settlementId", "serviceId");

create table if not exists public."settlementAdjustment" (
  id uuid primary key default gen_random_uuid(),
  "settlementId" uuid not null references public.settlement(id) on delete cascade,
  kind text not null check (kind in ('INSURANCE', 'OTHER', 'DISCOUNT', 'ADVANCE')),
  concept text not null,
  amount numeric not null check (amount > 0),
  "createdAt" timestamptz not null default now()
);

create index if not exists "settlementAdjustment_settlement_kind_idx"
  on public."settlementAdjustment" ("settlementId", kind);
```

La migración de `serviceExpense` está en la ficha de
[gastos](gastos.md). Las columnas de proveedor/cotización de
`servicePart`/`settlementPart` están en la ficha de
[inventario y proveedores](inventario-proveedores-precios.md).

No borrar ni reconstruir una rendición liquidada. Correcciones económicas
posteriores, si se necesitan, deben ser un mecanismo explícito de ajuste y no
editar el snapshot original.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Módulo frontend Cobros/Rendiciones](../../.frontend/modulos/paymentsRendition.md)
- [Esquema backend](../database.md)
- [Contrato API](../api.md)
- [Fase 6](../../ejecuciones/backend-implementation-plan.md)
