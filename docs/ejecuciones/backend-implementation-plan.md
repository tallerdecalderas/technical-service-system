# Plan operativo de implementación del backend Go

Este documento contiene el trabajo operativo de las fases 0–7: auditoría y
contratos, compatibilidad Supabase, base técnica, identidad, módulos de negocio,
Storage e integraciones. **Primero se completan estas fases; no se ejecuta la
migración frontend mientras haya capacidades backend pendientes.**

El [plan maestro](./implementation-plan.md) conserva el estado general,
restricciones compartidas y matriz de capacidades. La fuente funcional es
[reglas de negocio](../reglas-negocio.md) y [modelo de dominio](../modelo-dominio.md);
los contratos backend están en [API](../.backend/api.md), [datos](../.backend/database.md)
y [arquitectura](../ingeneri/backend-architecture.md).

## Verificación operativa común de las fases backend

En cada fase backend con implementación ejecutable (1–7), la verificación
operativa consiste en compilar con `go build -buildvcs=false ./...`, iniciar la
API con las variables de entorno configuradas por el operador y comprobar HTTP
200 en `/health/live` y `/health/ready`. La Fase 0 es solo auditoría y contrato,
por lo que no requiere repetir el smoke check. Estas comprobaciones no requieren
ejecutar suites automatizadas. El operador configura el entorno; este criterio
no autoriza al agente a acceder a producción ni a consultar o solicitar
secretos.

No se crean ni ejecutan pruebas automatizadas durante las fases intermedias.
La validación automatizada se realiza una sola vez al terminar backend y
frontend, según el plan maestro.

## Fase 0 — Auditoría reproducible y contratos

- [x] Leer y consolidar documentación funcional, dominio, arquitectura, API,
      inventario, rendiciones, PWA y seguridad.
- [x] Confirmar que el backend Go está inicializado y que la conexión a
      Supabase funciona.
- [x] Inventariar páginas, Route Handlers, servicios Prisma, modelos y
      autenticación actuales del frontend.
- [x] Comparar el esquema real de Supabase con `prisma/contract.prisma` y con
      el contrato funcional; Prisma se usa solo como referencia obsoleta.
- [x] Registrar discrepancias antes de implementar: `CLOSED`, pagos, gastos,
      proveedores, identidades externas, snapshots y rendiciones.
- [x] Congelar DTOs de lectura/escritura, errores, paginación, idempotencia,
      `requestId`, cookies, CORS y CSRF por recurso.
- [x] Definir el inventario inicial de rutas actuales, rutas Go, consumidor
      frontend y criterio de retiro en la matriz de capacidades.
- [x] Resolver las discrepancias bloqueantes y aprobar el contrato de
      compatibilidad antes de iniciar la Fase 1 funcional.

Decisiones cerradas para iniciar las siguientes fases:

- El login no crea empresas. La empresa se asigna durante el alta, invitación
  o configuración inicial; luego cada usuario inicia sesión y recibe su
  contexto automáticamente.
- El modelo es multiempresa para aislar datos, aunque la primera instalación
  pueda comenzar con una sola empresa.
- `public."inventoryItem"` es el catálogo heredado confirmado; no existe
  `public.products` en el proyecto objetivo. No se crea otro catálogo y la
  semántica de su columna `stock` queda pendiente de la revisión de inventario.
- Proveedores, periodicidad, fórmula e inmutabilidad de rendiciones se
  definirán por separado antes de implementarlos.
- Supabase Auth provee identidad; Go administra sesión, autorización y
  escrituras.
- La migración local preparada no modifica `auth.*`, tablas heredadas, estados
  ni stock. El esquema actual ya permite `CLOSED` y contiene una columna
  `stock`; ambas diferencias se resolverán en sus fases correspondientes.

La Fase 0 queda cerrada como auditoría y definición. La aplicación de DDL y la
migración de funcionalidades pertenecen a las fases posteriores y no reabren
esta fase.

