# 08 — Persistencia, consultas y transacciones

## Objetivo

Mantener la persistencia como detalle externo, controlar concurrencia y asegurar consistencia en operaciones que modifican varios recursos.

## Reglas

- Mantener SQL y drivers en adaptadores de salida; nunca importarlos desde el dominio.
- Usar consultas parametrizadas; no concatenar valores provenientes del usuario dentro de SQL.
- Propagar contextos a consultas, comandos y transacciones.
- Usar transacciones cuando varias escrituras deban confirmarse o revertirse como una única unidad atómica.
- Mantener las transacciones cortas; no realizar llamadas HTTP externas mientras se retienen locks o transacciones salvo justificación fuerte.
- Configurar límites razonables de conexiones abiertas, conexiones inactivas y lifetime del pool.
- Evitar N+1 queries y seleccionar solamente las columnas necesarias.
- Mapear errores del driver a errores comprensibles para application sin filtrar detalles del motor.
- Versionar cambios de esquema mediante migraciones reproducibles y mantenerlas en el repositorio.
- Elegir `database/sql`, `pgx` o `sqlc` según necesidades y estándares del proyecto; no añadir ORM por defecto.

## Transacciones

- La capa de aplicación define el límite de la operación atómica.
- El adaptador implementa el mecanismo transaccional.
- No propagar tipos concretos de transacción del driver a través del dominio.
- Ante cualquier error antes del commit, asegurar rollback; manejar el error de commit explícitamente.

## Referencia

- https://go.dev/doc/database/
