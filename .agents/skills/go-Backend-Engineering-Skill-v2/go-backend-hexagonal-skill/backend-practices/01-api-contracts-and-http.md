# Backend Practice 01 — API Contracts and HTTP Semantics

## Goal

Build APIs that clients can consume predictably and that can evolve without accidental breakage. These rules apply regardless of the internal architecture.

## Required practices

- Define the resource model and request/response contract before implementation. Use OpenAPI when the API has multiple consumers, needs generated clients, or requires a durable external contract.
- Use HTTP methods according to their semantics: `GET` reads, `POST` creates or triggers non-idempotent processing, `PUT` replaces a resource, `PATCH` applies partial modification, and `DELETE` removes or deactivates a resource.
- Keep status codes meaningful: `200` for successful reads/updates with a body, `201` for creation, `202` for accepted asynchronous work, `204` for success without a body, `400` for malformed requests, `401` for missing/invalid authentication, `403` for insufficient permission, `404` for unavailable resources, `409` for state conflicts, `422` for semantically invalid input when that convention is used, `429` for rate limits, and `5xx` for server-side failures.
- Do not return `200` for failed business operations. A health endpoint returning 200 is not permission to mask endpoint failures.
- Keep response shapes stable. Use explicit DTOs; do not serialize database entities or internal domain objects directly by accident.
- Standardize error responses with a stable machine-readable code, safe human-readable message, and optional request/correlation identifier. Never return stack traces, SQL text, tokens, or internal hostnames.
- Define pagination for collection endpoints. Prefer cursor pagination for large or frequently changing datasets; use offset pagination only when its ordering and consistency trade-offs are acceptable. Enforce a maximum page size.
- Define filtering and sorting explicitly. Allowlist sortable fields; never concatenate untrusted user input into SQL identifiers or clauses.
- Decide how API versioning and deprecation work before incompatible public changes. Prefer additive changes when possible.
- Set content types correctly and reject unsupported media types where appropriate. Support request compression only with decompressed-size limits.
- Document time format, timezone expectations, currency representation, nullability, and precision for fields where ambiguity causes data corruption.

## Avoid

- Returning arbitrary structs whose JSON shape changes when internal fields are added.
- Using `200 OK` for every outcome.
- Unbounded list endpoints.
- Exposing internal error strings to clients.
- Changing field types or meanings without a compatibility plan.

## Completion checklist

- [ ] Request and response contracts are explicit.
- [ ] Status codes match the outcome.
- [ ] Pagination has a server-enforced maximum.
- [ ] Error shape is consistent and does not leak internals.
- [ ] Breaking changes have a migration/versioning strategy.
- [ ] API documentation matches the implementation.

## References

- [Go net/http package](https://pkg.go.dev/net/http)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
