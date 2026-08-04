# Reglas de Negocio — TechService

# Objetivo del Sistema

TechService es un sistema de administración integral para empresas de servicio técnico.

Su objetivo es administrar el ciclo completo de un trabajo técnico desde la creación del servicio hasta la rendición económica del técnico.

El sistema posee dos perfiles principales:

- Administrador
- Técnico

Cada usuario posee permisos específicos según su rol.

---

# Principios del Sistema

Toda la lógica del sistema debe respetar las siguientes reglas.

## 1. El sistema es la fuente oficial de información

Toda la información oficial se almacena en la base de datos del sistema.

Ninguna integración externa (Google Sheets, WhatsApp, etc.) puede modificar información directamente.

Las integraciones únicamente reflejan información existente.

---

## 2. Cada servicio representa una visita técnica

Un Servicio representa una visita programada a un cliente.

El servicio posee su propio historial, estado, técnico asignado y documentación asociada.

---

## 3. Un cliente puede tener múltiples servicios

No existe límite de servicios asociados a un cliente.

El historial debe permanecer disponible de forma permanente.

---

## 4. Los servicios nunca se eliminan físicamente

Los servicios forman parte del historial operativo de la empresa.

Solo podrán marcarse como cancelados o archivados.

---

# Flujo de un Servicio

Todo servicio sigue el siguiente flujo.

```
Creación

↓

Asignación de Técnico

↓

Comunicación con Cliente

↓

Agenda

↓

Visita Técnica

↓

Cobro (opcional)

↓

Presupuesto (opcional)

↓

Cierre

↓

Finalización
```

---

# Estados del Servicio

Todo servicio debe encontrarse en uno de los siguientes estados.

- Pendiente
- En Proceso
- Completado
- Cancelado
- Cerrado

Cada cambio de estado debe quedar registrado en el historial.

---

# Creación del Servicio

El Administrador crea un servicio indicando como mínimo:

- Cliente
- Fecha
- Hora
- Dirección
- Descripción
- Técnico (opcional)

Una vez creado:

- aparece en la agenda
- puede sincronizarse con Google Sheets
- puede enviarse al cliente mediante WhatsApp

---

# Comunicación con el Cliente

Cada servicio puede generar automáticamente un mensaje para WhatsApp.

El mensaje debe poder:

- copiarse al portapapeles
- abrir WhatsApp directamente

La plantilla será configurable en futuras versiones.

El sistema nunca enviará mensajes automáticamente.

Siempre será el usuario quien confirme el envío.

---

# Agenda

La agenda representa todos los servicios programados.

Debe actualizarse automáticamente cuando:

- se crea un servicio
- cambia la fecha
- cambia la hora
- cambia el técnico
- cambia el estado
- se cancela un servicio

La agenda puede sincronizarse con Google Sheets.

Google Sheets es únicamente una vista externa.

Nunca modifica la información del sistema.

---

# Técnico

Cada técnico únicamente puede visualizar:

- sus servicios
- sus cobros
- sus presupuestos
- su rendición

Nunca podrá acceder a información perteneciente a otro técnico.

---

# Finalización del Servicio

Cuando un técnico finaliza un servicio podrá:

- cerrar el trabajo
- registrar un cobro
- enviar un presupuesto

Las acciones son independientes.

Un servicio puede:

- tener cobro sin presupuesto
- tener presupuesto sin cobro
- tener ambos

---

# Presupuestos

Los presupuestos representan trabajos futuros derivados de una visita técnica.

Un servicio puede generar como máximo un presupuesto.

Los presupuestos poseen únicamente dos estados.

- Pendiente
- Finalizado

No existen estados intermedios.

Cuando el técnico envía un presupuesto:

- Administración recibe el presupuesto pendiente.
- El presupuesto permanece visible hasta que Administración lo finaliza.

Los presupuestos nunca desaparecen del historial.

---

# Cobros

Los cobros representan dinero efectivamente recibido por el técnico.

Cada servicio puede tener un único cobro.

El cobro puede incluir:

- monto cobrado
- forma de pago
- observaciones
- fotografía del comprobante

---

# Repuestos

Un cobro puede contener múltiples repuestos.

Cada repuesto debe registrar:

- proveedor
- descripción
- cantidad
- costo unitario
- costo total

Los repuestos forman parte de la rendición económica.

---

# Proveedores

Los proveedores permiten identificar el origen de cada repuesto.

No administran stock.

Su finalidad es únicamente económica y estadística.

Los proveedores podrán administrarse desde el panel de Administración.

---

# Rendición Semanal

Cada técnico posee una rendición semanal.

La rendición agrupa todos los cobros realizados durante una semana.

Para cada servicio se calcula:

Monto Cobrado

↓

Costo Total de Repuestos

↓

Monto Neto

↓

50% Técnico

↓

50% Empresa

Los repuestos siempre se descuentan antes de calcular la comisión.

---

# Cálculo de Comisión

La fórmula oficial es:

Monto Cobrado

-

Costo de Repuestos

=

Monto Neto

Monto Neto

×

50%

=

Comisión del Técnico

---

# Historial

Toda acción importante debe quedar registrada.

Como mínimo:

- creación del servicio
- asignación de técnico
- cambio de estado
- cobro
- envío de presupuesto
- cierre
- finalización

El historial nunca debe eliminarse.

---

# Integraciones

El sistema podrá integrarse con servicios externos.

Inicialmente:

- Google Sheets
- WhatsApp

Futuras integraciones:

- Google Calendar
- Outlook Calendar
- APIs de mensajería

Las integraciones nunca reemplazan al sistema principal.

---

# Seguridad

Los técnicos únicamente pueden modificar información de sus propios servicios.

Todas las operaciones sensibles requieren autenticación.

Toda modificación debe validar permisos antes de ejecutarse.

---

# Escalabilidad

Toda nueva funcionalidad deberá respetar estas reglas.

No podrán implementarse módulos que contradigan la lógica definida en este documento.

Este archivo constituye la especificación funcional principal del sistema.
