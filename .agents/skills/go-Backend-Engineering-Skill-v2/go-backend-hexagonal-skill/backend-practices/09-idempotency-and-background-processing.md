# Backend Practice 09 — Idempotency and Background Processing

## Goal

Make retried requests, duplicate webhook deliveries, and asynchronous processing safe and observable.

## Required practices

- Identify operations where clients, gateways, brokers, or providers may deliver the same command more than once (payments, orders, provisioning, webhooks, notifications, scheduled jobs).
- For retryable create/execute operations, define an idempotency key scope, retention period, uniqueness rule, and response replay behavior.
- Persist the idempotency key and operation outcome atomically with the business state change when practical. A cache-only key may be insufficient if it can be lost independently of the write.
- Define behavior for concurrent requests using the same key: one operation should own execution; other requests should wait, receive the prior result, or receive a documented conflict/in-progress response.
- Verify webhook signatures using the provider's official method. Validate timestamps and replay windows where supported. Record processed event IDs to deduplicate repeated delivery.
- Treat delivery as at-least-once unless the provider or broker contract proves otherwise. Do not assume exactly-once processing across independent systems.
- Make background jobs durable when losing a job would violate business expectations. Define retries, backoff, maximum attempts, dead-letter handling, visibility, and manual recovery.
- Give every job a stable ID, state transitions, attempt count, timestamps, and safe error summary.
- Use bounded workers and queue depth. Ensure shutdown behavior does not silently discard work that must be durable.
- Avoid holding an HTTP request open for long-running jobs; return `202 Accepted` with an operation/resource reference when asynchronous processing is appropriate.
- For cross-system workflows, document partial-failure and reconciliation behavior. A successful local commit does not mean a remote side effect succeeded.

## Completion checklist

- [ ] Duplicate command delivery is considered.
- [ ] Idempotency semantics and retention are explicit.
- [ ] Webhook authentication and replay handling are implemented.
- [ ] Background retry and dead-letter behavior are defined.
- [ ] Worker concurrency and queue capacity are bounded.
- [ ] Operators can inspect and recover failed jobs safely.

## References

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [Stripe documentation: Idempotent requests](https://docs.stripe.com/api/idempotent_requests) — example of a provider-specific contract; follow the actual provider's docs for integrations.
- [Go context package](https://pkg.go.dev/context)
