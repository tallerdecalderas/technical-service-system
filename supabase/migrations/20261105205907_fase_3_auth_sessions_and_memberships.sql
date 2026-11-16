create table if not exists public.app_sessions (
    id uuid primary key default gen_random_uuid(),
    token_hash char(64) not null unique,
    csrf_token_hash char(64) not null,
    user_id uuid not null references public."user"(id) on delete cascade,
    created_at timestamptz not null default now(),
    expires_at timestamptz not null,
    revoked_at timestamptz,
    last_seen_at timestamptz,
    constraint app_sessions_token_hash_format
        check (token_hash ~ '^[0-9a-f]{64}$'),
    constraint app_sessions_csrf_hash_format
        check (csrf_token_hash ~ '^[0-9a-f]{64}$'),
    constraint app_sessions_expiry_after_creation
        check (expires_at > created_at)
);

create index if not exists app_sessions_user_id_idx
    on public.app_sessions (user_id);
create index if not exists app_sessions_active_expiry_idx
    on public.app_sessions (expires_at)
    where revoked_at is null;

create table if not exists public.user_company_memberships (
    user_id uuid not null references public."user"(id) on delete cascade,
    company_id uuid not null references public.company(id) on delete cascade,
    is_active boolean not null default true,
    created_at timestamptz not null default now(),
    primary key (user_id, company_id)
);

create index if not exists user_company_memberships_active_company_idx
    on public.user_company_memberships (company_id, user_id)
    where is_active;

alter table public.app_sessions enable row level security;
alter table public.user_company_memberships enable row level security;

revoke all on table public.app_sessions from anon, authenticated;
revoke all on table public.user_company_memberships from anon, authenticated;