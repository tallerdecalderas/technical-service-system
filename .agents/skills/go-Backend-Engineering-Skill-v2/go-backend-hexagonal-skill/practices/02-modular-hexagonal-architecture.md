# 02 — Monolito modular y arquitectura hexagonal

## Objetivo

Aislar las reglas de negocio de HTTP, bases de datos, colas, SDKs cloud y otros detalles técnicos, sin fragmentar prematuramente el sistema.

## Reglas

- Empezar por un monolito modular: un despliegue y proceso, con módulos de negocio y límites explícitos.
- Separar los adaptadores de entrada (HTTP, CLI, consumers) de los adaptadores de salida (PostgreSQL, APIs externas, colas, filesystem).
- Modelar los casos de uso en la capa de aplicación.
- Mantener el dominio libre de dependencias de frameworks, transporte, persistencia y proveedores externos.
- Hacer que las dependencias apunten hacia el núcleo: infraestructura/adapters pueden importar application/domain; domain no puede importar adapters/infrastructure.
- Definir puertos en la capa que los necesita, con métodos orientados al caso de uso.
- Ubicar invariantes y reglas puras en el dominio; coordinar operaciones y transacciones en application.
- Mantener DTOs HTTP, modelos de persistencia y entidades de dominio separados cuando representen contratos distintos.
- Extraer un microservicio solamente cuando exista una razón concreta de despliegue independiente, escalado, aislamiento de fallas o autonomía de equipo.

## Flujo de una operación

```text
HTTP handler (inbound adapter)
        -> application use case
              -> domain rules
              -> output port (interface)
                    <- PostgreSQL adapter (implementation)
```

El handler traduce HTTP a una entrada del caso de uso. El adaptador de persistencia implementa el puerto requerido por application. El dominio no conoce ninguno de los dos.

## Estructura orientativa

```text
cmd/api/main.go
internal/<module>/domain/
internal/<module>/application/
internal/<module>/ports/       # si el proyecto los separa aquí
internal/adapters/inbound/http/
internal/adapters/outbound/postgres/
internal/platform/config/
internal/platform/observability/
migrations/
```

Esta estructura es una referencia, no una plantilla obligatoria. Preferir paquetes organizados por capacidad de negocio antes que carpetas globales gigantes (`controllers`, `services`, `repositories`) que mezclen módulos.

## Evitar

- Dominio importando `net/http`, `database/sql`, `pgx`, Gin, Fiber o SDKs cloud.
- Un único paquete `services` con toda la lógica.
- Crear una interfaz por cada struct sin un consumidor que la necesite.
- Microservicios como respuesta automática a la escalabilidad.

## Criterio de aceptación

Se puede reemplazar un adaptador externo sin reescribir las reglas del dominio ni los casos de uso.
