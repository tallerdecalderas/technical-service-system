# API — TechService

# Objetivo

La API expone toda la funcionalidad del sistema mediante endpoints REST.

Su función es permitir la comunicación entre el Frontend, la Base de Datos y futuras integraciones externas.

Toda operación que modifique información deberá pasar por la API.

---

# Arquitectura

La API utiliza Route Handlers de Next.js.

```
Frontend

↓

API (Route Handlers)

↓

Prisma

↓

PostgreSQL
```

Cada módulo posee su propio conjunto de endpoints.

---

# Principios

Toda la API debe cumplir.

- REST
- JSON
- TypeScript
- Validaciones
- Manejo de errores
- Autenticación
- Permisos por rol

---

# Estructura

```
app/api/

auth/

clients/

services/

payments/

estimates/

suppliers/

settlements/

integrations/

users/
```

Cada carpeta representa un módulo del sistema.

---

# Autenticación

## Login

POST

```
/api/auth/login
```

Responsabilidad.

- validar credenciales
- crear sesión
- generar cookie

---

## Logout

POST

```
/api/auth/logout
```

Responsabilidad.

Cerrar sesión.

---

## Usuario Actual

GET

```
/api/auth/me
```

Devuelve la sesión activa.

---

# Clientes

## Obtener Clientes

GET

```
/api/clients
```

---

## Obtener Cliente

GET

```
/api/clients/:id
```

---

## Crear Cliente

POST

```
/api/clients
```

---

## Actualizar Cliente

PUT

```
/api/clients/:id
```

---

## Eliminar Cliente

DELETE

```
/api/clients/:id
```

Se recomienda Soft Delete.

---

# Órdenes de Trabajo

## Obtener Órdenes

GET

```
/api/services
```

Permite filtros.

- estado
- técnico
- cliente
- fecha

---

## Obtener Orden

GET

```
/api/services/:id
```

---

## Crear Orden

POST

```
/api/services
```

Acciones automáticas.

- guardar Orden
- actualizar agenda
- sincronizar Google Sheets (si está habilitado)

---

## Actualizar Orden

PUT

```
/api/services/:id
```

Si cambian.

- fecha
- hora
- técnico
- estado

deberán ejecutarse las integraciones correspondientes.

---

## Cambiar Estado

PATCH

```
/api/services/:id/status
```

---

## Finalizar Orden

POST

```
/api/services/:id/finish
```

Responsabilidades.

- cerrar Orden
- registrar historial

---

# Cobros

## Obtener Cobros

GET

```
/api/payments
```

Filtros.

- técnico
- fecha
- semana

---

## Registrar Cobro

POST

```
/api/payments
```

---

## Obtener Cobro

GET

```
/api/payments/:id
```

---

## Actualizar Cobro

PUT

```
/api/payments/:id
```

---

# Repuestos

## Agregar Repuesto

POST

```
/api/payments/:id/items
```

---

## Modificar Repuesto

PUT

```
/api/payments/items/:id
```

---

## Eliminar Repuesto

DELETE

```
/api/payments/items/:id
```

---

# Presupuestos

## Obtener Pendientes

GET

```
/api/estimates?status=pending
```

---

## Obtener Finalizados

GET

```
/api/estimates?status=completed
```

---

## Crear Presupuesto

POST

```
/api/estimates
```

Acciones.

- guardar presupuesto
- registrar historial

---

## Finalizar Presupuesto

PATCH

```
/api/estimates/:id/finalize
```

Solo Administración.

---

# Proveedores

## Obtener Proveedores

GET

```
/api/suppliers
```

---

## Crear Proveedor

POST

```
/api/suppliers
```

---

## Modificar Proveedor

PUT

```
/api/suppliers/:id
```

---

## Desactivar Proveedor

PATCH

```
/api/suppliers/:id
```

No se recomienda eliminar.

---

# Rendiciones

## Obtener Rendiciones

GET

```
/api/settlements
```

Permite filtros.

- semana
- técnico
- estado

---

## Obtener Rendición

GET

```
/api/settlements/:id
```

---

## Generar Rendición

POST

```
/api/settlements/generate
```

Calcula automáticamente.

- cobros
- repuestos
- neto
- comisión

---

## Liquidar Rendición

PATCH

```
/api/settlements/:id/liquidate
```

Solo Administración.

---

# Agenda

## Obtener Agenda

GET

```
/api/calendar
```

Permite.

- día
- semana
- mes
- técnico

---

# Integraciones

## Google Sheets

POST

```
/api/integrations/google-sheets/sync
```

Sincroniza la agenda.

---

## WhatsApp

POST

```
/api/integrations/whatsapp/message
```

Genera el mensaje utilizando la Orden.

No envía mensajes.

Solo devuelve el texto generado.

---

## Google Calendar (Futuro)

POST

```
/api/integrations/google-calendar/sync
```

---

# Historial

## Obtener Historial

GET

```
/api/services/:id/history
```

---

# Dashboard

## Estadísticas

GET

```
/api/dashboard
```

Devuelve.

- servicios
- cobros
- presupuestos
- rendiciones
- técnicos

---

# Códigos HTTP

200

Solicitud correcta.

201

Recurso creado.

204

Sin contenido.

400

Solicitud inválida.

401

No autenticado.

403

Sin permisos.

404

No encontrado.

409

Conflicto.

422

Validación.

500

Error interno.

---

# Respuestas

Todas las respuestas deberán utilizar un formato consistente.

Éxito.

```json
{
  "success": true,
  "data": {}
}
```

Error.

```json
{
  "success": false,
  "message": "Descripción del error"
}
```

---

# Validaciones

Toda entrada debe validarse antes de acceder a la base de datos.

Se recomienda utilizar.

- Zod

Las validaciones nunca deberán depender exclusivamente del Frontend.

---

# Permisos

Toda operación deberá validar.

- Usuario autenticado
- Rol
- Propiedad del recurso

Ejemplo.

Un Técnico no puede consultar una Orden asignada a otro Técnico.

---

# Versionado

Actualmente.

```
v1
```

La arquitectura queda preparada para futuras versiones.

```
/api/v2/
```

Sin romper compatibilidad.

---

# Escalabilidad

La API queda preparada para incorporar.

- Aplicación móvil

- Portal del Cliente

- Integraciones ERP

- Google Calendar

- WhatsApp Business API

- Mercado Pago

- Facturación Electrónica

- Webhooks

Sin modificar la estructura principal.
