# API HTTP — TechService

## Alcance y estado

Esta es la especificación objetivo para la API Go. La API aún no está implementada; los recursos se incorporan junto con sus funcionalidades. No es un traslado mecánico de todas las rutas actuales de Next.js: las reglas funcionales aprobadas en `./reglas-negocio.md` son la fuente del comportamiento requerido. El contrato técnico canónico del backend está en `../.backend/api.md`.

Next.js y la PWA consumen la API Go para operaciones de negocio. No deben acceder directamente a PostgreSQL, implementar una segunda API de negocio ni exponer credenciales privilegiadas de Supabase.

## Convenciones propuestas

- Prefijo versionado: `/api/v1`.
- Transporte HTTPS y JSON UTF-8.
- Fechas y horas se transmiten en formato ISO 8601 con zona horaria explícita.
- Los importes deben conservar precisión decimal; cada DTO documenta el formato exacto usado por la interfaz antes de implementarse.
- Todas las listas deben paginar y admitir solo filtros/sort permitidos por recurso. El tamaño máximo de página debe limitarse en el servidor.
- Los endpoints deben validar entrada y devolver mensajes legibles sin revelar información sensible o detalles internos.
- Operaciones que reintente la PWA requieren idempotencia. La solicitud lleva una clave de idempotencia única; repetir la misma clave para el mismo usuario y operación no debe duplicar el efecto.
- Los cambios de estado solo se aceptan mediante transiciones autorizadas por las reglas del dominio.
- El frontend usa DTOs tipados separados para lectura y escritura; no envía
  campos calculados, identificadores generados por el servidor ni estado
  confiado desde la interfaz.
- Las colecciones usan `page`, `pageSize` y `total`; `page` comienza en `1`,
  el tamaño predeterminado es `25` y el máximo es `100`.

Las rutas y formatos de esta sección son el contrato inicial recomendado. Se concretan en cada entrega funcional y no se consideran implementados hasta que exista código Go y su cliente frontend correspondiente.

## Respuestas y errores

Las respuestas correctas usan un objeto JSON con `data`. Las colecciones agregan metadatos de paginación bajo `meta`.

Ejemplo:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 25,
    "total": 0
  }
}
```

Los errores usan un formato único:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Revisá los datos enviados.",
    "details": [],
    "requestId": "..."
  }
}
```

`details` puede incluir errores de campos no sensibles. Nunca incluir contraseñas, tokens, secretos, SQL ni trazas internas.

El cliente conserva `requestId` para soporte y presenta `409` como conflicto,
`422` como regla de negocio y `5xx` como error reintentable solo cuando la
operación tenga `Idempotency-Key`.

### Códigos HTTP

| Código | Uso |
|---|---|
| `200` | Operación correcta con respuesta |
| `201` | Recurso creado |
| `204` | Operación correcta sin cuerpo |
| `400` | JSON o parámetros mal formados |
| `401` | Falta una sesión válida |
| `403` | Sesión válida sin permiso para esa operación |
| `404` | Recurso inexistente o no visible para el usuario |
| `409` | Conflicto de estado, duplicado o repetición no idempotente |
| `422` | Entrada válida sintácticamente pero inválida para el dominio |
| `429` | Límite de solicitudes alcanzado |
| `500` | Error interno no previsto |
| `502` | Dependencia externa no disponible |

El servidor registra el detalle interno asociado a `requestId`; la respuesta no lo filtra.

## Sesión y autenticación

Supabase Auth provee la identidad, pero el frontend no usa su SDK ni sus
tokens directamente. Go administra el flujo de login, valida la identidad
externa, resuelve el usuario interno y crea la sesión de aplicación. Se usa una
cookie `HttpOnly`, `Secure` en producción y `SameSite` configurado según los
dominios. El frontend no almacena contraseñas, tokens de sesión ni claves de
Supabase en `localStorage`.

