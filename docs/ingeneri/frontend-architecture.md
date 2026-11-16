# Arquitectura del Sistema — TechService

## Visión general

TechService mantiene una aplicación web/PWA para Administración y Técnicos, con un backend independiente en Go. Next.js se ocupa de la interfaz; Go concentra la autenticación, autorización, reglas de negocio y acceso a los servicios de datos.

Supabase PostgreSQL es la fuente oficial de información. Cloudflare R2 almacena fotografías y otros archivos mediante transferencia directa navegador-R2 con URLs prefirmadas. El backend usa SQL directamente, sin ORM. El navegador no se conecta a PostgreSQL ni recibe credenciales privilegiadas de R2.

## Estado actual y arquitectura objetivo

El frontend actual todavía ejecuta lógica en Next.js y accede a datos mediante
Prisma desde páginas del servidor y Route Handlers. El backend Go independiente
ya está en implementación; primero se completan allí las capacidades y pruebas
acordadas, manteniendo el frontend actual. Luego se migra el frontend completo
a Go y finalmente se retiran los consumidores internos de Next.js.

Las reglas funcionales aprobadas en `../reglas-negocio.md` son la fuente del
comportamiento objetivo; el código actual no se copia automáticamente cuando
las contradice. El orden de etapas y los criterios para migrar el frontend y
retirar Next.js están definidos en
[`../ejecuciones/implementation-plan.md`](../ejecuciones/implementation-plan.md).

## Stack objetivo

### Interfaz

- Next.js App Router, React y TypeScript.
- Tailwind CSS y componentes de interfaz del proyecto.
- PWA para uso desde desktop, tablet y teléfonos.
- La interfaz puede renderizar vistas desde el servidor, pero toda lectura o escritura de negocio debe obtenerse desde la API Go.

### Backend

- Go en un repositorio independiente del frontend, documentado actualmente en `../.backend/` y destinado al repositorio `technical-service-backend`.
- API HTTP responsable de autenticación, autorización, validación y reglas de negocio.
- Acceso a PostgreSQL mediante SQL y un driver de Go, sin ORM.
- Resend como servicio de correo para recuperación de contraseña.

### Datos y archivos

- Supabase PostgreSQL: persistencia transaccional y fuente oficial de verdad.
- Cloudflare R2: objetos binarios, incluyendo fotografías y comprobantes (transferencia directa con URLs prefirmadas).
- SQL versionado y migraciones para la evolución del esquema.

## Diagrama lógico

```text
                         Navegador / PWA
                         ├── Interfaz Next.js
                         ├── IndexedDB (caché/cola offline)
                         └── HTTPS para operaciones de negocio
                                      │
                                      ▼
                                  API Go
                     ┌────────────────┼─────────────────┐
                     │                │                 │
                     ▼                ▼                 ▼
          Supabase PostgreSQL  Cloudflare R2            Resend
            SQL sin ORM       archivos (direct-to-R2) recuperación
```

El frontend puede obtener datos para renderizado del servidor o desde el navegador, pero ambos caminos consumen la API Go. Next.js no funciona como BFF ni como capa de negocio. No se deben implementar operaciones de negocio duplicadas en Server Actions o Route Handlers de Next.js.

## Límites de responsabilidad

### Next.js y la PWA

- Presentar pantallas y formularios según el rol.
- Solicitar operaciones de negocio a Go.
- Mostrar estados de conectividad y sincronización.
- Mantener en IndexedDB únicamente los datos necesarios para el uso offline y su cola temporal.
- No consultar PostgreSQL ni ejecutar Prisma.
- No decidir autorización ocultando controles: la API valida cada petición.

### API Go

- Administrar el login con contraseña y la sesión.
- Enviar correos de recuperación mediante Resend y validar los tokens de un solo uso.
- Validar rol, propiedad y transiciones permitidas para cada operación.
- Ejecutar reglas de negocio y acceso a datos mediante SQL parametrizado.
- Autorizar operaciones de archivos y coordinar URLs firmadas contra Cloudflare R2 (API S3-compatible).
- Producir errores explícitos y registrar eventos relevantes.
- Mantener idempotentes las operaciones que pueden reintentarse por sincronización offline.

