# Empresas y configuración operativa

**Tipo:** capacidad transversal.  
**Fase:** pendiente de asignación y alcance; no existe todavía un módulo ni un
conjunto de endpoints completo para esta capacidad.

## Empresa

La empresa define contexto operativo y aislamiento multiempresa. El modelo de
dominio compartido le atribuye porcentaje/recargo y margen por defecto para
precios. Servicios, catálogo, asignaciones y rendiciones deben aplicar el
alcance de empresa del usuario autenticado.

La membresía determina a qué empresas activas puede acceder el usuario. No
asumir que toda cuenta pertenece a una única empresa ni confiar en el
`companyId` enviado por el cliente.

Relación física actual: `public."company"` y
`public.user_company_memberships`. El backend debe conservar estas relaciones
durante la compatibilidad; no crear tablas paralelas.

## Configuración operativa

El UI de Administración menciona usuarios, roles, proveedores, plantillas
WhatsApp y parámetros generales. La especificación no distingue aún:

- preferencias locales de interfaz (tema, idioma);
- configuración compartida de empresa;
- secretos/credenciales de integraciones;
- parámetros de cálculo que deben versionarse por empresa.

No guardar preferencias del navegador en PostgreSQL sin necesidad. No exponer
secretos de integración mediante endpoints de lectura. Todo parámetro que
afecte cálculos económicos debe definir vigencia y quedar reproducible en los
snapshots de liquidación.

## API y alcance

El contrato API actual no contiene endpoints de empresas ni administración de
configuración general. No inventar CRUD o permisos por analogía. El alcance
debe definirse antes de reservar estas operaciones para un módulo de
configuración.

## Decisiones necesarias

- Quién crea empresas y cómo se invitan/asignan usuarios.
- Si ADMIN es global o está limitado por empresa; el modelo actual tiene rol
  global y membresías.
- Qué valores económicos son propios de empresa, quién los modifica y cómo se
  conserva la versión histórica.
- Qué configuración se persiste en backend frente a preferencias locales.
- Qué secciones de Configuración de frontend tienen backend real (usuarios,
  roles, plantillas, proveedores y parámetros).
- Fase backend y endpoints que cubrirán estas operaciones.

## Referencias

- [Modelo de dominio](../../modelo-dominio.md)
- [Reglas de negocio](../../reglas-negocio.md)
- [Esquema backend](../database.md)
- [UI Administración](../../.frontend/UI/ui-administracion.md)
- [Fase 3 y fases dependientes](../../ejecuciones/backend-implementation-plan.md)
