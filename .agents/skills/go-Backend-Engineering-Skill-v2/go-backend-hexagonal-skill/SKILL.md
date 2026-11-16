---
name: go-backend-hexagonal
description: Build and maintain production-oriented Go backends with idiomatic Go, Hexagonal Architecture when appropriate, and practical backend engineering standards. Consult authoritative documentation for uncertain or version-specific details. Compile, launch the service, and verify HTTP 200. Do not create or run automated tests unless the user explicitly changes this instruction.
---

# Go Backend Engineering Skill

## Purpose

Use this skill when creating, extending, reviewing, or refactoring a backend written in Go. Optimize for correctness, security, operability, maintainability, predictable resource usage, and the ability to scale without premature complexity.

This skill contains two separate concerns:

1. **Architecture and code organization:** modular design, Hexagonal Architecture, ports/adapters, domain boundaries, dependency direction.
2. **Backend engineering practices:** API contracts, security, validation, persistence integrity, resilience, capacity protection, observability, idempotency, performance, and deployment operations.

Do not confuse an architectural pattern with a backend quality requirement. Apply the backend practices regardless of whether the project uses a monolith, modular monolith, or distributed services.

## Mandatory documentation-first policy

When a question, implementation detail, API behavior, configuration option, library capability, security rule, or version-specific behavior is uncertain, **look up the specific point in authoritative documentation before deciding or coding**. Do not guess from memory and do not rely on a generic explanation when the exact API or option can be checked.

Use this lookup sequence:

