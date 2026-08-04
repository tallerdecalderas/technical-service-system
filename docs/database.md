# Base de Datos — TechService

# Objetivo

La base de datos almacena toda la información operativa del sistema.

Toda integración externa (Google Sheets, WhatsApp, etc.) obtiene la información desde la base de datos.

Nunca al revés.

---

# Motor

PostgreSQL

Proveedor:

- Supabase

ORM:

- Prisma ORM

---

# Modelos Principales

El sistema se encuentra organizado sobre los siguientes modelos.

```
User

Client

Service

Payment

PaymentPart

Supplier

Estimate

IntegrationLog

ServiceCategory (futuro)
```

---

# Relaciones Generales

```
Cliente
    │
    └──────────────┐
                   │
                   ▼
              Service
                   │
        ┌──────────┼───────────┐
        │          │           │
        ▼          ▼           ▼
     Payment    Estimate   Historial

        │
        ▼

PaymentPart

        │
        ▼

Supplier
```

---

# User

Representa cualquier usuario del sistema.

Tipos

- ADMIN
- TECHNICIAN

Campos

- id
- name
- email
- passwordHash
- role
- phone
- avatar
- isActive
- createdAt
- updatedAt

Relaciones

- Servicios asignados
- Servicios creados
- Servicios cerrados
- Pagos
- Presupuestos

---

# Client

Representa un cliente.

Campos

- id
- nombre
- email
- teléfono
- dirección
- ciudad
- observaciones

Relaciones

- múltiples servicios

---

# Service

Representa una visita técnica.

Es el modelo principal del sistema.

Campos

- id
- título
- descripción
- estado
- fecha programada
- hora
- dirección
- observaciones
- monto esperado
- fecha cierre
- fecha completado
- foto final
- técnico
- cliente
- usuario creador

Relaciones

- 1 Cliente
- 1 Técnico
- 1 Pago (opcional)
- 1 Presupuesto (opcional)

---

# Estados del Servicio

- Pendiente
- En Proceso
- Completado
- Cancelado
- Cerrado

---

# Payment

Representa un cobro realizado.

Cada servicio puede tener un único cobro.

Campos

- id
- serviceId
- technicianId
- método
- monto cobrado
- observaciones
- foto comprobante
- fecha

Relaciones

- muchos PaymentPart

---

# PaymentPart

Nuevo modelo.

Representa cada repuesto utilizado.

Campos

- id
- paymentId
- supplierId
- descripción
- cantidad
- precioUnitario
- subtotal

Ejemplo

```
Servicio

↓

Cobro

↓

Bomba

↓

Sensor

↓

Válvula
```

Cada uno es un PaymentPart.

---

# Supplier

Nuevo modelo.

Representa proveedores.

Campos

- id
- nombre
- teléfono
- email
- observaciones
- activo

Ejemplos

- Peisa
- Rowa
- Baxi
- ElectroSur
- Otro

No administra stock.

Solo información económica.

---

# Estimate

Representa un presupuesto generado por el técnico.

Cada servicio puede generar un presupuesto.

Estados

- Pendiente
- Finalizado

Campos

- id
- serviceId
- technicianId
- monto
- descripción
- observaciones
- fecha envío
- fecha finalización
- estado

---

# Historial

Todo servicio posee historial.

Cada movimiento importante debe quedar registrado.

Ejemplos

Servicio creado

↓

Asignación técnico

↓

Cambio de estado

↓

Cobro

↓

Presupuesto

↓

Finalización

---

# IntegrationLog

Nuevo modelo.

Permite registrar sincronizaciones.

Campos

- id
- tipo

Google Sheets

WhatsApp

Google Calendar

- entidad
- entidadId
- resultado
- mensaje
- fecha

Su objetivo es auditoría.

---

# ServiceCategory

Modelo preparado para futuras versiones.

Actualmente no utilizado.

Permitirá clasificar servicios.

Ejemplos

- Instalación

- Reparación

- Mantenimiento

- Garantía

- Presupuesto

---

# Índices Recomendados

Service

- technicianId
- clientId
- status
- scheduledDate

Payment

- technicianId
- serviceId

Estimate

- status
- technicianId

PaymentPart

- paymentId
- supplierId

Supplier

- nombre

---

# Reglas de Integridad

Un Cliente puede tener muchos Servicios.

Un Servicio pertenece a un único Cliente.

Un Técnico puede tener muchos Servicios.

Un Servicio posee un único Técnico.

Un Servicio puede tener un Pago.

Un Servicio puede tener un Presupuesto.

Un Pago puede tener múltiples Repuestos.

Cada Repuesto pertenece a un único Proveedor.

Un Proveedor puede vender múltiples Repuestos.

---

# Eliminaciones

Nunca eliminar información histórica.

Se recomienda utilizar Soft Delete para:

Usuarios

Clientes

Proveedores

Servicios

Los pagos, presupuestos y repuestos nunca deberán eliminarse una vez registrados.

---

# Escalabilidad

La estructura queda preparada para futuras funcionalidades.

- Google Calendar

- Historial de Equipos

- Garantías

- Mantenimiento Preventivo

- Firma Digital

- Fotografías múltiples

- Inteligencia Artificial

- Estadísticas

Sin necesidad de modificar la estructura principal del sistema.
