# 07 — API HTTP, handlers y health checks

## Objetivo

Construir una API HTTP predecible, desacoplada del dominio y operable en entornos reales.

## Reglas

- Mantener handlers delgados: decodificar entrada, validar contrato HTTP, invocar un caso de uso y traducir resultado/error a HTTP.
- No colocar reglas de negocio complejas en handlers ni middlewares.
- Separar DTOs de request/response de las entidades de dominio.
- Validar método, formato, tamaño del body y campos obligatorios antes de invocar el caso de uso.
- Usar códigos HTTP coherentes: `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, `422`, `429`, `500`, `503` según el contrato.
- No responder `200` a una operación fallida para hacer pasar una comprobación.
- Definir `http.Server` con timeouts explícitos y apagado ordenado.
- Registrar health checks usando el router ya adoptado por el proyecto; no introducir un framework nuevo solamente por un endpoint.

## Health checks

- `GET /healthz`: liveness. Responde `200 OK` si el proceso está vivo y puede atender HTTP. No debe exponer configuración, secretos ni diagnósticos internos.
- `GET /readyz`: readiness opcional. Comprueba dependencias críticas para servir tráfico y devuelve `503 Service Unavailable` si no está listo.
- No confundir liveness con readiness. Una base de datos caída puede hacer que readiness falle sin que sea conveniente reiniciar continuamente el proceso.

## Handler mínimo de liveness

```go
func healthz(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    _, _ = io.WriteString(w, `{"status":"ok"}`)
}
```

Registrar este handler en el adaptador HTTP existente. Importar `io` si se usa el ejemplo. Si el proyecto usa otro router, respetar su mecanismo de registro.

## Criterio de aceptación

Una petición GET a la ruta health configurada devuelve realmente `200 OK` después de iniciar el binario compilado. No devolver un 200 artificial desde un mock o desde una ruta que no usa el servidor real.

## Referencia

- https://pkg.go.dev/net/http
