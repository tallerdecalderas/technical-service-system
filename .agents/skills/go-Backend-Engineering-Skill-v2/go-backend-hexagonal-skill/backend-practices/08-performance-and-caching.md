# Backend Practice 08 — Performance and Caching

## Goal

Meet latency and throughput needs with evidence-based optimizations while protecting correctness and operating cost.

## Required practices

- Define expected traffic, latency objectives, payload sizes, concurrency, data growth, and dependency limits before selecting infrastructure or optimizing code.
- Measure before optimizing. Use CPU and heap profiles, traces, runtime metrics, database statistics, and production-like measurements to locate bottlenecks.
- Optimize the dominant cost first. For typical backends, database round trips, network calls, serialization, and lock contention often matter more than isolated micro-optimizations.
- Avoid N+1 queries and unnecessary full-table scans. Select only needed columns, paginate, and verify query plans for expensive paths.
- Reuse HTTP clients/transports and database pools instead of creating them per request.
- Bound memory and work per request. Avoid loading unbounded result sets or buffering arbitrary uploads in memory.
- Cache only data with a defined freshness and invalidation strategy. Specify TTL, stale behavior, ownership, cache key, tenant isolation, and what happens on cache failure.
- Avoid caching authorization decisions or sensitive data unless the cache key and invalidation semantics are rigorously designed.
- Prevent cache stampedes with request coalescing, bounded refresh concurrency, or jittered expiration where appropriate.
- Do not add Redis or another cache just because the application is expected to scale. First determine whether database indexing, query changes, pooling, or local caching is sufficient.
- Set performance budgets and compare changes against them. Do not assert that an optimization improved performance without measurement.

## Go-specific notes

- Use Go's `pprof` CPU and heap profiles and execution tracing when needed.
- Examine allocations and escape behavior only when profiling indicates they are material.
- Be careful with shared mutable caches and map access under concurrency; use synchronization or a concurrency-safe design.

## Completion checklist

- [ ] The bottleneck is identified from measurements or clearly stated evidence.
- [ ] Queries and network round trips are bounded.
- [ ] Cache policy includes freshness, invalidation, and failure behavior.
- [ ] Shared in-memory state is concurrency-safe.
- [ ] No unbounded response or upload is buffered in memory.

## References

- [Go Diagnostics](https://go.dev/doc/diagnostics)
- [Profiling Go Programs](https://go.dev/blog/pprof)
- [Go database connection management](https://go.dev/doc/database/manage-connections)
