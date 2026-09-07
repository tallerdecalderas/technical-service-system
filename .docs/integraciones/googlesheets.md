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

      ▼

Google Sheets

      ▼

Visualización
```

Cada integración

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
- Cambia el Estado.
- monto del servicio
- Se actualiza la información de una Orden.

---

## Información Sincronizada

Cada fila representará una Orden.

Columnas recomendadas.

Número OT

Fecha

Cliente

Dirección

Localidad

Teléfono

Categoria de Servicio

Observaciones

Estado

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

# Configuración

Cada integración dispondrá de una pantalla propia.

Ejemplo.

Google Sheets.

- Cuenta conectada.
- Estado.
- Última sincronización.
- Botón "Sincronizar ahora".

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

# Principios de Desarrollo

Cada integración deberá ser completamente independiente.

No deberá conocer la lógica interna de otras integraciones.

Toda comunicación deberá realizarse mediante servicios propios.

Las integraciones nunca accederán directamente a componentes de interfaz.

Todo acceso deberá realizarse mediante servicios y APIs del sistema.

---
