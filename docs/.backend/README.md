# Documentación del backend Go

Esta carpeta contiene la documentación que se trasladará al repositorio
independiente del backend Go. El backend será la única API de negocio de
TechService; Next.js quedará como frontend y cliente HTTP.

## Documentos

- [Arquitectura hexagonal](../ingeneri/backend-architecture.md)
- [Contrato HTTP](./api.md)
- [Plan maestro de implementación](../ejecuciones/implementation-plan.md)
- [Plan operativo backend (fases 0–7)](../ejecuciones/backend-implementation-plan.md)
- [Caché mínima y offline](./cache.md)
- [Módulos y contrato funcional](./modulos/README.md)
- [Módulo de archivos y Storage](./modulos/archivos-storage.md)
- [Integraciones](./integraciones/integrations.md)
- [Configuración y `example.env`](./configuration.md)
- [Conexión y migraciones SQL](../ingeneri/database-connection.md)
- [Esquema de datos del backend](./database.md)
- [Modelo de dominio compartido](../modelo-dominio.md)

## Estado

La documentación define la arquitectura objetivo y el plan de migración. El
usuario confirma que las migraciones necesarias están aplicadas y que la
autenticación está lista; esta actualización no consultó producción. El backend
Go tiene implementada la base técnica de la Fase 1: configuración,
pool de PostgreSQL, HTTP, health checks, CORS, request IDs, logging y apagado
ordenado. También está implementada localmente la autenticación Go con sesión,
CSRF y recuperación; el usuario confirma que la autenticación está lista, sin
que esta actualización haya consultado producción. La
implementación de clientes, técnicos, servicios, agenda e historial de la Fase
4 está marcada como realizada en el plan, pero su verificación final sigue
pendiente. Las fases 5–7 (cobros, presupuestos, gastos, inventario,
rendiciones, Storage e integraciones) siguen pendientes. El frontend Next.js
actual se conserva mientras se completan primero los módulos Go.

## Regla de migración

El trabajo se hace por etapas, no migrando cada pantalla en paralelo con la
implementación de su módulo backend:

1. Completar en Go los módulos de negocio, Storage e integraciones,
   manteniendo el frontend Next.js actual funcionando.
2. Cuando el backend esté listo para el alcance acordado, migrar el frontend
   completo para que consuma la API Go.
3. Migrar las pantallas existentes conservando su interfaz y crear las
   pantallas pendientes. En cada etapa frontend, compilar, arrancar Next.js y
   comprobar HTTP 200 en `/login`.
4. Solo después, retirar de Next.js los Route Handlers, Server Actions,
   servicios Prisma, autenticación local y dependencias que ya no se usen.

Durante cada fase backend ejecutable (1–7), compilar con
`go build -buildvcs=false ./...`,
arrancar la API con las variables configuradas por el operador y comprobar
HTTP 200 en `/health/live` y `/health/ready`. No crear ni ejecutar pruebas
automatizadas por fase; se abordan al finalizar backend y frontend.

Durante la transición se conserva el frontend actual hasta completar la etapa
de migración. No se elimina ningún consumidor Next.js antes de verificar que
el frontend ya usa Go para la capacidad correspondiente. El estado final es un
frontend Next.js/PWA sin lógica de negocio ni acceso directo a la base; Go es
la única API de negocio.

## Fuente funcional

Las reglas de negocio y los módulos aprobados del sistema son el contrato
funcional que el backend Go debe implementar. En este repositorio temporal,
su fuente es `../reglas-negocio.md` y `../modelo-dominio.md`. El backend
no redefine esas reglas: las convierte en entidades, casos de uso, puertos,
adaptadores y consultas SQL.

Al mover esta carpeta al repositorio `technical-service-backend`, se debe
conservar una copia versionada del contrato funcional aprobado o enlazarlo
desde el repositorio documental central. Cualquier cambio de comportamiento
debe actualizar primero ese contrato y después las implementaciones.
