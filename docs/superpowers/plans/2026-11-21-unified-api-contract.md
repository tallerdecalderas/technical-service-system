# Unified Frontend API Contract Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every frontend service consume the single HTTP response contract emitted by the Go backend: collections in `data`, pagination in `meta`, and detail/create/update objects directly in `data`.

**Architecture:** Add small typed envelope helpers to the existing API client, then replace legacy nested response assumptions in every frontend service. Adapters receive the exact domain DTO rather than the transport envelope, while list adapters receive `{ data, meta }` only at the service boundary.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, Go HTTP backend, Node `tsx --test`.

**Spec:** No separate design document. The runtime contract is the existing Go handler output: `writeJSON(..., {"data": ..., "meta": ...})` and direct detail/create/update responses in `data`.

## Global Constraints

- Do not change backend response shapes to preserve legacy frontend assumptions.
- Do not add fallback or compatibility branches for nested field names such as `payments`, `estimates`, `technicians`, `services`, or `companies`.
- Do not use `any` for the repaired list/detail response boundaries.
- Preserve authorization checks and existing service permissions.
- No generated secrets or passwords may be printed or committed.
- Run build/runtime verification instead of claiming success from code inspection alone.

## Review Focus

- Empty collection in `data: []` must adapt to an empty list, not `undefined`.
- Missing `meta` on a paginated collection must fail clearly instead of silently reading a nested field.
- Missing `data` on a detail/create/update response must fail clearly.
- Paginated `meta.totalPages` must be treated as optional only when deriving it from `total` and `pageSize`; zero `pageSize` must use one page-size unit.
- Existing detail mutations must continue to return one domain DTO, not an envelope.

---

### Task 1: Centralize the API envelope

**Files:**
- Modify: `technical-service-frontend/lib/api-client.ts`
- Create: `technical-service-frontend/lib/api-client.contract.test.ts`

**Interfaces:**
- Consumes: `ApiResponse<T>` and the HTTP JSON envelope.
- Produces: `unwrapList<T>(response: ApiResponse<T>): { data: T[]; meta: PaginationMeta }`
- Produces: `unwrapData<T>(response: ApiResponse<T>): T`

- [ ] **Step 1: Write a failing contract test**

Create `technical-service-frontend/lib/api-client.contract.test.ts` and assert:

```typescript
const result = unwrapList({
  success: true,
  data: [{ id: "payment-1" }],
  meta: { page: 1, pageSize: 20, total: 1, totalPages: 1 },
});
assert.deepEqual(result.data, [{ id: "payment-1" }]);
assert.equal(result.meta.total, 1);
```

Add assertions that missing `data`, missing `meta`, and an unsuccessful response throw explicit errors.

- [ ] **Step 2: Run the test and verify it fails**

Run: `cd technical-service-frontend && pnpm exec tsx --test lib/api-client.contract.test.ts`

Expected: FAIL because `unwrapList` and `unwrapData` do not exist yet.

- [ ] **Step 3: Implement the helpers**

Add typed exports to `technical-service-frontend/lib/api-client.ts`:

- `unwrapList<T>(response: ApiResponse<T[]>)`
- `unwrapData<T>(response: ApiResponse<T>)`

The helpers must reject unsuccessful responses using `response.error?.message`, require `data`, require `meta` for lists, and never infer a key name.

- [ ] **Step 4: Run the contract test**

Run: `cd technical-service-frontend && pnpm exec tsx --test lib/api-client.contract.test.ts`

Expected: PASS.

### Task 2: Align list services

**Files:**
- Modify: `technical-service-frontend/lib/services/{payment,estimate,service,technician,client,company,inventory-item,service-part,settlement,activity-log}.service.ts`

**Interfaces:**
- Consumes: `unwrapList<T>()`.
- Produces: domain arrays with their existing adapters or existing mapping functions.

- [ ] **Step 1: Replace list response assumptions**

For every frontend list call, use `apiClient.get<T[]>` for backend arrays and call `unwrapList`.
Do not access legacy fields such as `payments`, `estimates`, `technicians`, `services`, `companies`, `items`, `parts`, `settlements`, or `logs`.
Keep existing filters, role restrictions, and session/cookie forwarding unchanged.

- [ ] **Step 2: Verify each list service uses the same shape**

Run: `rg 'adapt[A-Za-z]+List\\(response as any\\)|response\\.data\\?\\.[a-zA-Z]+|response\\.data\\.([a-zA-Z]+)' technical-service-frontend/lib/services`

Expected: no legacy list/detail assumptions remain in repaired services.

### Task 3: Align detail and mutation services

**Files:**
- Modify: `technical-service-frontend/lib/services/{payment,estimate,service,technician,client,company,inventory-item,service-part,settlement}.service.ts`

**Interfaces:**
- Consumes: `unwrapData<T>()`.
- Produces: direct domain objects.

- [ ] **Step 1: Replace detail and mutation assumptions**

For GET detail and POST/PATCH responses, call `unwrapData<T>()` and pass `responseData` directly to the relevant adapter or mapper.
Do not read `response.data.payment`, `response.data.estimate`, `response.data.technician`, or equivalent nested names.

- [ ] **Step 2: Protect unauthenticated server pages**

In server pages that call services with `session`, redirect to `/login` before service calls if `getSession()` returns `null`.
At minimum include `/admin/technicians` and any page currently passing `session` without a null guard.

- [ ] **Step 3: Verify no nested response assumptions remain**

Run: `rg 'response\\.data\\.[A-Za-z]+|response as any|adapt[A-Za-z]+Detail\\(response' technical-service-frontend/lib/services`

Expected: no repaired code remains.

### Task 4: Runtime verification

**Files:**
- No production file changes beyond Tasks 1-3.

- [ ] **Step 1: Build the Go backend**

Run: `cd technical-service-backend && go build -buildvcs=false ./...`

Expected: exit 0.

- [ ] **Step 2: Build the frontend**

Run: `cd technical-service-frontend && pnpm build`

Expected: production build completes.

- [ ] **Step 3: Start backend and frontend**

Start Go API on port 8080 and Next.js on port 3000.

- [ ] **Step 4: Verify real login navigation**

Using an explicit test account only, confirm:
- login returns HTTP 200;
- `/admin/dashboard` returns HTTP 200;
- `/admin/technicians` returns HTTP 200;
- `/admin/estimates` returns HTTP 200;
- `/technician/dashboard` returns HTTP 200;
- logout revokes the session.

- [ ] **Step 5: Document verification only**

Report exact commands, URLs, observed statuses, and any remaining blocker. Do not describe the task as production-ready unless the runtime evidence proves the specific routes listed above.
