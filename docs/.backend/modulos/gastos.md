# Gastos de servicio

**Fase:** 6.  
**Estado:** contrato confirmado; implementación Go realizada. La migración de
`serviceExpense` es responsabilidad del operador y no la ejecuta Go.

## Propósito y datos

Un gasto es un egreso asociado directamente a un servicio, no un movimiento
de stock ni una línea de repuesto. Se conserva en el historial del servicio y
se incorporará automáticamente a la rendición que incluya ese servicio.

Cada gasto expone los siguientes datos:

| Campo | Tipo API | Regla |
|---|---|---|
| `id` | UUID | Generado por PostgreSQL. |
| `serviceId` | UUID | Servicio al que pertenece; viene de la ruta para altas. |
| `concept` | string | Obligatorio, sin espacios extremos y hasta 500 runas. |
| `amount` | decimal string | Positivo, hasta seis decimales; nunca `float`. |
| `currency` | string | Solo `ARS` o `USD`, siempre en mayúsculas. |
| `recordedById` | UUID | Actor resuelto por la sesión; el cliente no puede enviarlo. |
| `createdAt`, `updatedAt` | RFC 3339 | Timestamps administrados por persistencia. |

No hay moneda predeterminada. Esta fase conserva importe y moneda originales;
la cotización o conversión necesaria para liquidar se definirá junto con
rendiciones. Los comprobantes binarios no pertenecen a este recurso: Storage
es alcance de Fase 7.

## Endpoints

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/api/v1/services/{serviceId}/expenses` | Lista gastos visibles del servicio. |
| POST | `/api/v1/services/{serviceId}/expenses` | Crea un gasto con `concept`, `amount` y `currency`. |
| PATCH | `/api/v1/services/{serviceId}/expenses/{expenseId}` | ADMIN corrige uno o más de `concept`, `amount`, `currency`. |
| DELETE | `/api/v1/services/{serviceId}/expenses/{expenseId}` | ADMIN lo retira antes de liquidar. |

GET responde `{"data": [...]}` en orden ascendente por creación e id. POST
responde `201`, PATCH `200` y DELETE `204`. Las tres mutaciones requieren
`Idempotency-Key`. El recurso usa el parámetro `serviceId` de forma consistente
con repuestos; no se acepta `serviceId`, `recordedById`, empresa, timestamps o
estado en el JSON de entrada.

## Autorización y ciclo de vida

- ADMIN consulta servicios de sus empresas y puede crear, corregir y retirar
  gastos antes de la liquidación.
- TECHNICIAN consulta y crea solamente en servicios asignados a sí mismo, de
  sus empresas, que estén `IN_PROGRESS` o `COMPLETED`.
- TECHNICIAN no puede editar ni borrar gastos, incluso propios.
- Un gasto no puede crearse, modificarse ni borrarse si el servicio ya figura
  en una rendición con estado `PAID` o `LIQUIDATED`.
- DELETE elimina la fila operativa únicamente antes de liquidación y registra
  auditoría; no altera snapshots futuros o ya liquidados.
- Un servicio o gasto no visible responde `404`, sin revelar otro ámbito.

Cada alta, corrección o retiro escribe en la misma transacción un
`ActivityLog` con actor, valores anteriores/nuevos y una acción
`EXPENSE_CREATED`, `EXPENSE_UPDATED` o `EXPENSE_REMOVED`.

## Persistencia requerida para la migración del operador

El esquema físico auditado aún no tiene `public."serviceExpense"`. Antes de
usar estos endpoints, la migración controlada debe crear una tabla aditiva con:

- `id uuid` con valor por defecto generado y clave primaria;
- `serviceId uuid not null` con FK a `public."service"(id)`;
- `concept text not null`;
- `amount numeric not null check (amount > 0)`;
- `currency text not null check (currency in ('ARS', 'USD'))`;
- `recordedById uuid not null` con FK a `public."user"(id)`;
- `createdAt timestamptz not null` y `updatedAt timestamptz not null`;
- índice estable de lectura `("serviceId", "createdAt", id)`.

DDL de referencia para que el operador la revise y aplique fuera del arranque
de la API:

```sql
create table if not exists public."serviceExpense" (
  id uuid primary key default gen_random_uuid(),
  "serviceId" uuid not null references public."service"(id),
  concept text not null,
  amount numeric not null check (amount > 0),
  currency text not null check (currency in ('ARS', 'USD')),
  "recordedById" uuid not null references public."user"(id),
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create index if not exists "serviceExpense_service_created_idx"
  on public."serviceExpense" ("serviceId", "createdAt", id);
```

La aplicación no ejecuta DDL al iniciar. El snapshot de gastos en rendiciones
(`public."settlementExpense"`) se define en la ficha de
[rendiciones](rendiciones.md); la generación de una rendición copia concepto,
importe, moneda, importe en ARS y referencia al gasto original, y no modifica
la fila operativa.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Contrato API](../api.md)
- [Módulo frontend cobros/rendiciones](../../.frontend/modulos/paymentsRendition.md)
- [Fase 6](../../ejecuciones/backend-implementation-plan.md)
