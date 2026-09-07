# Infraestructura del Sistema — TechService

# Visión General

TechService utiliza una infraestructura separada entre aplicación y base de datos.

La aplicación Next.js se ejecuta en Railway.

La base de datos PostgreSQL se aloja en Supabase.

Esta separación permite cambiar el proveedor de infraestructura de aplicación sin modificar la fuente de verdad de los datos.

Arquitectura de producción:

```text
                    INTERNET
                       │
                       ▼
                 Usuarios / PWA
                       │
                      HTTPS
                       │
                       ▼
                  ┌──────────┐
                  │ Railway  │
                  │ Next.js  │
                  └────┬─────┘
                       │
                     Prisma
                       │
                       ▼
                ┌─────────────┐
                │   Supabase  │
                │ PostgreSQL  │
                └─────────────┘
```

---

# Componentes de Infraestructura

La infraestructura principal está formada por:

```text
Railway
Supabase
Dominio
HTTPS
Variables de entorno
Sistema de despliegue
```

---

# Aplicación

## Railway

Railway será utilizado como infraestructura de ejecución de la aplicación Next.js.

Railway es responsable de ejecutar el monolito completo.

El despliegue incluirá:

- Next.js
- Server Components
- Server Actions
- Route Handlers
- Middleware
- Capa de negocio
- Prisma
- Autenticación
- Integraciones del servidor

La aplicación se expone mediante HTTPS.

---

# Monolito

TechService continúa siendo un único monolito Full Stack.

```text
Railway
   │
   ▼
Next.js
   ├── Frontend
   ├── Server Components
   ├── Client Components
   ├── Server Actions
   ├── Route Handlers
   ├── Middleware
   ├── Negocio
   ├── Prisma
   └── Integraciones
```

No se deberán crear múltiples servicios independientes sin una necesidad técnica o arquitectónica explícita.

---

# Base de Datos

## Supabase

Supabase será utilizado como proveedor de PostgreSQL.

Supabase constituye la infraestructura principal de datos del sistema.

```text
Next.js
   ↓
Prisma
   ↓
Supabase PostgreSQL
```

La base de datos de producción no se alojará dentro de Railway.

Railway y Supabase son componentes independientes.

---

# Fuente de Verdad

La base de datos PostgreSQL de Supabase constituye la única fuente oficial de verdad.

```text
Supabase PostgreSQL
        ↑
      Prisma
        ↑
      Next.js
        ↑
       PWA
```

Los datos almacenados en la PWA mediante IndexedDB nunca sustituyen la base de datos principal.

---

# Región

La infraestructura deberá ubicarse preferentemente en regiones geográficamente cercanas a los usuarios y entre sí.

Para usuarios ubicados principalmente en Argentina, se deberá evaluar una región de Sudamérica, preferentemente São Paulo, cuando se encuentre disponible y sea compatible con los servicios utilizados.

La región de la aplicación y la región de la base de datos deberán mantenerse próximas para reducir la latencia entre Next.js y PostgreSQL.

---

# Comunicación

La comunicación de producción deberá utilizar HTTPS.

```text
Usuario
   ↓
HTTPS
   ↓
Railway
   ↓
Next.js
   ↓
Prisma
   ↓
Supabase
   ├── PostgreSQL
   └── Storage
 -
```

Las conexiones directas desde el navegador a credenciales privadas de PostgreSQL están prohibidas.

---

# Variables de Entorno

Las configuraciones sensibles deberán almacenarse como variables de entorno.

Las variables necesarias para producción serán configuradas en Railway.

Ejemplos conceptuales:

```text
DATABASE_URL
DIRECT_URL
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
AUTH_SECRET
```

Los nombres definitivos dependerán de la implementación.

Las variables privadas nunca deberán:

- almacenarse en Git
- incluirse en código cliente
- exponerse mediante componentes del navegador
- incluirse en archivos públicos

---

# Seguridad de Secretos