| Método | Ruta | Acceso | Propósito |
|---|---|---|---|
| `POST` | `/api/v1/auth/login` | Público | Validar credenciales y crear sesión |
| `POST` | `/api/v1/auth/logout` | Sesión | Cerrar la sesión |
| `GET` | `/api/v1/auth/session` | Sesión | Obtener identidad y rol actuales |
| `POST` | `/api/v1/auth/password/forgot` | Público | Solicitar correo de recuperación mediante Resend |
| `POST` | `/api/v1/auth/password/reset` | Token de recuperación | Validar token de un solo uso y cambiar contraseña |

Las respuestas de recuperación no deben revelar si el email existe. La
recuperación se delega a Supabase Auth; Resend, si se usa para mensajes
operativos, es proveedor de entrega y no de autenticación.

La sesión se mantiene mediante cookie administrada por Go. El cliente no
guarda tokens en almacenamiento del navegador. Para cada mutación envía el
token CSRF emitido por Go en `X-CSRF-Token` y respeta la allowlist de orígenes
configurada por el backend.

## Recursos y capacidades

Las rutas siguientes describen el objetivo inicial. Solo se habilita una operación cuando su funcionalidad, permisos y reglas estén aprobados y desarrollados en Go.

| Recurso | Operaciones objetivo | Alcance de autorización |
|---|---|---|
| Clientes | `GET/POST /api/v1/clients`; `GET/PATCH /api/v1/clients/{id}` | Administración gestiona; el técnico consulta solo el contexto de servicio permitido |
| Técnicos | `GET/POST /api/v1/technicians`; `GET/PATCH /api/v1/technicians/{id}` | Administración gestiona; técnico accede a sus datos de trabajo |
| Servicios | `GET/POST /api/v1/services`; `GET/PATCH /api/v1/services/{id}` | Administración gestiona; técnico solo consulta/actúa en servicios asignados |
| Agenda | `GET /api/v1/schedule` | El resultado se limita al rol y alcance del usuario |
| Estado del servicio | `POST /api/v1/services/{id}/start`; operación de cambio/cierre según regla aprobada | Go valida la propiedad y transición permitida |
| Historial | `GET /api/v1/services/{id}/history` | Solo usuarios autorizados sobre ese servicio |
| Cobros y repuestos | `GET /api/v1/payments`; `POST /api/v1/services/{id}/payment`; cambios administrativos definidos por reglas | Técnico registra en sus servicios; administración revisa/gestiona según regla |
| Gastos de servicio | `GET/POST /api/v1/services/{id}/expenses`; `PATCH/DELETE /api/v1/services/{id}/expenses/{expenseId}` | Se registran en el servicio y Administración revisa/corrige antes de liquidar |
| Presupuestos | `GET /api/v1/estimates`; `POST /api/v1/services/{id}/estimate`; `PATCH /api/v1/estimates/{id}` para finalizar | Técnico crea en su servicio; solo Administración finaliza |
| Rendiciones | `GET/POST /api/v1/settlements`; `GET /api/v1/settlements/{id}`; `POST /api/v1/settlements/{id}/liquidate` | Técnico consulta las propias; Administración genera/revisa/liquida |
| Catálogo de precios | `GET /api/v1/catalog/prices` | Técnico consulta precios de técnico; Administración accede a vista autorizada. La respuesta incluye `version` y `updatedAt` para sincronizar la caché |
| Importación de catálogo | `POST /api/v1/integrations/google-sheets/catalog-import` | Solo Administración; publicar únicamente si la importación completa y valida |
| Sincronización de agenda | `POST /api/v1/integrations/google-sheets/schedule-sync`; `GET /api/v1/integrations/status` | Solo Administración |
| Archivos | `POST /api/v1/storage/signed-url`; `POST /api/v1/storage/objects/{id}/confirm`; `GET /api/v1/storage/objects/{id}/download-url` | Go valida usuario, entidad, acción, tipo y tamaño; confirma la carga antes de guardar la asociación y emite URLs de corta duración |

