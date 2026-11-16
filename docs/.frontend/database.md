# Datos consumidos por el frontend

## Responsabilidad

El frontend no posee una base de datos de negocio. Consume proyecciones y
comandos de la API Go mediante HTTP. PostgreSQL y el modelo de dominio viven
en el backend; IndexedDB solo almacena las vistas mínimas y operaciones
pendientes definidas por la PWA.

El contrato funcional compartido está en
[modelo-dominio.md](../modelo-dominio.md). El contrato HTTP técnico del
backend está en [api.md](../.backend/api.md).

## Proyecciones por módulo

| Módulo | Datos que necesita la interfaz |
|---|---|
| Agenda | Servicio, cliente mínimo, dirección, fecha, técnico y estado |
| Servicio | Detalle del servicio, historial, pago, presupuesto, repuestos y archivos |
| Técnico | Perfil, permisos, servicios asignados y datos de jornada |
| Inventario | Catálogo publicado, versión, precio técnico y disponibilidad |
| Rendición | Período, servicios incluidos, snapshots, totales y estado |
| Administración | Clientes, técnicos, empresas, catálogo y listados paginados |

Estas son proyecciones de lectura, no tablas replicadas. Cada endpoint debe
devolver solo los campos necesarios para el rol y la pantalla solicitante.

## DTOs y estado de UI

Los DTOs TypeScript deben representar respuestas de la API, no copiar tipos
generados por Prisma. Deben:

- tratar fechas como valores serializados por HTTP y convertirlas en el borde;
- representar importes como `string` o un tipo decimal seguro, nunca como
  `number` cuando se requiera precisión;
- diferenciar `null` de un campo ausente;
- modelar estados como uniones explícitas;
- conservar `requestId`, errores de validación y conflictos;
- no incluir contraseñas, claves, tokens privados ni URLs vencidas.

El frontend no calcula totales oficiales de cobros, repuestos o rendiciones.
Puede mostrar cálculos provisionales para la interfaz, pero la respuesta de
Go es la fuente que confirma el resultado.

## Caché local

IndexedDB solo puede contener:

- catálogo autorizado del técnico;
- servicios asignados y datos mínimos de jornada;
- operaciones pendientes con `operationId`, estado y reintentos.

No se almacenan sesiones, tokens, secretos, paneles administrativos,
clientes globales, rendiciones globales ni URLs privadas de Storage. La caché
se aísla por usuario y se limpia al cerrar sesión cuando contenga datos
privados.

## Escrituras y sincronización

Toda escritura usa la API Go y, cuando sea reintentable, un
`Idempotency-Key`. La interfaz muestra una operación como confirmada solo
después de una respuesta exitosa del servidor:

```text
pendiente -> sincronizando -> confirmada
                         \-> error
```

Un error `4xx` de validación, autorización o regla de dominio se muestra al
usuario y no se reintenta automáticamente. La pérdida de red o un `5xx` puede
reintentarse con la misma clave.

## Transición desde Prisma

Mientras se implementa el backend Go, el frontend actual conserva sus
consumidores Prisma para no interrumpir su funcionamiento. No agregar nuevo
acceso a Prisma para capacidades nuevas. La migración del frontend comienza
cuando el alcance backend acordado esté listo; Prisma y los Route Handlers se
retiran en la fase final, solo después de comprobar:

1. que la pantalla consume la proyección Go;
2. que las escrituras pasan por Go;
3. que permisos, estados y errores coinciden;
4. que el frontend ya no tiene consumidores del Route Handler legado.
