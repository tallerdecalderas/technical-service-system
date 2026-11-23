# Contrato HTTP del backend Go

## Convenciones

- Prefijo: `/api/v1`.
- HTTPS y JSON UTF-8.
- Fechas ISO 8601 con zona horaria.
- Importes decimales sin pérdida de precisión.
- Listas paginadas con `page` y `pageSize`; el servidor limita `pageSize` a
  100 y solo acepta filtros y ordenamientos documentados por recurso.
- Las operaciones reintentables requieren `Idempotency-Key`.
- Go valida siempre sesión, rol, propiedad y transición.

Respuesta correcta:

```json
{"data": {}, "meta": {}}
```

Error:

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

### DTOs, paginación e idempotencia

Cada recurso publica DTOs de lectura y DTOs de entrada separados. Los DTOs de
entrada no aceptan `id`, `createdAt`, `updatedAt`, `createdBy`, estado calculado
ni campos de autorización. Los identificadores se transmiten como UUID y los
importes como strings decimales para evitar pérdida de precisión.

Las colecciones usan:

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

`page` comienza en `1`; `pageSize` por defecto es `25` y no puede superar
`100`. El backend debe rechazar valores inválidos en lugar de aplicar
silenciosamente un límite diferente.

Las mutaciones que puedan reintentarse reciben `Idempotency-Key` con entre 1 y
128 caracteres. Go guarda la clave asociada al usuario, operación, respuesta y
payload. Repetir la misma clave con el mismo payload devuelve el mismo
resultado; reutilizarla con otro payload devuelve `409 CONFLICT`.

En Fase 4, POST/PATCH de clientes, técnicos y servicios, incluido el cambio de
estado y el cierre, requieren esta clave. La ficha de cliente no pertenece a
una empresa física: administración consulta clientes globalmente; un técnico
solo puede abrir clientes vinculados a un servicio propio, y desde allí puede
consultar el historial del cliente según las reglas de negocio.

### Identidad, sesión, CORS y CSRF

La sesión se transporta en una cookie `HttpOnly`, `Secure` fuera de desarrollo,
con `SameSite=Lax`, alcance limitado al dominio de la API y expiración
configurable. El frontend no guarda sesiones, contraseñas, tokens ni secretos
en `localStorage`, `sessionStorage` o IndexedDB.

La API solo permite orígenes incluidos en `CORS_ALLOWED_ORIGINS`; no se
aceptan comodines en producción. Las respuestas incluyen credenciales solo
para esos orígenes y los métodos y encabezados permitidos se mantienen en una
lista explícita.

Las mutaciones autenticadas requieren:

1. validación del encabezado `Origin` contra `CSRF_TRUSTED_ORIGINS`;
2. un token CSRF emitido por Go en una cookie no `HttpOnly`;
3. el mismo token en el encabezado `X-CSRF-Token`.

Las solicitudes sin sesión no requieren CSRF, excepto las operaciones que
creen o consuman tokens de recuperación, que deben usar las protecciones
específicas documentadas por autenticación. Nunca se desactiva CSRF como
solución de un error de integración.

#### Flujo de autenticación

Supabase Auth es el proveedor de identidad, pero el frontend se integra
únicamente con Go:

1. El cliente frontend solicita `POST /api/v1/auth/login` directamente a Go
   con las credenciales; Next.js no funciona como BFF.
2. Go delega la validación de credenciales a Supabase Auth sin exponer claves
   privadas.
3. Go valida el JWT recibido, obtiene `sub`, busca o crea el vínculo en
   `user_identities` y resuelve el `users` interno.
4. Go verifica que el usuario interno esté activo, carga sus roles y emite la
   cookie de sesión de aplicación y el token CSRF.
5. `GET /api/v1/auth/session` devuelve solo el usuario interno, rol y empresas
   necesarios para la interfaz.
6. `POST /api/v1/auth/logout` revoca la sesión de aplicación y limpia cookies.

Las rutas de recuperación son `POST /api/v1/auth/password/forgot` y
`POST /api/v1/auth/password/reset`; sus respuestas no revelan si el correo está
registrado.

El middleware rechaza JWT inválidos por firma, `iss`, `aud`, `sub` o
expiración. Los casos de uso nunca autorizan usando únicamente claims del
proveedor externo. Recuperación y cambio de contraseña se delegan a Supabase
Auth; las respuestas no revelan si el correo existe.

## Endpoints objetivo

### Health checks