### Reglas que deben cerrarse antes de implementar operaciones

- **Cierre/estado de servicio:** los documentos de flujo asignan acciones de cierre al técnico, mientras el código actual tiene diferencias. Go sigue la regla funcional acordada para cada transición; no se copia automáticamente una restricción de código contradictoria.
- **Rendiciones:** los documentos difieren sobre periodicidad, período, cálculo y agrupación. La lista/ruta de operaciones queda como capacidad objetivo, pero los parámetros, cálculo oficial y transiciones se confirman antes de implementar.
- **Inventario y catálogo:** la importación de precios es distinta de la exportación de agenda. Los campos, validación de filas y estructura de la hoja se especifican con el módulo de Inventario antes de cerrar su endpoint.
- **Métodos específicos para cerrar o modificar cobros:** se habilitan cuando coincidan con las reglas aprobadas; no se agregan por existir en una ruta heredada.

## Permisos

- Cada endpoint protegido valida sesión en Go.
- El rol y la propiedad del recurso se determinan en el servidor, no desde parámetros confiados del cliente.
- La lista de servicios, pagos, presupuestos, rendiciones y archivos de un Técnico debe limitarse a su ámbito autorizado.
- Administración es la única que ejecuta acciones administrativas como finalizar presupuestos o liquidar rendiciones.
- La autorización se aplica también a identificadores conocidos; ocultar enlaces o botones no protege los recursos.

## Reintentos y operaciones offline

Las operaciones que pueden salir de la cola offline deben aceptar una clave de idempotencia única y persistir el resultado de forma que la repetición no cree pagos, cierres, cambios de estado u otros efectos duplicados. La clave se vincula al usuario y a la operación.

La PWA conserva una operación como pendiente hasta recibir confirmación de Go. `4xx` de validación/permiso debe mostrarse como fallo que requiere atención; pérdida de conexión o `5xx` puede reintentarse con la misma clave. El comportamiento de conflictos de dominio se define en `../ingeneri/pwa.md` y `./reglas-negocio.md`.

La respuesta del catálogo incluye una versión publicada y su fecha. La PWA compara esos valores con IndexedDB y descarga el catálogo completo solo cuando la versión difiere; un cambio de versión solo ocurre después de una importación correcta.

## Integraciones y archivos

La API coordina Google Sheets, Resend y Cloudflare R2. Una falla de integración no debe deshacer un servicio ya guardado, excepto que la operación atómica en cuestión sea la propia importación del catálogo: en ese caso se conserva el catálogo publicado anterior.

Go autoriza la creación de URLs firmadas contra R2 (API S3-compatible). El navegador no recibe credenciales de R2 y no puede elegir una key que evada permisos o cambie la entidad propietaria del archivo.

## Migración gradual

La matriz ejecutable por fase está en
[../ejecuciones/implementation-plan.md](../ejecuciones/implementation-plan.md). Cada fila identifica la ruta
heredada, su lógica actual, el reemplazo Go, el cliente que debe cambiar y la
condición para retirar el código de Next.js.

La migración se organiza por capacidad de negocio:

1. Definir operación y permisos según reglas funcionales aprobadas.
2. Implementar el endpoint en Go.
3. Cambiar Next.js/PWA para consumir Go.
4. Verificar el flujo por rol y preservar datos.
5. Retirar la implementación equivalente obsoleta en Next.

Durante una transición, documentar explícitamente qué capacidades ya usan Go y cuáles siguen en el sistema legado. No mantener dos fuentes de escritura activas para una misma capacidad una vez migrada.

## Referencias

- Arquitectura: `../ingeneri/frontend-architecture.md`
- Implementación backend: `./backend.md`
- Reglas funcionales: `./reglas-negocio.md`
- Operación offline: `../ingeneri/pwa.md`
- Storage: `../ingeneri/frontend-storage.md`
