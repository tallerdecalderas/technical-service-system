# 04 — Manejo explícito de errores y contratos

## Objetivo

Hacer que los errores sean trazables, clasificables y traducibles a respuestas de transporte sin filtrar detalles internos.

## Reglas

- Tratar `error` como parte explícita del contrato de cada operación.
- Añadir contexto al propagar errores con `%w` (`fmt.Errorf("load account: %w", err)`).
- Usar `errors.Is` y `errors.As` para clasificar errores envueltos.
- Definir errores de dominio/aplicación para condiciones esperables y relevantes para el consumidor.
- Traducir errores de aplicación a códigos HTTP en el adaptador inbound, no en el dominio.
- Diferenciar errores de validación, recurso inexistente, conflicto, falta de autorización, dependencia no disponible y fallas inesperadas.
- No devolver stack traces, SQL, secretos ni mensajes internos al cliente.
- Usar `panic` solamente para condiciones verdaderamente irrecuperables o invariantes del programa que no deberían ocurrir; nunca como flujo habitual de negocio.

## Ejemplo

```go
var ErrAccountNotFound = errors.New("account not found")

func (s *Service) Get(ctx context.Context, id string) (Account, error) {
    account, err := s.accounts.FindByID(ctx, id)
    if err != nil {
        return Account{}, fmt.Errorf("get account %q: %w", id, err)
    }
    return account, nil
}
```

El adaptador HTTP puede convertir `ErrAccountNotFound` en `404 Not Found` mediante `errors.Is`.

## Evitar

- Ignorar errores con `_` sin justificación explícita.
- Comparar errores por texto.
- Convertir toda falla en HTTP 500 sin clasificación.
- Exponer errores de base de datos directamente al usuario.