Las credenciales administrativas y secretos privados solo podrán utilizarse en código de servidor.

Nunca deberán enviarse al navegador:

```text
DATABASE_URL
DIRECT_URL
SERVICE_ROLE_KEY
AUTH_SECRET
credenciales privadas
```

El código cliente solamente podrá recibir la información estrictamente necesaria.

---

# Dominio

La aplicación deberá utilizar un dominio propio en producción.

Ejemplo conceptual:

```text
https://app.techservice.com
```

El dominio deberá apuntar al servicio desplegado en Railway.

---

# HTTPS

La aplicación de producción deberá utilizar HTTPS.

HTTPS es obligatorio para:

- seguridad de autenticación
- cookies seguras
- PWA
- Service Worker
- Push Notifications

La configuración de certificados deberá ser gestionada por la infraestructura correspondiente.

---

# Despliegue

El código fuente deberá mantenerse en un repositorio Git.

Flujo recomendado:

```text
Git
 ↓
Repositorio
 ↓
Railway
 ↓
Build
 ↓
Deploy
 ↓
Next.js
```

Los despliegues deberán poder reproducirse a partir del código y configuración del repositorio.

---

# Producción

El entorno de producción deberá mantenerse separado del entorno de desarrollo.

Conceptualmente:

```text
Desarrollo
    ↓
Git
    ↓
Deploy
    ↓
Producción
```

Las credenciales de desarrollo y producción no deberán mezclarse.

---

# Base de Datos de Producción

La base de datos de producción deberá mantenerse independiente del entorno local de desarrollo.

No se deberá ejecutar accidentalmente una migración destructiva contra producción.

Las modificaciones del esquema deberán gestionarse mediante migraciones controladas.

---

# Prisma en Producción

Prisma se ejecutará dentro del servicio Next.js en Railway.

```text
Railway
  ↓
Next.js
  ↓
Prisma
  ↓
Supabase
   ├── PostgreSQL
   └── Storage
```

Prisma no se ejecutará en el navegador.

---

# Conectividad de Base de Datos

La aplicación deberá utilizar las conexiones apropiadas para el entorno de producción.

La configuración de conexión deberá contemplar correctamente:

- pooling cuando corresponda
- conexiones concurrentes
- timeouts
- reconexión
- migraciones
- límites del proveedor

No se deberán crear conexiones innecesarias por cada renderizado o solicitud.

---

# Disponibilidad

La disponibilidad del sistema depende de:

```text
Internet
   ↓
Railway
   ↓
Next.js
   ↓
Supabase
   ├── PostgreSQL
   └── Storage
```

La indisponibilidad de Railway afecta la ejecución de la aplicación.

La indisponibilidad de Supabase afecta el acceso a la fuente principal de datos.

La PWA puede mantener capacidades offline limitadas, pero no sustituye la disponibilidad del servidor.

---

# PWA y Offline

La PWA puede continuar funcionando con determinados datos cuando se pierde temporalmente la conexión.

```text
ONLINE

PWA
 ↓
Railway
 ↓
Supabase
   ├── PostgreSQL
   └── Storage
```

Cuando no existe conexión:

```text
PWA
 ↓
Service Worker
 ↓
IndexedDB
 ↓
Cola local
```

Cuando la conexión vuelve:

```text
IndexedDB
 ↓
Sincronización
 ↓
Railway
 ↓
Supabase
   ├── PostgreSQL
   └── Storage
```

El almacenamiento local no constituye infraestructura de persistencia definitiva.

---

# Integraciones Externas

Las integraciones externas que requieren ejecución de servidor deberán ejecutarse desde Next.js en Railway.

Ejemplo:

```text
Servicio creado
      ↓
Next.js
      ↓
Lógica de negocio
      ↓
Integración
      ↓
Google Sheets
```

Las integraciones no deberán ejecutarse desde el navegador cuando requieran secretos o credenciales privadas.

---

# Notificaciones Push

Las capacidades de Push utilizarán el navegador y Service Worker en el cliente.

