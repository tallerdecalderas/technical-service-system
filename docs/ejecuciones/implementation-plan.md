# Plan maestro de implementación y desacoplamiento

Este es el índice maestro para separar
`technical-service-frontend` de `technical-service-backend`. La documentación
funcional es la fuente de verdad: [reglas de negocio](../reglas-negocio.md) y
[modelo de dominio](../modelo-dominio.md). Las decisiones técnicas se
consultan en [arquitectura backend](../ingeneri/backend-architecture.md),
[contrato HTTP](../.backend/api.md) y [esquema de datos](../.backend/database.md).

## Estado real al iniciar

### Backend Go

- Estructura de directorios inicial creada.
- Módulo Go y dependencia `github.com/jackc/pgx/v5` creados.
- Prueba mínima de conexión PostgreSQL en `cmd/api/main.go`.
- Conexión real a Supabase verificada.
- Base técnica implementada: configuración, pool, HTTP, CORS, health checks,
  logging y apagado ordenado.
- Autenticación, sesión opaca, CSRF y recuperación implementados localmente;
  falta completar las validaciones operativas y la autorización.
- Los módulos de negocio todavía deben implementarse en Go. El módulo de
  clientes ya tiene partes de dominio, casos de uso, repositorio y handler,
  pero sus rutas aún no están conectadas al servidor.

### Frontend Next.js/PWA

- La aplicación sigue ejecutando la lógica de negocio.
- Las páginas, servicios y Route Handlers usan Prisma/PostgreSQL directamente.
- La autenticación actual usa bcrypt y una cookie base64 con datos del usuario.
- Las mutaciones llaman rutas locales `/api/*`.
- No existe todavía un cliente HTTP para `/api/v1` del backend Go.
- El frontend actual se conserva mientras se completa el backend Go; su
  migración y el retiro de la lógica interna de Next.js ocurren en fases
  posteriores, no en paralelo con la construcción de los módulos Go.
- Prisma y su esquema son el mecanismo actual del frontend, no la fuente futura
  del contrato de datos.
- `node_modules`, `.next`, archivos generados y cachés quedan fuera del plan.

## Entorno y límites de esta ejecución

- El proyecto Supabase objetivo es `bniquenbqwibyxychnva`; las inspecciones
  remotas deben seleccionar explícitamente ese proyecto.
- Este espacio de trabajo no es un repositorio Git. Los cambios se mantienen
  en los archivos locales: no hay commits, pushes ni subida a otro repositorio.
- No existe una base local o de pruebas: por decisión del usuario, el proyecto
  usa únicamente la base Supabase de producción para desarrollo. El usuario
  indica que todavía no hay usuarios activos en la aplicación.
- En cada fase backend ejecutable (1–7), la verificación operativa consiste en
  compilar con `go build -buildvcs=false ./...`, iniciar la API con las
  variables de entorno configuradas por el operador y comprobar HTTP 200 en
  `/health/live` y `/health/ready`. No requiere levantar el frontend a la vez.
  El operador controla el entorno; este criterio no autoriza al agente a
  acceder a producción ni a consultar o solicitar secretos.
- No se harán escrituras, pruebas que creen datos ni migraciones en producción
  sin consultarle primero al usuario. Las acciones de consola las ejecuta el
  usuario y comparte resultados sanitizados; no se solicitan credenciales,
  cookies ni valores privados por chat.

## Coordinación operativa con el usuario

El agente puede preparar código, migraciones SQL, instrucciones y comandos
revisables. El usuario ejecuta desde su propia terminal o consola las acciones
que acceden o modifican Supabase/otros entornos, aplican migraciones, despliegan
servicios o requieren credenciales, cookies o variables privadas. El agente no
debe pedir secretos por chat ni asumir que puede ver o configurar valores
disponibles únicamente en el entorno del usuario.