| Endpoint | Propósito |
|---|---|
| `GET /health/live` | Confirma que el proceso HTTP está activo, sin depender de PostgreSQL |
| `GET /health/ready` | Confirma que PostgreSQL responde antes de recibir tráfico |

Las respuestas técnicas no incluyen detalles internos de PostgreSQL. Toda
respuesta HTTP incluye `X-Request-ID`; para orígenes CORS permitidos, ese
encabezado es legible por el navegador.

### Endpoints funcionales objetivo

| Módulo | Operaciones |
|---|---|
| Auth | `POST /api/v1/auth/login`, `POST /api/v1/auth/logout`, `GET /api/v1/auth/session`, `POST /api/v1/auth/password/forgot`, `POST /api/v1/auth/password/reset` |
| Empresas | `GET /api/v1/companies` — devuelve ID y nombre de las empresas activas autorizadas para la sesión |
| Clientes | `GET/POST /clients`, `GET/PATCH /clients/{id}` |
| Técnicos | `GET/POST /technicians`, `GET/PATCH /technicians/{id}` |
| Servicios | `GET/POST /services`, `GET/PATCH /services/{id}`, `POST /services/{id}/status`, `POST /services/{id}/finish` |
| Agenda | `GET /schedule` |
| Historial | `GET /services/{id}/history` |
| Cobros | `GET/POST /payments`, `GET/PATCH /payments/{id}` |
| Repuestos | `GET/POST /services/{serviceId}/parts`, `PATCH/DELETE /services/{serviceId}/parts/{partId}` |
| Gastos de servicio | `GET/POST /services/{serviceId}/expenses`, `PATCH/DELETE /services/{serviceId}/expenses/{expenseId}` |
| Presupuestos | `GET/POST /estimates`, `GET /estimates/{id}`, `POST /estimates/{id}/finalize` |
| Rendiciones | `GET/POST /settlements`, `GET/PATCH /settlements/{id}`, `POST /settlements/{id}/liquidate` |
| Catálogo | `GET /catalog/prices` (`includeInactive=true` solo ADMIN), `GET/POST /catalog/providers`, `PATCH /catalog/providers/{id}`, `GET/POST /catalog/offers`, `PATCH /catalog/offers/{id}`, `GET /catalog/exchange-rates/latest`, `POST /catalog/exchange-rates`, `PATCH /catalog/items/{id}`, `POST /catalog/import`, `POST /integrations/google-sheets/catalog-import` |
| Storage | `POST /storage/signed-url`, `POST /storage/objects/{id}/confirm`, `GET /storage/objects/{id}/download-url`, `DELETE /storage/objects/{id}` |
| Integraciones | `POST /integrations/google-sheets/schedule-sync`, `GET /integrations/status`, `POST /integrations/whatsapp/log` |

### Fase 7 — Storage de archivos (Cloudflare R2)

El almacenamiento de archivos usa transferencia directa navegador-R2 mediante URLs prefirmadas emitidas por Go. Todas las rutas requieren sesión activa y validación de membresía/rol de la empresa propietaria.

#### 1. Solicitar URL de carga: `POST /api/v1/storage/signed-url`

Request DTO:

```json
{
  "entityType": "service",
  "entityId": "a1b2c3d4-0000-0000-0000-000000000001",
  "category": "photos",
  "originalFilename": "reparacion_motor.jpg",
  "contentType": "image/jpeg",
  "expectedSizeBytes": 2048576
}
```

Go valida:
- Permisos del usuario activo sobre la entidad y que pertenezca a su empresa.
- Categoría permitida (`photos`, `receipts`, `documents`).
- MIME en allowlist (`image/jpeg`, `image/png`, `image/webp`, `application/pdf`).
- Tamaño dentro del límite configurado para la categoría.

Response (201 Created):

```json
{
  "data": {
    "objectId": "b2c3d4e5-0000-0000-0000-000000000002",
    "uploadUrl": "https://<ACCOUNT_ID>.r2.cloudflarestorage.com/private-bucket/companies/...?",
    "method": "PUT",
    "headers": {
      "Content-Type": "image/jpeg",
      "If-None-Match": "*",
      "x-amz-meta-upload-id": "c3d4e5f6-0000-0000-0000-000000000003"
    },
    "expiresAt": "2026-11-12T20:05:00Z"
  }
}
```

El navegador debe ejecutar `PUT` directamente contra R2 enviando exactamente los headers firmados (`Content-Type`, `If-None-Match`, `x-amz-meta-upload-id`). Si la key ya existe, R2 responde `412 Precondition Failed`.

#### 2. Confirmar carga: `POST /api/v1/storage/objects/{id}/confirm`