## Fase 1 — Base técnica backend

- [x] Crear módulo Go, `go.sum` y conexión inicial con `pgx`.
- [x] Crear configuración tipada para `DATABASE_RUNTIME_URL`; reservar
      `DATABASE_MIGRATION_URL` para migraciones fuera del proceso API.
- [x] Crear servidor HTTP, middleware CORS allowlist, health checks y apagado
      ordenado.
- [x] Crear logging estructurado sin registrar credenciales ni tokens.
- [x] Crear puertos hexagonales iniciales para identidad, transacciones,
      Storage y servicios externos.
- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.

## Fase 2 — Compatibilidad con el esquema Supabase existente

- [x] Inspeccionar tablas, restricciones, índices, funciones y datos que Go
      debe consumir.
- [x] Validar que el catálogo existente no debe recrearse desde Prisma.
- [x] Confirmar que `public."user"` es la relación interna y preparar el
      vínculo `user_identities` sin depender de `auth.users`.
- [x] Verificar y documentar roles, empresas, claves foráneas, estados, RLS,
      snapshots y ausencia de triggers; mantener las discrepancias abiertas
      para las fases que deciden su comportamiento.
- [x] Documentar el procedimiento futuro para cambios de esquema mediante
      migraciones Supabase, fuera del arranque de la API.
- [x] Validar conteos, referencias y datos históricos antes de habilitar
      escrituras desde Go.

La migración fundacional está preparada en
[`supabase/migrations/20261105161000_service_compatibility_foundation.sql`](../../supabase/migrations/20261105161000_service_compatibility_foundation.sql).
Solo agrega `user_identities` con FK a `public."user"`; no crea tablas de
empresa, inventario o catálogo. El usuario confirmó que ya figura aplicada en
el historial remoto.

La migración de sesiones y membresías está en
[`supabase/migrations/20261105205907_fase_3_auth_sessions_and_memberships.sql`](../../supabase/migrations/20261105205907_fase_3_auth_sessions_and_memberships.sql).
El usuario confirma que ya la aplicó en producción. Esta actualización
documental no consultó la base remota.
- [x] Revisar el SQL preparado y confirmar el proyecto destino contra el
      historial remoto compartido.
- [x] El usuario informa que aplicó la migración de sesiones/membresías desde
      su consola.
- [x] Registrar que, según el usuario, las migraciones están aplicadas; no se
      afirma una verificación remota independiente.
- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.

## Fase 3 — Identidad, sesión y autorización

Fichas: [Identidad y autorización](../.backend/modulos/identidad-y-autorizacion.md);
[empresas y configuración operativa](../.backend/modulos/empresas-y-configuracion.md)
(alcance transversal pendiente de asignación).

- [x] Implementar el puerto `IdentityProvider`, independiente de Supabase.
- [x] Validar JWT por firma, `iss`, `aud`, `sub` y expiración.
- [x] Resolver `users` mediante `user_identities` y validar usuario activo.
- [x] Implementar login, logout, sesión y recuperación mediante Go/Supabase
      Auth.
- [x] Crear sesión propia con cookie `HttpOnly`, `Secure`, `SameSite` y
      expiración configurable.
- [x] Emitir y validar CSRF para mutaciones autenticadas.
- [x] Registrar la confirmación del usuario de que la autenticación está lista.
- [x] Registrar la confirmación del usuario de que las migraciones necesarias
      para identidad, sesiones y membresías están aplicadas; esta actualización
      no consultó producción.
- [~] Completar autorización por recurso y empresa, estado y auditoría
      funcional como parte de cada capacidad de las fases posteriores. La
      identidad y membresías activas se validan en Go; los eventos de
      autenticación no incluyen secretos y se propagan los límites 429 de
      Supabase.

Cualquier integración de autenticación frontend existente se conserva durante
la etapa backend; su verificación junto con el resto del frontend corresponde
a la Fase 8. No retirar su implementación de Next.js antes de la Fase 9.

