# Backend Practice 05 — Resilience and Dependency Management

## Goal

Prevent a slow or failing dependency from exhausting the backend or propagating failure without limits.

## Required practices

- Set explicit timeouts for every outbound network call and database operation. A request should have an overall deadline and each dependency call should fit within the remaining budget.
- Propagate `context.Context` and honor cancellation. Stop work when the caller has gone away or the deadline expires, unless the work has explicitly been transferred to a durable background job.
- Retry only transient failures and only when the operation is safe to retry. For writes, require idempotency or a deduplication strategy before adding automatic retries.
- Use bounded retries with exponential backoff, jitter, a maximum elapsed time, and a retry budget. Avoid synchronized retry storms.
- Do not retry validation errors, authorization failures, most `4xx` responses, or permanent configuration errors.
- Use circuit breakers only when the dependency failure mode and recovery behavior justify them. Configure open/half-open behavior and avoid treating them as a substitute for timeouts.
- Apply bulkheads: isolate critical dependency pools and cap concurrent calls so one dependency cannot consume all workers or connections.
- Define fallback behavior deliberately. A fallback must not silently return stale or fabricated business data.
- Make external HTTP clients reusable, configure transport connection pooling and timeouts, and close response bodies.
- Set limits on message consumers, worker pools, queue depth, and in-flight jobs. Reject, defer, or shed load when limits are reached rather than allowing unbounded memory growth.
- Handle partial failure explicitly. A timeout does not prove that a remote write did not happen; reconcile uncertain outcomes using idempotency keys or status lookup.

## Avoid

- Infinite retries or retries without jitter.
- Retrying non-idempotent writes blindly.
- One global timeout for every operation regardless of its role.
- Unbounded goroutines, channels, queues, or pending requests.
- Hiding dependency outages behind fake success responses.

## Completion checklist

- [ ] Every outbound dependency has a timeout/deadline.
- [ ] Retry conditions and maximum attempts/time are explicit.
- [ ] Retried writes are idempotent or deduplicated.
- [ ] Concurrency and queue sizes are bounded.
- [ ] Failures and degraded behavior are observable.

## References

- [Go context package](https://pkg.go.dev/context)
- [Go net/http package](https://pkg.go.dev/net/http)
- [Go database query cancellation](https://go.dev/doc/database/cancel-operations)
