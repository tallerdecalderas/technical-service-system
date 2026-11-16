# 10 — Módulos, compilación y verificación HTTP 200

## Objetivo

Mantener dependencias reproducibles y comprobar que el servicio compila, inicia y atiende una petición HTTP real.

## Módulos y dependencias

- Mantener `go.mod` en la raíz del módulo y `go.sum` versionado.
- Elegir un module path estable, normalmente basado en el repositorio cuando el proyecto será publicado o compartido.
- Preferir dependencias pequeñas, mantenidas y justificadas; revisar licencia, actividad, versiones y dependencias transitivas antes de incorporarlas.
- No actualizar dependencias de forma masiva sin una razón concreta.
- Usar `go mod tidy` cuando cambien imports/dependencias y revisar el diff resultante.
- No borrar ni reemplazar versiones de dependencias arbitrariamente.

## Flujo obligatorio de compilación y ejecución

1. Identificar el paquete ejecutable inspeccionando `cmd/`, `main.go` y `go.mod`. No asumir que el entry point siempre es `./cmd/api`.
2. Formatear los archivos Go modificados: `gofmt -w <archivos-modificados>`.
3. Compilar todos los paquetes: `go build ./...`.
4. Compilar el ejecutable en una carpeta temporal ignorada por Git. Ejemplo, si el entry point es `./cmd/api`:

   ```bash
   mkdir -p .tmp
   go build -o .tmp/api ./cmd/api
   ```

   En PowerShell:

   ```powershell
   New-Item -ItemType Directory -Force .tmp | Out-Null
   go build -o .tmp/api.exe ./cmd/api
   ```

5. Iniciar el binario compilado, no solamente validar que el código compila. Usar las variables de entorno y servicios locales requeridos por el proyecto.
6. Consultar el health endpoint real. Ejemplo POSIX:

   ```bash
   curl --silent --show-error --output /dev/null \
     --write-out '%{http_code}' \
     http://127.0.0.1:8080/healthz
   ```

   El host, puerto y path deben obtenerse de la configuración real del proyecto. No asumir `8080` si el proyecto configura otro puerto.

7. En PowerShell puede usarse:

   ```powershell
   $response = Invoke-WebRequest -Uri 'http://127.0.0.1:8080/healthz' -Method Get
   $response.StatusCode
   ```

8. El resultado esperado es exactamente `200`. Si el servidor necesita unos segundos para inicializar, repetir la solicitud durante un período acotado, registrando errores; no declarar éxito hasta recibir el 200.
9. Si no existe un health endpoint, agregar `GET /healthz` al adaptador HTTP existente, con una respuesta mínima y sin filtrar información interna.
10. Informar el comando real ejecutado, URL consultada y status code observado. Detener el proceso auxiliar si se inició exclusivamente para la comprobación, salvo que el usuario haya pedido dejarlo ejecutándose.

## Prohibición de testing automatizado

Por requerimiento del usuario, el flujo normal no incluye testing:

- No crear archivos `*_test.go`.
- No ejecutar `go test`, `go test -race`, fuzzing ni benchmarks.
- No ejecutar `go vet` ni linters como sustituto de la compilación solicitada.
- No instalar frameworks de testing.

El formato `gofmt`, la compilación `go build` y la consulta HTTP al proceso real sí forman parte del flujo requerido.

## Qué demuestra el resultado

- `go build ./...` demuestra que los paquetes del módulo compilan para el entorno/arquitectura seleccionados.
- Iniciar el binario demuestra que el proceso pudo arrancar con esa configuración.
- HTTP `200` desde `/healthz` demuestra que el servidor respondió correctamente a esa solicitud.
- Ninguno de estos pasos garantiza por sí solo corrección funcional, ausencia de vulnerabilidades, integridad de datos o preparación para producción.

## Referencias

- https://go.dev/doc/code
- https://go.dev/doc/modules/managing-dependencies
- https://pkg.go.dev/net/http
