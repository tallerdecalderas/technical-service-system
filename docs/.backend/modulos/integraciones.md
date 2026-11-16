# Integraciones externas

**Fase:** 7.  
**Estado:** integraciones Go pendientes.

## Principio

PostgreSQL/TechService es la fuente oficial. Los sistemas externos no escriben
directamente en tablas de negocio. Go coordina autorización, transformaciones,
persistencia, reintentos y auditoría. Una indisponibilidad externa no debe
deshacer una operación local ya confirmada.

## Google Sheets: agenda y servicios

La agenda de Sheets es una proyección unidireccional de servicios de
TechService. Cambios del sistema se exportan; una edición en Sheets no actualiza
la agenda ni la base.

La fila representa un servicio e incluye solo campos acordados: número de OT,
fecha/hora, cliente, dirección/localidad, contacto cuando corresponda,
categoría, técnico, estado y enlace seguro si se aprueba. La sincronización
debe reflejar altas/cambios relevantes sin filas duplicadas mediante una clave
estable de TechService.

Este flujo es exclusivo de la agenda/servicios. No se usa para cargar la lista
de precios ni el catálogo de repuestos.

Una falla de Sheets queda registrada para reintento; no revierte la escritura
del servicio. El objetivo documentado en el contrato de integración es
propagación en menos de cinco segundos cuando la integración está disponible.

## Catálogo: importación por CSV

La importación del catálogo de precios no se hace desde la agenda de Google
Sheets. El flujo oficial es una carga de archivo CSV por parte de
Administración, con validación completa y publicación atómica tras la
confirmación. Error conserva la versión anterior. Ver
[inventario y precios](./inventario-proveedores-precios.md).

Si más adelante se decide admitir Google Sheets como fuente alternativa del
catálogo, debe documentarse como un adaptador opcional distinto y con la misma
validación del CSV oficial; no debe mezclarse con la sincronización de
servicios.

## WhatsApp

No hay API de envío automático. El backend puede registrar auditoría de una
acción de copia/apertura si el contrato lo requiere; la composición del
mensaje y la confirmación de envío son manuales por parte del usuario. No
registrar contenido sensible innecesario.

## Otros calendarios

Google Calendar y Outlook Calendar son posibilidades futuras. No crear
operaciones activas, almacenamiento ni permisos para ellos hasta aprobar su
alcance y dirección de sincronización.

## Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| POST | `/api/v1/integrations/google-sheets/schedule-sync` | ADMIN solicita sincronización de agenda/servicios hacia Google Sheets |
| GET | `/api/v1/integrations/status` | ADMIN consulta salud/último resultado de sincronización |
| POST | `/api/v1/integrations/whatsapp/log` | Registrar evento manual si se conserva en contrato |

## Operación, idempotencia y secretos

- Secrets de Google permanecen en entorno seguro/server-side.
- Limitar permisos a las hojas estrictamente necesarias.
- Registrar inicio/fin, actor, duración, resultado y referencia de ejecución,
  sin tokens ni credenciales.
- Reintentos deben evitar duplicar filas o publicar dos veces una importación.
- Validar datos externos como entrada no confiable.
- La sincronización externa no bloquea la disponibilidad del dato oficial.

## Pendiente de decisión

- Mecanismo operativo de entrega/reintentos (trabajador, cola u otro); no
  prometer procesamiento asíncrono hasta definirlo.
- Mapeo final de columnas, claves y hoja por empresa/técnico.
- Qué campos del servicio se exportan y permisos del enlace.
- Necesidad real de endpoint de log de WhatsApp, ya que el envío es manual.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Integración Google Sheets frontend](../../.frontend/integraciones/googlesheets.md)
- [Inventario](./inventario-proveedores-precios.md)
- [Contrato API](../api.md)
- [Fase 7](../../ejecuciones/backend-implementation-plan.md)
