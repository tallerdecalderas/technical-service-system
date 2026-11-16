# Integración con Google Sheets

## Alcance

Google Sheets participa en dos flujos separados:

1. **Agenda:** exportación unidireccional de la información de TechService para visualización externa.
2. **Lista de precios:** importación explícitamente iniciada por Administración, validada y publicada como nueva versión del catálogo oficial.

La integración se coordina desde la API Go. No hay acceso directo desde el navegador a la base de datos ni a credenciales de Google o Supabase. Esta integración aún está pendiente de implementación.

## Principio de autoridad

Supabase PostgreSQL es la fuente oficial de información operativa. Google Sheets no modifica directamente la base de datos.

Una importación de lista de precios es una acción autorizada del sistema, no una escritura autónoma de Sheets: Administración la inicia, Go obtiene y valida los datos y Go decide si publicar una nueva versión. Un fallo conserva intacto el catálogo oficial vigente.

## Flujo 1: exportar agenda

```text
Servicios en TechService
          ↓
API Go
          ↓
Google Sheets (vista de agenda)
```

La agenda en Sheets es una proyección; las modificaciones se hacen en TechService. Cada fila representa un servicio e incluye solo los campos necesarios, por ejemplo:

- Número de orden
- Fecha y hora
- Cliente
- Dirección y localidad
- Teléfono, si corresponde
- Categoría de servicio
- Técnico
- Estado
- Enlace a la orden, si existe una URL segura

La sincronización debe reflejar altas y cambios de fecha, hora, técnico, estado o datos relevantes. El objetivo documentado es que el cambio se refleje en menos de cinco segundos cuando la integración está disponible; una demora o falla de Sheets no debe impedir guardar la operación en TechService.

Go debe registrar los fallos y permitir reintentos automáticos o manuales. Los reintentos no deben crear filas duplicadas; la implementación debe identificar la fila por una clave estable de TechService.

## Flujo 2: importar lista de precios

```text
Administración inicia importación
               ↓
             API Go
               ↓
Google Sheets → lectura y validación
               ↓
   Publicación atómica en PostgreSQL
               ↓
     Nueva versión del catálogo
               ↓
       Sincronización offline
```

### Inicio y autorización

- Solo Administración puede iniciar una importación.
- El navegador solicita la operación a Go; no descarga hojas con credenciales privilegiadas ni escribe en Supabase.
- Go registra el usuario que inició la operación, la hora y el resultado.

### Validación y publicación

Antes de publicar, Go valida que la hoja sea legible y que sus filas cumplan el mapeo acordado para identificadores/códigos, descripciones y precios. La estructura y columnas exactas deben definirse antes de implementar el parser.

- Una importación válida y completa se activa como nueva versión oficial del catálogo.
- La activación debe ser atómica: nunca dejar visible una lista parcialmente importada.
- Si la lectura, validación o escritura falla, se conserva la versión activa anterior y se informa el error.
- Las importaciones exitosas conservan una referencia de auditoría a la versión y a la ejecución que la produjo.

### Caché de técnicos

La PWA conserva en IndexedDB una copia de la versión publicada para consulta offline. No actualiza silenciosamente los precios mientras no haya una nueva importación administrativa exitosa. Cuando Go confirma que existe una versión nueva, el dispositivo sincroniza esa versión y recién entonces reemplaza su copia local; si la descarga falla, conserva la copia anterior.

## Configuración y seguridad

- Mantener OAuth, service-account keys o tokens de Google en el entorno seguro del backend, no en Next.js público ni en el navegador.
- Limitar la cuenta de integración a las hojas y operaciones estrictamente necesarias.
- Validar datos externos como entrada no confiable; no ejecutar fórmulas o contenido de celdas como código.
- No guardar secretos ni URLs firmadas en logs.
- Configurar el ID de hoja y el mapeo de columnas mediante configuración controlada.

Los detalles de credenciales, despliegue y rotación se definirán en `../ingeneri/infrastructure.md`.

## API y observabilidad

La API Go expone operaciones de estado/sincronización de agenda y la importación administrativa conforme a `../../.backend/api.md`. Errores de proveedor deben tener un estado visible y recuperable. Registrar como mínimo inicio, fin, usuario, duración, resultado y referencia de ejecución, sin incluir secretos.

La importación del catálogo conserva la versión anterior hasta que la nueva haya sido validada y guardada completamente. Los errores de importación no afectan la agenda ni otros servicios.

## Referencias

- Arquitectura: `../../ingeneri/frontend-architecture.md`
- Backend Go: `../backend.md`
- Contrato API: `../api.md`
- Inventario/lista de precios: `../modulos/Inventario.md`
- Reglas de negocio: `../reglas-negocio.md`