Antes de una tarea que dependa de configurar o inspeccionar esas variables,
cookies, credenciales o una consola privada, el agente debe explicar qué falta
y consultarle al usuario. Si el usuario realiza la acción, el agente espera el
resultado necesario antes de marcarla verificada o continuar con una tarea
dependiente. El usuario puede compartir mensajes de error o resultados
sanitizados; debe quitar contraseñas, tokens, cookies y URLs con credenciales.
Las suites automatizadas del backend y frontend se ejecutan una sola vez en la
validación global, después de completar las fases backend y frontend. Las
comprobaciones operativas de cada fase no ejecutan esas suites.

## Resultados de la auditoría de fase 0

La verificación de solo lectura dirigida explícitamente a
`bniquenbqwibyxychnva` el 2026-11-05 encontró 13 relaciones públicas
heredadas: `activityLog`, `client`, `company`, `estimate`, `inventoryItem`,
`payment`, `service`, `serviceCategory`, `servicePart`, `settlement`,
`settlementItem`, `settlementPart` y `user`. Todas tenían cero filas en la
inspección. La consulta MCP previa estaba conectada a otro proyecto y sus
tablas/conteos no describen este proyecto.

Hallazgos confirmados que condicionan la compatibilidad:

| Hallazgo | Estado | Acción requerida |
|---|---|---|
| El esquema usa nombres heredados camelCase/singulares | Confirmado | Mantener compatibilidad en repositorios Go; no renombrar durante el desacoplamiento |
| Existen tablas de servicios, clientes, empresas y rendiciones, aún vacías | Confirmado | Mapearlas explícitamente; no crear entidades físicas paralelas |
| `public.products` no existe; el catálogo físico es `public."inventoryItem"` | Confirmado | No referenciar `products`; revisar inventario por separado |
| La relación interna de usuarios es `public."user"`; `user_identities` aún no existe remotamente | Confirmado | Preparar una tabla de vínculo aditiva que no dependa de `auth.users` |
| `service.status` también acepta `CLOSED` | Confirmado | Mantenerlo mientras el frontend activo use cierre administrativo; resolver con la migración del flujo |
| Las 13 tablas públicas tienen RLS deshabilitado y no hay políticas ni triggers de negocio | Confirmado | Documentar; diseñar RLS solo con el contrato de autorización y migración correspondiente |
| Fórmula, periodicidad e inmutabilidad de rendiciones siguen por definir | Pendiente | Revisarlas por separado antes de restricciones o lógica económica |

El esquema tiene claves primarias, claves foráneas, restricciones e índices
para relaciones, servicios y rendiciones; no se encontraron funciones de
aplicación ni triggers de negocio en `public`. No se encontraron datos ni se
modificó la base.
Según la salida de `pnpx supabase migration list --remote` compartida por el
usuario el 2026-11-06 para el proyecto de producción `bniquenbqwibyxychnva`,
`20261105161000` figuraba aplicada local y remotamente, mientras
`20261105205907` figuraba pendiente en remoto. Después el usuario informó que
aplicó ambas migraciones en producción; falta confirmar ese estado con una
salida actualizada de `pnpx supabase migration list --remote`.

El frontend auditado contiene 18 Route Handlers bajo `app/api` y 10 servicios
en `lib/services`. Las páginas y componentes todavía consumen esas rutas
locales; no existe aún el cliente HTTP del backend Go.

La verificación automática de TypeScript y ESLint quedó pendiente en este
entorno porque el ejecutable de `pnpm` no puede cargar `libatomic.so.1`. Esto
es una limitación del entorno de validación, no evidencia de un fallo del
código; debe resolverse antes de marcar contratos o capacidades como
verificados.

## Fuente de verdad y decisiones no negociables

1. Las reglas funcionales aprobadas prevalecen sobre Prisma y sobre el código
   actual.
2. Supabase PostgreSQL ya contiene las migraciones y es la fuente oficial del
   esquema existente.
