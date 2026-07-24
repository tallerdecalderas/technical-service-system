# Decisiones de Arquitectura

# Objetivo

Este documento registra todas las decisiones importantes tomadas durante el desarrollo de TechService.

Su finalidad es evitar volver a discutir decisiones ya aprobadas y mantener un criterio consistente durante la evolución del sistema.

Toda decisión nueva deberá registrarse en este documento.

---

# DEC-001

## Nombre

Next.js como Framework Principal

## Estado

Aprobada

## Fecha

2026

## Decisión

Todo el sistema será desarrollado utilizando Next.js App Router.

No se dividirá en Backend y Frontend separados.

## Motivo

- Menor complejidad.
- Un único proyecto.
- Server Components.
- Excelente integración con Prisma.
- Fácil despliegue.

---

# DEC-002

## Nombre

PostgreSQL como Base de Datos

## Estado

Aprobada

## Decisión

Toda la información será almacenada en PostgreSQL utilizando Prisma ORM.

## Motivo

- Escalabilidad.
- Integridad referencial.
- Excelente soporte.
- Compatible con Supabase.

---

# DEC-003

## Nombre

Prisma ORM

## Estado

Aprobada

## Decisión

Toda operación sobre la base de datos deberá realizarse mediante Prisma.

No se permitirá SQL directo salvo casos excepcionales debidamente documentados.

---

# DEC-004

## Nombre

La Orden de Trabajo es la entidad principal

## Estado

Aprobada

## Decisión

Toda la lógica del sistema gira alrededor de una Orden de Trabajo.

Clientes, Cobros, Presupuestos y Rendiciones dependen de ella.

---

# DEC-005

## Nombre

Google Sheets únicamente visualiza información

## Estado

Aprobada

## Decisión

Google Sheets nunca modifica información.

Siempre refleja el estado actual del sistema.

## Motivo

TechService es la única fuente oficial de datos.

---

# DEC-006

## Nombre

WhatsApp no envía mensajes automáticamente

## Estado

Aprobada

## Decisión

El sistema genera el mensaje.

El usuario decide cuándo enviarlo.

## Motivo

Evitar automatizaciones no deseadas.

Mantener el control por parte del Administrador.

---

# DEC-007

## Nombre

Los presupuestos nacen desde una Orden

## Estado

Aprobada

## Decisión

No existirán presupuestos independientes.

Todo presupuesto pertenece a una Orden de Trabajo.

---

# DEC-008

## Nombre

Estados del Presupuesto

## Estado

Aprobada

## Decisión

Los presupuestos tendrán únicamente dos estados.

- Pendiente
- Finalizado

No existirán estados de aprobación dentro del sistema.

---

# DEC-009

## Nombre

Rendiciones semanales

## Estado

Aprobada

## Decisión

Las rendiciones se calcularán automáticamente por semana.

Período.

Lunes a Domingo.

---

# DEC-010

## Nombre

Comisión sobre monto neto

## Estado

Aprobada

## Decisión

La comisión siempre se calcula.

Monto Cobrado

-

Costo de Repuestos

=

Monto Neto

50% Empresa

50% Técnico

---

# DEC-011

## Nombre

Los repuestos pertenecen a proveedores

## Estado

Aprobada

## Decisión

Cada repuesto registra el proveedor de origen.

No existe control de stock.

---

# DEC-012

## Nombre

El Técnico no administra información

## Estado

Aprobada

## Decisión

El Técnico únicamente puede operar sobre sus propias Órdenes.

No puede modificar información administrativa.

---

# DEC-013

## Nombre

Timeline por Orden

## Estado

Planificada

## Decisión

Cada Orden tendrá un Timeline completo.

Ejemplo.

- Orden creada
- Técnico asignado
- WhatsApp generado
- Cobro
- Presupuesto
- Finalización

---

# DEC-014

## Nombre

Agenda como pantalla principal

## Estado

Planificada

## Decisión

La Agenda será el centro operativo del Administrador.

Las acciones se realizarán desde Drawers y Modales.

Se evitarán formularios independientes cuando sea posible.

---

# DEC-015

## Nombre

Google Sheets en tiempo real

## Estado

Planificada

## Decisión

Toda modificación de una Orden sincronizará automáticamente la hoja de cálculo.

La sincronización deberá percibirse como inmediata.

---

# DEC-016

## Nombre

Integraciones desacopladas

## Estado

Aprobada

## Decisión

Las integraciones nunca contendrán lógica de negocio.

Solo consumirán información del sistema.

---

# DEC-017

## Nombre

Automatizaciones separadas de Integraciones

## Estado

Planificada

## Decisión

Las reglas automáticas estarán en un módulo independiente.

Ejemplo.

Evento.

↓

Automatización.

↓

Integración.

---

# DEC-018

## Nombre

Documentación antes que código

## Estado

Aprobada

## Decisión

Toda funcionalidad nueva deberá documentarse antes de comenzar su implementación.

La documentación será la especificación oficial del sistema.

---

# DEC-019

## Nombre

Arquitectura Modular

## Estado

Aprobada

## Decisión

Todo desarrollo nuevo deberá pertenecer a un módulo.

Ejemplos.

Agenda.

Órdenes.

Cobros.

Presupuestos.

Rendiciones.

Integraciones.

No se desarrollarán funcionalidades aisladas.

---

# DEC-020

## Nombre

TechService como fuente de verdad

## Estado

Aprobada

## Decisión

Toda modificación de datos se realiza dentro de TechService.

Ningún sistema externo podrá modificar directamente la información del negocio.

---

# Cómo registrar una nueva decisión

Toda decisión nueva deberá agregarse utilizando el siguiente formato.

```
# DEC-XXX

Nombre

Estado

Fecha

Contexto

Problema

Opciones Analizadas

Decisión

Consecuencias

Responsable
```

---

# Principios

Una decisión aprobada no debe modificarse sin analizar el impacto sobre los módulos existentes.

Toda modificación importante deberá registrarse como una nueva decisión, manteniendo el historial de las anteriores.

Este documento es la referencia oficial para comprender por qué el sistema fue diseñado de la forma en que está implementado.
