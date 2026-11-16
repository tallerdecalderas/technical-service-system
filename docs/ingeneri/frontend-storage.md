# Almacenamiento de archivos — TechService (frontend)

## Proveedor y responsabilidades

Cloudflare R2 almacena fotografías, comprobantes y otros archivos del sistema
mediante transferencia directa navegador-R2 con URLs prefirmadas. PostgreSQL
conserva la entidad asociada, la key del objeto, el estado y los metadatos
necesarios; no almacena los binarios grandes.

La API Go controla el acceso. El navegador nunca recibe credenciales de R2 ni
del SDK S3 y no decide libremente la key o el propietario del archivo.

## Flujo de carga y descarga

1. El cliente solicita a Go acceso para cargar o descargar un archivo e
   identifica el servicio/entidad relacionada.
2. Go valida la sesión, el rol, la propiedad de la entidad y las reglas de
   negocio.
3. Go genera una key interna (UUID), inserta el registro `PENDING` en
   PostgreSQL y firma una URL `PUT` de corta duración contra R2 con
   `If-None-Match: *` y metadata `upload-id`.
4. El navegador ejecuta `PUT` directamente contra R2 enviando exactamente los
   headers firmados (`Content-Type`, `If-None-Match: *`,
   `x-amz-meta-upload-id`). El binario no pasa por Go ni por Next.js.
5. El navegador solicita a Go confirmar la carga
   (`POST /api/v1/storage/objects/{id}/confirm`); Go ejecuta `HeadObject`
   contra R2, verifica tamaño, `Content-Type` y `upload-id`, y marca el estado
   como `AVAILABLE`.
6. Go registra en PostgreSQL los metadatos validados y la asociación con la
   entidad. Si la carga no se confirma, el archivo no se muestra como adjunto
   guardado.

Para descarga, Go emite una URL `GET` prefirmada de vida corta (2 minutos) y
el navegador descarga directamente desde R2.

Si la transferencia falla, la interfaz debe informar que el archivo no quedó
confirmado y permitir reintentar sin crear asociaciones duplicadas. Los datos
no deben mostrarse como guardados hasta completar la confirmación
correspondiente. Si R2 responde `412 Precondition Failed`, puede significar que
un intento anterior ya creó el objeto.

## Organización de objetos

Las keys las genera exclusivamente Go con UUIDs no predecibles, organizadas
por empresa, entidad y categoría:

```text
companies/{companyId}/services/{serviceId}/{category}/{objectId}
```

`category` usa una lista cerrada (`photos`, `receipts`, `documents`). No se
usan nombres originales, extensiones controladas por el usuario ni datos
personales en la key.

Go debe construir la key; no confiar en rutas arbitrarias del cliente. El bucket
debe ser privado; no habilitar `r2.dev` ni dominio público para documentos/fotos
privadas.

## Metadatos en PostgreSQL

La tabla `stored_objects` (migración pendiente del operador) contiene al menos:

- identificador del archivo (`id`)
- empresa propietaria (`company_id`)
- tipo de entidad e identificador asociado (`entity_type`, `entity_id`)
- key del objeto en R2 (`object_key`) y bucket (`bucket_name`)
- nombre original saneado, solo para presentación (`original_filename`)
- tipo de contenido validado y tamaño (`content_type`, `size_bytes`)
- estado del ciclo de vida (`PENDING`, `AVAILABLE`, `DELETE_PENDING`,
  `DELETED`, `FAILED`)
- usuario que lo cargó y fecha

No guardar contenido binario dentro de PostgreSQL. Evitar exponer keys,
nombres o rutas sensibles en logs.

## Validación y protección

Antes de emitir una URL firmada, Go valida:

- sesión y permiso sobre la entidad propietaria
- operación permitida (carga o descarga)
- tamaño máximo y tipos de contenido en allowlist (`image/jpeg`, `image/png`,
  `image/webp`, `application/pdf`)
- asociación entre archivo y servicio, comprobante u otra entidad
- categoría dentro de la lista cerrada

Los errores de Go/R2 deben ser explícitos; una falla de archivo no debe
bloquear operaciones ajenas al archivo.

## Seguridad y credenciales

- Mantener endpoint, Access Key y Secret de R2 solo en el backend Go.
- No guardar secretos ni tokens R2 en `NEXT_PUBLIC_*`, Next.js público, el
  Service Worker, IndexedDB ni `localStorage`.
- Aplicar políticas privadas de bucket y acceso de mínimo privilegio; crear
  tokens R2 con scope al bucket del entorno y permisos de objetos únicamente.
- Go autoriza antes de emitir URLs firmadas; la URL prefirmada es una
  credencial temporal limitada a una operación/objeto, no un sustituto de la
  autenticación.
- Las URLs firmadas no se registran en logs ni se reutilizan como enlaces
  permanentes.

## Uso desde la PWA

El técnico selecciona o captura la imagen desde la interfaz, pero el flujo de
autorización y emisión de acceso pasa por Go. Si el dispositivo está offline,
la imagen y la operación pueden quedar pendientes localmente en IndexedDB; no
se consideran cargadas hasta que R2 reciba el binario y Go confirme su
asociación. Al recuperar conectividad, la PWA solicita una nueva URL
prefirmada y ejecuta el flujo normal (solicitar → PUT → confirmar).

La caché de archivos offline debe limitarse a lo estrictamente necesario,
respetar el usuario/rol activo y eliminarse al cerrar sesión cuando contenga
datos privados. No guardar URLs prefirmadas en caché offline.

## CORS del bucket R2

La CORS del bucket es independiente de la CORS de la API Go. Para transferencias
browser-to-R2 configurar en el bucket los orígenes exactos del frontend, métodos
`PUT` y `GET`, y headers firmados: `Content-Type`, `If-None-Match`,
`x-amz-meta-upload-id`. No usar `*` en producción.

## Referencias

- Especificación transversal: `./storage.md`
- Módulo backend: `../.backend/modulos/archivos-storage.md`
- API: `../.frontend/api.md`
- Backend: `../.frontend/backend.md`
- PWA: `./pwa.md`