El cliente notifica a Go una vez finalizado el `PUT`. Go ejecuta `HeadObject` contra R2, comprueba que el tamaño real y `Content-Type` coincidan con lo autorizado, verifica la metadata `x-amz-meta-upload-id` y actualiza el estado a `AVAILABLE`.

Response (200 OK):

```json
{
  "data": {
    "id": "b2c3d4e5-0000-0000-0000-000000000002",
    "status": "AVAILABLE",
    "sizeBytes": 2048576,
    "contentType": "image/jpeg",
    "confirmedAt": "2026-11-12T20:01:30Z"
  }
}
```

Confirmaciones repetidas de un objeto ya `AVAILABLE` son idempotentes y devuelven el mismo resultado con código `200`.

#### 3. Obtener URL de descarga: `GET /api/v1/storage/objects/{id}/download-url`

Go verifica autorización activa sobre la entidad y emite una URL `GET` prefirmada de vida corta (2 minutos) contra R2.

Response (200 OK):

```json
{
  "data": {
    "downloadUrl": "https://<ACCOUNT_ID>.r2.cloudflarestorage.com/private-bucket/...?",
    "expiresAt": "2026-11-12T20:03:30Z"
  }
}
```

#### 4. Solicitar eliminación: `DELETE /api/v1/storage/objects/{id}`

Go valida permisos sobre la entidad y marca el objeto como `DELETE_PENDING`. Un job asíncrono espera a que venza la URL de carga original antes de invocar `DeleteObject` en R2, actualizando finalmente a `DELETED`.

Response (202 Accepted):

```json
{
  "data": {
    "id": "b2c3d4e5-0000-0000-0000-000000000002",
    "status": "DELETE_PENDING"
  }
}
```

### Fase 6 — gastos, catálogo y rendiciones

- Los gastos usan `GET/POST /services/{serviceId}/expenses` y
  `PATCH/DELETE /services/{serviceId}/expenses/{expenseId}`. El técnico solo
  opera servicios propios en `IN_PROGRESS`/`COMPLETED`; ADMIN corrige dentro de
  sus empresas. Las mutaciones se bloquean cuando el servicio ya pertenece a
  una rendición `PAID`/`LIQUIDATED`.
- `GET /catalog/prices` es de solo lectura. ADMIN recibe costos internos,
  margen y ganancia; TECHNICIAN recibe únicamente `techPrice` y campos
  visibles. La respuesta incluye `meta.version` y `meta.updatedAt`.
- Proveedores, ofertas, cotizaciones y ajuste de precios son ADMIN. Una oferta
  activa por artículo; una cotización por fecha. Los porcentajes son puntos
  porcentuales (`0`–`1000`) y los importes se redondean HALF_UP a dos
  decimales.
- `POST /catalog/import` recibe `multipart/form-data` con `companyId` y el archivo
  `file` (.csv). Go valida el archivo completo y publica atómicamente. Si la
  lectura, cabeceras o filas tienen errores responde `422` con `details` por
  fila y un registro `FAILED`; no altera el catálogo activo.
- Las rendiciones usan fechas inclusivas en ART, no se solapan por técnico y
  exponen `PENDING`/`LIQUIDATED` (la base `PAID` se proyecta como
  `LIQUIDATED`). Generar, corregir y liquidar requieren `Idempotency-Key`.
  Corregir solo está permitido en `PENDING`; liquidar congela el snapshot.

## Códigos

`200` correcto, `201` creado, `204` sin contenido, `400` entrada inválida,
`401` sin sesión, `403` sin permiso, `404` no visible/inexistente, `409`
conflicto, `422` regla de dominio, `429` límite, `500` interno y `502`
dependencia externa.

## Seguridad

No devolver contraseñas, tokens, secretos, SQL ni trazas. La recuperación de
contraseña no revela si un email existe. Las claves privadas de Supabase,
Resend y Google permanecen server-side.

### Estados y autorización de servicios

Los únicos estados aceptados son `PENDING`, `IN_PROGRESS`, `COMPLETED` y
`CANCELLED`. Go rechaza estados desconocidos, reaperturas y transiciones fuera
de `PENDING -> IN_PROGRESS | CANCELLED` e
`IN_PROGRESS -> COMPLETED | CANCELLED`.

Administración realiza el alta completa y las operaciones administrativas. El
técnico solo puede operar servicios asignados y `POST /services/{id}/finish`
debe validar el formulario de cierre antes de cambiar el estado a
`COMPLETED`. Cada transición escribe un `ActivityLog`.
