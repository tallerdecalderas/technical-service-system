# Arquitectura del Sistema — TechService

# Visión General

TechService es un sistema de gestión integral para empresas de servicio técnico.

Está desarrollado como un **Monolito Full Stack** utilizando Next.js App Router.

El sistema centraliza toda la operación de la empresa desde una única aplicación.

Incluye:

- Gestión de clientes
- Agenda
- Órdenes de trabajo
- Técnicos
- Cobros
- Presupuestos
- Rendiciones
- Integraciones externas

---

# Objetivos de la Arquitectura

La arquitectura fue diseñada para cumplir los siguientes principios.

- Escalable
- Modular
- Fácil de mantener
- Integrable con servicios externos
- Preparada para crecimiento

El sistema debe poder incorporar nuevos módulos sin modificar la estructura existente.

---

# Stack Tecnológico

## Frontend

- Next.js App Router
- React
- TypeScript
- TailwindCSS
- shadcn/ui
- Radix UI

---

## Backend

- Next.js Route Handlers
- Server Components
- Prisma ORM

---

## Base de Datos

- PostgreSQL
- Supabase

---

## Autenticación

- Cookies HttpOnly
- bcrypt

---

## ORM

- Prisma

---

# Arquitectura General

```
                    Navegador

                         │

                         ▼

                Next.js Application

        ┌────────────────────────────────┐

        │                                │

        │        Server Components        │

        │                                │

        └────────────────────────────────┘

                    │

        ┌───────────┴────────────┐

        ▼                        ▼

     Route Handlers          Server Actions
      (API REST)              (futuro)

        │

        ▼

        Prisma ORM

        │

        ▼

      PostgreSQL
```

---

# Módulos del Sistema

El sistema está dividido por módulos independientes.

```
Dashboard

Clientes

Órdenes de Trabajo

Agenda

Técnicos

Cobros

Rendiciones

Presupuestos

Integraciones

Configuración
```

Cada módulo posee responsabilidades específicas.

---

# Flujo General

```
Administrador

↓

Crear Servicio

↓

Asignar Técnico

↓

Agenda

↓

WhatsApp

↓

Visita Técnica

↓

Cobro

↓

Presupuesto

↓

Rendición

↓

Finalización
```

---

# Roles

Actualmente existen dos perfiles.

## Administrador

Puede administrar completamente el sistema.

Funciones.

- Clientes
- Técnicos
- Agenda
- Cobros
- Presupuestos
- Rendiciones
- Configuración

---

## Técnico

Solo puede acceder a información propia.

Puede.

- visualizar agenda
- cambiar estados
- registrar cobros
- cargar repuestos
- enviar presupuestos

Nunca administra información de otros técnicos.

---

# Organización del Proyecto

```
app/

components/

lib/

prisma/

docs/

public/

types/
```

---

# Capas

## Presentación

Responsable de la interfaz.

Incluye.

- páginas
- layouts
- componentes
- formularios

---

## Negocio

Implementa las reglas definidas en:

```
docs/reglas-negocio.md
```

Toda funcionalidad nueva debe respetar dicho documento.

---

## Persistencia

Responsable del acceso a la base de datos.

Utiliza Prisma.

Toda lectura o escritura debe pasar por esta capa.

---

## Integraciones

Responsable de comunicarse con servicios externos.

Actualmente.

- Google Sheets
- WhatsApp

Futuras.

- Google Calendar
- Outlook
- APIs externas

---

# Integraciones

Las integraciones nunca modifican información directamente.

Siempre consumen información del sistema.

```
Sistema

↓

Integración

↓

Servicio Externo
```

Nunca al revés.

---

# Google Sheets

Google Sheets representa únicamente una vista de la agenda.

Cada modificación realizada dentro del sistema puede sincronizar automáticamente la hoja.

La sincronización ocurre cuando.

- se crea un servicio
- cambia fecha
- cambia hora
- cambia técnico
- cambia estado
- se cancela

Google Sheets nunca modifica datos.

---

# WhatsApp

WhatsApp funciona como herramienta de comunicación.

El sistema genera automáticamente un mensaje.

El usuario decide enviarlo.

No existen envíos automáticos.

---

# Preparado para Google Calendar

La arquitectura contempla una futura integración.

Cada servicio podrá generar un evento.

Cuando el servicio cambie.

- fecha
- hora
- técnico

El evento también deberá actualizarse.

---

# Comunicación entre Módulos

Todos los módulos utilizan la base de datos como fuente oficial.

```
Clientes

↓

Servicios

↓

Cobros

↓

Rendiciones

↓

Reportes
```

No existen dependencias directas entre módulos.

---

# Eventos del Sistema

Todo cambio importante genera un evento interno.

Ejemplos.

Servicio creado

Servicio actualizado

Servicio cancelado

Cobro registrado

Presupuesto enviado

Rendición generada

Estos eventos podrán utilizarse para futuras automatizaciones.

---

# Escalabilidad

La arquitectura queda preparada para incorporar.

- Notificaciones Push
- Google Calendar
- Firma Digital
- Historial de Equipos
- Inteligencia Artificial
- Portal del Cliente
- Aplicación Móvil
- Inventario
- Stock
- Garantías

Sin modificar la estructura principal.

---

# Principios de Desarrollo

Todo desarrollo nuevo deberá cumplir.

- Código reutilizable.

- Componentes desacoplados.

- Separación entre UI y lógica.

- Validaciones centralizadas.

- APIs consistentes.

- Modelos normalizados.

- Tipado estricto.

- Documentación obligatoria.

---

# Documentación

La carpeta docs representa la especificación oficial del proyecto.

Toda modificación funcional debe comenzar actualizando la documentación.

La implementación del código deberá respetar dicha documentación.

La documentación tiene prioridad sobre la implementación existente cuando ambas entren en conflicto, siempre que el cambio haya sido aprobado.
