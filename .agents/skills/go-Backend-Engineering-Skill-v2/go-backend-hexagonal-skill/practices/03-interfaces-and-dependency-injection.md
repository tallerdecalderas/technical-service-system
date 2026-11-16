# 03 — Interfaces pequeñas e inyección de dependencias

## Objetivo

Reducir acoplamiento en los límites reales del sistema sin convertir cada tipo concreto en una interfaz innecesaria.

## Reglas

- Definir interfaces donde se consumen, no automáticamente junto a cada implementación.
- Preferir interfaces pequeñas, normalmente centradas en el conjunto mínimo de métodos que necesita un caso de uso.
- Aceptar interfaces y devolver tipos concretos cuando eso simplifique el diseño.
- Inyectar implementaciones mediante constructores explícitos (`NewService`, `NewHandler`, `NewUseCase`).
- Construir el grafo de dependencias en `main` o en un paquete de composición, no dentro del dominio.
- Evitar service locators y variables globales mutables.
- No exponer detalles de infraestructura a través de interfaces del dominio.

## Ejemplo

```go
type AccountReader interface {
    FindByID(ctx context.Context, id string) (Account, error)
}

type GetAccount struct {
    accounts AccountReader
}

func NewGetAccount(accounts AccountReader) *GetAccount {
    return &GetAccount{accounts: accounts}
}
```

El caso de uso depende del contrato mínimo que necesita. Un adaptador PostgreSQL puede implementarlo sin que el caso de uso importe pgx.

## Evitar

- Interfaces con decenas de métodos.
- Interfaces creadas únicamente para poder simular cada struct.
- Inyección por reflexión o contenedores complejos cuando los constructores son suficientes.
- Abstracciones `Repository[T]` universales que esconden consultas específicas del dominio.

## Criterio de aceptación

Las dependencias se ven en constructores y el núcleo depende de contratos propios, no de paquetes técnicos.
