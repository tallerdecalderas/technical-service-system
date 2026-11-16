# Backend Practice 02 — Security and Access Control

## Goal

Make secure behavior the default. Security controls must be applied at every externally reachable boundary and must not depend on UI behavior.

## Required practices

- Separate authentication (who the caller is) from authorization (what the caller may do). Authenticate and authorize every protected operation on the server.
- Apply least privilege to application identities, database users, cloud roles, service accounts, and human operators. Separate read-only and write capabilities where practical.
- Deny access by default. Explicitly define public endpoints and protected resources; do not rely on hidden routes or frontend-only checks.
- For JWTs, validate signature, allowed algorithm, issuer, audience, expiry, not-before, and key rotation. Never trust decoded claims before cryptographic validation. Do not accept an algorithm selected by untrusted token input.
- Use secure, established password-hashing algorithms and libraries (for example Argon2id or bcrypt with parameters appropriate to the environment). Never store plaintext or reversibly encrypted passwords.
- Store secrets in a secret manager or deployment environment, not source control, images, logs, examples, or committed `.env` files. Use separate credentials per environment and rotate them.
- Use TLS for external traffic and validate certificates for outbound TLS connections. Do not disable certificate verification to make an integration work.
- Configure CORS with explicit trusted origins, methods, and headers. Do not use wildcard origins with credentialed browser requests.
- Consider CSRF protection when browser authentication relies on ambient cookies. Use `Secure`, `HttpOnly`, and appropriate `SameSite` cookie attributes.
- Protect against injection by using parameterized SQL and safe APIs for shells, templates, file paths, and queries.
- Avoid exposing stack traces, secrets, PII, internal network topology, SQL, or dependency details in client responses.
- Apply security headers where relevant to the service and deployment topology.
- Verify third-party dependency provenance and maintenance status. Review dependency changes; use Go's official security guidance and vulnerability database when the user authorizes security scanning.
- Treat logs, metrics labels, traces, and error reports as data-exfiltration surfaces. Redact credentials and sensitive fields.

## Avoid

- Authorization decisions made only in the frontend.
- Long-lived shared secrets embedded in source code.
- Accepting arbitrary JWT algorithms or skipping claim validation.
- Logging complete authorization headers, cookies, passwords, or payment data.
- Disabling TLS verification.

## Completion checklist

- [ ] Every protected route enforces authentication and authorization.
- [ ] Permissions follow least privilege.
- [ ] Secrets are not committed or logged.
- [ ] Tokens, cookies, CORS, and TLS are configured deliberately.
- [ ] SQL and other interpreters receive parameterized or safely encoded input.
- [ ] Error responses and telemetry do not disclose sensitive internals.

## References

- [Go Security Best Practices](https://go.dev/doc/security/best-practices)
- [OWASP API Security Top 10](https://owasp.org/API-Security/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
