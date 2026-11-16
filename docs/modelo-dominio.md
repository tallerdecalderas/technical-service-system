# Modelo de dominio compartido

Este documento es el contrato funcional común para frontend y backend. Define
las entidades, relaciones e invariantes que deben conservarse al separar
Next.js del backend Go. No define tablas, SQL ni componentes de interfaz.

## Actores

- **Administrador:** gestiona empresas, clientes, técnicos, servicios,
  catálogo, presupuestos, cobros, rendiciones e integraciones autorizadas.
- **Técnico:** consulta su agenda, ejecuta servicios asignados, registra
  cobros, repuestos, fotografías, presupuestos y datos necesarios para su
  rendición.

La autorización siempre se determina en Go por sesión, rol, propiedad y
estado del recurso. La interfaz solo oculta acciones para mejorar la
experiencia.

## Agregados principales

### Empresa

Define el contexto operativo del catálogo y los servicios. Mantiene el
recargo de costo y el margen por defecto para calcular precios de inventario.

### Cliente

Representa a la persona o entidad que recibe servicios. Un cliente puede tener
muchos servicios y su historial no se elimina por borrar una vista o una
asignación.

### Usuario y técnico

`User` representa una identidad del sistema con rol `ADMIN` o `TECHNICIAN`.
Un técnico es un usuario con permisos operativos sobre sus servicios
asignados.

### Servicio

Es la unidad central del negocio: una visita técnica programada a un cliente.
Relaciona empresa, cliente, categoría, técnico, creador y, opcionalmente,
usuario que lo cerró.

Contiene agenda, dirección, observaciones, importe esperado, importe final,
estado, documentación y su historial de actividad.

### Pago

Representa exclusivamente el resultado económico del servicio: importe
cobrado, deuda y método de pago. Los repuestos no pertenecen al pago.

### Presupuesto

Es opcional y pertenece a un único servicio. Puede permanecer pendiente o
finalizarse; el cliente se obtiene mediante el servicio relacionado.

### Inventario y repuesto de servicio

`InventoryItem` es el catálogo vigente de una empresa. `ServicePart` registra
el repuesto usado en un servicio y conserva un snapshot de nombre, proveedor,
precios, cotización del dólar y equivalentes monetarios.
Un cambio posterior del catálogo no modifica el historial del servicio.

Un repuesto de servicio solo puede utilizar un ítem de la misma empresa del
servicio. Las líneas se mantienen separadas aunque repitan el mismo código.
El stock físico no forma parte del inventario actual.

### Gasto de servicio

`ServiceExpense` registra un gasto asociado directamente al servicio. Conserva
concepto, importe, moneda y usuario que lo registró. La rendición lo incorpora
automáticamente y Administración puede corregirlo antes de liquidar.

### Rendición

`Settlement` representa la liquidación económica de un técnico para un
período. Al liquidarse conserva snapshots de servicios (`SettlementItem`),
repuestos (`SettlementPart`) y gastos (`SettlementExpense`), además de los
porcentajes, ajustes y totales utilizados.

Una rendición liquidada es inmutable. Los snapshots no deben recalcularse desde
el inventario, el dólar, el servicio actual o sus gastos después de liquidar.

### Historial

`ActivityLog` registra acciones relevantes sobre un servicio, usuario,
descripción, fecha y metadata operativa. Cada transición de estado debe dejar
un registro.

## Relaciones

```text
Company
├── Service ── Client
├── InventoryItem ── ServicePart ── Service
└── Settlement

Service
├── Payment (0..1)
├── Estimate (0..1)
├── ServicePart (0..n)
├── ServiceExpense (0..n)
├── ActivityLog (0..n)
└── SettlementItem / SettlementPart

Settlement
├── SettlementItem (snapshots de servicios)
├── SettlementPart (snapshots de repuestos)
├── SettlementExpense (snapshots de gastos)
└── Payment (pagos asociados)
```

## Ciclo de vida del servicio

Los estados oficiales son `PENDING`, `IN_PROGRESS`, `COMPLETED` y
`CANCELLED`. `COMPLETED` representa el servicio finalizado. No existen los
estados `CLOSED` ni “falta terminar el trabajo”.

Las transiciones permitidas son `PENDING -> IN_PROGRESS | CANCELLED` y
`IN_PROGRESS -> COMPLETED | CANCELLED`. Los estados `COMPLETED` y `CANCELLED`
son terminales y no se permite reabrir servicios.

Reglas invariantes:

- Un servicio no se elimina físicamente.
- Todo cambio de estado queda auditado.
- Administración realiza el alta completa y gestiona las operaciones
  administrativas del servicio, incluida su cancelación.
- El técnico solo opera servicios que le fueron asignados y únicamente puede
  completar el servicio mediante el formulario de cierre.
- El importe final puede diferir del importe esperado.
- Un servicio puede no tener presupuesto, pero solo tiene uno si existe.
- Un cliente puede tener múltiples servicios.

## Integraciones y fuente de verdad

PostgreSQL es la fuente oficial. Google Sheets es una vista externa de agenda o
catálogo y no escribe directamente en la base. Storage conserva binarios;
PostgreSQL conserva sus metadatos y asociaciones. WhatsApp se usa mediante
copiar/pegar o apertura manual; el sistema no envía mensajes automáticamente.

## Fuente y precedencia

Este modelo resume las reglas de [reglas-negocio.md](./reglas-negocio.md) y el
contrato de datos actual en `prisma/contract.prisma`. Si existe una
contradicción, primero se actualiza y aprueba la regla funcional; después se
ajustan el esquema backend, los DTOs frontend y las pruebas.
