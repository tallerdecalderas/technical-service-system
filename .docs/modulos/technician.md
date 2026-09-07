# Técnicos

# Objetivo

El módulo Técnicos permite que cada técnico gestione únicamente sus propios trabajos diarios.

La interfaz debe estar optimizada para dispositivos móviles, minimizando la cantidad de pasos necesarios para completar una Orden de Trabajo.

El Técnico nunca administra información del sistema.

Su función es ejecutar el trabajo asignado.

---

# Permisos

El Técnico únicamente puede acceder a información relacionada con sus propias Órdenes de Trabajo.

Puede.

- Ver agenda de servicios
- Cambiar estado de una Orden
- Registrar un cobro solo disponible cuando la orden esta en estado EN PROCESO
- Registrar repuestos solo disponible cuando la orden esta en estado EN PROCESO
- Enviar un presupuesto solo disponible cuando la orden esta en estado EN PROCESO
- Finalizar una Orden solo disponible cuando la orden esta en estado EN PROCESO

No puede.

- Crear clientes
- Crear Órdenes
- Eliminar información
- Modificar datos administrativos
- Ver información de otros técnicos

---

# Dashboard

Al iniciar sesión el Técnico visualizará un resumen de su jornada.

Información mostrada.

- Servicios pendientes
- Servicios en proceso
- Agenda semanal
- Presupuestos enviados
- Total recaudado del día

---

# Agenda

La Agenda representa los trabajos asignados.

Cada tarjeta debe mostrar.

- Número de OT
- Cliente
- Dirección
- Localidad
- Número de Teléfono
- Monto
- Categoría
- Estado

Acciones disponibles.

- Ver detalle
- Iniciar trabajo

---

# Detalle de la Orden

Cada Orden deberá mostrar.

Cliente

Dirección

Teléfono

Descripción

Historial del cliente completo

Estado

Botones disponibles según el estado.

---

# Inicio del Trabajo

Cuando el Técnico llega al domicilio podrá presionar.

"Iniciar Trabajo"

Al hacerlo.

- cambia el estado a EN PROCESO
- registra fecha
- registra hora

---

# Trabajo en Curso

Mientras la Orden está en proceso el Técnico podrá.

- agregar observaciones
- consultar datos del cliente
- visualizar historial

En futuras versiones podrá.

- agregar fotografías
- registrar materiales
- registrar tiempos

---

# Finalización

Cuando termina la visita el Técnico presiona.

Finalizar Trabajo

Se abrirá el formulario de cierre.

---

# Formulario de Cierre

El formulario deberá permitir.

Observaciones finales

Fotografía del trabajo (opcional)

Registrar Cobro

Enviar Presupuesto

Finalizar Orden

Las acciones son independientes.

---

# Cobro

Si el cliente realiza un pago.

El Técnico podrá registrar.

Monto

Forma de pago

Observaciones

Fotografía del comprobante (opcional)

---

# Repuestos

Durante el registro del cobro el Técnico podrá agregar uno o más repuestos.

Cada repuesto deberá registrar.

Proveedor

Descripción

Cantidad

Precio Unitario

Subtotal

El sistema calculará automáticamente.

Total de Repuestos

---

# Proveedores

Los proveedores son seleccionados desde una lista.

Si un proveedor no existe.

Podrá seleccionarse.

"Otro"

La administración será responsable de mantener actualizada la lista de proveedores.

---

# Presupuesto

Si durante la visita el Técnico detecta trabajos adicionales.

Podrá generar un presupuesto.

El formulario deberá contener.

Monto

Descripción

Observaciones

Enviar

Al enviarlo.

La Orden continúa normalmente.

Administración recibirá automáticamente un nuevo presupuesto pendiente.

---

# Estado del Presupuesto

El Técnico únicamente podrá visualizar.

Pendiente

Finalizado

No podrá modificar el estado.

Solo Administración puede finalizar un presupuesto.

---

# Rendición

El Técnico dispondrá de una sección.

Mi Rendición

Allí visualizará.

Semana

Servicios cobrados

Monto cobrado

Costo de repuestos

Monto Neto

50% Empresa

50% Técnico

Estado de la rendición

La información es únicamente de consulta.

---

# Historial Personal

El Técnico podrá consultar el historial de sus trabajos.

Filtros.

Fecha

Cliente

Estado

---

# Notificaciones

En futuras versiones el Técnico podrá recibir.

Nuevo trabajo asignado.

Cambio de horario.

Cambio de técnico.

Recordatorio de servicio.

Presupuesto finalizado.

---

# Seguridad

El Técnico nunca podrá acceder mediante URL a información de otros usuarios.

Todas las consultas deberán validar.

ID del Técnico

Permisos

Sesión

---

# Principios de Diseño

La interfaz del Técnico debe priorizar.

Pocos botones.

Pantallas simples.

Información clara.

Acciones rápidas.

Optimización para celulares.

El Técnico debe poder completar una Orden en menos de dos minutos.

---

# Flujo Operativo

```
Login

↓

Dashboard

↓

Agenda

↓

Detalle de Orden

↓

Iniciar Trabajo

↓

Realizar Servicio

↓

Cobro (opcional)

↓

Repuestos (opcional)

↓

Presupuesto (opcional)

↓

Finalizar

↓

Siguiente Orden
```

---

# Mejoras Futuras

La arquitectura queda preparada para incorporar.

- Firma digital del cliente

- Fotografías múltiples

- Firma sobre pantalla

- Geolocalización

- Escaneo de códigos QR

- Historial del equipo

- Checklist de mantenimiento

- Videos

- Adjuntos

- Notificaciones Push

- Integración con Google Maps

- Navegación automática

- Trabajo Offline

Sin modificar el funcionamiento principal del módulo.