### Supabase

- PostgreSQL almacena los datos oficiales.
- Storage almacena archivos en Cloudflare R2; la base de datos conserva las keys y metadatos necesarios.
- Las credenciales privilegiadas permanecen únicamente en el backend.
- Supabase Auth provee la identidad, pero Next.js no usa sus credenciales ni
  SDK directamente. Go valida la identidad, crea la sesión de aplicación y
  autoriza cada operación; RLS solo es una defensa adicional si se diseña y
  verifica cómo propagar la identidad al motor.

## Acceso a datos y migraciones

Las consultas SQL se mantienen en la capa de persistencia del backend, no en handlers HTTP ni en componentes de Next.js. Las consultas deben parametrizar valores, solicitar las columnas requeridas, paginar listados grandes y definir índices según los filtros reales.

Los cambios de esquema se entregan mediante migraciones SQL versionadas junto al backend. El contrato Prisma y sus artefactos generados pertenecen al estado actual y no son la fuente de esquema para el backend Go.

## Autenticación y autorización

Go es responsable del login con contraseña, la sesión y la autorización por rol y propiedad del recurso. Resend se usa para la entrega de recuperación de contraseña, no como proveedor de autenticación. La interfaz nunca debe confiar en un rol recibido del cliente ni en el hecho de que una ruta esté oculta.

Las cookies, CORS y protecciones CSRF deben configurarse de acuerdo con los dominios de frontend y API. Ver `../.frontend/backend.md` para las responsabilidades del backend y `../.backend/api.md` para el contrato HTTP.

## Storage de archivos

Los archivos se almacenan en Cloudflare R2; PostgreSQL conserva identificadores, keys y metadatos, no binarios grandes. Go verifica permisos y emite URLs firmadas de duración limitada para carga o descarga. Ver `./storage.md`.

## Integraciones

Las integraciones se mantienen desacopladas de los módulos del negocio y se coordinan desde el backend:

- Google Sheets puede exportar la agenda como vista externa.
- Administración puede importar una lista de precios desde Sheets; el catálogo solo se publica al completarse correctamente la importación.
- WhatsApp genera un mensaje para que el usuario lo copie o abra; el sistema no envía mensajes automáticamente.
- Resend entrega correos de recuperación de contraseña.

Una falla de integración no debe borrar información ni convertir el servicio externo en fuente oficial de datos. Los flujos de Sheets se especifican en `../integraciones/googlesheets.md`.

## PWA y operación offline

El Service Worker gestiona recursos estáticos y capacidades PWA; no implementa reglas de negocio. IndexedDB conserva los datos autorizados que el técnico necesita y las operaciones pendientes.

Al recuperar conexión, la cola envía operaciones a la API Go. El servidor valida estado, rol y propiedad; una operación local solo aparece confirmada tras una respuesta exitosa de Go. Cada reintento debe ser idempotente y los conflictos deben informarse, no resolverse silenciosamente. Ver `./PWA.md`.

## Módulos funcionales

- Dashboard
- Clientes
- Agenda y servicios
- Técnicos
- Cobros y repuestos
- Presupuestos
- Rendiciones
- Inventario y listas de precios
- Integraciones

Las reglas de estos módulos se mantienen en `../reglas-negocio.md` y los documentos específicos de `../modulos/`. Esta arquitectura describe límites técnicos y no reemplaza las reglas funcionales aprobadas.

## Principios de rendimiento y evolución

- Paginar servicios, clientes, cobros, presupuestos, rendiciones, inventario e historial.
- Evitar consultas N+1, selecciones innecesarias y descargas de imágenes originales en listados.
- Optimizar imágenes y usar carga diferida cuando corresponda.
- No introducir microservicios solo por el crecimiento del volumen de datos.
- Incorporar nuevas integraciones y módulos sin trasladar reglas de negocio al frontend.

## Documentación y precedencia

La carpeta `.docs` contiene la especificación del sistema. Las reglas funcionales aprobadas describen el comportamiento esperado; la arquitectura define responsabilidades técnicas. Cuando una implementación existente contradiga una regla aprobada, no se debe trasladar automáticamente la contradicción al backend Go.
