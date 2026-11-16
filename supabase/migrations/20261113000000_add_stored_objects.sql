-- Migración Fase 7: tabla stored_objects para el módulo de Storage.
-- Estados del ciclo de vida: PENDING, AVAILABLE, DELETE_PENDING, DELETED, FAILED.

CREATE TABLE IF NOT EXISTS public."storedObject" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL,
    storage_provider TEXT NOT NULL CHECK (storage_provider IN ('local', 'r2')),
    bucket_name TEXT NOT NULL,
    object_key TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('photos', 'receipts', 'documents')),
    original_filename TEXT NOT NULL,
    content_type TEXT NOT NULL,
    expected_size_bytes BIGINT NOT NULL CHECK (expected_size_bytes > 0),
    size_bytes BIGINT,
    checksum_sha256 TEXT,
    uploaded_by_id UUID NOT NULL,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'AVAILABLE', 'DELETE_PENDING', 'DELETED', 'FAILED')),
    upload_url_expires_at TIMESTAMPTZ NOT NULL,
    upload_attempt_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    confirmed_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT stored_object_company_entity_unique UNIQUE (company_id, entity_type, entity_id, category, object_key)
);

CREATE INDEX IF NOT EXISTS idx_stored_object_company_id ON public."storedObject"(company_id);
CREATE INDEX IF NOT EXISTS idx_stored_object_entity ON public."storedObject"(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_stored_object_category ON public."storedObject"(category);
CREATE INDEX IF NOT EXISTS idx_stored_object_status ON public."storedObject"(status);
CREATE INDEX IF NOT EXISTS idx_stored_object_upload_expires ON public."storedObject"(upload_url_expires_at);

-- Comentarios para documentación
COMMENT ON TABLE public."storedObject" IS 'Objetos almacenados con ciclo de vida PENDING/AVAILABLE/DELETE_PENDING/DELETED/FAILED';
COMMENT ON COLUMN public."storedObject".upload_url_expires_at IS 'Fecha de expiración de la URL prefirmada de carga';
COMMENT ON COLUMN public."storedObject".upload_attempt_id IS 'Identificador del intento de subida para idempotencia';
