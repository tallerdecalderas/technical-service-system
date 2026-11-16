# Módulos del backend Go

Estas fichas describen cómo Go implementa las capacidades del dominio. No
reemplazan las reglas compartidas ni describen pantallas: las reglas están en
[`reglas-negocio.md`](../../reglas-negocio.md) y
[`modelo-dominio.md`](../../modelo-dominio.md); la interfaz y sus flujos están
en [`../.frontend/`](../../.frontend/README.md).

## Cómo leer estas fichas

- Los contratos funcionales compartidos prevalecen sobre estas notas técnicas.
- Los endpoints se toman de [`../api.md`](../api.md) y son objetivo contractual;
  una ruta documentada no implica que ya esté implementada.
- El esquema físico actual está descrito en [`../database.md`](../database.md).
  No inferir tablas nuevas ni ejecutar migraciones desde estas fichas.
- Los asuntos marcados **Pendiente de decisión** deben resolverse antes de
  codificar el comportamiento correspondiente. No se deben completar por
  suposición.
- La persistencia usa PostgreSQL mediante SQL parametrizado y repositorios Go.
  Supabase PostgreSQL es el destino actual; otro PostgreSQL compatible, por
  ejemplo uno alojado en un VPS, es una opción futura de despliegue. Cambiar
  `DATABASE_RUNTIME_URL` no crea el esquema, transfiere los datos ni sustituye
  Supabase Auth o Cloudflare R2.
- Cada módulo se desarrolla y verifica en la fase indicada. La migración del
  frontend empieza después de completar las fases backend 1–7.

## Módulos por fase

| Fase del plan backend | Módulo | Ficha |
|---|---|---|
| 3 | Identidad, sesión y autorización | [identidad-y-autorizacion.md](./identidad-y-autorizacion.md) |
| 4 | Clientes y técnicos | [clientes-y-tecnicos.md](./clientes-y-tecnicos.md) |
| 4 | Servicios, agenda e historial | [servicios-agenda-historial.md](./servicios-agenda-historial.md) |
| 5 | Cobros y repuestos | [cobros-y-repuestos.md](./cobros-y-repuestos.md) |
| 5 | Presupuestos | [presupuestos.md](./presupuestos.md) |
| 6 | Gastos de servicio | [gastos.md](./gastos.md) |
| 6 | Inventario, proveedores, precios e importación | [inventario-proveedores-precios.md](./inventario-proveedores-precios.md) |
| 6 | Rendiciones | [rendiciones.md](./rendiciones.md) |
| 7 | Archivos y Storage | [archivos-storage.md](./archivos-storage.md) |
| 7 | Integraciones externas | [integraciones.md](./integraciones.md) |
| Transversal; fase pendiente de asignación | Empresas y configuración operativa | [empresas-y-configuracion.md](./empresas-y-configuracion.md) |

## Límites compartidos

1. Go autentica y autoriza cada operación; la UI no es una barrera de
   seguridad.
2. PostgreSQL es la fuente oficial. Las integraciones externas nunca escriben
   directamente en ella.
3. Las mutaciones relacionadas deben usar transacciones; las operaciones
   reintentables deben cumplir el contrato de idempotencia de la API.
4. Los montos se conservan como decimales (`numeric` en PostgreSQL y strings
   decimales en JSON), no como `float`.
5. Se conserva el historial operativo y económico. No borrar servicios,
   cobros o snapshots liquidados para simular una corrección.
6. La implementación actual de PostgreSQL usa el adaptador `pgx`. Las
   integraciones de identidad, R2 y proveedores externos son dependencias
   distintas de la conexión de base de datos.

## Documentación relacionada

- [Plan maestro](../../ejecuciones/implementation-plan.md)
- [Plan operativo backend](../../ejecuciones/backend-implementation-plan.md)
- [Contrato HTTP](../api.md)
- [Esquema de datos](../database.md)
- [Configuración del backend](../configuration.md)
- [Arquitectura backend](../../ingeneri/backend-architecture.md)