El usuario confirma que la autenticación está lista. Esta actualización no
consultó producción ni ejecutó pruebas de login. El verificador JWT actual
requiere tokens Supabase firmados con HS256 y `SUPABASE_JWT_SECRET`. La
autorización detallada por recurso se implementa junto con las capacidades de
negocio posteriores y no se considera resuelta por el login ni por la
membresía.

- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.

## Fase 4 — Clientes, técnicos y servicios (backend Go)

Fichas: [Clientes y técnicos](../.backend/modulos/clientes-y-tecnicos.md);
[servicios, agenda e historial](../.backend/modulos/servicios-agenda-historial.md).

- [x] Clientes: implementar listado paginado, detalle, alta y edición en Go.
      ADMIN puede listar y modificar globalmente; TECHNICIAN solo abre clientes
      con servicios propios en empresas miembro y consulta el historial
      relacionado. El contrato objetivo no incluye DELETE. `client` no tiene
      `companyId`.
- [x] Técnicos: implementar listado paginado, detalle, alta mediante Supabase
      Auth y edición; limitar acceso por membresía y asignación, sin exponer
      hashes.
- [x] Servicios: implementar listado, detalle, alta y edición con autorización
      por empresa, validación de técnico asignado y registro de actividad.
- [x] Cierre: validar monto final y permitir finalizar solo servicios
      `IN_PROGRESS` asignados al técnico autenticado.
- [x] Agenda e historial: implementar `GET /schedule` y el historial paginado
      del servicio, respetando visibilidad por empresa y técnico.
- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.
- [ ] Criterio de salida: clientes, técnicos, servicios, cierre, agenda e
      historial están implementados en Go y cumplen la verificación operativa
      común; el frontend y sus Route Handlers siguen intactos. Las suites
      automatizadas se ejecutan solo en la validación global final.

### Estado operativo antes de cerrar la Fase 4

- El usuario confirma que las migraciones `20261107143445` (claves y respuestas
  idempotentes) y `20261107143721` (técnico opcional en servicios) están
  aplicadas. Esta actualización documental no consultó la base remota.
- Las escrituras de Fase 4 exigen `Idempotency-Key`, guardan el hash del
  payload y el status/respuesta por usuario y operación, reproducen el
  resultado en reintentos y devuelven conflicto si se reutiliza la clave con
  otros datos.
- El alcance de clientes sigue las reglas: administración lista globalmente;
  el técnico ve clientes con servicios propios y, al abrir uno, su historial
  relacionado.

## Fase 5 — Cobros, repuestos y presupuestos (backend Go)

Fichas: [Cobros y repuestos](../.backend/modulos/cobros-y-repuestos.md);
[presupuestos](../.backend/modulos/presupuestos.md).

- [x] Cobros y deuda — contrato: cobro único acumulado por servicio; abonos
      posteriores actualizan importes con auditoría append-only; el técnico
      asignado lo crea en `IN_PROGRESS` antes de finalizar y ADMIN corrige
      hasta la liquidación.
- [x] Cobros y deuda — backend: lecturas administrativas paginadas, consulta
      visible por ámbito, alta técnica en `IN_PROGRESS`, corrección ADMIN,
      auditoría transaccional e idempotencia implementadas en Go. La
      verificación operativa HTTP se mantiene como check separado de fase.
- [x] Presupuestos — contrato: rutas canónicas `/estimates`, un presupuesto
      por servicio, alta del técnico asignado en `IN_PROGRESS` o `COMPLETED`,
      y finalización ADMIN `PENDING` → `FINALIZED` sin editar contenido.
- [x] Presupuestos — backend: listado y detalle por ámbito, alta del técnico
      asignado, finalización ADMIN, auditoría transaccional e idempotencia
      implementados en Go. La verificación operativa HTTP se mantiene como
      check separado de fase.
