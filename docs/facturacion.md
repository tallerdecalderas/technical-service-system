# Facturación

# Objetivo

El módulo Facturación administra toda la información económica generada por las Órdenes de Trabajo.

Su objetivo es controlar.

- Cobros
- Repuestos
- Rendiciones
- Comisiones

Toda la información económica del sistema se centraliza en este módulo.

---

# Conceptos

El módulo está dividido en tres procesos.

```
Orden de Trabajo

↓

Cobro

↓

Repuestos

↓

Rendición Semanal
```

Cada proceso es independiente.

---

# Cobros

Un cobro representa dinero recibido por un Técnico.

Cada Orden puede tener un único cobro.

El cobro pertenece siempre a una Orden.

---

# Datos del Cobro

Cada cobro registra.

- Orden de Trabajo

- Cliente

- Técnico

- Fecha

- Hora

- Forma de Pago

- Monto Cobrado

- Observaciones

- Fotografía del comprobante (opcional)

---

# Formas de Pago

Inicialmente.

- Efectivo

- Transferencia

- Tarjeta

- Otro

La arquitectura deberá permitir agregar nuevos métodos sin modificar la lógica.

---

# Repuestos

Cada cobro puede registrar múltiples repuestos.

Los repuestos representan gastos asumidos durante el trabajo.

No existe límite de repuestos.

---

# Información del Repuesto

Cada repuesto registra.

Proveedor

Descripción

Cantidad

Precio Unitario

Subtotal

El subtotal se calcula automáticamente.

```
Cantidad

×

Precio Unitario

=

Subtotal
```

---

# Proveedores

Los proveedores son administrados por Administración.

Cada repuesto debe pertenecer a un proveedor.

Ejemplos.

- Peisa

- Rowa

- Caldaia

- ElectroSur

- Otro

Los proveedores no administran stock.

Su objetivo es identificar el origen del gasto.

---

# Total de Repuestos

El sistema calculará automáticamente.

```
Subtotal Repuesto 1

+

Subtotal Repuesto 2

+

Subtotal Repuesto N

=

Costo Total de Repuestos
```

---

# Rendición Semanal

Cada Técnico posee una rendición semanal.

La rendición agrupa todos los cobros realizados durante una semana.

La semana será definida de lunes a domingo.

---

# Información de la Rendición

Cada rendición mostrará.

Semana

Técnico

Cantidad de Órdenes

Total Cobrado

Costo Total de Repuestos

Monto Neto

50% Empresa

50% Técnico

Estado

---

# Cálculo Oficial

La comisión siempre se calcula sobre el monto neto.

```
Monto Cobrado

-

Costo Total Repuestos

=

Monto Neto

Monto Neto

×

50%

=

Comisión Técnico
```

---

# Ejemplo

```
Servicio 1

Cobrado

$120.000

Repuestos

$30.000

Neto

$90.000

50%

$45.000
```

---

# Estado de la Rendición

La rendición posee únicamente dos estados.

Pendiente

Liquidada

Mientras permanezca pendiente.

Administración podrá revisarla.

Una vez liquidada.

La rendición pasa al historial.

---

# Vista del Técnico

El Técnico podrá visualizar únicamente.

Sus cobros.

Sus repuestos.

Su rendición.

No podrá modificar rendiciones.

---

# Vista del Administrador

Administración podrá consultar.

Todos los Técnicos.

Todas las semanas.

Todos los cobros.

Todos los repuestos.

Todos los proveedores.

Todas las rendiciones.

---

# Pantalla Cobros

La pantalla principal mostrará.

Fecha

OT

Cliente

Técnico

Monto Cobrado

Costo Repuestos

Monto Neto

Forma de Pago

Estado

---

# Pantalla Rendiciones

La pantalla mostrará una tarjeta por cada semana.

Ejemplo.

```
Semana 28

Técnico

Carlos Pérez

------------------------

Servicios

15

------------------------

Cobrado

$2.450.000

------------------------

Repuestos

$520.000

------------------------

Neto

$1.930.000

------------------------

50%

$965.000

------------------------

Estado

Pendiente
```

---

# Reportes

El sistema permitirá obtener.

Cobros por Técnico.

Cobros por Cliente.

Cobros por Fecha.

Cobros por Forma de Pago.

Cobros por Semana.

Cobros por Mes.

---

# Estadísticas

La arquitectura queda preparada para obtener.

Facturación mensual.

Facturación anual.

Promedio por Técnico.

Promedio por Cliente.

Costo promedio de repuestos.

Proveedor más utilizado.

Método de pago más utilizado.

---

# Integraciones

En futuras versiones la información podrá exportarse.

Excel.

Google Sheets.

PDF.

---

# Validaciones

No podrá registrarse un cobro duplicado.

No podrá existir una rendición sin cobros.

Los repuestos no podrán tener valores negativos.

Toda modificación deberá registrarse en el historial.

---

# Escalabilidad

La arquitectura queda preparada para incorporar.

Facturación electrónica.

Integración con AFIP/ARCA.

Mercado Pago.

Transferencias automáticas.

Control de stock.

Compras.

Inventario.

Sin modificar la estructura principal del módulo.
