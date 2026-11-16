# Archivos y Storage — Cloudflare R2

**Fase:** 7.  
**Proveedor de producción seleccionado:** Cloudflare R2.  
**Estado:** decisión arquitectónica aprobada; implementación backend y migración SQL pendientes.

## 1. Decisión y límites

Cloudflare R2 es el almacenamiento de objetos para fotografías, comprobantes, documentos y demás binarios de TechService. **Supabase Storage no se utiliza.** Supabase continúa siendo proveedor de identidad (Auth) y PostgreSQL; R2 se usa exclusivamente para objetos.

Go es el único componente que autentica y autoriza operaciones sobre archivos. El navegador recibe únicamente URLs prefirmadas de vida corta para transferir un objeto concreto. PostgreSQL conserva metadatos, propiedad, relación funcional y estado; R2 conserva los bytes. No guardar binarios grandes ni URLs prefirmadas en PostgreSQL.

La implementación se mantiene desacoplada mediante un puerto de aplicación y un adaptador S3-compatible. En producción el endpoint de ese adaptador apunta a R2. Así el dominio y los casos de uso no importan SDKs ni tipos de Cloudflare/AWS y, si en el futuro se cambia a otro servicio S3-compatible, se sustituye configuración/adaptador sin reescribir las reglas de negocio.

## 2. Arquitectura y dependencias Go

Responsabilidades:

- `application`: casos de uso de solicitar carga, confirmar, emitir descarga y eliminar.
- `ports/outbound`: interfaz `ObjectStorage` y tipos propios (`ObjectRef`, `UploadSpec`, `DownloadSpec`, `ObjectInfo`, `PresignedRequest`).
- `adapters/storage/s3compatible`: implementación con AWS SDK for Go v2 configurada para Cloudflare R2.
- `adapters/postgres`: repositorio de metadatos `stored_objects`.
- `adapters/http`: DTOs, autenticación, CSRF, límites HTTP y traducción de errores.
- `config`: carga y validación de credenciales, endpoint, bucket y TTL.

Estructura orientativa:

```text
internal/
├── application/storage/
│   ├── request_upload.go
│   ├── confirm_upload.go
│   ├── create_download_url.go
│   └── delete_object.go
├── ports/outbound/
│   └── object_storage.go
├── adapters/
│   ├── http/
│   │   ├── storage_handlers.go
│   │   └── storage_local_handlers.go   # Handlers PUT/GET solo para modo local
│   ├── postgres/stored_object_repository.go
│   └── storage/
│       ├── filesystem/                 # Adaptador local para pruebas simples en disco
│       │   └── client.go
│       └── s3compatible/               # Adaptador para Cloudflare R2 (producción)
│           ├── client.go
│           ├── presigner.go
│           ├── objects.go
│           └── errors.go
└── config/storage.go
```

### Estrategia de pruebas en local (Filesystem) y desacoplamiento de Cloudflare R2

Para facilitar el desarrollo sin requerir conexión a internet ni cuenta de Cloudflare activa desde el primer día, se implementan dos adaptadores detrás de la misma interfaz `ObjectStorage`:

1. **Modo Local (`STORAGE_PROVIDER=local`):**
   - Usa `adapters/storage/filesystem`.
   - Almacena archivos binarios en una carpeta del disco local (`STORAGE_LOCAL_DIR=./uploads`).
   - `CreateUploadURL` emite una URL temporal que apunta al endpoint de la API Go: `PUT /api/v1/storage/local-upload/{uploadAttemptId}`.
   - `CreateDownloadURL` emite una URL hacia `GET /api/v1/storage/local-download/{id}`.
   - `HeadObject` verifica la existencia y tamaño del archivo en disco.
   - `DeleteObject` elimina el archivo de la carpeta local.
   - **Beneficio:** El frontend y los casos de uso ejecutan el flujo idéntico (solicitar URL → PUT directo → confirmar con Go), pero sin dependencias externas.

2. **Modo Producción (`STORAGE_PROVIDER=r2`):**
   - Usa `adapters/storage/s3compatible`.
   - Transfiere directo a Cloudflare R2 con URLs prefirmadas S3.

**Desacoplamiento total:** Al terminar las pruebas locales, para conectarse a Cloudflare R2 **no se modifica código de aplicación ni de dominio**. Simplemente se define `STORAGE_PROVIDER=r2` y se cargan las credenciales R2 en el archivo `.env`.

