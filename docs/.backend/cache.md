# Caché mínima y operación offline

## Objetivo

Usar caché solo donde mejore la experiencia del técnico sin convertir el
navegador en una segunda base de datos. Supabase PostgreSQL continúa siendo la
fuente oficial.

## Qué se conserva

### Recursos estáticos

El Service Worker puede cachear JavaScript, CSS, fuentes, iconos e imágenes
estáticas para acelerar la carga. No debe contener reglas de negocio.

### Catálogo de precios

IndexedDB conserva solo la vista autorizada del técnico:

```text
catalogo_tecnico:
  codigo
  descripcion
  precio
  version
  updatedAt
```

La PWA consulta la versión publicada en `GET /api/v1/catalog/prices` y
descarga el catálogo completo solo cuando cambia. Una importación fallida no
reemplaza la versión local anterior.

### Servicios asignados

Guardar solo la información mínima para la jornada del técnico: identificador,
cliente, teléfono, dirección, fecha/hora, estado, observaciones y datos
necesarios para ejecutar el servicio. No guardar clientes globales ni datos de
Administración.

### Cola de operaciones

La cola no es una caché general. Solo conserva temporalmente acciones del
técnico que no pudieron llegar a Go:

- cambio de estado;
- cierre del servicio;
- cobro;
- repuestos;
- presupuesto.

Cada operación contiene `operationId`, usuario, tipo, payload mínimo, fecha,
estado y cantidad de reintentos.

```text
pendiente → sincronizando → confirmada
                         ↘ error
```

Una operación solo se muestra como confirmada después de una respuesta
exitosa de Go. Los reintentos usan `Idempotency-Key`; un `4xx` de dominio
queda como error visible y no se reintenta automáticamente.

## Qué no se cachea

- sesiones, contraseñas, tokens o claves;
- respuestas sensibles completas de la API;
- paneles administrativos;
- clientes globales;
- rendiciones, pagos o presupuestos globales;
- URLs privadas de Storage;
- costos internos o información de otros técnicos.

## Limpieza y aislamiento

La caché se separa por usuario y rol. Se elimina al cerrar sesión cuando
contiene datos privados, se limita por tamaño y puede tener expiración. Si una
sincronización falla, se conserva la última copia conocida y se informa que
puede estar desactualizada.
