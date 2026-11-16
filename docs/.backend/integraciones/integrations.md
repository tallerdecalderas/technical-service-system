# Integraciones

## Resend

Solo entrega correos de recuperación. Go genera y valida tokens de un solo
uso. Los logs nunca contienen tokens ni claves.

## Google Sheets

- Agenda: exportación unidireccional de datos de TechService.
- Catálogo: importación iniciada por Administración, validada por Go y
  publicada atómicamente.
- Una falla conserva la versión activa anterior.
- Las credenciales viven únicamente en el backend.