Dependencias directas esperadas:

```text
github.com/aws/aws-sdk-go-v2/config
github.com/aws/aws-sdk-go-v2/credentials
github.com/aws/aws-sdk-go-v2/service/s3
```

Usar AWS SDK for Go v2 porque R2 expone una API compatible con S3. No agregar un SDK de Supabase Storage ni un SDK propietario de Cloudflare para el flujo de objetos.

### Puerto de aplicación

El puerto expresa capacidades, no operaciones de un proveedor:

```go
// Firma orientativa: los tipos de entrada/salida son propios del proyecto.
type ObjectStorage interface {
    CreateUploadURL(ctx context.Context, input UploadSpec) (PresignedRequest, error)
    CreateDownloadURL(ctx context.Context, input DownloadSpec) (PresignedRequest, error)
    HeadObject(ctx context.Context, ref ObjectRef) (ObjectInfo, error)
    DeleteObject(ctx context.Context, ref ObjectRef) error
}
```

`ObjectRef` contiene bucket/key internos. `UploadSpec` contiene key, content type, tamaño esperado y expiración. `PresignedRequest` contiene URL, método, headers obligatorios y vencimiento. `UploadSpec` incluye un `uploadAttemptId` aleatorio. No devolver tipos `s3.*` fuera del adaptador.

### Configuración del cliente R2

El endpoint S3 de R2 tiene la forma `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`; la región requerida por el SDK es `auto`. El adaptador debe configurar `BaseEndpoint` en el cliente S3 y credenciales Access Key ID / Secret Access Key procedentes del entorno o secret manager. No codificar credenciales en el repositorio ni usar credenciales de usuario de Cloudflare.

Ejemplo de inicialización orientativo (manejar errores y validar configuración antes de servir tráfico):

```go
cfg, err := config.LoadDefaultConfig(
    ctx,
    config.WithRegion("auto"),
    config.WithCredentialsProvider(
        credentials.NewStaticCredentialsProvider(accessKeyID, secretAccessKey, ""),
    ),
)
if err != nil {
    return nil, fmt.Errorf("load storage config: %w", err)
}

client := s3.NewFromConfig(cfg, func(o *s3.Options) {
    o.BaseEndpoint = aws.String(endpoint)
})
presigner := s3.NewPresignClient(client)
```

Ejemplo orientativo del método de carga (adaptar tipos propios, imports, logging y traducción de errores):

```go
func (c *Client) CreateUploadURL(
    ctx context.Context,
    in UploadSpec,
) (PresignedRequest, error) {
    result, err := c.presigner.PresignPutObject(
        ctx,
        &s3.PutObjectInput{
            Bucket:      aws.String(in.Bucket),
            Key:         aws.String(in.Key),
            ContentType: aws.String(in.ContentType),
            IfNoneMatch: aws.String("*"),
            Metadata: map[string]string{
                "upload-id": in.UploadAttemptID,
            },
        },
        func(opts *s3.PresignOptions) {
            opts.Expires = in.ExpiresIn
        },
    )
    if err != nil {
        return PresignedRequest{}, fmt.Errorf("presign R2 upload: %w", err)
    }

    return PresignedRequest{
        URL:    result.URL,
        Method: http.MethodPut,
        Headers: map[string]string{
            "Content-Type":       in.ContentType,
            "If-None-Match":      "*",
            "x-amz-meta-upload-id": in.UploadAttemptID,
        },
        ExpiresAt: time.Now().UTC().Add(in.ExpiresIn),
    }, nil
}
```

Para descarga, `PresignGetObject` firma únicamente `Bucket` y `Key` registrados en PostgreSQL y limita `Expires` a `STORAGE_DOWNLOAD_URL_TTL`. Nunca aceptar esos campos desde el DTO del navegador.

Con los métodos `CreateUploadURL`/`CreateDownloadURL`, el adaptador usa `PresignPutObject` y `PresignGetObject`; también implementa `HeadObject` y `DeleteObject`. El `PutObject` de la URL de carga se firma con `IfNoneMatch: aws.String("*")` y metadata `upload-id` única. R2 evalúa `If-None-Match: *` atómicamente y responde `412` si la key ya existe. La versión del AWS SDK for Go v2 fijada en `go.mod` debe incluir `PutObjectInput.IfNoneMatch`. El navegador debe enviar exactamente los headers firmados: `Content-Type`, `If-None-Match: *` y `x-amz-meta-upload-id`. Así la misma URL no puede sobrescribir el objeto confirmado mientras la key siga existiendo.

