# Guía de extensibilidad

Esta guía define cómo agregar módulos, cambiar proveedores o incorporar tareas
sin romper los contratos existentes.

## Nuevo módulo

1. Crear o actualizar la regla funcional en
   [`../reglas-negocio.md`](../reglas-negocio.md).
2. Agregar entidades, relaciones e invariantes a
   [`../modelo-dominio.md`](../modelo-dominio.md).
3. Crear el documento técnico del módulo en
   `../.backend/modulos/<modulo>.md`.
4. Crear la perspectiva de interfaz en
   `../.frontend/modulos/<modulo>.md` solo si requiere pantallas o flujos
   específicos.
5. Agregar los endpoints al contrato backend y las proyecciones al contrato
   frontend.
6. Agregar tareas en ambos planes de `ejecuciones/`.
7. Implementar pruebas antes de marcar la tarea como `[x]`.

Un módulo nuevo no debe copiar reglas de otro módulo ni modificar sus estados
sin una decisión explícita del contrato funcional.

## Arquitectura hexagonal

El dominio y los casos de uso no conocen HTTP, PostgreSQL, Prisma, Supabase,
Resend, Google Sheets ni SDKs externos.

```text
adaptador HTTP -> puerto de entrada -> caso de uso -> puerto de salida
                                                       ├── PostgreSQL
                                                       ├── Storage
                                                       └── proveedor externo
```

### Cuándo crear un puerto

Crear un puerto cuando una capacidad:

- cruza el límite entre aplicación y tecnología;
- puede tener más de una implementación;
- necesita una prueba aislada;
- tiene un ciclo de vida o errores propios.

No crear puertos para funciones internas puramente de dominio.

### Cambiar un proveedor

Para cambiar una tecnología:

1. Mantener el puerto estable.
2. Crear un adaptador nuevo que implemente el mismo contrato.
3. Agregar pruebas de contrato compartidas por ambos adaptadores.
4. Cambiar la composición/configuración, no los casos de uso.
5. Ejecutar una transición compatible y retirar el adaptador anterior después
   de verificar producción.

Ejemplos:

```text
ObjectStorage
├── LocalFilesystemAdapter (desarrollo local / pruebas iniciales en disco)
└── S3CompatibleAdapter (Cloudflare R2 — producción)

EmailSender
├── ResendAdapter
└── SendGridAdapter
```

La sustitución de PostgreSQL por otro motor requiere además un adaptador de
persistencia, traducción de tipos y migración de datos. El dominio no debe
conocer SQL específico del proveedor.

## Compatibilidad de datos

- Agregar columnas primero y eliminar después.
- Mantener lectores compatibles durante el despliegue.
- No cambiar significados de estados silenciosamente.
- Versionar migraciones SQL.
- Preservar snapshots históricos de servicios, repuestos y rendiciones.
- Mantener endpoints existentes mientras haya consumidores activos.

## Tareas de ejecución

Agregar una tarea en:

- `../.backend/ejecuciones/` para dominio, API, SQL, proveedores o
  infraestructura Go.
- `../.frontend/ejecuciones/` para cliente HTTP, UI, DTOs, PWA o retiro de
  Prisma.

Cada tarea debe indicar:

- estado `[ ]`, `[~]` o `[x]`;
- dependencia;
- archivos o módulo afectado;
- prueba o evidencia requerida;
- criterio de retiro o compatibilidad.

Una tarea backend y una frontend relacionadas deben compartir el mismo nombre
de capacidad, pero conservar criterios de finalización propios.

## Checklist de revisión

- [ ] El contrato funcional fue actualizado primero.
- [ ] El dominio no importa una tecnología concreta.
- [ ] El proveedor está detrás de un puerto.
- [ ] Existe prueba de contrato del adaptador.
- [ ] La migración es backward-compatible.
- [ ] El frontend consume API y DTOs, no tablas.
- [ ] Las tareas y enlaces documentales resuelven.
