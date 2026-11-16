# Backend Practice 07 — Observability and Operability

## Goal

Make production behavior diagnosable without exposing sensitive data or overwhelming operators.

## Required practices

- Use structured logs with stable fields such as timestamp, severity, service, environment, request ID, trace ID, route template, operation, duration, and outcome.
- Generate or validate a request ID at the trusted edge and propagate it through internal calls. Do not blindly trust arbitrary client-supplied correlation values.
- Record metrics for request rate, errors, and duration (RED), plus resource saturation such as CPU, memory, goroutines, connection pools, queue depth, and dependency failures.
- Instrument critical outbound calls and asynchronous jobs with distributed tracing when the system's operational complexity justifies it.
- Use low-cardinality metric labels. Never label metrics with user IDs, emails, raw URLs, tokens, or unbounded values.
- Define dashboards and actionable alerts around user-visible symptoms and service-level objectives, not only infrastructure utilization.
- Separate liveness from readiness. Liveness indicates the process can continue; readiness indicates it can safely receive the relevant traffic. Avoid making liveness depend on a temporary database outage if that causes restart loops.
- Keep health responses minimal. Do not publish dependency credentials, topology, stack traces, or detailed internal state.
- Ensure logs and telemetry redact passwords, tokens, cookies, personal data, payment details, and request bodies unless a specific safe field is required.
- Define retention, access control, and sampling for logs, traces, and metrics.
- Include build/version metadata in startup logs or a controlled diagnostic endpoint, without exposing sensitive build environment details.

## Go-specific notes

- Prefer the standard `log/slog` structured logging API when compatible with the project's Go version and logging requirements; confirm its availability in the targeted Go release.
- OpenTelemetry Go is a common instrumentation option; follow the official versioned docs and semantic conventions if adopted.
- Use `pprof`, runtime metrics, and execution tracing to investigate measured performance issues. Do not expose profiling handlers publicly without access controls.

## Completion checklist

- [ ] Logs are structured and correlate requests.
- [ ] Core traffic/error/latency and saturation metrics exist or are planned.
- [ ] Telemetry has bounded label cardinality.
- [ ] Health endpoints reveal no sensitive internals.
- [ ] Sensitive values are redacted.
- [ ] Diagnostic endpoints are access-controlled.

## References

- [Go Diagnostics](https://go.dev/doc/diagnostics)
- [Go log/slog package](https://pkg.go.dev/log/slog)
- [OpenTelemetry Go](https://opentelemetry.io/docs/languages/go/)
