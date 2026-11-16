# Servicios, agenda e historial

**Fase:** 4.  
**Estado:** implementación Go inicial realizada; verificación de salida de
fase pendiente en el plan backend.

## Servicio como agregado central

Un servicio representa una visita técnica programada a un cliente y concentra
empresa, cliente, categoría, técnico asignado, programación, importes,
documentación e historial. La base conserva las tablas heredadas; no se
introducen entidades paralelas solo por normalizar nombres.

## Reglas y ciclo de vida

- ADMIN crea y administra servicios, asignaciones y cancelaciones autorizadas.
- El técnico solo ve y opera servicios asignados a su usuario interno.
- Al crear, el estado es `PENDING`; el técnico puede iniciar un servicio
  asignado y completar el formulario de cierre para finalizarlo.
- Transiciones: `PENDING -> IN_PROGRESS | CANCELLED` y
  `IN_PROGRESS -> COMPLETED | CANCELLED`. Los estados terminales no se
  reabren.
- El cierre valida el importe final y registra la actividad de cierre.
- El importe final puede diferir del importe estimado.
- Los servicios no se eliminan físicamente. Cancelación es transición
  autorizada, no DELETE.
- Presupuesto, pago, repuestos, gastos, archivos e historial se asocian al
  servicio según sus módulos; este módulo no duplica sus cálculos.
- Cada cambio de estado registra un `ActivityLog`.

`CLOSED` existe en el esquema heredado y el frontend actual lo ha usado. La
regla de dominio objetivo no lo admite. No restringir ni traducir ese valor
hasta completar la decisión de compatibilidad anotada en el plan; ninguna
transición nueva de Go debe introducirlo.

## Agenda

La agenda es una proyección consultable de servicios, no una fuente separada.
Refleja altas y cambios de programación, técnico o estado. ADMIN puede filtrar
por empresa/técnico dentro de su autorización; TECHNICIAN recibe solo sus
servicios. La sincronización con Google Sheets se define en
[integraciones](./integraciones.md), no escribe de vuelta en TechService.

## Historial

- Historial de cliente: deriva de los servicios del cliente; técnico solo
  accede al cliente y los registros visibles desde un servicio propio
  autorizado.
- Historial de servicio: muestra eventos relacionados, como creación,
  asignación y transiciones, sin exponer metadata sensible.
- ActivityLog es append-only desde el punto de vista de negocio. No se usa
  para sobrescribir el estado actual ni se elimina para ocultar acciones.

## Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| GET/POST | `/api/v1/services` | Listar y crear |
| GET/PATCH | `/api/v1/services/{id}` | Consultar y editar campos autorizados |
| POST | `/api/v1/services/{id}/status` | Ejecutar una transición permitida |
| POST | `/api/v1/services/{id}/finish` | Validar y completar cierre |
| GET | `/api/v1/schedule` | Proyección de agenda autorizada |
| GET | `/api/v1/services/{id}/history` | Historial paginado del servicio |

POST/PATCH reintentables requieren `Idempotency-Key`; la misma clave y payload
repite respuesta, la misma clave con otro payload es `409`.

## Persistencia y consistencia

Relaciones físicas principales: `service`, `client`, `company`,
`serviceCategory`, `user` y `activityLog`. Los nombres camelCase heredados se
citan correctamente. Un cambio de estado y su evento de historial se guardan
en una transacción. Consultas de agenda/historial son paginadas y restringidas
por el alcance de empresa/técnico.

La agenda externa puede retrasarse o fallar sin revertir el servicio guardado.
El estado y la fecha programada de PostgreSQL siguen siendo oficiales.

## Pendientes de compatibilidad

- Resolver el ciclo de vida heredado `CLOSED` frente al dominio canónico.
- Confirmar operación final de servicios sin técnico asignado (la creación
  puede dejarlo opcional; iniciar/cerrar exige asignación efectiva).
- Alinear nombres DTO actuales con los modelos que necesitan las pantallas sin
  exponer columnas internas.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Contrato API](../api.md)
- [Módulo frontend de servicios](../../.frontend/modulos/services.md)
- [UI Administración](../../.frontend/UI/ui-administracion.md)
- [UI Técnico](../../.frontend/modulos/technician.md)
- [Fase 4](../../ejecuciones/backend-implementation-plan.md)
