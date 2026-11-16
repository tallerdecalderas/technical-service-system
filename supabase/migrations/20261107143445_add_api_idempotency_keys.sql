create table if not exists public.api_idempotency_keys (
    user_id uuid not null references public."user"(id) on delete cascade,
    operation text not null,
    idempotency_key text not null
        check (char_length(idempotency_key) between 1 and 128),
    request_hash text not null
        check (request_hash ~ '^[0-9a-f]{64}$'),
    response_status smallint,
    response_content_type text,
    response_body bytea,
    created_at timestamptz not null default now(),
    completed_at timestamptz,
    primary key (user_id, operation, idempotency_key),
    constraint api_idempotency_response_state
        check (
            (completed_at is null
                and response_status is null
                and response_content_type is null
                and response_body is null)
            or
            (completed_at is not null
                and response_status is not null
                and response_status between 100 and 599
                and response_content_type is not null
                and response_body is not null)
        )
);

alter table public.api_idempotency_keys enable row level security;
revoke all on table public.api_idempotency_keys from public, anon, authenticated;