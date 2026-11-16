# Backend Practice 10 — Configuration, Deployment, and Lifecycle

## Goal

Ensure the backend starts predictably, runs with explicit operational settings, and stops without corrupting work.

## Required practices

- Keep configuration external to the binary. Support environment variables or a configuration provider appropriate to the deployment platform.
- Parse and validate configuration once during startup. Fail fast with actionable, non-sensitive error messages when required configuration is missing or invalid.
- Define defaults deliberately. Avoid hidden defaults for security-sensitive values, public origins, authentication settings, database TLS, or production endpoints.
- Separate development, staging, and production settings and credentials. Never copy production secrets into local examples.
- Keep a documented configuration reference including name, type, required/optional status, default, example (non-secret), and effect.
- Build reproducibly and pin toolchain/dependency expectations. Keep `go.mod` and `go.sum` under version control.
- Prefer minimal runtime images, non-root execution, read-only filesystems where possible, and only the OS capabilities/files the process needs.
- Handle `SIGTERM`/termination signals, stop accepting new requests, drain in-flight requests within a bounded deadline, close background workers, and release resources.
- Ensure shutdown deadlines are shorter than the platform's termination grace period.
- Expose liveness and readiness endpoints with distinct semantics. Do not report ready before required startup initialization has completed.
- Run database migrations as an explicit deployment operation or controlled one-off job when possible, not independently from every replica.
- Make startup and shutdown logs clear. Include service version and environment, but not credentials.
- Document ports, required environment variables, health URLs, dependencies, startup command, shutdown behavior, and expected resource limits.

## Go-specific notes

- Configure `http.Server` timeouts intentionally.
- Use `Server.Shutdown` with a bounded context and close idle outbound connections where appropriate.
- Close database pools and message clients during shutdown.
- Use signal-aware contexts for process lifecycle management.

## Completion checklist

- [ ] Required configuration is validated before serving traffic.
- [ ] Secrets are externalized.
- [ ] Runtime user and image privileges are minimized.
- [ ] Graceful shutdown is bounded and handles in-flight work.
- [ ] Readiness reflects initialization state.
- [ ] Migrations have one controlled owner.
- [ ] Startup, run, health, and shutdown procedures are documented.

## References

- [Go net/http package](https://pkg.go.dev/net/http)
- [Go signal package](https://pkg.go.dev/os/signal)
- [Organizing a Go module](https://go.dev/doc/modules/layout)
- [Go Security Best Practices](https://go.dev/doc/security/best-practices)
