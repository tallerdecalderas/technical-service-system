# Go Backend Engineering Skill

Skill propia para agentes de código que trabajan con Go. Combina arquitectura hexagonal/monolito modular con prácticas de backend independientes de la arquitectura: contratos HTTP, seguridad, validación, integridad de datos, resiliencia, límites de recursos, observabilidad, rendimiento, idempotencia y despliegue.

## Política de validación solicitada

Esta skill **no crea ni ejecuta testing automatizado**. No genera archivos `*_test.go` y no ejecuta `go test`, `go vet`, linters, fuzzing, benchmarks ni herramientas de testing. El flujo normal requerido es:

1. Formatear los archivos Go modificados con `gofmt`.
2. Compilar todos los paquetes con `go build ./...`.
3. Compilar el ejecutable de la aplicación.
4. Iniciar el servidor real.
5. Consultar el endpoint de health y comprobar HTTP `200 OK`.

El HTTP 200 confirma que el proceso respondió en ese endpoint; no demuestra que todos los casos de negocio, integraciones, seguridad o requisitos de producción sean correctos.

## Política de documentación obligatoria

Ante cualquier duda técnica, API, opción de configuración, comportamiento de una librería o detalle que dependa de una versión, el agente debe consultar la documentación específica antes de implementar. No debe asumir ni inventar métodos, flags, defaults o garantías.

Orden de consulta:

1. Identificar versión de Go y dependencia desde `go.mod`, `go version` y archivos de configuración.
2. Consultar documentación oficial de Go y `pkg.go.dev` para lenguaje, runtime y biblioteca estándar.
3. Consultar documentación oficial, API reference, release notes y migration guide de la librería externa, siempre para la versión usada.
4. Consultar RFC, estándar o documentación oficial del proveedor cuando se trate de protocolos, seguridad, base de datos o servicios externos.
5. Usar Context7 MCP si está disponible para recuperar el tema y versión exactos; contrastar con la fuente upstream.
6. Declarar incertidumbres si no se puede verificar un comportamiento.

### Referencias oficiales de Go

| Documentación | Uso | URL |
|---|---|---|
| Go Documentation | Índice oficial del lenguaje, tooling, runtime y bibliotecas | https://go.dev/doc/ |
| Effective Go | Idiomas y estilo de Go | https://go.dev/doc/effective_go |
| Go Code Review Comments | Errores de estilo y criterios habituales de revisión | https://go.dev/wiki/CodeReviewComments |
| Organizing a Go module | Estructura de módulos y proyectos Go | https://go.dev/doc/modules/layout |
| How to Write Go Code | Módulos, paquetes y herramienta `go` | https://go.dev/doc/code |
| Go Security Best Practices | Prácticas de seguridad específicas de Go | https://go.dev/doc/security/best-practices |
| Go Diagnostics | Profiling, tracing y métricas del runtime | https://go.dev/doc/diagnostics |
| Go database documentation | SQL, cancelación, transacciones y conexiones | https://go.dev/doc/database/ |
| `net/http` | API HTTP de la biblioteca estándar | https://pkg.go.dev/net/http |
| `context` | Cancelación, deadlines y propagación de contexto | https://pkg.go.dev/context |

**Limitación de Effective Go:** el propio proyecto Go indica que el documento fue escrito para la versión de 2009 y no se actualiza activamente. Sigue siendo útil para conceptos idiomáticos, pero no cubre generics, módulos ni cambios posteriores. Para decisiones modernas o dependientes de versión, consultar documentación actualizada.

## Contenido

### `practices/` — Go y arquitectura

1. `01-idiomatic-go.md` — Go idiomático y código limpio.
2. `02-modular-hexagonal-architecture.md` — monolito modular y Ports & Adapters.
3. `03-interfaces-and-dependency-injection.md` — interfaces e inyección de dependencias.
4. `04-errors-and-contracts.md` — errores y contratos.
5. `05-context-and-cancellation.md` — contexto, deadlines y cancelación.
6. `06-concurrency-and-resource-bounds.md` — concurrencia y límites.
7. `07-http-api-and-health.md` — HTTP y health checks.
8. `08-persistence-and-transactions.md` — persistencia y transacciones.
9. `09-configuration-security-and-observability.md` — configuración, seguridad y observabilidad.
10. `10-modules-build-and-runtime-verification.md` — módulos, compilación y ejecución.

### `backend-practices/` — prácticas backend independientes de la arquitectura

1. `01-api-contracts-and-http.md` — contratos de API y semántica HTTP.
2. `02-security-and-access-control.md` — seguridad, autenticación y autorización.
3. `03-input-validation-and-data-serialization.md` — validación y serialización.
4. `04-database-integrity-and-migrations.md` — integridad de datos, SQL y migraciones.
5. `05-resilience-and-dependency-management.md` — resiliencia ante fallos externos.
6. `06-rate-limiting-and-resource-protection.md` — rate limiting y protección de recursos.
7. `07-observability-and-operability.md` — logs, métricas, tracing y operación.
8. `08-performance-and-caching.md` — rendimiento y caché.
9. `09-idempotency-and-background-processing.md` — idempotencia y procesos asíncronos.
10. `10-configuration-deployment-and-lifecycle.md` — configuración, despliegue y ciclo de vida.

## Instalación

Copiá la carpeta completa dentro de una de estas ubicaciones:

- **Codex:** `.agents/skills/go-backend-hexagonal/`
- **GitHub Copilot en VS Code:** `.github/skills/go-backend-hexagonal/`

La estructura final debe conservar `SKILL.md`, `README.md`, `practices/` y `backend-practices/`:

```text
.agents/skills/
└── go-backend-hexagonal/
    ├── SKILL.md
    ├── README.md
    ├── practices/
    └── backend-practices/
```

Reiniciá o recargá el agente si no detecta la skill.

## Uso sugerido

> Usá la skill `go-backend-hexagonal`. Antes de implementar, revisá el proyecto y consultá la documentación oficial específica de cualquier API o librería cuya versión o comportamiento no esté claro. Respetá las prácticas de backend y la arquitectura existente. Compilá, iniciá el servidor y verificá HTTP 200. No crees ni ejecutes tests.

## Alcance

La skill no impone un framework HTTP, ORM, cloud provider, broker ni cache. El agente debe seleccionar herramientas según requisitos reales, revisar su documentación oficial/versionada y justificar cualquier dependencia nueva.
