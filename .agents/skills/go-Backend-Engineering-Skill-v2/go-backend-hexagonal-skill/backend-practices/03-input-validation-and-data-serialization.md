# Backend Practice 03 — Input Validation and Data Serialization

## Goal

Treat every value crossing a trust boundary as untrusted. Validate syntax, shape, size, meaning, and authorization before using it.

## Required practices

- Validate input at the transport boundary and validate business invariants again in the domain/application layer when those invariants must hold regardless of transport.
- Distinguish parsing from validation: parsing determines whether a value has the expected representation; validation determines whether it is allowed and meaningful.
- Use allowlists for enumerations, sort keys, file types, state transitions, and accepted values. Reject unexpected values instead of silently normalizing them when that could change meaning.
- Apply maximum request-body size before decoding. Bound string length, array length, nesting, number of items, upload size, and expensive parsing operations.
- Decode JSON into explicit request DTOs. Decide deliberately whether unknown fields should be rejected; do not accidentally accept ambiguous payloads in security-sensitive APIs.
- Validate identifiers, numeric ranges, currency precision, timestamps, timezone offsets, and pagination inputs. Avoid floating-point types for exact monetary values; use integer minor units or a well-defined decimal representation.
- Normalize only where the domain requires it. Do not silently trim, lowercase, or rewrite identifiers when case or whitespace is meaningful.
- Avoid mass assignment: map client-controlled fields explicitly instead of decoding into persistence models that contain privileged fields such as `role`, `owner_id`, `is_admin`, or internal status.
- Validate file names and content independently. Do not trust MIME type or extension alone; prevent path traversal and enforce upload limits.
- Encode output for its destination context. JSON encoding does not make content safe for HTML, SQL, shell commands, or URLs.
- Use explicit response DTOs and omit internal fields by construction.

## Go-specific notes

- Use `http.MaxBytesReader` (or an equivalent bounded reader) for HTTP request bodies.
- Use `json.Decoder` with an explicit policy for unknown fields and trailing JSON values.
- Return field-level validation errors with stable public codes, but avoid disclosing internal validation logic that could aid abuse.
- Do not assume Go's zero values distinguish omitted fields from explicit `false`, `0`, or empty string in PATCH requests; use pointer/optional-field representations when presence matters.

## Completion checklist

- [ ] All untrusted values have size and semantic constraints.
- [ ] Client DTOs cannot mass-assign privileged/internal fields.
- [ ] PATCH semantics distinguish omitted values from explicit zero values.
- [ ] Numeric, monetary, date, and timezone values have explicit representations.
- [ ] Output contains only fields intended for the caller.

## References

- [encoding/json](https://pkg.go.dev/encoding/json)
- [net/http](https://pkg.go.dev/net/http)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