3. No se regeneran migraciones ni tablas desde Prisma.
4. No se modifica el esquema interno administrado por Supabase Auth.
5. Supabase Auth provee identidad; Go valida JWT, resuelve usuarios internos,
   crea la sesión y aplica autorización.
6. Primero se completa y verifica el backend Go para todas las capacidades.
   Hasta que se habilite la fase de migración del frontend, no se reescriben sus
   pantallas ni se retiran sus Route Handlers/Prisma; la aplicación actual se
   conserva para no interrumpir su funcionamiento.
7. Después de completar el backend, se migra el frontend para consumir Go. Solo
   cuando todas las capacidades frontend estén migradas y verificadas se retiran
   el backend interno de Next.js, Prisma y el código obsoleto. El navegador no
   accede directamente a PostgreSQL ni usa credenciales privadas.
8. El contrato objetivo usa únicamente `PENDING`, `IN_PROGRESS`,
   `COMPLETED` y `CANCELLED`; la tabla heredada aún permite `CLOSED` y el
   frontend actual lo usa para el cierre administrativo. No restringirlo hasta
   migrar ese flujo.

## Estados de ejecución

- `[ ]` Pendiente.
- `[~]` En desarrollo.
- `[x]` La etapa cumple su criterio de salida. El retiro del legado tiene su
  propio criterio de cierre en la fase final.

Las fases de backend se cierran con contrato aprobado, implementación Go,
autorización implementada según el contrato y la verificación operativa común.
No se crean ni ejecutan pruebas automatizadas durante las fases intermedias;
se abordan al completar backend y frontend. Las fases backend no requieren que
el frontend ya esté migrado. La migración del frontend y el retiro del legado
se verifican después, en sus propias fases; no se retira una ruta mientras el
frontend aún dependa de ella.

## Tamaño y cierre de las tareas

Las fases son hitos; las casillas dentro de cada fase son entregas pequeñas.
Primero se completan las fases backend (1–7), sin mezclar en ellas la migración
de pantallas. Luego se migra el frontend completo en la Fase 8 y se retira el
backend interno de Next.js en la Fase 9. Cada capacidad Go se divide en contrato
e implementación. No se crean ni ejecutan pruebas automatizadas por fase; se
abordan en una única validación global tras completar backend y frontend. Cada
cambio frontend y retiro se aborda en su etapa correspondiente.

Una tarea que requiera un cambio de esquema debe identificar la migración,
documentar cómo verificarla y quedar pendiente de aplicación hasta que el
usuario la revise, ejecute y confirme el resultado. El proyecto no dispone de
un entorno aislado y no se presume que se vaya a crear uno. Si verificar o
probar una migración requiere escrituras en producción, consultarle al usuario
antes; no usar la ausencia de usuarios activos como autorización implícita.
No bloquear trabajo local independiente mientras se espera esa confirmación.

## Estado actual por fase

| Fase | Estado | Evidencia |
|---|---|---|
| Fase 0 — Auditoría, decisiones y contratos | **COMPLETADA** | Auditoría reproducible, contratos documentados y decisiones de compatibilidad aprobadas |
| Fase 1 — Base técnica backend | **Verificación operativa reportada** | `/health/live` y `/health/ready` respondieron `200 OK`; aplicar también el criterio de compilación y arranque por fase. La ejecución de suites automatizadas queda para la validación global |
| Fase 2 — Compatibilidad Supabase | **Migraciones confirmadas por el usuario** | El usuario informa que las migraciones requeridas están aplicadas; esta actualización no consultó producción |
| Fase 3 — Identidad, sesión y autorización | **Autenticación confirmada por el usuario** | El usuario indica que la autenticación está lista; la autorización por recurso se completa junto a cada módulo. No se ejecutan pruebas automatizadas por fase |
| Fase 4 — Clientes, técnicos y servicios | **Implementación Go realizada; salida pendiente** | Rutas y dependencias conectadas; falta completar la verificación operativa común; el usuario confirma que las migraciones necesarias están aplicadas |
| Fases 5–7 — Capacidades backend | Pendiente | Implementar módulos restantes, Storage e integraciones en Go; aplicar verificación operativa por fase. Las pruebas automatizadas se abordan al final |
| Fase 8 — Frontend: conservar interfaz y conectar con Go | Pendiente | Desglosada en el [plan frontend](./frontend-implementation-plan.md); ejecutar después de cerrar las capacidades backend requeridas |
| Fase 9 — Retiro Next.js | Pendiente | No retirar componentes hasta que el frontend consuma y verifique Go en todos los flujos |