Si un PUT termina con timeout o se pierde su respuesta, Go reconcilia con `HeadObject` y compara `x-amz-meta-upload-id` antes de decidir si el objeto subió. No asumir que un error de red significa que el objeto no se escribió. Firmar una URL no requiere que el navegador reciba ni conozca las credenciales S3.

## 3. Buckets, claves y aislamiento multiempresa

- Un bucket privado por entorno (desarrollo, staging y producción); no compartir credenciales entre entornos.
- El token R2 de cada entorno debe limitarse al bucket correspondiente y a permisos de lectura/escritura de objetos. No conceder administración de cuenta/buckets al proceso HTTP si no la necesita.
- Aislamiento lógico por `company_id` en PostgreSQL y prefijo de objeto. La separación por prefijo **no reemplaza** la autorización Go.
- Clave generada exclusivamente por Go, con UUID aleatorio; nunca aceptar bucket o `object_key` del cliente.
- No usar nombres originales, emails, CUIT u otros datos personales en keys.

Convención inicial:

```text
companies/{companyId}/services/{serviceId}/{category}/{objectId}
```

`category` usa una lista cerrada (por ejemplo `photos`, `receipts`, `documents`). Se recomienda no incorporar el nombre original ni una extensión controlada por el usuario a la key. `Content-Type` y nombre de descarga son metadatos separados.

La autorización se resuelve en Go usando usuario interno, membresía activa, rol, empresa propietaria, relación del archivo con la entidad y estado del servicio. El cliente no puede seleccionar libremente `companyId`, tenant, bucket, key ni propietario.

## 4. Flujo de carga (direct-to-R2)

1. El cliente autenticado llama `POST /api/v1/storage/signed-url` con entidad, categoría, nombre original, MIME declarado y tamaño esperado.
2. Go obtiene el usuario y empresa desde la sesión/membresía; no acepta `companyId` como fuente de autorización. Valida rol, propiedad de la entidad, categoría, tamaño y allowlist MIME.
3. Go genera `objectId`, key y `uploadAttemptId` aleatorios; inserta `stored_objects` con estado `PENDING` y la expiración de la URL; genera una URL `PUT` prefirmada con `If-None-Match: *` y metadata `upload-id`. Si falla la firma, deja el registro en `FAILED` o compensa la creación.
4. Go devuelve URL, método y headers que deben enviarse exactamente. El navegador ejecuta `PUT` directamente contra R2; el binario no pasa por Go ni por Next.js.
5. El cliente llama `POST /api/v1/storage/objects/{id}/confirm`.
6. Go vuelve a autorizar el registro `PENDING`, ejecuta `HeadObject` y compara tamaño y `Content-Type` con lo autorizado. También realiza las comprobaciones de contenido descritas en Seguridad.
7. Solo después de validar, Go actualiza a `AVAILABLE` y vincula el objeto con la entidad. La metadata `upload-id` obtenida por HEAD debe coincidir con el intento registrado en PostgreSQL. El frontend no muestra el archivo como guardado antes de ese estado.

Si la transferencia o confirmación falla, el objeto no se considera adjunto. El frontend puede pedir una nueva autorización; la API debe evitar asociaciones duplicadas. La confirmación repetida de un objeto ya `AVAILABLE` devuelve el mismo resultado sin duplicar asociaciones. Si PUT/response tiene timeout, HEAD que devuelve 404 inmediatamente no demuestra que no exista una escritura en curso: reconciliar/reintentar con el mismo `uploadAttemptId` y verificar la metadata. Un `412` por `If-None-Match` puede indicar que el primer intento ya creó el objeto.

## 5. Flujo de descarga

1. Cliente solicita `GET /api/v1/storage/objects/{id}/download-url`.
2. Go consulta `stored_objects` por `id`, `company_id` autorizado y estado `AVAILABLE`; valida permiso sobre la entidad relacionada.
3. Go emite URL `GET` prefirmada de corta duración para el bucket/key registrados.
4. El navegador descarga directamente desde R2.

No devolver rutas internas como mecanismo de autorización ni persistir URLs firmadas. La API puede generar una URL nueva en cada solicitud. Para documentos, utilizar disposición `attachment` cuando corresponda; para imágenes aprobadas, `inline` con `Content-Type` validado y `X-Content-Type-Options: nosniff` en la estrategia de entrega.

