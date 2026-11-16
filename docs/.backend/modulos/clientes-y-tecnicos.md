# Clientes y técnicos

**Fase:** 4.  
**Estado:** handlers y casos de uso iniciales existen en Go; el cierre de fase
requiere su verificación final según el plan backend.

## Clientes

### Responsabilidad

El cliente representa a una persona o entidad que recibe servicios. Puede
relacionarse con muchos servicios. No se asocia físicamente a una empresa en
el esquema actual; la visibilidad de un técnico deriva de sus servicios
asignados, no de un `companyId` enviado por el cliente.

### Reglas

- ADMIN puede listar, consultar, crear y editar clientes.
- TECHNICIAN puede consultar clientes relacionados con servicios propios
  autorizados y su historial de servicio permitido.
- No existe DELETE de cliente en el contrato objetivo. No borrar el historial
  al cambiar la relación o dejar de mostrar un elemento en UI.
- Las listas son paginadas y solo admiten filtros/sort documentados.

### Endpoints objetivo

| Método | Endpoint | Acceso |
|---|---|---|
| GET | `/api/v1/clients` | ADMIN; técnicos solo si la consulta queda limitada a su alcance |
| POST | `/api/v1/clients` | ADMIN |
| GET | `/api/v1/clients/{id}` | ADMIN o técnico autorizado por servicio |
| PATCH | `/api/v1/clients/{id}` | ADMIN |

Las escrituras idempotentes exigen `Idempotency-Key`. No aceptar del DTO
campos de autorización ni timestamps generados por servidor.

## Técnicos

### Responsabilidad y reglas

Un técnico es un usuario interno con rol `TECHNICIAN`; no es una identidad
externa distinta. ADMIN puede listar, consultar, crear mediante el proveedor
Auth vigente, editar y activar/desactivar según las reglas aprobadas. El
técnico solo consulta su perfil/contexto permitido y no administra otros
usuarios.

Nunca devolver hashes, tokens del proveedor ni secretos. La alta debe
coordinar identidad externa, vínculo interno, rol y membresía sin dejar
vínculos parciales; definir el comportamiento de compensación ante fallo
externo antes de extender el flujo.

### Endpoints objetivo

| Método | Endpoint | Acceso |
|---|---|---|
| GET | `/api/v1/technicians` | ADMIN |
| POST | `/api/v1/technicians` | ADMIN |
| GET | `/api/v1/technicians/{id}` | ADMIN o el técnico para su propio perfil |
| PATCH | `/api/v1/technicians/{id}` | ADMIN; el técnico solo para campos permitidos si se aprueban |

No habilitar modificación propia de campos administrativos por omisión. Las
mutaciones reintentables usan `Idempotency-Key`.

## Persistencia

- `public."user"` conserva los usuarios internos; sus nombres SQL heredados
  respetan mayúsculas/minúsculas.
- Clientes usan `public."client"`.
- Identidades externas y membresías se mantienen en las relaciones del módulo
  de identidad.
- Consultas de clientes por técnico deben filtrar por relación de servicio
  autorizada y ser paginadas.

No crear tablas paralelas con nombres normalizados ni regenerar el esquema
desde Prisma. Ver [esquema backend](../database.md).

## Errores y atomicidad

Usar los errores comunes de la API: `400` entrada mal formada, `401` sin
sesión, `403` acción no permitida, `404` recurso no visible, `409` conflicto
de idempotencia, `422` regla del dominio y `5xx` error de dependencia/servidor.
No convertir fallos inesperados en `200` ni filtrar SQL.

## Pendiente de decisión

- Precisar qué campos de perfil puede editar el propio técnico; hasta entonces,
  solo permitir acceso de lectura al propio perfil.
- Formalizar el alta externa/interna como operación recuperable e idempotente.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Contrato API](../api.md)
- [Clientes UI](../../.frontend/UI/ui-administracion.md)
- [Técnicos UI](../../.frontend/modulos/technician.md)
- [Fase 4](../../ejecuciones/backend-implementation-plan.md)