## Planes operativos por etapa

La ejecución está separada en dos planes para mantener tareas pequeñas y evitar
mezclar la construcción backend con la migración frontend:

1. Completar en orden las [fases backend 0–7](./backend-implementation-plan.md).
2. Después, ejecutar las [fases frontend 8–9](./frontend-implementation-plan.md).

El desglose frontend se define anticipadamente para orientar las APIs, pero su
implementación espera a que el backend requerido esté listo. La matriz de este
plan maestro es el resumen de estado; cada plan operativo contiene el detalle
de sus tareas y criterios.

## Matriz única de capacidades

| Capacidad | Contrato | Backend Go | Frontend migrado | Legado retirado |
|---|---|---|---|---|
| Auditoría y compatibilidad Supabase | [x] | [ ] | [ ] | [ ] |
| Identidad y sesión | [~] | [ ] | [ ] | [ ] |
| Clientes | [~] | [ ] | [ ] | [ ] |
| Técnicos | [~] | [ ] | [ ] | [ ] |
| Servicios y estados | [~] | [ ] | [ ] | [ ] |
| Agenda e historial | [~] | [ ] | [ ] | [ ] |
| Cobros y repuestos | [~] | [ ] | [ ] | [ ] |
| Presupuestos | [~] | [ ] | [ ] | [ ] |
| Gastos de servicio | [~] | [ ] | [ ] | [ ] |
| Inventario y proveedores | [~] | [ ] | [ ] | [ ] |
| Rendiciones | [~] | [ ] | [ ] | [ ] |
| Storage | [~] | [ ] | [ ] | [ ] |
| Integraciones | [~] | [ ] | [ ] | [ ] |
| PWA y caché | [~] | [ ] | [ ] | [ ] |
| Configuración administrativa | [ ] | [ ] | [ ] | [ ] |

## Fuera de alcance de esta migración

- Regenerar migraciones o tablas desde Prisma.
- Modificar directamente `auth.users` o el esquema interno de Supabase Auth.
- Introducir el estado `CLOSED`.
- Implementar control de stock físico.
- Automatizar envíos de WhatsApp.
- Mantener dos fuentes activas de escritura para una capacidad migrada.

## Criterio de finalización

El desacoplamiento termina cuando el frontend consume exclusivamente la API
Go, Supabase sigue siendo la fuente oficial, las reglas se validan en Go,
las capacidades backend cumplen los criterios de sus fases, frontend satisface
su verificación operativa, se completa la validación global automatizada y no
quedan dependencias activas de Prisma, Route Handlers de negocio, `lib/db.ts`
ni autenticación local.

## Validación global automatizada final

Después de completar las fases backend (1–7), la migración frontend (Fase 8) y
el retiro de Next.js interno (Fase 9), ejecutar una sola vez las suites
automatizadas acordadas del backend y frontend:

- Backend: `go test ./...`.
- Frontend: ejecutar únicamente la suite automatizada existente/acordada, si
  corresponde; no agregar un runner de pruebas ni dependencias nuevas como
  parte de esta actualización documental.

No crear ni ejecutar pruebas automatizadas como requisito de ninguna fase
intermedia. Las pruebas se abordan en esta etapa global una vez completadas las
fases backend y frontend.
