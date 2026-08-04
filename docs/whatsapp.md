# WhatsApp

# Objetivo

El módulo WhatsApp permite generar y compartir información de una Orden de Trabajo con el cliente de forma rápida.

Actualmente el sistema no enviará mensajes automáticamente.

Su función será generar el mensaje y facilitar el envío desde WhatsApp.

En futuras versiones podrá integrarse con WhatsApp Business API.

---

# Principios

El sistema nunca enviará mensajes sin intervención del usuario.

Toda comunicación será iniciada por un Administrador.

WhatsApp es un canal de comunicación.

Nunca será la fuente de información del sistema.

---

# Flujo

```
Administrador

↓

Crear Orden

↓

Guardar

↓

Generar Mensaje

↓

Copiar

o

Abrir WhatsApp

↓

Enviar Manualmente
```

---

# Acciones Disponibles

Cada Orden de Trabajo dispondrá de dos acciones.

## Copiar Mensaje

Genera el mensaje y lo copia automáticamente al portapapeles.

No abre WhatsApp.

---

## Abrir WhatsApp

Genera el mensaje.

Abre WhatsApp Web o la aplicación instalada.

Carga automáticamente el texto.

El usuario únicamente debe presionar "Enviar".

---

# Ubicación de los Botones

Los botones deberán encontrarse.

## Crear Orden

- Guardar
- Guardar y Copiar
- Guardar y Abrir WhatsApp

---

## Detalle de la Orden

- Copiar Mensaje
- Abrir WhatsApp

---

## Agenda

Cada tarjeta deberá disponer de una acción rápida.

💬 WhatsApp

---

# Información Utilizada

El mensaje podrá utilizar.

Número de Orden

Cliente

Fecha

Hora

Dirección

Descripción

Nombre del Técnico

Teléfono del Técnico (opcional)

Observaciones

---

# Plantilla Inicial

Ejemplo.

Hola _{{cliente}}_.

Le confirmamos el servicio técnico.

📌 Orden: {{numero}}

📅 Fecha: {{fecha}}

🕒 Hora: {{hora}}

👨‍🔧 Técnico: {{tecnico}}

📍 Dirección:
{{direccion}}

📝 Motivo:
{{descripcion}}

Muchas gracias.

---

# Variables Disponibles

El sistema deberá soportar variables.

```
{{cliente}}

{{numero}}

{{fecha}}

{{hora}}

{{direccion}}

{{descripcion}}

{{tecnico}}

{{telefono_tecnico}}

{{empresa}}

{{telefono_empresa}}
```

---

# Plantillas

Inicialmente existirá una única plantilla.

La arquitectura deberá permitir múltiples plantillas.

Ejemplo.

Confirmación.

Reprogramación.

Cancelación.

Recordatorio.

Postventa.

---

# Configuración

Administración podrá modificar.

Nombre de la empresa.

Teléfono.

Firma.

Plantillas.

Variables.

Sin necesidad de modificar código.

---

# Historial

Cada vez que un usuario utilice WhatsApp.

Se registrará.

Fecha.

Hora.

Usuario.

Orden.

Acción.

Copiado.

WhatsApp abierto.

Esto permite conocer cuándo se realizó la comunicación.

---

# Integración

La apertura deberá realizarse utilizando.

```
https://wa.me/
```

El sistema será responsable de construir correctamente la URL.

---

# Validaciones

No podrá abrirse WhatsApp si el cliente no posee teléfono.

Si el número es inválido.

Se mostrará un mensaje de error.

---

# Futuras Mejoras

La arquitectura queda preparada para incorporar.

- WhatsApp Business API

- Envío automático

- Confirmación de lectura

- Confirmación de entrega

- Plantillas múltiples

- Adjuntar PDF

- Adjuntar Presupuesto

- Adjuntar fotografías

- Enviar ubicación

- Recordatorios automáticos

- Encuestas de satisfacción

- Mensajes programados

Sin modificar el funcionamiento principal del módulo.

---

# UX

El Administrador nunca deberá escribir manualmente un mensaje.

El sistema deberá generar toda la información automáticamente.

La acción completa deberá requerir un único clic.

---

# Reglas de Negocio

WhatsApp nunca modifica información del sistema.

Los mensajes siempre son generados utilizando la información actual de la Orden de Trabajo.

Toda modificación de una Orden se reflejará automáticamente en el próximo mensaje generado.

El sistema no almacena conversaciones.

Únicamente registra que la acción fue realizada.
