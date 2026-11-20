ALTER TABLE public.company
    ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE public."user"
    ALTER COLUMN id SET DEFAULT gen_random_uuid();