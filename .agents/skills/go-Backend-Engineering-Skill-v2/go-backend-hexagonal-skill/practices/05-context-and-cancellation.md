# 05 — Contexto, deadlines y cancelación

## Objetivo

Propagar cancelación y límites de tiempo desde la entrada HTTP hacia casos de uso y operaciones de I/O.

## Reglas

- Recibir `context.Context` como primer parámetro de las funciones que realizan I/O o necesitan cancelación.
- Propagar `r.Context()` desde HTTP a application y luego a los adaptadores de salida.
- Usar `context.WithTimeout` o `context.WithDeadline` donde exista un presupuesto de tiempo definido.
- Cancelar siempre los contextos derivados (`defer cancel()`).
- No guardar contextos en structs ni utilizarlos para pasar parámetros opcionales de negocio.
- No reemplazar el contexto de la request por `context.Background()` en operaciones descendientes.
- Reservar `context.Background()` para el inicio de la aplicación y `context.TODO()` para migraciones explícitamente pendientes.
- Hacer que llamadas a base de datos y APIs externas respeten el contexto recibido.

## Ejemplo

```go
func (s *Service) Get(ctx context.Context, id string) (Account, error) {
    ctx, cancel := context.WithTimeout(ctx, 3*time.Second)
    defer cancel()

    return s.accounts.FindByID(ctx, id)
}
```

El timeout concreto debe provenir del presupuesto real del sistema y no copiarse indiscriminadamente.

## Evitar

- Contexto como campo persistente de un servicio.
- `context.Background()` dentro de cada método para ocultar la cancelación.
- Llamadas de red o SQL sin deadline cuando puedan bloquear indefinidamente.

## Referencias

- https://go.dev/wiki/CodeReviewComments
- https://go.dev/doc/database/