## 6. Eliminación y ciclo de vida

Estados de `stored_objects`:

- `PENDING`: URL emitida; carga aún no confirmada.
- `AVAILABLE`: objeto validado y asociado.
- `DELETE_PENDING`: eliminación lógica aprobada; falta confirmar borrado remoto.
- `DELETED`: objeto eliminado en R2 y registro conservado como tombstone/auditoría.
- `FAILED`: carga o confirmación fallida; no visible como adjunto.

La eliminación autorizada primero marca `DELETE_PENDING` y responde `202 Accepted`. Un worker/job ejecuta `DeleteObject` solo después de que haya vencido la URL `PUT` original (más un margen de reloj/red) y finalmente marca `DELETED`. La espera evita que una URL de carga todavía válida recree el objeto después del borrado. Si R2 falla, el estado queda pendiente para reintento. No eliminar primero la fila SQL, porque se perdería la referencia necesaria para reintentar.

Un job periódico debe detectar `PENDING` vencidos y `DELETE_PENDING` antiguos. Para `PENDING`, esperar URL vencida + margen, verificar si existe el objeto y eliminarlo si corresponde; marcarlo `FAILED`/expirado sin asociarlo. La retención y frecuencia del job se configuran por entorno. Los uploads multipart abandonados se limpian con una regla lifecycle de R2; multipart no forma parte de la primera implementación.

## 7. Contrato de API

| Método | Endpoint | Responsabilidad |
|---|---|---|
| POST | `/api/v1/storage/signed-url` | Autorizar carga y emitir URL `PUT` |
| POST | `/api/v1/storage/objects/{id}/confirm` | Verificar objeto y marcar `AVAILABLE` |
| GET | `/api/v1/storage/objects/{id}/download-url` | Autorizar y emitir URL `GET` |
| DELETE | `/api/v1/storage/objects/{id}` | Solicitar eliminación autorizada |

Los DTOs, ejemplos y códigos de respuesta están en [`../api.md`](../api.md). Todas las rutas requieren sesión. Las mutaciones pasan por la protección CSRF de la API. La petición directa a R2 no usa cookie de aplicación: la URL prefirmada es una credencial temporal limitada a una operación/objeto.

## 8. PostgreSQL: metadatos

Crear `stored_objects` mediante migración SQL versionada, revisada y aplicada por el operador. La tabla no está confirmada en el baseline físico actual. Debe contener al menos:

| Columna | Tipo lógico | Regla |
|---|---|---|
| `id` | uuid | PK, generado por backend |
| `company_id` | uuid | Empresa propietaria |
| `storage_provider` | text | `r2` inicialmente; permite migración futura |
| `bucket_name` | text | Bucket privado del entorno |
| `object_key` | text | Key interna única |
| `entity_type` | text | Tipo de entidad permitida |
| `entity_id` | uuid | Identificador de entidad; relación polimórfica validada por Go |
| `category` | text | Categoría cerrada |
| `original_filename` | text | Nombre saneado, solo para presentación |
| `content_type` | text | MIME validado |
| `expected_size_bytes` | bigint | Tamaño declarado al solicitar la URL; no confiable por sí solo |
| `size_bytes` | bigint nullable | Tamaño real confirmado por `HeadObject` |
| `checksum_sha256` | text nullable | Solo si se calcula/verifica realmente |
| `uploaded_by_id` | uuid | Usuario interno que inició la carga |
| `status` | text | `PENDING`, `AVAILABLE`, `DELETE_PENDING`, `DELETED`, `FAILED` |
| `created_at` | timestamptz | Alta |
| `upload_url_expires_at` | timestamptz | Vencimiento de la URL PUT emitida; se usa para evitar recreación por replay después de borrar |
| `upload_attempt_id` | uuid | Identificador firmado en metadata R2 para reconciliar el intento exacto |
| `confirmed_at` | timestamptz nullable | Confirmación |
| `deleted_at` | timestamptz nullable | Borrado físico confirmado |

Restricciones/índices: `UNIQUE(storage_provider, bucket_name, object_key)`; índice por `(company_id, status, created_at)`; índice por `(entity_type, entity_id, status)`; `CHECK` para estados y categorías. Agregar claves foráneas a `company` y `user` una vez contrastados los nombres/tipos exactos del esquema físico. La relación polimórfica `entity_type/entity_id` se valida en el repositorio/caso de uso porque apunta a más de una tabla.

