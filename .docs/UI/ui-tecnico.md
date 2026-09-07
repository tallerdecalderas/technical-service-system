# UI / UX Técnico — TechService

# Objetivo

La interfaz del Técnico está diseñada para utilizarse principalmente desde teléfonos móviles durante la realización de servicios.

La prioridad es:

- Rapidez
- Claridad
- Pocas interacciones
- Información contextual
- Uso táctil
- Trabajo con conectividad intermitente

La interfaz utiliza un enfoque Mobile First.

---

# Principios de Interfaz

La interfaz deberá ser:

- Simple
- Directa
- Táctil
- Legible
- Rápida
- Responsive
- Orientada a tareas

El Técnico no deberá recibir información administrativa que no sea necesaria para realizar su trabajo.

---

# Navegación

El Dashboard del Técnico deberá proporcionar acceso directo a:

```text
Mi Agenda

Mis Presupuestos

Mi Rendición

Lista de Precios
```

La navegación deberá limitarse a las funciones necesarias para el rol Técnico.

---

# Dashboard Técnico

El Dashboard deberá ser simplificado.

Accesos principales:

```text
Mi Agenda
Mis Presupuestos
Mi Rendición
Lista de Precios
```

---

# Agenda Técnico

La Agenda deberá utilizar tarjetas grandes y fácilmente accionables.

Cada servicio deberá mostrar:

```text
Número OT
Cliente
Hora
Estado
```

---

# Acciones de Agenda

```text
Ver
Iniciar
Google Maps
```

Google Maps deberá permitir abrir el recorrido o navegación correspondiente a la agenda del día.

---

# Detalle del Servicio

El Técnico deberá visualizar:

```text
Cliente
Teléfono
Dirección
Descripción
Observaciones
```

La información deberá presentarse en un orden que permita ejecutar rápidamente el trabajo.

---

# Acciones del Servicio

Las principales acciones serán:

```text
Iniciar Trabajo
Registrar Cobro
Enviar Presupuesto
Finalizar
```

Las acciones principales deberán ser grandes y fáciles de utilizar mediante interacción táctil.

---

# Formulario de Cobro

Campos:

```text
Monto
Forma de Pago
Observaciones
Agregar Repuesto
Fotografía
```

Acción:

```text
Guardar
```

El Técnico deberá poder registrar el cobro sin navegar innecesariamente entre múltiples pantallas.

---

# Agregar Repuesto

Se deberá utilizar una interfaz sencilla y optimizada para dispositivos táctiles.

Campos:

```text
Proveedor
Descripción
Cantidad
Precio Unitario
Subtotal
```

Acción:

```text
Agregar otro Repuesto
```

Mostrar:

```text
Total Repuestos
```

---

# Fotografías

El Técnico podrá agregar fotografías desde el dispositivo.

La interfaz deberá permitir:

```text
Tomar fotografía
Seleccionar fotografía
Visualizar fotografía
Eliminar antes de confirmar
```

Las fotografías deberán enviarse al sistema mediante el mecanismo definido en `storage.md`.

Las imágenes deberán optimizarse antes de almacenarse cuando corresponda.

---

# Enviar Presupuesto

Formulario:

```text
Monto
Descripción
Observaciones
```

Acciones:

```text
Enviar
Cancelar
```

---

# Presupuestos

La interfaz del Técnico deberá mostrar:

```text
Pendientes
Finalizados
```

---

# Presupuestos Pendientes

Tabla o listado móvil:

```text
Fecha
Número OT
Cliente
Técnico
Monto
```

Acciones:

```text
Ver
Finalizar
```

La información deberá adaptarse a tarjetas cuando una tabla no resulte adecuada para dispositivos móviles.

---

# Presupuestos Finalizados

Mostrar:

```text
Fecha
Cliente
Técnico
Monto
Fecha Finalización
```

---

# Rendición Técnico

El Técnico podrá consultar sus rendiciones finalizadas.

Las rendiciones deberán presentarse en tarjetas.

Cada tarjeta deberá mostrar:

```text
Semana
Cantidad de Servicios
Monto Cobrado
Repuestos
Monto Neto
50%
Estado
```

Acción:

```text
Ver Detalle
```

---

# Lista de Precios

El Técnico tendrá acceso a una lista de precios específica.

La información proviene del módulo de Inventario, pero la interfaz será una vista simplificada orientada al Técnico.

La lista deberá estar optimizada para:

- búsqueda rápida
- consulta desde celular
- lectura rápida
- carga rápida

---

# Estado Online / Offline

El Técnico deberá poder identificar claramente el estado de conectividad.

Estados:

```text
● Conectado
● Sin conexión
↻ Sincronizando...
✓ Todo sincronizado
⚠ Error de sincronización
```

---

# Operaciones Offline

Cuando no exista conexión, la interfaz deberá permitir las operaciones definidas por la arquitectura PWA.

El Técnico podrá trabajar con información previamente sincronizada.

Las operaciones pendientes deberán mostrar claramente su estado.

El usuario nunca deberá asumir que una operación offline ya fue confirmada por el servidor.

---

# Acciones Pendientes

Cuando una operación esté pendiente de sincronización deberá indicarse de forma visible.

Ejemplo:

```text
Cobro guardado localmente
Pendiente de sincronización
```

Una vez confirmada:

```text
✓ Cobro sincronizado
```

---

# Errores de Sincronización

Cuando una operación no pueda sincronizarse:

```text
⚠ No se pudo sincronizar
```

La interfaz deberá permitir al Técnico entender que la información todavía no fue confirmada.

No se deberán ocultar errores.

---

# Mobile First

La interfaz deberá priorizar:

- botones grandes
- áreas táctiles amplias
- textos legibles
- formularios cortos
- navegación simple
- acciones principales visibles

Las acciones frecuentes deberán poder ejecutarse con una cantidad mínima de interacciones.

---

# Contexto de Trabajo

El Técnico deberá poder completar un servicio sin navegar por secciones administrativas innecesarias.

El detalle del servicio deberá actuar como centro de trabajo:

```text
Servicio
   ├── Información
   ├── Iniciar
   ├── Cobro
   ├── Repuestos
   ├── Fotografías
   ├── Presupuesto
   └── Finalizar
```

---

# Restricciones de Rol

La interfaz del Técnico no debe mostrar controles administrativos que no correspondan a su rol.

La autorización definitiva siempre deberá realizarse en el servidor y mediante las políticas de seguridad correspondientes.

Ocultar un botón no constituye una medida de seguridad.

---

# Responsive

La interfaz deberá funcionar correctamente en:

- teléfonos
- tablets
- desktop

Pero el diseño principal deberá optimizarse para teléfonos.

---

# Futuras Funciones

La interfaz queda preparada para incorporar:

- Push Notifications
- Firma Digital
- Google Maps avanzado
- historial de equipos
- inteligencia artificial
- nuevas capacidades offline
