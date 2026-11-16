# Backend Practice 04 — Database Integrity and Migrations

## Goal

Keep persisted data correct under concurrent requests, retries, partial failures, and future schema changes.

## Required practices

- Enforce important invariants at the database layer with `NOT NULL`, `UNIQUE`, `CHECK`, foreign keys, and appropriate indexes in addition to application validation.
- Use parameterized SQL. Never interpolate user-controlled values into SQL statements. For dynamic column names or sort directions, select from a strict allowlist.
- Use transactions when multiple writes must succeed or fail atomically. Keep transactions short; do not make remote HTTP calls while holding database locks or transactions open.
- Choose transaction isolation and locking based on the invariant being protected. Do not assume a read-then-write sequence is safe under concurrency.
- Use context-aware database calls and bounded query timeouts. Propagate cancellation from the inbound request when appropriate.
- Configure connection pools based on deployment capacity. Calculate the aggregate connection budget across replicas; each process's pool limit multiplied by replica count must fit the database's connection budget with room for administration and other services.
- Observe pool wait time, open connections, idle connections, query latency, lock waits, and slow queries.
- Avoid N+1 query patterns. Fetch only needed columns and rows. Use indexes aligned with real filter/order patterns and confirm expensive queries with database query plans.
- Use stable ordering for pagination. Cursor pagination should use an indexed, deterministic key (often a compound key) to avoid duplicates and gaps under concurrent inserts.
- Keep migrations versioned and committed. Prefer forward-only, reviewable migrations; document destructive operations and data backfills.
- Use an expand/migrate/contract approach for schema changes that must coexist with old and new application versions: add compatible schema, deploy code that supports both, backfill, then remove obsolete schema in a later deployment.
- Do not automatically run destructive migrations during every application replica startup. Use a controlled deployment/migration step with explicit ownership and failure handling.
- Store timestamps consistently (usually UTC instants) and keep timezone presentation rules at the API/business boundary. Define monetary currency and precision explicitly.

## Go-specific notes

- With `database/sql`, remember `*sql.DB` is a concurrency-safe handle managing a connection pool, not one physical connection.
- Use `QueryContext`, `ExecContext`, `QueryRowContext`, and `BeginTx` with appropriate contexts.
- Close `Rows`, check `Rows.Err`, and handle `Scan` errors.
- If using pgx/sqlc or another data layer, consult the official documentation for the exact selected version rather than translating `database/sql` assumptions blindly.

## Completion checklist

- [ ] Database constraints protect key invariants.
- [ ] Queries are parameterized and bounded.
- [ ] Transactions cover only atomic database work.
- [ ] Pool limits fit the total replica and database budget.
- [ ] Query patterns, indexes, and pagination are deliberate.
- [ ] Migrations are versioned and deploy-safe.
- [ ] Timestamp, timezone, and money representations are explicit.

## References

- [Go database documentation](https://go.dev/doc/database/)
- [Managing database connections](https://go.dev/doc/database/manage-connections)
- [Executing transactions](https://go.dev/doc/database/execute-transactions)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/current/)
