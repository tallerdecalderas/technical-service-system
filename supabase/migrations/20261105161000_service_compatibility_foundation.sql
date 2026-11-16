-- Link external authentication subjects to the existing internal user model.
-- The legacy service schema remains unchanged during the frontend transition.
create table if not exists public.user_identities (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public."user"(id),
    provider text not null,
    provider_subject text not null,
    linked_at timestamptz not null default now(),
    active boolean not null default true,
    constraint user_identities_provider_not_blank
        check (btrim(provider) <> ''),
    constraint user_identities_subject_not_blank
        check (btrim(provider_subject) <> ''),
    constraint user_identities_provider_subject_unique
        unique (provider, provider_subject)
);

create index if not exists user_identities_user_active_idx
    on public.user_identities (user_id, active);

alter table public.user_identities enable row level security;
revoke all on table public.user_identities from anon, authenticated;
