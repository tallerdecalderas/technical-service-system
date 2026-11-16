# Documentación central de TechService

Esta carpeta es la fuente documental del sistema. Separa el comportamiento
funcional compartido de las decisiones técnicas específicas de cada proyecto.

## Estructura

```text
.docs/
├── README.md
├── reglas-negocio.md
├── modelo-dominio.md
├── ingeneri/
│   ├── backend-architecture.md
│   ├── frontend-architecture.md
│   ├── database-connection.md
│   ├── infrastructure.md
│   ├── pwa.md
│   ├── storage.md
│   └── extensibility.md
├── ejecuciones/
│   ├── implementation-plan.md
│   ├── backend-implementation-plan.md
│   └── frontend-implementation-plan.md
├── .backend/
│   ├── api.md
│   ├── database.md
│   ├── configuration.md
│   ├── cache.md
│   ├── modulos/
│   └── ejecuciones/
└── .frontend/
    ├── api.md
    ├── database.md
    ├── UI/
    ├── integraciones/
    └── ejecuciones/
```

## Precedencia

1. `reglas-negocio.md` y `modelo-dominio.md` definen el comportamiento.
2. `ingeneri/` define límites y decisiones técnicas transversales.
3. `.backend/` define la implementación Go, SQL, integraciones y migración.
4. `.frontend/` define UI, DTOs, PWA y consumo de la API.

Frontend y backend no deben redefinir una regla funcional en sus documentos
técnicos. Si aparece una contradicción, se corrige primero el contrato
compartido y luego las implementaciones.

## Agregar documentación

Los módulos nuevos se agregan en el contrato compartido y luego se documentan
en las áreas técnica backend y frontend. Las tareas se agregan a la carpeta
`ejecuciones/` del proyecto correspondiente sin alterar las tareas cerradas.

La ejecución coordinada de frontend y backend está en el
[plan maestro](./ejecuciones/implementation-plan.md), que enlaza los planes
operativos de [backend](./ejecuciones/backend-implementation-plan.md) y
[frontend](./ejecuciones/frontend-implementation-plan.md).
Consulta también [la guía de extensibilidad](./ingeneri/extensibility.md).