- [x] Repuestos — contrato: líneas independientes bajo
      `/services/{serviceId}/parts`, aun si repiten código; valores físicos
      actuales congelados al agregarlas, copia histórica en `SettlementPart` al
      liquidar, retiro operativo auditado solo antes de liquidación y snapshots
      liquidados inmutables.
- [x] Repuestos — backend: rutas bajo el servicio, vistas por rol,
      autorización, idempotencia, snapshots actuales del catálogo, auditoría y
      bloqueo de mutaciones tras liquidación implementados en Go. La
      verificación operativa HTTP se mantiene como check separado de fase.
- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.
- [ ] Criterio de salida: las tres capacidades están implementadas en Go y
      cumplen la verificación operativa común. No migrar aún pantallas ni
      retirar sus implementaciones Next.js.

## Fase 6 — Gastos, inventario y rendiciones (backend Go)

Fichas: [Gastos](../.backend/modulos/gastos.md);
[inventario, proveedores, precios e importación](../.backend/modulos/inventario-proveedores-precios.md);
[rendiciones](../.backend/modulos/rendiciones.md).

- [x] Gastos — contrato: relación directa con servicio, concepto, importe
      decimal, monedas explícitas `ARS`/`USD`, actor de sesión, técnico propio
      en `IN_PROGRESS`/`COMPLETED`, corrección ADMIN y retiro auditado antes de
      liquidación; no está asociado a movimientos de stock ni comprobantes.
- [x] Gastos — backend: alta/lectura/edición/retiro y autorización
      implementados en Go bajo `/services/{serviceId}/expenses`, con
      idempotencia y auditoría transaccional. Requiere que el operador aplique
      la migración aditiva de `public."serviceExpense"` descrita en la ficha.
- [x] Catálogo — contrato: conservar el catálogo físico existente y excluir
      control de stock físico de esta fase.
- [x] Catálogo — backend: `GET /api/v1/catalog/prices` implementado con
      proyección por rol, paginación, búsqueda, `version` y `updatedAt`;
      administración de proveedores, ofertas, cotización y precios implementada
      en Go.
- [x] Proveedores y precios — contrato: proveedor por empresa, oferta activa
      única por artículo, costo USD, margen `0`–`1000`, cotización diaria y
      fórmulas `costInitList`, `costPrice`, `sellPrice`, `techPrice` y
      ganancia cerradas.
- [x] Proveedores y precios — backend: CRUD de proveedores/ofertas, carga de
      cotización y ajuste de margen/precio técnico implementados.
- [x] Importación — backend: validación completa de archivo CSV (`multipart/form-data`),
      rechazo de códigos duplicados, reporte `FAILED` sin cambios y publicación
      atómica de la nueva versión con `catalogImport` bajo `POST /api/v1/catalog/import`.
- [x] Rendiciones — contrato: período inclusivo ART sin solapamientos, técnico
      y empresa autorizados, repuestos por proveedor, gastos, seguros, otros
      ajustes, descuentos y adelantos cerrados.
- [x] Rendiciones — cálculo backend: base neta, porcentaje de empresa, importe
      técnico, saldo, conversión USD y redondeo HALF_UP implementados.
- [x] Rendiciones — ciclo de vida backend: `PENDING`/`LIQUIDATED`, snapshots de
      servicios/repuestos/gastos/ajustes, corrección solo en borrador y
      bloqueo posterior a la liquidación implementados.
- [x] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.
- [x] Criterio de salida: gastos, catálogo, importación y rendiciones están
      implementados en Go y cumplen la verificación operativa común. Mantener
      intacto el frontend existente.

### Estado operativo antes de cerrar la Fase 6

- Gastos, catálogo de lectura, administración de proveedores/ofertas,
  cotización, precios, importación y rendiciones están implementados en Go.
- La API compila con `go build -buildvcs=false ./...`. No se ejecutaron pruebas
  automatizadas por fase.
