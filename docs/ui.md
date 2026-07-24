# UI / UX — TechService

# Objetivo

La interfaz debe permitir que Administración y los Técnicos trabajen de forma rápida, simple y eficiente.

La prioridad es reducir la cantidad de clics necesarios para completar una tarea.

Toda pantalla debe mostrar únicamente la información necesaria.

---

# Principios de Diseño

Toda la interfaz debe respetar los siguientes principios.

- Simplicidad
- Consistencia
- Rapidez
- Responsive
- Mobile First para Técnicos
- Desktop First para Administración

---

# Layout General

El sistema posee dos interfaces diferentes.

Administrador

↓

Sidebar

↓

Contenido

↓

Panel lateral (cuando corresponda)

---

Técnico

↓

Pantallas simples

↓

Botones grandes

↓

Optimizado para celular

---

# Menú Administración

Dashboard

Agenda

Órdenes de Trabajo

Clientes

Técnicos

Cobros

Rendiciones

Presupuestos

Proveedores

Integraciones

Configuración

---

# Dashboard

Debe mostrar información resumida.

Tarjetas.

• Órdenes Pendientes

• Órdenes En Proceso

• Órdenes Finalizadas

• Presupuestos Pendientes

• Cobros del Día

• Rendiciones Pendientes

Gráficos futuros.

Facturación mensual

Órdenes por Técnico

Servicios por Mes

---

# Agenda

Vista principal del trabajo diario.

Debe permitir.

Vista diaria

Vista semanal

Vista mensual

Filtros.

Técnico

Estado

Fecha

Cliente

Cada Orden debe visualizar.

Número OT

Cliente

Dirección

Hora

Técnico

Estado

Acciones rápidas.

Ver

Editar

WhatsApp

---

# Órdenes de Trabajo

Pantalla principal del sistema.

Tabla.

Número

Cliente

Dirección

Fecha

Hora

Técnico

Estado

Acciones.

Ver

Editar

Duplicar

WhatsApp

Finalizar

---

# Crear Orden

Formulario.

Cliente

Fecha

Hora

Dirección

Descripción

Observaciones

Técnico

Botones.

Guardar

Guardar y Abrir WhatsApp

Guardar y Copiar Mensaje

Cancelar

---

# Detalle de la Orden

Debe mostrar.

Información General

Cliente

Historial

Cobro

Presupuesto

Fotografías

Timeline

Acciones.

Editar

Cambiar Estado

Abrir WhatsApp

Copiar Mensaje

---

# Timeline

Cada Orden debe mostrar un historial visual.

Ejemplo.

09:15

Orden creada

09:20

Técnico asignado

09:30

WhatsApp generado

11:00

Trabajo iniciado

12:15

Cobro registrado

12:18

Repuestos agregados

12:25

Presupuesto enviado

12:30

Orden finalizada

---

# Clientes

Tabla.

Nombre

Teléfono

Dirección

Cantidad de Órdenes

Último Servicio

Acciones.

Ver

Editar

Nueva Orden

---

# Técnico

Dashboard simplificado.

Mi Agenda

Mis Cobros

Mis Presupuestos

Mi Rendición

---

# Agenda del Técnico

Tarjetas grandes.

Número OT

Cliente

Hora

Estado

Botones.

Ver

Iniciar

Google Maps (futuro)

---

# Detalle Técnico

Información.

Cliente

Teléfono

Dirección

Descripción

Observaciones

Botones.

Iniciar Trabajo

Registrar Cobro

Enviar Presupuesto

Finalizar

---

# Formulario Cobro

Campos.

Monto

Forma de Pago

Observaciones

Agregar Repuesto

Fotografía

Guardar

---

# Agregar Repuesto

Tabla dinámica.

Proveedor

Descripción

Cantidad

Precio Unitario

Subtotal

Botón.

Agregar otro Repuesto

Total Repuestos

---

# Enviar Presupuesto

Formulario.

Monto

Descripción

Observaciones

Botones.

Enviar

Cancelar

---

# Presupuestos

Dos pestañas.

Pendientes

Finalizados

---

# Presupuestos Pendientes

Tabla.

Fecha

Número OT

Cliente

Técnico

Monto

Acciones.

Ver

Finalizar

---

# Presupuestos Finalizados

Tabla.

Fecha

Cliente

Técnico

Monto

Fecha Finalización

---

# Cobros

Tabla.

Fecha

OT

Cliente

Técnico

Monto

Repuestos

Monto Neto

Forma de Pago

---

# Rendiciones

Tarjetas por semana.

Semana

Técnico

Cantidad de Servicios

Monto Cobrado

Repuestos

Monto Neto

50%

Estado

Acción.

Ver Detalle

---

# Detalle Rendición

Listado de servicios.

OT

Cliente

Cobrado

Repuestos

Neto

50%

Total Semana

Botón.

Liquidar Rendición

---

# Proveedores

Tabla.

Nombre

Teléfono

Email

Estado

Acciones.

Editar

Desactivar

---

# Integraciones

Pantalla simple.

Google Sheets

Estado

Última sincronización

Botón.

Sincronizar

---

WhatsApp

Estado

Plantilla

Editar

---

Google Calendar

Próximamente

---

# Configuración

Usuarios

Roles

Proveedores

Plantillas WhatsApp

Parámetros Generales

---

# Componentes Reutilizables

Toda la aplicación deberá reutilizar componentes.

DataTable

Form

Modal

Drawer

Timeline

StatusBadge

Money

DatePicker

SearchInput

Pagination

ConfirmDialog

Upload

EmptyState

Loading

---

# Colores de Estados

Pendiente

Amarillo

En Proceso

Azul

Completado

Verde

Cancelado

Rojo

Cerrado

Gris

---

# Responsive

Administrador.

Optimizado para escritorio.

Técnico.

Optimizado para celular.

Toda pantalla deberá funcionar correctamente en tablet.

---

# Accesibilidad

Todos los botones deberán poseer.

Icono

Texto

Tooltip

Toda acción destructiva deberá solicitar confirmación.

---

# Estados Vacíos

Toda pantalla sin información deberá mostrar.

Mensaje claro.

Botón principal.

Acción recomendada.

Nunca mostrar tablas vacías sin contexto.

---

# Principios UX

Toda acción importante deberá requerir menos de tres clics.

Toda información importante deberá encontrarse visible sin necesidad de abrir múltiples pantallas.

El usuario nunca deberá perder el contexto de trabajo.

La navegación deberá ser consistente entre todos los módulos.

---

# Escalabilidad

La interfaz queda preparada para incorporar.

Portal del Cliente

Aplicación Móvil

Firma Digital

Google Maps

Google Calendar

Notificaciones Push

Modo Oscuro

Inteligencia Artificial

Sin modificar la estructura principal.
