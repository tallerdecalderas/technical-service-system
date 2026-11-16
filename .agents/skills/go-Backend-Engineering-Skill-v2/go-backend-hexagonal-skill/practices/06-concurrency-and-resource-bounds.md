# 06 — Concurrencia segura y límites de recursos

## Objetivo

Usar goroutines para concurrencia útil sin generar fugas, carreras de datos ni consumo ilimitado de recursos.

## Reglas

- Cada goroutine debe tener un responsable, una condición de finalización y una estrategia de cancelación.
- Limitar concurrencia cuando se procesen trabajos, llamadas externas o tareas en paralelo.
- Preferir un worker pool acotado o un semaphore cuando la carga pueda crecer sin límite.
- Proteger estado compartido con `sync.Mutex`/`sync.RWMutex` cuando corresponda; usar canales cuando modelen claramente la transferencia o coordinación de trabajo.
- No usar goroutines para operaciones triviales que no aportan concurrencia útil.
- Propagar `context.Context` y detener workers ante cancelación.
- Cerrar canales desde el productor responsable; no cerrar canales desde consumidores arbitrarios.
- Definir límites para colas, buffers, conexiones, reintentos y tamaño de payload.
- Evitar reintentos infinitos; usar límites, backoff y jitter cuando la operación lo justifique.

## Ejemplo conceptual de worker pool

```go
jobs := make(chan Job, queueSize)
for i := 0; i < workerCount; i++ {
    go func() {
        for {
            select {
            case <-ctx.Done():
                return
            case job, ok := <-jobs:
                if !ok {
                    return
                }
                process(ctx, job)
            }
        }
    }()
}
```

El cierre de `jobs`, el seguimiento de finalización y la propagación de errores deben resolverse según el ciclo de vida real del servicio; no copiar este fragmento sin completar esas responsabilidades.

## Evitar

- `go func()` sin seguimiento ni cancelación.
- Crear una goroutine ilimitada por cada elemento de una cola externa.
- Compartir mapas o slices entre goroutines sin sincronización.
- Usar `time.Sleep` como mecanismo de coordinación.

## Referencia

- https://go.dev/doc/effective_go#concurrency