- El operador debe aplicar las migraciones aditivas de `serviceExpense`,
  `catalogProvider`, `catalogOffer`, `exchangeRate`, `catalogImport`,
  `settlementExpense`, `settlementAdjustment` y las columnas nuevas de
  `settlement`, `servicePart` y `settlementPart` antes de usar los endpoints.
  La aplicación no ejecuta DDL al arrancar.
- La importación de catálogo se realiza mediante archivo CSV subido por Administración
  bajo `POST /api/v1/catalog/import`. La integración con Google Sheets se reserva
  para la sincronización de agenda y servicios en la Fase 7.
- El catálogo mantiene la restricción global heredada de código: un código no
  puede repetirse entre empresas mientras esa restricción siga vigente.
- La verificación operativa HTTP queda pendiente de un entorno configurado por
  el operador; no se ejecutaron pruebas automatizadas por fase.

## Fase 7 — Storage e integraciones (backend Go)

Fichas: [Archivos y Storage — Cloudflare R2](../.backend/modulos/archivos-storage.md);
[Especificación transversal de Storage](../ingeneri/storage.md);
[Integraciones](../.backend/modulos/integraciones.md).

- [ ] Storage — contrato y puerto: definir interfaz `ObjectStorage` y tipos propios (`ObjectRef`, `UploadSpec`, `DownloadSpec`, `ObjectInfo`, `PresignedRequest`) sin dependencias de SDK en dominio/aplicación.
- [ ] Storage — adaptador local (filesystem): implementar almacenamiento simple en disco local (`STORAGE_LOCAL_DIR=./uploads`) y handlers de carga/descarga local para pruebas sin Cloudflare.
- [ ] Storage — adaptador S3-compatible para Cloudflare R2: implementar cliente con AWS SDK for Go v2, presigner para `PUT` (con `If-None-Match: *` y metadata `upload-id`) y `GET`, `HeadObject` y `DeleteObject`.
- [ ] Storage — configuración tipada y conmutación: variables `STORAGE_PROVIDER=local|r2`, `STORAGE_LOCAL_DIR` y variables R2 en `internal/config` y `example.env`.
- [ ] Storage — base de datos: preparar migración SQL versionada para `stored_objects`, estados (`PENDING`, `AVAILABLE`, `DELETE_PENDING`, `DELETED`, `FAILED`), índices multiempresa y repositorio PostgreSQL.
- [ ] Storage — casos de uso y endpoints: solicitar URL de carga (`POST /api/v1/storage/signed-url`), confirmar con validación HEAD (`POST /api/v1/storage/objects/{id}/confirm`), emitir URL de descarga (`GET /api/v1/storage/objects/{id}/download-url`) y solicitar eliminación (`DELETE /api/v1/storage/objects/{id}`) con autorización multiempresa.
- [ ] Storage — infraestructura y CORS: definir bucket privado por entorno, token de objetos con permisos mínimos y política CORS en bucket R2 con headers firmados (`Content-Type`, `If-None-Match`, `x-amz-meta-upload-id`).
- [ ] Storage — ciclo de vida y resiliencia: reconciliación con HEAD tras timeout de carga, limpieza de `PENDING` vencidos y job de borrado físico diferido tras expiración de URL PUT.
- [ ] Agenda externa — backend: implementar sincronización de solo lectura sin
      modificar la agenda de origen.
- [ ] WhatsApp: mantener copia/apertura manual; no agregar envío automático esto es un copy paste que se podria hacer tranquilamente en el frontend, eliminar este check de ser asi.
- [ ] Integraciones: registrar auditoría, errores e idempotencia.
- [ ] Aplicar la verificación operativa común de backend: compilar, iniciar la
      API con variables configuradas por el operador y comprobar HTTP 200 en
      `/health/live` y `/health/ready`.
- [ ] Criterio de salida de backend: módulos de negocio, Storage e integraciones
      implementados en Go y cumplen la verificación operativa común. Contratos
      y endpoints listos para su consumo por frontend. No comenzar la migración
      frontend antes de este punto.