Guardar `bucket_name` y `object_key`, nunca la URL prefirmada. `storage_provider` debe ser una etiqueta controlada por backend, no una selección del navegador. Evitar exponer `object_key` si el cliente no la necesita.

No mantener una transacción PostgreSQL abierta durante llamadas HTTP a R2. Crear/actualizar estados en transacciones cortas y tratar las operaciones externas mediante estados explícitos, compensaciones y reintentos.

## 9. Seguridad y validación de contenido

- Bucket privado, sin `r2.dev` ni dominio público habilitado para documentos/fotos privadas.
- Tokens R2 exclusivamente server-side; no incluirlos en `NEXT_PUBLIC_*`, código del navegador, Service Worker, IndexedDB, logs ni respuestas API.
- Crear tokens con permisos mínimos de objetos y scope al bucket de cada entorno. Rotar y revocar credenciales ante exposición.
- URLs firmadas con TTL inicial recomendado: carga `5m`, descarga `2m`; definir límites configurables y renovarlas cuando expiren. R2 admite expiraciones más largas, pero no se necesitan para este caso.
- Validar tamaño declarado antes de firmar y tamaño real después de transferir. El `sizeBytes` enviado por navegador no es confiable y `HeadObject` solo permite rechazar/eliminar un objeto sobredimensionado después de que llegó a R2; no es un límite preventivo de bytes. Para imponer un tope estricto antes de aceptar el cuerpo, introducir un Worker/gateway de validación o un proxy de carga controlado, evaluando su coste operativo. La firma de `Content-Type` no prueba que el contenido sea realmente ese formato.
- Allowlist inicial sugerida: `image/jpeg`, `image/png`, `image/webp`, `application/pdf`. Rechazar SVG, HTML, JavaScript y formatos no requeridos hasta tener un sanitizador/proceso seguro.
- En confirmación, verificar `HeadObject`; para validar contenido real, inspeccionar magic bytes y/o ejecutar un proceso de análisis (antivirus/decoder) antes de `AVAILABLE`. `HeadObject` por sí solo no demuestra el formato ni la ausencia de malware.
- No tratar `ETag` como SHA-256 ni asumir que siempre es MD5, especialmente con multipart. Persistir checksum solo cuando se calcule y verifique con un mecanismo explícito.
- Sanitizar `original_filename`; no usarlo para construir keys ni headers sin encoding seguro.
- Rate limit y cuota por empresa/usuario; registrar actor, empresa, objectId, operación, tamaño y resultado, nunca la URL firmada ni secretos.
- Evitar que un error de R2 afecte operaciones de negocio ajenas al archivo.

## 10. CORS del bucket R2

La CORS de la API Go y la CORS del bucket son configuraciones diferentes. Para transferencias browser-to-R2 configurar en el bucket únicamente los orígenes exactos de cada frontend (desarrollo y producción), los métodos requeridos (`PUT`, `GET`, opcionalmente `HEAD`) y headers enviados por el browser: `Content-Type`, `If-None-Match` y `x-amz-meta-upload-id`; agregar otros solo cuando se implementen. Exponer `ETag` solo si la UI realmente lo necesita. No usar `*` en producción.

Ejemplo de política (reemplazar los dominios por los reales de cada ambiente):

