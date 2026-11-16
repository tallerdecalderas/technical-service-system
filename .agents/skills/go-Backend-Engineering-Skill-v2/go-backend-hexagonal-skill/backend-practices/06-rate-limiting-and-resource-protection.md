# Backend Practice 06 — Rate Limiting and Resource Protection

## Goal

Protect availability and predictable latency by controlling how much work each caller and request can trigger.

## Required practices

- Apply rate limits to expensive or abuse-prone endpoints. Choose a key appropriate to the threat model: authenticated user, API key, tenant, IP, or a combination.
- Use distributed rate-limit state when multiple replicas must enforce one shared limit. A per-process limiter alone does not enforce a global quota.
- Return `429 Too Many Requests` when a caller exceeds a documented quota. Include `Retry-After` where the retry window is known and useful.
- Bound request-body size, upload size, URL/query length, number of query parameters, batch size, page size, and maximum date range.
- Limit concurrent expensive operations (exports, reports, image processing, bulk writes, third-party API calls).
- Use queue limits and backpressure for asynchronous workloads. Define what happens when the queue is full.
- Apply per-tenant quotas where a shared system hosts multiple customers. Prevent one tenant from exhausting shared resources.
- Protect authentication, password recovery, OTP, search, export, and webhook endpoints according to their abuse profile.
- Consider infrastructure-level limits (load balancer, reverse proxy, API gateway, WAF) in addition to application-level controls.
- Avoid making rate-limit keys from untrusted headers unless the proxy chain is configured to establish those headers safely.

## Go-specific notes

- Use bounded worker pools or semaphores for expensive work.
- Avoid spawning one goroutine per untrusted request without a concurrency limit.
- If using `golang.org/x/time/rate`, consult its official package documentation and understand whether the limiter is local to one process or backed by shared state.

## Completion checklist

- [ ] Expensive endpoints have explicit resource bounds.
- [ ] Page, batch, body, and upload limits are enforced server-side.
- [ ] Multi-replica limits use shared state when global enforcement is required.
- [ ] Queue-full and overload behavior is deliberate.
- [ ] Rate-limit responses are documented and observable.

## References

- [net/http package](https://pkg.go.dev/net/http)
- [OWASP API Security — Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)
- [golang.org/x/time/rate](https://pkg.go.dev/golang.org/x/time/rate)
