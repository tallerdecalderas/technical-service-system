# Presupuestos

**Fase:** 5.  
**Estado:** contrato confirmado; implementación Go pendiente.

## Propósito y flujo

Un presupuesto comunica a Administración un trabajo adicional detectado por
el técnico durante un servicio. No es una cotización independiente ni cambia
el estado del servicio. El cliente no opera directamente este módulo.

1. El técnico crea un presupuesto desde un servicio existente autorizado.
2. El presupuesto queda `PENDING` y visible para Administración.
3. Administración revisa la información y lo marca `FINALIZED`.
4. La elaboración/envío de una cotización comercial al cliente ocurre fuera
   del sistema y la realiza Administración.

Solo hay dos estados. No hay estados de aprobación/rechazo. Cada servicio
puede generar como máximo un presupuesto.

## Datos de dominio

Se asocia al servicio y conserva monto, descripción, observaciones, estado,
fecha de creación y fecha de finalización. Cliente, técnico y número de orden
se resuelven a través del servicio relacionado. El técnico no modifica un
presupuesto después de enviado; Administración finaliza sin alterar su
contenido original. El estado externo de la API es `FINALIZED`; el adaptador
PostgreSQL lo mapea al valor heredado `COMPLETED`.

Montos usan `numeric` y se serializan como decimal string. La respuesta no
debe incluir campos internos no necesarios.

## Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/api/v1/estimates` | Listar presupuestos en alcance autorizado |
| GET | `/api/v1/estimates/{id}` | Consultar detalle |
| POST | `/api/v1/estimates` | Crear para un servicio asignado y elegible |
| POST | `/api/v1/estimates/{id}/finalize` | ADMIN finaliza el presupuesto |

La forma canónica es `/api/v1/estimates`: no se expone
`POST /services/{id}/estimate` ni `PATCH /estimates/{id}`. La finalización es
una operación semántica; no acepta un `status` arbitrario en PATCH.

Las mutaciones reintentables usan `Idempotency-Key`; no se admite crear un
segundo presupuesto para el mismo servicio.

## Autorización

- TECHNICIAN crea solo para servicio propio, asignado y en `IN_PROGRESS` o
  `COMPLETED`, sin presupuesto previo. Lista y consulta únicamente los
  presupuestos de sus servicios.
- ADMIN lista, consulta y finaliza de acuerdo con su empresa/contexto.
- No devolver presupuestos de otro ámbito ni confiar en IDs de usuario
  enviados por el cliente.
- Finalizar presupuesto no completa, reabre ni modifica el servicio.

## Persistencia

Relación física actual: `public."estimate"`, vinculada con el servicio. La
restricción de unicidad por servicio debe mantenerse. El alta recibe
`serviceId`, `amount` (decimal string positivo), `description` y `notes`
(opcionales). Registrar la finalización y el actor en el historial del
servicio; no sobrescribir descripción o monto al finalizar.

## Decisiones cerradas

- El técnico asignado puede crear el presupuesto en `IN_PROGRESS` y
  `COMPLETED`; esta operación no cambia el estado del servicio.
- `POST /api/v1/estimates/{id}/finalize` transiciona una sola vez de `PENDING`
  a `FINALIZED` y registra al actor en el historial del servicio.
- No existe edición de contenido después de crear el presupuesto. La
  notificación a Administración no bloquea el guardado ni se implementa sin
  proveedor aprobado.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Módulo frontend](../../.frontend/modulos/estimates.md)
- [Contrato API](../api.md)
- [Fase 5](../../ejecuciones/backend-implementation-plan.md)
