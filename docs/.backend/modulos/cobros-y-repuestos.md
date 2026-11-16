# Cobros y repuestos

**Fase:** 5.  
**Estado:** cobros y repuestos implementados en Go; queda pendiente la
verificación operativa común con entorno configurado por el operador.

## Cobro

Un cobro pertenece a un servicio y representa dinero recibido y/o deuda
pendiente. El monto estimado del servicio no equivale a dinero cobrado.

Reglas compartidas:

- Cada servicio tiene como máximo un registro de cobro/deuda. Sus importes
  acumulados son `montoCobrado` y `deudaPendiente`, ambos decimal strings no
  negativos; el método de pago es obligatorio para todo cobro/deuda.
- Un abono posterior actualiza ese mismo registro: aumenta `montoCobrado` y
  reduce `deudaPendiente`. Cada cambio queda registrado de forma append-only
  en el historial del servicio, con actor, valores anterior/nuevo y fecha.
- El técnico asignado crea el registro únicamente para su servicio propio en
  estado `IN_PROGRESS`. Debe existir un cobro/deuda antes de finalizar el
  servicio.
- ADMIN puede consultar y corregir los campos económicos antes de que la
  rendición que incluya el servicio se liquide; después no son editables.
- Un pago no es el contenedor de repuestos: `Payment` y `ServicePart` son
  conceptos distintos relacionados al servicio.
- Una modificación debe preservar historial económico y registrar actor.

### Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/api/v1/payments` | Lista administrativa autorizada/paginada |
| POST | `/api/v1/payments` | Crear registro de cobro asociado a servicio |
| GET/PATCH | `/api/v1/payments/{id}` | Consultar y modificar campos permitidos |

Las mutaciones `POST` y `PATCH` requieren `Idempotency-Key`. Los métodos de
pago admitidos son `CASH`, `TRANSFER`, `CARD` y `OTHER`; no se acepta un estado o
importe arbitrario enviado por el cliente.

## Repuestos de servicio

Un servicio puede tener múltiples líneas de repuestos, incluso líneas
repetidas del mismo código. `ServicePart` pertenece al servicio, no al cobro ni
a una rendición. Cada línea conserva su propia cantidad y valores aplicados;
un cambio posterior del catálogo nunca altera sus valores ya capturados.

Al agregar una línea se congelan los valores disponibles hoy en
`servicePart`: `inventoryItemId` opcional, nombre, nota, cantidad, costo
unitario/total y precio de venta unitario/total. Los totales se calculan en Go
como `cantidad × valor unitario`, con decimales exactos; no se aceptan totales
enviados por el cliente. La referencia al ítem debe pertenecer a la misma
empresa que el servicio. No se administra stock físico en este alcance.

Proveedor, cotización USD y equivalente en moneda local no tienen columnas
físicas confirmadas en la relación heredada. Se incorporarán como snapshots de
línea solamente con el contrato, migración y aprobación de Fase 6; no se
inventan ni se recalculan esos datos para líneas históricas existentes.

En la liquidación, Fase 6 copiará los valores ya congelados de cada
`ServicePart` hacia `SettlementPart`; nunca los volverá a tomar del catálogo.
Un `SettlementPart` de una rendición liquidada es histórico e inmutable: no se
edita, elimina, reconstruye ni reemplaza para corregirlo. Si una rendición está
solo en preparación (`PENDING`), su detalle es un borrador y puede regenerarse
atómicamente antes de liquidar.

ADMIN puede crear, corregir o retirar una línea operativa mientras el servicio
no pertenezca a una rendición liquidada. El retiro elimina únicamente el
`ServicePart` operativo y registra auditoría; no afecta ningún snapshot
liquidado. Después de liquidar, toda mutación se rechaza. El técnico asignado
puede solo consultar los repuestos de su propio servicio y recibe la vista de
venta, sin costos internos, proveedor ni cotización.

### Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| GET/POST | `/api/v1/services/{serviceId}/parts` | Listar/agregar líneas del servicio |
| PATCH/DELETE | `/api/v1/services/{serviceId}/parts/{partId}` | Modificar o retirar la línea operativa antes de liquidación |

`GET` permite a ADMIN la vista completa dentro de su ámbito y al técnico la
vista reducida de su servicio asignado. `POST`, `PATCH` y `DELETE` son solo de
ADMIN dentro de su ámbito. Las tres mutaciones requieren `Idempotency-Key`.

El alta recibe `name`, `quantity`, `unitCost`, `unitSalePrice`, `nota`
opcional e `inventoryItemId` opcional; los importes son strings decimales, la
cantidad debe ser positiva y los valores unitarios no negativos. Si se informa
`inventoryItemId`, el backend toma nombre, costo y venta actuales de ese ítem
autorizado como snapshot, en lugar de confiar en dichos valores del cliente.
`PATCH` puede
corregir nombre, nota, cantidad y valores unitarios, siempre recalculando los
totales; no cambia la referencia original al inventario. La respuesta de ADMIN
incluye costos y ventas; la del técnico incluye solo `id`, `serviceId`, nombre,
nota, cantidad, precio de venta unitario/total y fechas.

Cada alta, corrección o retiro escribe, dentro de la misma transacción, un
`ActivityLog` con actor, valores anteriores/nuevos cuando corresponda y una
acción `PART_ADDED`, `PART_UPDATED` o `PART_REMOVED`. Para borrar se verifica
que `partId` pertenezca al `serviceId` de la ruta y que ese servicio no tenga
una rendición liquidada; un recurso ajeno o no visible responde como `404`.

## Persistencia y transacciones

Relaciones heredadas: `payment`, `servicePart`, `inventoryItem`, `service`,
`company`, `user`, `settlement` y `settlementPart`. El cobro, los repuestos y
sus registros de auditoría se persisten atómicamente cuando una operación
cambia varios de ellos. Montos usan `numeric` en PostgreSQL y decimal string
en JSON.

Las mutaciones reintentables usan `Idempotency-Key`. Un error en la operación
no deja cobro parcial, repuesto sin asociación ni resultado económico
confirmado incorrectamente.

## Decisiones cerradas para cobros y deuda

- La deuda se salda actualizando el cobro único, no creando registros de pago
  separados.
- El cobro se crea antes de finalizar el servicio, exclusivamente mientras
  está `IN_PROGRESS`.
- La autorización de corrección administrativa termina al liquidarse la
  rendición correspondiente. Esta condición se hará efectiva al implementar
  rendiciones en la Fase 6.

## Decisiones cerradas para repuestos

- Las líneas son independientes aunque repitan el mismo código y se exponen
  bajo `/services/{serviceId}/parts`.
- La captura de valores ocurre al agregar `ServicePart`; la liquidación solo
  toma una segunda copia histórica de esos valores en `SettlementPart`.
- El retiro físico está permitido solo para la línea operativa antes de una
  liquidación, con auditoría. Ningún snapshot de una rendición liquidada se
  elimina o modifica.
- ADMIN escribe; el técnico asignado consulta solo su servicio y la vista de
  venta sin costos internos.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Contrato API](../api.md)
- [Módulo frontend de servicios](../../.frontend/modulos/services.md)
- [Módulo frontend de cobros/rendiciones](../../.frontend/modulos/paymentsRendition.md)
- [Fase 5](../../ejecuciones/backend-implementation-plan.md)
