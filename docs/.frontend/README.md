# Documentación del frontend Next.js/PWA

Esta carpeta documenta la interfaz, la experiencia PWA y el contrato que el
frontend necesita consumir del backend Go. Next.js no es la fuente de las
reglas de negocio ni de la persistencia.

## Fuente funcional

- [Reglas de negocio](../reglas-negocio.md)
- [Módulo de servicios](./modulos/services.md)
- [Módulo de técnicos](./modulos/technician.md)
- [Inventario](./modulos/Inventario.md)
- [Presupuestos](./modulos/estimates.md)
- [Cobros y rendiciones](./modulos/paymentsRendition.md)

Estos documentos definen el comportamiento que debe conservarse durante la
separación. El backend Go implementa ese contrato; el frontend lo presenta y
consume mediante HTTP.

## Documentos técnicos

- [Arquitectura frontend](../ingeneri/frontend-architecture.md)
- [Almacenamiento de archivos](../ingeneri/frontend-storage.md)
- [Contrato consumido por el frontend](./api.md)
- [Backend Go y límites de responsabilidad](./backend.md)
- [PWA y caché](../ingeneri/pwa.md)
- [Infraestructura](../ingeneri/infrastructure.md)
- [Plan maestro de implementación](../ejecuciones/implementation-plan.md)
- [Plan operativo frontend (fases 8–9)](../ejecuciones/frontend-implementation-plan.md)
- [Datos y DTOs consumidos](./database.md)

La documentación portable del backend está en [`.backend/`](../.backend/).
El modelo de dominio compartido está en [modelo-dominio.md](../modelo-dominio.md).
