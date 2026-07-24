# Integraciones

# Objetivo

El módulo Integraciones permite conectar TechService con servicios externos sin modificar la lógica principal del sistema.

Toda integración debe respetar el siguiente principio.

> TechService es la única fuente oficial de información.

Las plataformas externas únicamente consumen o muestran información.

Nunca modifican directamente la base de datos.

---

# Arquitectura

```
                TechService

                     │

      ┌──────────────┼──────────────┐

      ▼              ▼              ▼

Google Sheets   WhatsApp     Google Calendar

      ▼              ▼              ▼

Visualización   Comunicación   Agenda Externa
```

Cada integración funciona de forma independiente.

---

# Principios

Todas las integraciones deberán cumplir.

- Desacopladas del negocio.
- Independientes entre sí.
- Reutilizables.
- Configurables.
- Auditables.
- Seguras.

---

# Integraciones Disponibles

Actualmente.

- Google Sheets
- WhatsApp

Futuras.

- Google Calendar
- Outlook Calendar
- Gmail
- Telegram
- Mercado Pago
- AFIP / ARCA
- APIs externas

---

# Google Sheets

## Objetivo

Permitir que la Agenda pueda visualizarse desde una Hoja de Cálculo.

Google Sheets funciona únicamente como una vista de la agenda.

Nunca modifica información.

---

## Sincronización

La sincronización deberá ejecutarse automáticamente cuando.

- Se crea una Orden.
- Se modifica una Orden.
- Cambia el Técnico.
- Cambia la Fecha.
- Cambia la Hora.
- Cambia el Estado.
- Se cancela una Orden.

---

## Información Sincronizada

Cada fila representará una Orden.

Columnas recomendadas.

Número OT

Fecha

Hora

Cliente

Dirección

Localidad

Técnico

Estado

Teléfono

Observaciones

Link a la Orden

---

## Tiempo de Actualización

Objetivo.

Menor a 5 segundos.

Para el usuario deberá percibirse como tiempo real.

---

## Fuente de Datos

Google Sheets nunca podrá modificar información.

Toda modificación deberá realizarse desde TechService.

---

# WhatsApp

## Objetivo

Facilitar la comunicación con el cliente.

El sistema genera automáticamente el mensaje.

El usuario decide cuándo enviarlo.

---

## Acciones

Copiar mensaje.

Abrir WhatsApp.

Registrar acción en el historial.

---

## Información Utilizada

Número OT.

Cliente.

Fecha.

Hora.

Dirección.

Descripción.

Técnico.

---

## Restricciones

No envía mensajes automáticamente.

No almacena conversaciones.

No modifica información.

---

# Google Calendar

Estado.

Planificado.

---

## Objetivo

Sincronizar automáticamente la Agenda con Google Calendar.

Cada Orden podrá generar un evento.

---

## Eventos

Cuando cambie.

Fecha.

Hora.

Técnico.

Estado.

El evento deberá actualizarse automáticamente.

---

## Información del Evento

Título.

Cliente.

Dirección.

Descripción.

Teléfono.

Link directo a la Orden.

---

# Historial de Integraciones

Toda integración deberá registrar.

Fecha.

Hora.

Usuario.

Integración.

Resultado.

Mensaje.

Duración.

---

# Estados

Cada integración podrá encontrarse.

Activa.

Deshabilitada.

Error.

Sin configurar.

---

# Configuración

Cada integración dispondrá de una pantalla propia.

Ejemplo.

Google Sheets.

- Cuenta conectada.
- Estado.
- Última sincronización.
- Botón "Sincronizar ahora".

---

WhatsApp.

- Plantilla.
- Variables disponibles.
- Firma.

---

Google Calendar.

- Cuenta conectada.
- Calendario utilizado.
- Estado.

---

# Manejo de Errores

Si una integración falla.

La Orden deberá guardarse igualmente.

La integración registrará el error.

Nunca deberá bloquear el funcionamiento del sistema.

---

# Reintentos

Las sincronizaciones fallidas podrán ejecutarse nuevamente.

Automáticamente.

O manualmente desde Administración.

---

# Seguridad

Las credenciales nunca deberán almacenarse en texto plano.

Toda integración deberá utilizar.

Variables de entorno.

Tokens seguros.

Renovación automática cuando corresponda.

---

# Registro (Logs)

Toda integración deberá registrar.

Inicio.

Fin.

Tiempo.

Resultado.

Mensaje.

Usuario.

Esto facilitará auditorías y resolución de problemas.

---

# Escalabilidad

El módulo deberá permitir agregar nuevas integraciones sin modificar las existentes.

Cada integración deberá implementar una interfaz común.

Ejemplo.

```
connect()

disconnect()

sync()

status()

validate()
```

---

# Futuras Integraciones

La arquitectura queda preparada para incorporar.

- Google Drive

- Dropbox

- OneDrive

- Gmail

- Outlook

- Telegram

- Mercado Pago

- AFIP / ARCA

- Sistemas ERP

- APIs de Fabricantes

Sin modificar la arquitectura principal.

---

# Principios de Desarrollo

Cada integración deberá ser completamente independiente.

No deberá conocer la lógica interna de otras integraciones.

Toda comunicación deberá realizarse mediante servicios propios.

Las integraciones nunca accederán directamente a componentes de interfaz.

Todo acceso deberá realizarse mediante servicios y APIs del sistema.

---

# Roadmap

## Versión 2

- WhatsApp
- Google Sheets

## Versión 3

- Google Calendar
- Exportación Excel
- Exportación PDF

## Versión 4

- WhatsApp Business API
- Gmail
- Outlook

## Versión 5

- Mercado Pago
- AFIP / ARCA
- ERP
