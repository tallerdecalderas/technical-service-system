# Órdenes de Trabajo (Service)

# Objetivo

La Orden de Trabajo (OT) representa una visita técnica programada para un cliente.

Es la entidad principal del sistema y concentra toda la información relacionada con un trabajo técnico.

Toda la operación del sistema gira alrededor de una Orden de Trabajo.

---

# Ciclo de Vida

Toda Orden de Trabajo sigue el siguiente flujo.

```
Crear Orden

↓

Asignar Técnico

↓

Enviar información al Cliente

↓

Agenda

↓

Visita Técnica

↓

Cobro (Opcional)

↓

Presupuesto (Opcional)

↓

Cierre

↓

Finalización
```

---

# Creación

La Orden es creada por un Administrador.

Datos mínimos obligatorios.

- Cliente
- Fecha
- Hora
- Dirección
- Descripción del trabajo

Datos opcionales.

- Técnico
- Observaciones internas
- Monto estimado

Al finalizar la creación la Orden queda automáticamente en estado:

PENDIENTE

---

# Numeración

Cada Orden debe poseer un identificador único.

Ejemplo.

OT-000001

OT-000002

OT-000003

El número debe ser visible para Administración y Técnicos.

---

# Estados

Una Orden únicamente puede encontrarse en alguno de los siguientes estados.

- Pendiente
- En Proceso
- Completado
- Cancelado
- Cerrado

Cada cambio de estado debe registrarse en el historial.

---

# Asignación del Técnico

Una Orden puede crearse:

- sin técnico
- con técnico asignado

Cuando se asigna un técnico.

La Orden aparece automáticamente en su agenda.

---

# Agenda

Toda Orden forma parte de la agenda.

La agenda debe actualizarse automáticamente cuando cambia.

- fecha
- hora
- técnico
- estado

Las modificaciones deben reflejarse también en Google Sheets cuando la integración se encuentre habilitada.

---

# Comunicación con el Cliente

Una Orden puede generar automáticamente un mensaje para WhatsApp.

El sistema deberá disponer de dos acciones.

- Copiar Mensaje

- Abrir WhatsApp

El mensaje será generado automáticamente utilizando la información de la Orden.

Ejemplo.

Cliente

Fecha

Hora

Dirección

Descripción

Nombre del Técnico

Teléfono del Técnico (opcional)

Observaciones

La plantilla será configurable en futuras versiones.

---

# Modificación

El Administrador podrá modificar cualquier dato de una Orden.

Toda modificación importante deberá registrarse.

Ejemplos.

Cambio de fecha.

Cambio de técnico.

Cambio de dirección.

Cambio de descripción.

---

# Vista del Técnico

El Técnico únicamente visualizará las Órdenes asignadas a él.

Podrá.

- iniciar trabajo
- actualizar estado
- registrar cobro
- cargar repuestos
- enviar presupuesto
- cerrar el trabajo

No podrá modificar información administrativa.

---

# Inicio del Trabajo

Cuando el Técnico comienza la visita.

El estado cambia automáticamente a.

EN PROCESO

Debe registrarse.

- fecha
- hora

---

# Cierre del Trabajo

Cuando finaliza la visita el Técnico deberá completar el formulario de cierre.

El formulario incluirá.

- Observaciones finales

- Fotografía (opcional)

- Registrar Cobro

- Enviar Presupuesto

- Finalizar Orden

Las acciones son independientes.

---

# Cobro

El Técnico podrá registrar un cobro inmediatamente.

El cobro pertenece únicamente a esa Orden.

Una Orden solamente puede tener un cobro.

---

# Repuestos

Durante el cobro el Técnico podrá agregar múltiples repuestos.

Cada repuesto registra.

Proveedor

Descripción

Cantidad

Precio

Subtotal

No existe límite de repuestos.

---

# Presupuesto

Durante el cierre el Técnico podrá generar un presupuesto.

La generación del presupuesto no cierra automáticamente la Orden.

El presupuesto queda disponible para Administración.

Cada Orden puede tener un único presupuesto.

---

# Administración de Presupuestos

Cuando un Técnico envía un presupuesto.

Administración lo visualizará automáticamente en.

Presupuestos Pendientes

El presupuesto permanecerá allí hasta que Administración lo marque como.

Finalizado

---

# Fotografías

Una Orden podrá almacenar fotografías.

Inicialmente.

- Foto de finalización.

La arquitectura deberá permitir incorporar posteriormente.

- fotografías antes del trabajo

- fotografías durante el trabajo

- fotografías de repuestos

- fotografías del equipo

---

# Historial

Toda Orden posee un historial permanente.

Ejemplo.

Orden creada

↓

Técnico asignado

↓

Cambio de fecha

↓

Cambio de estado

↓

Cobro registrado

↓

Presupuesto enviado

↓

Orden cerrada

El historial nunca debe eliminarse.

---

# Integraciones

Las Órdenes podrán integrarse con.

Google Sheets

WhatsApp

Google Calendar (futuro)

Las integraciones reflejan información.

Nunca modifican datos del sistema.

---

# Validaciones

No podrá cerrarse una Orden inexistente.

No podrá asignarse un Técnico inactivo.

No podrá registrarse un cobro duplicado.

No podrá generarse más de un presupuesto por Orden.

Los Técnicos únicamente podrán modificar sus propias Órdenes.

---

# Futuras Mejoras

La arquitectura queda preparada para incorporar.

- Firma del Cliente

- Ubicación GPS

- Checklists

- Material utilizado

- Tiempo trabajado

- Adjuntos

- Historial del Equipo

- Garantías

- Mantenimiento Preventivo

- Encuestas de satisfacción

Sin modificar la estructura principal del módulo.
