# Identidad, sesión y autorización

**Fase:** 3.  
**Estado:** identidad y sesión implementadas localmente; la fase registra
verificación operativa pendiente. La autorización detallada por recurso se
completa junto con cada módulo.

## Propósito y límites

Este módulo identifica a la persona autenticada, crea la sesión de TechService
y proporciona el contexto de usuario/empresa que los casos de uso necesitan
para autorizar acciones. No implementa reglas de propiedad específicas de cada
recurso; cada módulo debe aplicarlas.

Supabase Auth es el proveedor de identidad inicial. Su uso no implica que la
base PostgreSQL deba estar alojada en Supabase: autenticación y almacenamiento
son dependencias separadas.

## Flujo de autenticación

1. Go delega la validación de credenciales al proveedor configurado.
2. Go valida el token externo: firma, `iss`, `aud`, `sub`, `nbf` y expiración.
3. Go resuelve el sujeto externo mediante `user_identities`; no enlaza cuentas
   por coincidencia de correo ni deriva roles de metadata modificable del
   usuario.
4. Go carga el usuario interno, verifica que esté activo y obtiene sus
   membresías activas.
5. Go emite una sesión opaca propia; la base conserva solo hashes del token de
   sesión y CSRF.
6. Las operaciones protegidas resuelven sesión, rol, empresa y permisos en el
   backend. Logout revoca la sesión.

La sesión usa cookie `HttpOnly`, `SameSite=Lax` y `Secure` fuera de desarrollo.
Las mutaciones validan `Origin` y el token CSRF en cookie y encabezado. Los
tokens, contraseñas y secretos nunca se escriben en logs ni se devuelven al
frontend.

## Autorización

- Roles actuales: `ADMIN` y `TECHNICIAN`.
- Administración gestiona las operaciones administrativas autorizadas.
- Técnico opera solo servicios asignados y consulta solamente las proyecciones
  autorizadas de su trabajo. El historial de un cliente se muestra solo desde
  un servicio propio autorizado; eso no concede acceso a los servicios de
  otros técnicos.
- La pertenencia a una empresa activa limita el contexto operativo. Los
  identificadores recibidos desde el cliente no prueban propiedad ni permiso.
- Cada handler protegido debe invocar autorización del caso de uso para el
  recurso y transición solicitados. Ocultar controles en la interfaz no basta.
- Para un recurso no visible puede responderse `404`; la falta de permiso en
  una acción visible responde `403`, según el contrato HTTP.

## Endpoints objetivo

| Método | Endpoint | Uso |
|---|---|---|
| POST | `/api/v1/auth/login` | Validar credenciales y crear sesión |
| GET | `/api/v1/auth/session` | Consultar perfil y contexto activo |
| POST | `/api/v1/auth/logout` | Revocar sesión y limpiar cookies |
| POST | `/api/v1/auth/password/forgot` | Solicitar recuperación sin revelar existencia del correo |
| POST | `/api/v1/auth/password/reset` | Validar recuperación y cambiar contraseña |

La respuesta de sesión contiene únicamente identidad interna, rol y empresas
activas necesarios para la aplicación; nunca el JWT externo ni tokens privados.

## Persistencia y adaptadores

Relaciones actuales descritas en el esquema:

- `public."user"`: identidad interna, rol y estado.
- `public.user_identities`: vínculo `provider` + `provider_subject` con el
  usuario interno.
- `public.user_company_memberships`: pertenencia y estado por empresa.
- `public.app_sessions`: sesión y material de verificación CSRF en forma
  protegida.

La autenticación externa se integra detrás del puerto `IdentityProvider`.
Sustituir Supabase Auth requiere otro adaptador y migrar los vínculos de
identidad; no requiere que cambien las reglas de negocio ni los IDs internos.
La clave actual HS256 y su limitación a signing keys legacy se documentan en
[`authentication.md`](../authentication.md).

## Errores y límites

- Credenciales inválidas o sesión vencida: `401`.
- Sesión válida sin permiso: `403`.
- Origen o CSRF inválido: `403`.
- Límite del proveedor de identidad: propagar `429` sin ocultarlo como éxito.
- Dependencia de identidad no disponible: informar fallo de dependencia sin
  registrar secretos.
- Recuperación: respuesta equivalente exista o no el correo.

## Pendiente antes de ampliar

- La validación integrada de login, sesión, CSRF y logout se reserva para la
  validación global al completar backend y frontend. Cualquier ejecución que
  escriba en `app_sessions` requiere autorización del usuario.
- Confirmar en la validación global que la verificación JWT corresponde al
  método de firma configurado.
- Implementar permisos por empresa/recurso dentro de los módulos de negocio.

## Referencias

- [Reglas de negocio](../../reglas-negocio.md)
- [Modelo de dominio](../../modelo-dominio.md)
- [Autenticación y sesión](../authentication.md)
- [API](../api.md)
- [Técnicos y UI](../../.frontend/modulos/technician.md)
- [Fase 3](../../ejecuciones/backend-implementation-plan.md)
