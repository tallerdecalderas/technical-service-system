# Inventario y listas de precios

## Objetivo

Inventario administra el catálogo de repuestos y listas de precios que se utilizan en los servicios y rendiciones. Administración puede revisar la información importada y mantener las listas aplicables; los técnicos consultan únicamente la vista de precios autorizada para ellos.

La importación desde Google Sheets es una función administrativa controlada por la API Go. Supabase PostgreSQL conserva el catálogo oficial y la PWA del técnico puede consultar una copia local de la última versión publicada. La pantalla inicia el flujo existente `POST /api/v1/integrations/google-sheets/catalog-import` con `{ companyId }`; no sube archivos ni conecta el navegador directamente a Sheets.

La selección de empresa consulta `GET /api/v1/companies`. Go deriva las empresas del usuario desde la sesión y solo devuelve el ID y nombre de las empresas activas autorizadas.

## Flujo de datos

```text
Google Sheets configurada
               ↓
Administración inicia importación en TechService
               ↓
API Go: lee, valida y registra resultado
               ↓
Supabase PostgreSQL: publica nueva versión
               ↓
Catálogo oficial
               ↓
PWA del técnico sincroniza la versión
               ↓
IndexedDB permite consulta offline
```

Google Sheets no tiene acceso directo a la base de datos. Una importación aprobada por el flujo de Administración se convierte en dato oficial solo cuando Go la valida y publica correctamente.

## Importación y publicación

Administración inicia cada importación de forma explícita. Go comprueba que la hoja configurada puede leerse y que los datos cumplen el mapeo y validaciones del importador. La PWA solo envía `companyId`; las credenciales y la lectura de Sheets permanecen en el backend.

- Si todas las validaciones pasan, se publica una nueva versión de catálogo.
- La publicación es atómica; el técnico y la administración nunca deben leer una importación parcial.
- Si falla lectura, validación o persistencia, la versión anterior permanece activa.
- Se conserva historial de importaciones con fecha, usuario, resultado y referencia/version de catálogo.
- Los errores deben explicar el problema y no informar éxito cuando no se publicó la nueva versión.

La importación de catálogo es independiente de la sincronización de agenda. Ambas se realizan mediante Go y se documentan en `../integraciones/googlesheets.md`.

## Información de catálogo

El diseño funcional contempla:

- Lista de precios para técnicos.
- Información interna de Administración que puede incluir costo y precio de venta.
- Búsqueda rápida por código o descripción.
- Repuestos disponibles para seleccionar en servicios/rendiciones.
- Un repuesto puede tener varios proveedores relacionados.
- Una única oferta de proveedor activa para nuevas asignaciones.
- Costo en USD, margen editable, precio de venta calculado y ganancia.
- Cotización diaria del dólar cargada manualmente por Administración.

El inventario no controla stock físico en esta fase. El campo `stock` se
retira del contrato actual y podrá evaluarse como una capacidad futura
independiente.

Los campos obligatorios del catálogo son:

- código único;
- nombre;
- descripción;
- proveedor;
- costo en USD;
- margen;
- precio de venta;
- ganancia.

El precio de venta se calcula como `costo × (1 + margen)` y la ganancia como
`precio de venta - costo`. La importación no admite códigos duplicados.

Las relaciones con rendiciones y la estructura SQL definitiva se implementarán
contra este contrato funcional y su versión aprobada.

## Vista de Administración

Administración podrá:

- Iniciar la importación de la hoja de precios.
- Ver el resultado de la importación y la fecha/versión activa.
- Consultar y buscar el catálogo autorizado.
- Revisar costo/precio interno según el rol y las reglas acordadas.

La importación solo se considera exitosa si el catálogo nuevo quedó publicado.

## Vista del Técnico

El técnico puede:

- Consultar la lista de precios autorizada.
- Buscar artículos desde celular.
- Consultar offline la última versión publicada que haya sincronizado.

El técnico no edita ni publica el catálogo. El cliente no debe recibir acceso a la lista administrativa de costos.

## Caché offline

IndexedDB conserva el catálogo de técnico junto con su `version` y `updatedAt`. La caché permanece estable hasta que Administración ejecute una importación que finalice correctamente y Go publique una nueva versión. El dispositivo consulta la versión mediante la API y descarga el catálogo cuando detecta un cambio; si la sincronización falla, conserva la copia anterior e informa que puede estar desactualizada.

Una importación válida reemplaza completamente el catálogo activo. No modifica
los snapshots de repuestos que ya fueron agregados a servicios.

La PWA no debe leer Sheets directamente ni tratar la caché local como fuente oficial. La fuente oficial es el catálogo publicado en Supabase PostgreSQL.

## Acceso y seguridad

- Los datos se consultan desde la API Go, que aplica autenticación y autorización.
- El navegador no accede directamente a PostgreSQL ni recibe claves de Supabase.
- La caché debe contener solo los campos que el técnico tiene permiso de ver y debe estar aislada por usuario/sesión.
- Errores de proveedor o de datos importados se registran en el backend sin incluir credenciales.

## Contrato de esta implementación

- Administración consulta precios, costos internos, proveedores, ofertas y
  cotización mediante la API Go; las actualizaciones usan `Idempotency-Key`.
- La importación se considera exitosa únicamente cuando Go responde con estado
  `PUBLISHED`. Los errores de validación y de integración se muestran sin
  presentar una publicación falsa.
- El Técnico consulta por empresa, código o descripción. La interfaz solo
  proyecta código, nombre, unidad y `techPrice`; Go sigue siendo responsable
  de filtrar los campos de su respuesta.
- La vista muestra `version` y `updatedAt` recibidos del endpoint. Esta fase
  no implementa persistencia offline con IndexedDB.
- La pantalla no administra existencias, elimina ítems ni crea catálogo
  manualmente; se ciñe a operaciones disponibles en el contrato Go.