1. Identify the exact question, the Go version (`go.mod` and `go version`), and the installed version of the relevant dependency.
2. For the Go language, standard library, modules, compiler, runtime, or Go tooling, consult the official Go documentation and the relevant `pkg.go.dev` package reference.
3. For third-party libraries, consult that project's official documentation, versioned API reference, release notes, and migration guide. Check that the documentation matches the version in `go.mod`.
4. For protocols and security requirements, consult the applicable primary specification or recognized security standard (for example, RFCs, OWASP, OpenAPI, or the database vendor's documentation).
5. If Context7 MCP or another documentation retrieval tool is available, use it to retrieve the **specific library/version/topic**. Verify important behavior against the upstream documentation when possible.
6. If authoritative documentation cannot be accessed or is ambiguous, state the uncertainty and assumptions. Do not invent flags, methods, defaults, guarantees, or version support.

Do not search broadly when a precise API reference answers the question. Do not cite a source as consulted unless it was actually opened or retrieved during the task. Prefer current, version-matched documentation over old tutorials or blog posts.

### Official Go reference baseline

Treat these as baseline references, not as a substitute for looking up the specific package/API:

- [Go Documentation](https://go.dev/doc/) — official index, language, toolchain, standard library guides, security, diagnostics, modules.
- [Effective Go](https://go.dev/doc/effective_go) — idiomatic Go guidance. **Important limitation:** the Go project states that it was written for the 2009 release and is not actively updated; it does not cover later language and ecosystem developments such as generics and modules. Use it for timeless language idioms, and verify modern/version-specific behavior elsewhere.
- [Go Code Review Comments](https://go.dev/wiki/CodeReviewComments) — common Go review guidance and style pitfalls; supplemental, not a complete style guide.
- [Organizing a Go module](https://go.dev/doc/modules/layout) — official project/package layout guidance.
- [How to Write Go Code](https://go.dev/doc/code) — modules, packages, and the Go toolchain.
- [Go Security Best Practices](https://go.dev/doc/security/best-practices) — Go-specific security guidance and vulnerability-management references.
- [Go Diagnostics](https://go.dev/doc/diagnostics) — profiling, tracing, runtime statistics, and performance diagnosis.
- [Go database guides](https://go.dev/doc/database/) — SQL operations, cancellation, transactions, and connection pools.
- [net/http package](https://pkg.go.dev/net/http) — HTTP server/client APIs and behavior.
- [context package](https://pkg.go.dev/context) — cancellation, deadlines, and request-scoped context.

If a task concerns a point covered by one of these references, consult the relevant section instead of relying only on the summary in this skill.

## Non-negotiable user requirement: compile, run, HTTP 200 — no testing

The user does **not** want a testing workflow. Follow this policy:

- Do not create, modify, or execute automated test suites.
- Do not create `*_test.go` files, test fixtures, mocks, fuzz targets, or benchmark files.
- Never run `go test`, `go test -race`, fuzzing, `go vet`, `golangci-lint`, or a test framework as part of the normal completion workflow.
- Do not claim that the application is tested or production-ready.
- You may format changed Go files with `gofmt`.
- You must compile the application, start the actual server process, and make an HTTP request to a real health endpoint. The expected response status is **200 OK**.
- Report the exact build command, run command, URL, and observed HTTP status. If the process cannot start or the endpoint does not return 200, report the actual blocker; never fabricate success.
- Do not silently replace the requested build/run/HTTP verification with a test command. If the environment prevents launching the service, say so and report which part was completed.

A health request is a runtime availability check requested by the user. It is not a substitute for automated tests and does not prove business workflows, persistence correctness, security, or production readiness.

## Working procedure

1. **Inspect before editing.** Read `go.mod`, Go version, module layout, executable entry point, router/framework, configuration, persistence, deployment files, and existing health routes.
2. **Research before assuming.** Consult the mandatory documentation-first policy for unclear or version-specific details. Confirm the installed dependency version.
3. **Understand the behavior.** Identify the requested behavior, API contract, validation rules, data changes, security implications, and external dependencies.
4. **Review relevant practices.** Read the applicable files in `practices/` and `backend-practices/` before implementing.
5. **Make the smallest coherent change.** Avoid broad rewrites, speculative abstractions, unnecessary dependencies, and premature microservices.
6. **Preserve compatibility.** Consider API clients, database schema, data formats, background workers, and deployment environment before changing behavior.
7. **Format.** Run `gofmt` on changed `.go` files.
8. **Compile.** Run `go build ./...`. Also build the executable package to a temporary or ignored output path when the project has a runnable entry point.
9. **Run.** Start the compiled executable using the project's actual configuration and required environment variables.
10. **Verify HTTP 200.** Call the existing liveness endpoint. If none exists, add a minimal `/healthz` endpoint using the project's router and conventions. Do not expose secrets or internal diagnostics in its body.
11. **Report honestly.** State what compiled, how the service was started, which endpoint was called, the received status code, and that no automated tests were created or executed.

## Architecture and code organization

- Default to a **modular monolith** with explicit domain/module boundaries. Split into services only for a demonstrated deployment, scaling, ownership, or fault-isolation requirement.
- Apply **Hexagonal Architecture (Ports & Adapters)** when it helps isolate business rules from delivery and infrastructure concerns.
- Keep dependencies pointing inward: adapters/infrastructure may depend on application/domain; domain must not depend on HTTP frameworks, database drivers, cloud SDKs, or infrastructure packages.
- Put ports (interfaces) next to the application/domain code that consumes them. Define small interfaces around actual needs; do not create interfaces for every struct automatically.
- Keep HTTP request/response DTOs, database models, and domain entities separate when their responsibilities or lifecycles differ.
- Inject dependencies through constructors. Avoid global mutable state and service locators.
- Do not use repository patterns mechanically for every data access. Introduce an outbound port when it protects a meaningful boundary or makes a use case independent of the technology.
- Follow Go's official module-layout guidance, but do not impose `cmd/`, `internal/`, or additional layers where the project does not need them.

## Backend engineering baseline

Apply these requirements independently of the architecture chosen:

- **API contracts:** define predictable request/response schemas, HTTP semantics, versioning policy, pagination, filtering, and stable error responses.
- **Input/output safety:** validate all untrusted input at the boundary, cap payload sizes, reject malformed or unexpected data where appropriate, and return explicit response DTOs rather than leaking internal records.
- **Security by default:** authenticate and authorize every protected operation, apply least privilege, protect secrets, use TLS in deployed environments, and avoid leaking sensitive data.
- **Data integrity:** enforce invariants in application logic and database constraints; use transactions for atomic changes; make migrations deliberate and deploy-safe.
- **Resilience:** set timeouts for inbound and outbound I/O; retry only operations that are safe to retry; use bounded retries with backoff and jitter; prevent unbounded queues and goroutines.
- **Abuse/resource protection:** use request-size limits, pagination limits, rate limits where needed, concurrency bounds, and quotas for expensive operations.
- **Observability:** emit structured logs and useful metrics; propagate request/trace identifiers; instrument critical external calls; never log credentials or sensitive payloads.
- **Performance:** measure actual bottlenecks before optimizing; inspect database query plans, allocations, CPU, heap, and latency; introduce caching only with an invalidation and consistency strategy.
- **Idempotency:** design payment, order, webhook, job, and retryable write operations to tolerate duplicate delivery where required.
- **Operations:** validate configuration at startup, shut down gracefully, expose appropriate health/readiness signals, use reproducible builds, and document runtime requirements.

Detailed requirements and implementation checklists live in `backend-practices/`.

## HTTP and runtime rules

- Keep handlers focused on transport concerns: parse, validate, authenticate/authorize as applicable, call application behavior, and map results to HTTP responses.
- Use correct HTTP semantics and status codes. The health endpoint must return `200 OK` when the process is alive and able to serve HTTP.
- Prefer `/healthz` for liveness. If dependency readiness is needed, expose `/readyz` separately and return `503 Service Unavailable` when critical dependencies are not ready.
- Configure server timeouts (`ReadHeaderTimeout`, `ReadTimeout`, `WriteTimeout`, `IdleTimeout`) according to the protocol and endpoint behavior; do not blindly rely on defaults.
- Use a bounded shutdown context and handle termination signals for long-running servers.
- Propagate `context.Context` from the request boundary into use cases and outbound I/O.
- Do not expose `net/http/pprof` or internal diagnostic endpoints publicly without deliberate access controls.

## Go implementation rules

- Follow idiomatic Go: simple packages, concise names, `gofmt`, explicit error handling, and small focused functions.
- Return errors; wrap with `%w` when adding context and inspect with `errors.Is` / `errors.As` where appropriate. Do not use `panic` for ordinary application failures.
- Use interfaces sparingly and accept interfaces / return concrete types where appropriate.
- Bound goroutines and external resource usage. Give goroutines a clear owner, cancellation path, and termination condition.
- Use database placeholders/parameters, context-aware calls, bounded connection pools, and transactions for atomic multi-step operations.
- Parse configuration once at startup, validate required values, and fail fast on invalid configuration. Never hardcode secrets.
- Log structured operational context; never log passwords, tokens, API keys, session secrets, or sensitive payloads.
- Keep `go.mod` and `go.sum` committed. Add dependencies only when they provide clear value; review versions, license, maintenance, and transitive impact.

## Completion response format

At the end of a task, summarize:

1. Changes made.
2. Architectural boundaries affected, if any.
3. Backend concerns addressed (for example security, API contract, database integrity, or observability).
4. Documentation consulted for non-obvious or version-specific decisions, with links where applicable.
5. Build command and result.
6. Run command and process result.
7. Health URL and observed HTTP status (must be 200 to report successful runtime verification).
8. Explicit note: `Automated tests were not created or executed, as requested.`

If any verification step fails, say so and provide the exact error. Never convert a failed or unavailable check into a success claim.

## Reference files

Read only the files relevant to the task, but always consult the documentation-first policy when a detail is uncertain:

### Go and architecture practices

- `practices/01-idiomatic-go.md`
- `practices/02-modular-hexagonal-architecture.md`
- `practices/03-interfaces-and-dependency-injection.md`
- `practices/04-errors-and-contracts.md`
- `practices/05-context-and-cancellation.md`
- `practices/06-concurrency-and-resource-bounds.md`
- `practices/07-http-api-and-health.md`
- `practices/08-persistence-and-transactions.md`
- `practices/09-configuration-security-and-observability.md`
- `practices/10-modules-build-and-runtime-verification.md`

### Backend practices independent of architecture

- `backend-practices/01-api-contracts-and-http.md`
- `backend-practices/02-security-and-access-control.md`
- `backend-practices/03-input-validation-and-data-serialization.md`
- `backend-practices/04-database-integrity-and-migrations.md`
- `backend-practices/05-resilience-and-dependency-management.md`
- `backend-practices/06-rate-limiting-and-resource-protection.md`
- `backend-practices/07-observability-and-operability.md`
- `backend-practices/08-performance-and-caching.md`
- `backend-practices/09-idempotency-and-background-processing.md`
- `backend-practices/10-configuration-deployment-and-lifecycle.md`

## Scope boundaries

This skill does not mandate a particular HTTP framework, ORM, cloud provider, message broker, cache, or deployment platform. Select technology based on the actual requirements, then consult the official documentation for the exact version. Do not add infrastructure merely because a checklist mentions it.