```json
[
  {
    "AllowedOrigins": ["https://app.example.com"],
    "AllowedMethods": ["PUT", "GET"],
    "AllowedHeaders": ["Content-Type", "If-None-Match", "x-amz-meta-upload-id"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

CORS no autentica: la autorización efectiva de la operación la proporciona la URL firmada y la autorización previa realizada por Go. Sin CORS correcto el navegador puede bloquear la lectura de la respuesta aunque la firma sea válida.

Las URLs prefirmadas deben usar el endpoint S3 de R2 (`<ACCOUNT_ID>.r2.cloudflarestorage.com`); no sustituirlo por un dominio personalizado. Si en el futuro se usa dominio público para contenido público, debe tratarse como otro caso de uso/bucket y no como bypass de archivos privados.

## 11. Límites, rendimiento y evolución

Primera versión: `PutObject` directo con URL firmada. Definir límites iniciales por categoría en configuración y política funcional (por ejemplo, 10 MiB por imagen y 20 MiB por PDF como valores iniciales revisables). No habilitar multipart hasta que haya un requisito real de archivos grandes o reanudación; al implementarlo, documentar `CreateMultipartUpload`, firma por parte, `CompleteMultipartUpload`, abort y limpieza lifecycle.

No hacer proxy del binario a través de Go salvo requisito explícito de inspección/transformación. Para imágenes que deban normalizarse, puede agregarse un pipeline posterior asíncrono que descargue, valide/re-encodee y publique una versión final.

## 12. Operación, backups y observabilidad

- Separar buckets y credenciales por ambiente.
- Alertar por errores/latencia de operaciones R2, objetos `PENDING` antiguos, `DELETE_PENDING`, uso/cuota y rechazos por tamaño.
- Mantener logs estructurados con `request_id`, `object_id`, `company_id`, operación y resultado; redactar URL firmada, query string, access key y secret.
- No hacer una llamada R2 en cada `/health/ready`; la readiness base verifica PostgreSQL. Publicar métricas/alertas de dependencia por separado para no convertir una falla temporal de R2 en caída de toda la API.
- Definir estrategia de recuperación para binarios y metadatos. Un backup de PostgreSQL no respalda los objetos R2; una copia de objetos sin metadatos tampoco reconstruye asociaciones. Para datos críticos definir copia independiente/exportación y ejecutar restauraciones de forma periódica.
- R2 lifecycle se usa para multipart incompletos y reglas de retención aprobadas; no configurar expiración de objetos activos por defecto.

## 13. Pendientes de implementación (no decisiones abiertas)

La selección de proveedor final está cerrada: Cloudflare R2 (con soporte inicial de filesystem local para pruebas). Antes de marcar Fase 7 completa queda implementar y verificar:

1. Puerto y tipos `ObjectStorage` sin tipos del SDK en aplicación/dominio.
2. Adaptador local simple `filesystem` (`adapters/storage/filesystem`) para pruebas en disco (`./uploads`) sin dependencias de Cloudflare.
3. Adaptador S3-compatible para Cloudflare R2 (`adapters/storage/s3compatible`), inicialización, presigner, `HeadObject` y `DeleteObject`.
4. Configuración tipada (`STORAGE_PROVIDER=local|r2`, `STORAGE_LOCAL_DIR`, variables `STORAGE_*`), validación de entorno y `example.env`.
5. Migración `stored_objects`, repositorio y estados (`PENDING`, `AVAILABLE`, `DELETE_PENDING`, `DELETED`, `FAILED`).
6. Casos de uso y endpoints con autorización multiempresa.
7. CORS del bucket R2 (headers firmados `Content-Type`, `If-None-Match`, `x-amz-meta-upload-id`), token R2 restringido y buckets por entorno.
8. Confirmación real (`HeadObject`), limpieza de pendientes, eliminación reintentable y observabilidad.
9. Verificación de conmutación sin cambios de código: validar en local con `STORAGE_PROVIDER=local` y luego conectar a Cloudflare R2 con `STORAGE_PROVIDER=r2`.
10. Verificación operativa común del proyecto (build, arranque y health checks); las pruebas automatizadas se realizan en la validación global según el plan vigente.

## Referencias

- [Cloudflare R2 — AWS SDK for Go v2](https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/)
- [Cloudflare R2 — S3 API compatibility](https://developers.cloudflare.com/r2/api/s3/api/)
- [Cloudflare R2 — Conditional operations](https://developers.cloudflare.com/r2/api/s3/conditional-operations/)
- [Cloudflare R2 — Presigned URLs](https://developers.cloudflare.com/r2/api/s3/presigned-urls/)
- [Cloudflare R2 — API tokens](https://developers.cloudflare.com/r2/api/tokens/)
- [Cloudflare R2 — CORS](https://developers.cloudflare.com/r2/buckets/cors/)
- [Cloudflare R2 — Object lifecycles](https://developers.cloudflare.com/r2/buckets/object-lifecycles/)
- [AWS SDK for Go v2 — Configure the SDK](https://docs.aws.amazon.com/sdk-for-go/v2/developer-guide/configure-gosdk.html)
- [Modelo de dominio](../../modelo-dominio.md)
- [Contrato API](../api.md)
- [Arquitectura backend](../../ingeneri/backend-architecture.md)
- [Especificación transversal de Storage](../../ingeneri/storage.md)
- [Fase 7](../../ejecuciones/backend-implementation-plan.md)