La infraestructura de servidor será responsable de gestionar la lógica necesaria para generar y enviar las notificaciones.

Arquitectura conceptual:

```text
Evento del sistema
       ↓
Next.js
       ↓
Servicio Push
       ↓
Dispositivo del técnico
       ↓
Service Worker
       ↓
Notificación
```

---

# Backups

La base de datos deberá contar con una estrategia de backup adecuada para producción.

Los backups deberán mantenerse independientes de la aplicación.

La restauración de una base de datos deberá considerarse un procedimiento operacional documentado.

---

# Monitoreo

La infraestructura deberá poder monitorear como mínimo:

- disponibilidad de la aplicación
- errores de servidor
- errores de base de datos
- fallos de sincronización
- errores de integraciones
- consumo de recursos
- tiempos de respuesta

Los logs del servidor no deberán contener información sensible innecesaria.

---

# Rendimiento

El rendimiento de TechService dependerá principalmente de:

- latencia entre Railway y Supabase
- consultas Prisma
- índices PostgreSQL
- cantidad de consultas
- consultas N+1
- tamaño de respuestas
- caché
- renderizado de Next.js
- optimización del cliente

El número inicial de usuarios no requiere una arquitectura distribuida.

La infraestructura deberá poder escalar verticalmente antes de considerar una separación del monolito.

---

# Escalabilidad

La estrategia inicial será mantener un único servicio Next.js.

```text
Railway
   ↓
Next.js
   ↓
Supabase
   ├── PostgreSQL
   └── Storage
```

Si el crecimiento lo requiere, se podrá incrementar posteriormente:

- CPU
- memoria
- concurrencia
- capacidad de base de datos
- recursos de almacenamiento
- capacidad de red

La separación entre aplicación y base de datos permite migrar Railway por otro proveedor sin cambiar la arquitectura de datos.

---

# Costos de Infraestructura

Los costos de infraestructura estarán compuestos principalmente por:

```text
Hosting de Next.js
+
Base de datos Supabase
+
Dominio
+
Servicios externos utilizados
```

Railway será responsable del costo de ejecución de la aplicación.

Supabase será responsable del costo de PostgreSQL y servicios contratados.

Los límites, cuotas y costos deberán verificarse directamente en los planes contratados antes de pasar a producción.

No se deberán asumir costos fijos adicionales sin documentarlos.

---

# Principio de Independencia

Railway no debe convertirse en una dependencia arquitectónica de TechService.

La aplicación deberá poder migrarse a:

```text
VPS
Cloud Provider
Otro PaaS
Infraestructura propia
```

sin modificar la fuente de verdad de los datos.

La arquitectura debe permanecer:

```text
Aplicación
   ↓
Prisma
   ↓
PostgreSQL
```

independientemente del proveedor de infraestructura.

---

# Regla Arquitectónica de Infraestructura

La infraestructura actual de producción es:

```text
┌─────────────────────────────┐
│           Railway           │
│                             │
│          Next.js            │
│          Monolito           │
│                             │
│   Server + Client + Prisma  │
└──────────────┬──────────────┘
               │
               │ HTTPS / PostgreSQL
               │
┌──────────────▼──────────────┐
│          Supabase           │
│                             │
│        PostgreSQL           │
│            RLS              |
|          Storage            │
└─────────────────────────────┘
```

Railway ejecuta la aplicación.

Supabase almacena los datos.

La PWA se ejecuta en los dispositivos de los usuarios.

IndexedDB proporciona persistencia temporal para operaciones offline.

---

# Regla Final

La aplicación y la base de datos son componentes independientes.

```text
Railway
=
Infraestructura de aplicación

Supabase
=
Infraestructura de datos
```

Cambiar Railway no debe implicar migrar la base de datos.

Cambiar la infraestructura de aplicación no debe modificar las reglas de negocio ni la fuente oficial de verdad.

Supabase PostgreSQL continúa siendo la única fuente definitiva de información de TechService.
