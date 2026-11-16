# PWA y operación offline

## Objetivo

Next.js se entregará como una PWA instalable para Administración y Técnicos.
La PWA mejora la carga y permite una operación limitada sin conexión, pero no
reemplaza a la API Go ni a PostgreSQL como fuente oficial.

El Service Worker puede manejar recursos estáticos, conectividad y
sincronización técnica. No contiene reglas de negocio, SQL, credenciales ni
secretos.

## Requisitos base

La PWA debe incluir:

- `manifest.webmanifest` con nombre, iconos, `start_url`, colores y
  `display: standalone`;
- Service Worker para recursos estáticos;
- indicador visible online/offline;
- IndexedDB para datos estructurados temporales;
- limpieza de datos privados al cerrar sesión.

`localStorage` queda limitado a preferencias simples de interfaz. No se usa
como base de datos y nunca almacena contraseñas, tokens o secretos.

## Caché mínima

La estrategia completa está en [cache.md](../.backend/cache.md). Solo se
permite conservar:

1. recursos estáticos;
2. catálogo de precios autorizado y versionado;
3. servicios asignados y datos mínimos de jornada del técnico;
4. operaciones pendientes de sincronización.

No se cachean sesiones, tokens, secretos, clientes globales, paneles
administrativos, rendiciones globales, pagos globales ni URLs privadas de
Storage. La caché se separa por usuario/rol y no se considera confirmada ni
fuente de verdad.

## Operaciones offline

El técnico puede consultar datos previamente sincronizados y registrar
temporalmente:

- cambios de estado;
- cierre del servicio;
- cobros;
- repuestos;
- información de presupuestos;
- archivos pendientes, según las restricciones de Storage.

La interfaz debe indicar que la operación está pendiente. Solo se muestra
como confirmada después de una respuesta exitosa de Go.

## Cola de sincronización

Cada operación pendiente se guarda en IndexedDB con:

```text
operationId
userId
type
payload mínimo
createdAt
status
retryCount
lastError
```

Estados permitidos:

```text
pendiente -> sincronizando -> confirmada
                         \-> error
```

Al recuperar la conexión, la PWA envía la operación a Go con el mismo
`Idempotency-Key` basado en `operationId`. El servidor valida autenticación,
rol, propiedad, estado e idempotencia antes de persistir.

- `4xx` de validación, permiso o conflicto: error visible; no reintentar
  automáticamente.
- pérdida de red o `5xx`: se puede reintentar con la misma clave.
- respuesta exitosa: marcar confirmada y retirar de la cola.

La sincronización debe tolerar recarga, cierre de la aplicación, suspensión
del dispositivo, reintentos y envíos duplicados.

## Conflictos

Si el estado del servidor cambió mientras el dispositivo estaba offline:

1. Go rechaza la operación con un conflicto explícito.
2. La PWA conserva el registro local como `error`.
3. Se informa al usuario qué operación no pudo aplicarse.
4. No se sobrescribe silenciosamente el estado del servidor.

La resolución manual o una nueva acción debe respetar las reglas de negocio.

## Archivos

Los archivos se autorizan y confirman mediante el flujo de
[Storage](./storage.md). Una imagen offline no se considera cargada hasta que
R2 reciba el binario y Go confirme la transferencia y su asociación.

No se guardan credenciales R2, claves privilegiadas ni URLs firmadas permanentes en la PWA.
Los archivos privados pendientes se aíslan por usuario y se eliminan al cerrar
sesión cuando corresponda.

## Seguridad y fuente de verdad

- Go es responsable de autenticación, autorización, validación e idempotencia.
- PostgreSQL en Supabase es la fuente oficial.
- IndexedDB solo contiene una vista temporal y operaciones pendientes.
- El navegador nunca accede directamente a PostgreSQL.
- El Service Worker no intercepta ni persiste respuestas sensibles
  indiscriminadamente.
- Las cookies de sesión deben usar atributos seguros definidos por el backend.

## Notificaciones e instalación

Las notificaciones Push son una capacidad futura. No deben bloquear la PWA
base ni introducir credenciales en el navegador.

La instalación debe funcionar en los navegadores soportados mediante el
manifest y los iconos definidos. La interfaz debe seguir siendo usable en
desktop, tablet y teléfono.

## Orden de implementación

1. Manifest, iconos, Service Worker y caché de recursos estáticos.
2. Indicador de conectividad y estados de interfaz.
3. IndexedDB para catálogo y servicios asignados.
4. Cola de operaciones con `operationId`.
5. Sincronización con `Idempotency-Key`.
6. Conflictos, reintentos y limpieza por sesión.
7. Notificaciones Push, solo como fase posterior.

## Límites

Esta documentación define comportamiento y límites. Las decisiones de
framework, librería IndexedDB, estrategia concreta del Service Worker y
telemetría se documentan en la implementación frontend sin trasladar reglas
de negocio al navegador.
