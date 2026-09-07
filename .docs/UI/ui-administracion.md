# UI / UX Administración — TechService

# Objetivo

La interfaz de Administración está diseñada para trabajar con grandes cantidades de información y gestionar la operación completa de TechService.

La prioridad es:

- Visibilidad
- Velocidad
- Control
- Organización
- Productividad

La interfaz utiliza un enfoque Desktop First.

---

# Layout

La interfaz principal utiliza:

```text
Sidebar
   ↓
Contenido principal
   ↓
Panel lateral cuando corresponda
```

La navegación principal deberá permanecer consistente.

---

# Navegación Principal

El Administrador tendrá acceso a:

```text
Dashboard

Agenda

Órdenes de Trabajo

Clientes

Técnicos

Rendiciones

Presupuestos

Inventario

Integraciones

Configuración
```

---

# Dashboard Administración

El Dashboard deberá mostrar una visión resumida de la operación.

## Indicadores

- Órdenes Pendientes
- Órdenes En Proceso
- Órdenes Finalizadas
- Presupuestos Pendientes
- Cobros del Día
- Rendiciones Pendientes
- Órdenes por Técnico
- Servicios por Mes

Los indicadores deberán mostrar información resumida y accionable.

---

# Agenda

La Agenda es una de las pantallas principales de Administración.

Debe permitir:

- Vista diaria
- Vista semanal
- Vista mensual
- Filtrado por técnico

La Agenda deberá poder cambiar el contenido mostrado según el técnico seleccionado.

---

# Orden en Agenda

Cada orden deberá mostrar como mínimo:

```text
Número OT
Empresa
Cliente
Dirección
Localidad
```

---

# Acciones Rápidas de Agenda

```text
Ver
Editar
WhatsApp
```

Las acciones frecuentes deberán estar disponibles sin entrar al detalle cuando sea seguro hacerlo.

---

# Órdenes de Trabajo

La pantalla de Órdenes de Trabajo representa el listado principal de servicios.

La tabla deberá mostrar:

```text
Cliente
Dirección
Localidad
Número de Teléfono
Categoría de Servicio
Monto del Servicio
Fecha
Técnico
Estado
```

---

# Acciones de Orden

```text
Ver
Editar
Duplicar
WhatsApp
Finalizar
```

---

# Duplicar Orden

La duplicación deberá permitir revisar y editar la información antes de crear la nueva orden.

No deberá crearse una nueva orden definitivamente sin la confirmación correspondiente.

---

# WhatsApp

La acción WhatsApp deberá permitir:

- abrir directamente el chat con el cliente
- utilizar el mensaje correspondiente al servicio
- copiar el mensaje cuando corresponda

No existen envíos automáticos de WhatsApp.

---

# Crear Orden de Servicio

Formulario:

```text
Cliente
Fecha
Dirección
Descripción
Observaciones
Técnico
```

Acciones:

```text
Guardar
Guardar y Abrir WhatsApp
Guardar y Copiar Mensaje
Cancelar
```

---

# Detalle de Orden

El detalle deberá centralizar la información de una orden.

Secciones:

```text
Información General
Cliente
Historial
Cobro
Presupuesto
Fotografías
Timeline
```

---

# Acciones de Detalle

```text
Editar
Cambiar Estado
Abrir WhatsApp
Copiar Mensaje
```

Las acciones deberán respetar el estado actual de la orden.

---

# Clientes

La pantalla deberá mostrar:

```text
Nombre
Teléfono
Dirección
Localidad
Cantidad de Órdenes
Último Servicio
Deudas
```

Acciones:

```text
Ver
Editar
Nueva Orden
```

---

# Presupuestos

La interfaz de Administración deberá separar los presupuestos en:

```text
Pendientes
Finalizados
```

---

# Presupuestos Pendientes

Tabla:

```text
Fecha
Número OT
Cliente
Técnico
Monto
```

Acciones:

```text
Ver
Finalizar
```

---

# Presupuestos Finalizados

Tabla:

```text
Fecha
Cliente
Técnico
Monto
Fecha Finalización
```

---

# Cobros

Tabla:

```text
Fecha
OT
Cliente
Técnico
Monto
Repuestos
Monto Neto
Forma de Pago
```

---

# Rendiciones

Las rendiciones deberán visualizarse mediante tarjetas o agrupaciones por período.

Cada rendición deberá mostrar:

```text
Semana
Técnico
Cantidad de Servicios
Monto Cobrado
Repuestos
Monto Neto
50%
Estado
```

Acción:

```text
Ver Detalle
```

---

# Detalle de Rendición

Listado:

```text
OT
Cliente
Cobrado
Repuestos
Neto
50%
```

Además deberá mostrar:

```text
Total Semana
```

Acción:

```text
Liquidar Rendición
```

---

# Proveedores

Tabla:

```text
Nombre
Teléfono
Email
Estado
```

Acciones:

```text
Editar
Desactivar
```

---

# Integraciones

La pantalla de Integraciones deberá mostrar el estado de cada integración.

## Google Sheets

Mostrar:

```text
Estado
Última Sincronización
```

Acción:

```text
Sincronizar
```

## WhatsApp

Mostrar:

```text
Estado
Plantilla
```

Acciones:

```text
Editar
```

## Google Calendar

Estado:

```text
Próximamente
```

---

# Configuración

La Administración tendrá acceso a:

```text
Usuarios
Roles
Proveedores
Plantillas WhatsApp
Parámetros Generales
```

Los parámetros generales incluyen configuraciones como:

- modo oscuro
- idioma
- moneda

---

# Tablas

Las tablas administrativas deberán estar preparadas para manejar grandes cantidades de registros.

Deberán utilizar:

- búsqueda
- filtros
- ordenamiento
- paginación
- estados vacíos
- loading
- manejo de errores

No se deberán cargar todos los registros de una entidad cuando el volumen sea elevado.

---

# Desktop

La interfaz deberá aprovechar el espacio horizontal disponible.

Las tablas, filtros y paneles deberán priorizar productividad.

La navegación deberá minimizar desplazamientos innecesarios.
