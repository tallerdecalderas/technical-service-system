# Presupuestos

# Objetivo

El módulo Presupuestos permite que un Técnico informe a Administración que un trabajo requiere una cotización adicional.

Todo presupuesto nace a partir de una Orden de Trabajo existente.

No pueden existir presupuestos independientes.

---

# Objetivo del Módulo

El propósito del módulo es facilitar la comunicación entre el Técnico y Administración.

El Técnico informa.

Administración analiza.

Administración finaliza.

El cliente nunca interactúa directamente con este módulo.

---

# Flujo General

```
Orden de Trabajo

↓

Visita Técnica

↓

Enviar Presupuesto

↓

Presupuesto Pendiente

↓

Administración

↓

Finalizar

↓

Presupuesto Finalizado
```

---

# Estados

Los presupuestos únicamente poseen dos estados.

- Pendiente
- Finalizado

No existen estados intermedios.

No existen presupuestos aprobados o rechazados.

La gestión comercial ocurre fuera del sistema.

---

# Creación

El presupuesto solamente puede crearlo el Técnico.

Siempre debe estar asociado a una Orden de Trabajo.

Cada Orden puede generar un único presupuesto.

---

# Información del Presupuesto

Cada presupuesto registra.

- Número de Orden

- Cliente

- Técnico

- Fecha

- Monto

- Descripción

- Observaciones

- Estado

- Fecha de creación

- Fecha de finalización

---

# Formulario del Técnico

Durante el cierre del trabajo aparecerá la opción.

```
Enviar Presupuesto
```

Al seleccionarla se abrirá el formulario.

Campos.

Monto

Descripción del trabajo

Observaciones

Botones.

Enviar

Cancelar

---

# Comportamiento

Al enviar el presupuesto.

El sistema.

- guarda el presupuesto
- notifica a Administraciónpresupuestó
- administracio ve el presupuesto y puede cambiar el stado en finalizado
- mantiene la Orden disponible

El envío del presupuesto no modifica automáticamente el estado de la Orden.

---

# Administración

Administración dispondrá de un nuevo módulo.

```
Presupuestos
```

Con únicamente dos vistas.

```
Pendientes

Finalizados
```

---

# Presupuestos Pendientes

Debe mostrar.

Número OT

Cliente

Técnico

Fecha

Monto

Descripción

Ver

Finalizar

---

# Detalle

Administración podrá visualizar.

Información de la Orden

Datos del Cliente

Descripción

Historial de presupuestos realizados

Monto

No podrá modificar la información enviada por el Técnico.

solo ver finalizar con el estado el administrados hace el presupuesto aprte y se lo envia manualmente al cliente.

---

# Finalizar

Cuando Administración presione.

```
Finalizar
```

El sistema.

- cambia el estado
- registra fecha
- registra usuario
- mueve el presupuesto a Finalizados

No se elimina información ya que queda guardado en el historial del cliente o service.

---

# Presupuestos Finalizados

Debe mostrar.

Número OT

Cliente

Fecha

Monto

Técnico

Fecha Finalización

Usuario que finalizó

---

# Relación con la Orden

Cada presupuesto mantiene una referencia permanente a la Orden de Trabajo.

Desde la Orden deberá visualizarse.

```
Presupuesto

Pendiente

Revision por el cliente

o

Finalizado
```

Con acceso directo al detalle.

---

# Historial

Toda acción deberá registrarse.

Ejemplo.

Presupuesto creado.

↓

Administración abrió el presupuesto.

↓

Presupuesto finalizado.

---

# Dashboard

El Dashboard deberá mostrar.

Presupuestos Pendientes

Presupuestos en Revision por el cliente

Presupuestos Finalizados

---

# Búsquedas

Administración podrá buscar por.

Número OT

Cliente

Técnico

Fecha

Estado

---

# Validaciones

No podrá existir un presupuesto sin Orden.

No podrá existir más de un presupuesto por Orden.

Un Técnico únicamente podrá crear presupuestos de sus propias Órdenes.

Solo Administración podrá finalizar un presupuesto.

Los presupuestos se eliminan cuando se da por finalizado ya que existe la orden de trabajo y el presupuesto queda guardado en el historial del cliente y servicio realizado asi que no hace falta tenerlo en una lista de presupuestos finalizados.

---

# Integraciones

En futuras versiones.

- Exportar PDF

- Compartir por WhatsApp

- Enviar por Email

- Firma Digital

- Historial de modificaciones

Sin modificar la arquitectura principal.

---

# Principios UX

El Técnico debe completar un presupuesto en menos de un minuto.

Administración debe poder revisar un presupuesto en menos de treinta segundos.

La navegación debe requerir la menor cantidad posible de clics.

---

# Escalabilidad

La arquitectura queda preparada para incorporar.

- Plantillas de presupuestos

- Adjuntos

- Fotografías

- Archivos PDF

- Firma del cliente

- Versionado

- Conversión automática del presupuesto en una nueva Orden de Trabajo

Sin modificar la estructura principal del módulo.
