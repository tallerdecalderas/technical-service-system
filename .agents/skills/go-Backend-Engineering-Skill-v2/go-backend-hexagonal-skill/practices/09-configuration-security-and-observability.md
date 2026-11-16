# 09 — Configuración, seguridad y observabilidad

## Objetivo

Hacer que la aplicación sea configurable, segura y diagnóstica sin filtrar secretos ni acoplar el dominio a proveedores.

## Configuración

- Cargar configuración una vez al iniciar el proceso.
- Validar variables obligatorias y rangos; fallar rápido ante configuración inválida.
- Separar configuración por entorno de los valores por defecto seguros.
- No incluir secretos en el repositorio, imágenes, logs, errores ni respuestas HTTP.
- Documentar nombres de variables, formato y valores requeridos en `.env.example` sin credenciales reales.

## Seguridad

- Parametrizar SQL.
- Limitar tamaño de request body, tiempos de lectura y escritura, y número/tamaño de operaciones costosas.
- Validar entradas en el borde del sistema; no confiar en datos externos.
- Usar `crypto/rand` para tokens y secretos criptográficos; no usar generadores pseudoaleatorios para credenciales.
- No revelar si una cuenta existe en flujos sensibles cuando eso facilite enumeración.
- Mantener Go y dependencias en versiones mantenidas y revisar actualizaciones antes de incorporarlas.
- Evitar registrar tokens, contraseñas, cookies, datos personales y cuerpos sensibles.

## Observabilidad

- Preferir logs estructurados con campos estables: nivel, timestamp, servicio, operación, request ID y error.
- Registrar errores con contexto suficiente para correlacionar una petición.
- No registrar el mismo error repetidamente en cada capa; elegir el límite responsable.
- Incorporar métricas y trazas mediante interfaces/adaptadores cuando la complejidad operativa lo requiera.
- No acoplar el dominio a OpenTelemetry ni a un proveedor de logging.

## Referencias

- https://go.dev/doc/security/best-practices
- https://go.dev/doc/
