# Plan operativo de implementación del frontend

Este documento contiene el trabajo operativo de las fases 8–9. Se empieza a
**ejecutar solo después de cerrar las fases backend 1–7** descritas en el
[plan operativo backend](./backend-implementation-plan.md). El desglose se
mantiene visible desde ahora para orientar contratos y capacidades Go, pero no
implica migrar pantallas en paralelo con la construcción del backend.

La migración conserva las páginas y componentes visuales existentes, adapta su
capa de datos para consumir la API Go y crea solo las pantallas que aún no
existen. No elimina ni rediseña la interfaz existente. El backend interno de
Next.js se retira al final, según la Fase 9.

El [plan maestro](./implementation-plan.md) conserva el orden global, las
restricciones compartidas y la [matriz única de capacidades](./implementation-plan.md#matriz-única-de-capacidades);
este documento contiene las tareas y criterios operativos del frontend.
La UI existente está documentada en el [índice frontend](../.frontend/README.md);
el contrato consumido está en [`../.frontend/api.md`](../.frontend/api.md).

## Fase 8 — Implementación frontend: conservar la interfaz y consumir Go

Esta fase se ejecuta después de completar las fases backend 1–7 para el alcance
funcional acordado. "Implementar frontend" significa conservar las páginas y
componentes visuales existentes, cambiar sus lecturas y escrituras para usar
la API Go y crear solo las pantallas que todavía no existen. No rediseñar ni
eliminar pantallas existentes como parte de la migración.

Las pantallas/capacidades existentes incluyen autenticación, dashboards,
agenda, clientes, técnicos, servicios, presupuestos y cobros. La navegación
incluye enlaces de rendiciones, pero no se encontraron páginas implementadas
para rendiciones, inventario ni configuración; esas interfaces nuevas deben
seguir los documentos UI existentes y los patrones visuales del frontend.
Antes de migrar o crear una pantalla, sus endpoints, permisos y DTOs Go deben
estar disponibles.

### Criterios comunes de implementación

- En cada subfase de Fase 8 y en Fase 9, ejecutar `pnpm build`, iniciar
  Next.js con `pnpm start` y solicitar la página existente `/login`; el
  resultado esperado es HTTP 200.
- Las suites automatizadas del backend y frontend se ejecutan una sola vez en
  la validación global del plan maestro, después de completar las fases de
  backend y frontend. Esta actualización documental no incorpora un runner de
  pruebas frontend ni dependencias nuevas.
- Mantener rutas, layout, componentes, presentación y comportamiento responsive
  existentes. Ajustar solo lo necesario para representar los datos de Go.
- Mantener DTOs HTTP separados de los tipos que usan los componentes.
  Adaptar nombres, fechas, estados e importes en la capa cliente/adaptador, no
  repetir conversiones en cada pantalla.
- Go es la fuente de verdad para reglas, permisos y resultados económicos. No
  duplicar lógica de negocio ni cálculos oficiales en el navegador.
- El navegador consume Go directamente. No crear un BFF ni trasladar lógica
  de negocio a Route Handlers o Server Actions de Next.js.
- En desarrollo local el backend permite por defecto `http://localhost:3000`
  para CORS y CSRF. Para otros orígenes, configurar
  `CORS_ALLOWED_ORIGINS` y `CSRF_TRUSTED_ORIGINS` en el entorno local del
  backend. No usar comodines ni trasladar esta configuración a producción.
### 8.0 — Preparar la conexión frontend

- [ ] Confirmar cierre de las fases backend 1–7 y disponibilidad de los
      endpoints, permisos, errores y contratos consumidos por la interfaz.
- [ ] Inventariar páginas/componentes existentes y asociar cada flujo con sus
      endpoints Go; conservar los componentes visuales durante la migración.
- [ ] Crear cliente HTTP tipado para `/api/v1` con cookies, CSRF, errores,
      paginación, `requestId` e idempotencia.
- [ ] Crear DTOs de transporte y adaptadores a los tipos ya usados por las
      pantallas, eliminando su dependencia de tipos/modelos Prisma.
- [ ] Configurar URL base y credenciales de cookies; comprobar la conexión
      local desde `http://localhost:3000` con la allowlist de desarrollo.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.1 — Autenticación y sesión

- [ ] Conectar login, logout, sesión actual y recuperación/cambio de
      contraseña con los endpoints Go.
- [ ] Conservar los formularios existentes y adaptar sesión/rol de Go a las
      guardas, navegación y datos mostrados.
- [ ] Dejar de usar bcrypt, cookie local base64 y rutas `/api/auth/*` desde
      los flujos migrados; no retirar todavía rutas con consumidores.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.2 — Dashboards y agendas

- [ ] Conectar dashboard de Administración con sus indicadores y servicios.
- [ ] Conectar dashboard, calendario, lista de servicios y agenda del Técnico
      con las proyecciones autorizadas por Go.
- [ ] Preservar los componentes existentes, filtros, calendario, tarjetas y
      estados de carga, vacío y error; adaptar solo los datos recibidos.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.3 — Clientes y técnicos

- [ ] Conectar listado, búsqueda, detalle, alta y edición de clientes a Go,
      conservando páginas, diálogos, formularios y tablas actuales.
- [ ] Conectar listado, detalle, alta/edición y asignación de técnicos a Go,
      conservando la interfaz actual.
- [ ] Adaptar paginación, filtros, validaciones y errores HTTP a los
      componentes existentes.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.4 — Servicios y flujo del Técnico

- [ ] Conectar listado, detalle, alta y edición administrativa de servicios.
- [ ] Conectar servicios asignados, detalle, inicio/cierre e historial del
      Técnico con endpoints Go y transiciones autorizadas.
- [ ] Conservar los componentes actuales y adaptar diferencias entre los
      modelos existentes y DTOs Go; mantener compatibilidad con `CLOSED`
      únicamente donde el contrato vigente lo requiera.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.5 — Presupuestos, cobros, repuestos y gastos

- [ ] Conectar listados, detalle y acciones de presupuestos a Go.
- [ ] Conectar la tabla y los flujos existentes de cobros/deuda a Go.
- [ ] Conectar captura/edición de repuestos y gastos dentro de los flujos de
      servicio existentes.
- [ ] Representar estados, snapshots e importes con precisión; mostrar los
      cálculos oficiales recibidos de Go, sin recalcularlos en la UI.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.6 — Inventario, catálogo y proveedores (pantallas nuevas)

- [ ] Crear la pantalla administrativa de Inventario/catálogo siguiendo
      `UI/ui-administracion.md`, `modulos/Inventario.md` y los componentes
      visuales existentes.
- [ ] Crear la vista móvil del Técnico para consultar/buscar su lista de
      precios autorizada, mostrando versión y actualización.
- [ ] Conectar catálogo, proveedores/precios e importación con endpoints Go.
      No implementar stock físico ni acceso directo a Google Sheets.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.7 — Rendiciones (pantallas nuevas)

- [ ] Crear listado e historial administrativo agrupado por período y estado.
- [ ] Crear detalle con servicios, repuestos, gastos, totales y acción de
      liquidación autorizada.
- [ ] Crear la vista del Técnico para consultar sus propias rendiciones y el
      detalle permitido por su rol.
- [ ] Mostrar snapshots y totales devueltos por Go sin recalcular montos
      oficiales en el frontend.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.8 — Configuración (pantallas nuevas)

- [ ] Definir y completar en el backend los recursos/endpoints de configuración
      requeridos antes de conectar esta pantalla; actualmente no aparecen en
      el contrato API.
- [ ] Crear las pantallas administrativas acordadas para usuarios, roles,
      proveedores, plantillas de WhatsApp y parámetros generales.
- [ ] Mantener preferencias locales de interfaz (por ejemplo tema/idioma) en
      frontend cuando corresponda; persistir en Go solo ajustes operativos
      cuyo alcance esté definido.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.9 — Storage e integraciones

- [ ] Conectar carga direct-to-R2: solicitar URL `PUT` prefirmada a Go (`POST /api/v1/storage/signed-url`), enviar binario directamente a R2 con headers firmados (`Content-Type`, `If-None-Match`, `x-amz-meta-upload-id`) y notificar confirmación a Go (`POST /api/v1/storage/objects/{id}/confirm`).
- [ ] Conectar descarga y visualización de archivos mediante URLs `GET` prefirmadas emitidas por Go (`GET /api/v1/storage/objects/{id}/download-url`).
- [ ] Conectar solicitud de eliminación autorizada (`DELETE /api/v1/storage/objects/{id}`).
- [ ] PWA offline: encolar fotos capturadas offline en IndexedDB; transferir a R2 y confirmar ante Go solo al recuperar conectividad, purgando el blob local tras confirmación exitosa.
- [ ] Conectar estado/sincronización de integraciones; conservar WhatsApp
      manual, sin envío automático.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.10 — PWA y operación offline

- [ ] Aplicar por rol/módulo la allowlist de datos cacheables documentada en
      `.frontend/database.md`; aislar caché por usuario y limpiarla al cerrar
      sesión cuando contenga datos privados.
- [ ] Implementar/ajustar sincronización offline permitida para catálogo y
      operaciones pendientes con `operationId` e `Idempotency-Key`.
- [ ] No cachear sesiones, tokens, paneles administrativos, rendiciones
      globales ni URLs privadas de Storage.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.

### 8.11 — Cierre de migración frontend

- [ ] Confirmar que todas las pantallas existentes y nuevas leen/escriben por
      Go y que la interfaz existente se conserva.
- [ ] Confirmar que Inventario, Rendiciones y Configuración solo se conectan a
      capacidades backend disponibles y autorizadas.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.
- [ ] Criterio de salida: todos los flujos frontend acordados consumen Go, se
      preserva la interfaz existente y se cumple el criterio común de smoke
      frontend.

## Fase 9 — Retiro del backend interno de Next.js

- [ ] Confirmar que todas las capacidades y flujos, incluida la PWA, cumplen
      el criterio de compilación y cierre de la Fase 8.
- [ ] Confirmar que no existan consumidores de las rutas internas antes de
      eliminar Route Handlers, Server Actions, servicios Prisma, `lib/db.ts` y
      lógica de autenticación local/bcrypt/base64 reemplazada por Go.
- [ ] Eliminar `prisma/`, configuración ORM y dependencias obsoletas solo
      después de verificar que no quedan importaciones ni consumidores.
- [ ] Verificar que Next.js sea únicamente interfaz/renderizado y cliente HTTP;
      todas las operaciones de negocio deben pasar por Go.
- [ ] Aplicar el criterio común de smoke frontend: ejecutar `pnpm build`,
      iniciar Next.js con `pnpm start` y comprobar HTTP 200 en `/login`.
- [ ] Marcar completo el desacoplamiento solo después de comprobar que no
      quedan consumidores de Prisma ni lógica de negocio en Next.js.
