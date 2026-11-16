# Rendiciones

# Ruta de archivos principales

app/(dashboard)/admin/payments
app/api/paymentsapp/api/payments

# Objetivo

El módulo Rendiciones permite controlar y liquidar los cobros realizados por
cada Técnico dentro de un período.

Su finalidad es calcular automáticamente la comisión correspondiente descontando previamente los repuestos utilizados.

Las Rendiciones constituyen el cierre económico del Técnico para el período
seleccionado.

---

# Objetivo del Módulo

Cada Técnico genera cobros durante la semana.

La Rendición agrupa automáticamente esos cobros.

El Administrador únicamente revisa y liquida.

No existen cálculos manuales.

---

# Flujo General

```
Orden de Trabajo

↓

Cobro

↓

Carga de Repuestos

↓

Rendición Semanal

↓

Revisión Administración

↓

Liquidación

↓

Historial
```

---

# Período

La modalidad principal es semanal, pero Administración puede crear un período
personalizado. Los períodos no pueden solaparse ni reutilizar fechas ya
liquidadas para el mismo técnico.

Semana:

Lunes 00:00

↓

Domingo 23:59

Todos los cobros realizados dentro del período pertenecen automáticamente a esa semana.

---

# Agrupación

Cada Técnico posee una Rendición independiente.

Ejemplo.

```
Semana 31

Carlos Gómez

↓

14 Cobros

↓

1 Rendición
```

---

# Información General

Cada Rendición registra.

- Técnico
- Semana
- Fecha inicio
- Fecha fin
- Cantidad de Órdenes
- Cantidad de Cobros
- Total Cobrado
- Total Repuestos
- Total Neto
- Comisión Técnico
- Comisión Empresa
- Estado

---

# Cálculo Oficial

El cálculo siempre será.

```
Total Cobrado

-

Total Repuestos

=

Monto Neto

Monto Neto

×

50%

=

Comisión Técnico

Monto Neto

×

50%

=

Comisión Empresa
```

La fórmula operativa se actualizará para descontar también gastos, seguros y
otros ajustes con concepto obligatorio antes de calcular el porcentaje. El
porcentaje del técnico se configura por empresa. Nunca se calcula sobre el
monto bruto.

La liquidación completa se presenta por empresa:

```text
Cobros
- repuestos
- gastos
- seguros
- otros ajustes
= base neta

base neta × porcentaje de la empresa
= importe de la empresa

base neta - importe de la empresa
= importe del técnico

importe del técnico - descuentos o adelantos
= saldo a favor o saldo pendiente
```

Los gastos, seguros y otros ajustes tienen concepto obligatorio. La rendición
debe mostrar el resultado por empresa y el total consolidado del técnico.

---

# Cobros

Cada Rendición muestra el detalle completo.

Por cada Orden.

Número OT

Cliente

Fecha

Monto Cobrado

Forma de Pago

---

# Repuestos

Cada Orden podrá contener múltiples repuestos.

La Rendición deberá mostrar.

Proveedor

Descripción

Cantidad

Costo Unitario

Costo Total

---

# Proveedores

Los repuestos podrán pertenecer a distintos proveedores.

Ejemplo.

```
OT-1045

Peisa

Bomba

$45.000

--------------------

ElectroSur

Sensor

$18.000

--------------------

Ferretería Central

Caños

$8.000
```

Todos los costos deberán descontarse automáticamente.

Los repuestos se muestran como líneas independientes, incluso si se agrega el
mismo código más de una vez al servicio. Cada línea conserva proveedor,
cantidad, costo, precio, cotización del dólar y equivalente en moneda local.
El snapshot se crea al agregar el repuesto al servicio, también si se agrega
durante la preparación de la rendición.

---

# Gastos del servicio

Los gastos se registran directamente dentro del servicio para conservar la
trazabilidad. La rendición los incorpora automáticamente desde los servicios
incluidos en el período. Administración puede revisarlos y corregirlos antes
de liquidar.

---

# Totales

La Rendición calculará.

```
Total Cobrado

$1.850.000

--------------------

Total Repuestos

$380.000

--------------------

Monto Neto

$1.470.000

--------------------

Porcentaje aplicado por empresa

$735.000

--------------------

Importe del técnico y saldo a favor o pendiente

$735.000
```

---

# Estados

Las Rendiciones poseen únicamente dos estados visibles.

Pendiente

Liquidada

Mientras una Rendición permanezca pendiente.

Administración podrá revisarla.

Una vez liquidada.

No podrá modificarse.

La liquidación conserva snapshots de servicios, repuestos, gastos, seguros,
ajustes, porcentajes y totales calculados. Después de liquidar no se recalcula
desde el catálogo, el dólar ni el servicio actual.

---

# Vista del Técnico

El Técnico podrá consultar.

Semana

Órdenes

Cobros

Repuestos

Total Neto

50%

Estado

No podrá modificar información.

---

# Vista Administración

Administración visualizará todas las Rendiciones.

Filtros.

Semana

Técnico

Estado

---

# Pantalla Principal

Cada Rendición se mostrará como una tarjeta.

```
Semana 31

Carlos Gómez

--------------------

Servicios

18

--------------------

Cobrado

$2.450.000

--------------------

Repuestos

$410.000

--------------------

Neto

$2.040.000

--------------------

50%

$1.020.000

--------------------

Estado

Pendiente
```

---

# Detalle de la Rendición

El detalle mostrará todas las Órdenes incluidas.

Tabla.

OT

Cliente

Cobrado

Repuestos

Neto

50%

Proveedor

Forma de Pago

---

# Liquidación

Cuando Administración seleccione.

```
Liquidar Rendición
```

El sistema.

- registra fecha
- registra usuario
- cambia el estado
- bloquea modificaciones

La información permanece disponible para consulta.

---

# Historial

Toda acción queda registrada.

Ejemplo.

Rendición generada.

↓

Administración abrió la Rendición.

↓

Administración liquidó.

↓

Historial permanente.

---

# Dashboard

El Dashboard mostrará.

- Rendiciones Pendientes

- Rendiciones Liquidadas

- Total Liquidado

- Total Pendiente

---

# Reportes

El sistema permitirá consultar.

Por Técnico.

Por Semana.

Por Mes.

Por Forma de Pago.

Por Cliente.

Por Proveedor.

---

# Estadísticas

La arquitectura queda preparada para obtener.

Facturación semanal.

Facturación mensual.

Promedio por Técnico.

Costo promedio de repuestos.

Proveedor más utilizado.

Rentabilidad por Técnico.

Rentabilidad por Cliente.

Rentabilidad por Servicio.

---

# Validaciones

Una Orden solamente puede pertenecer a una Rendición.

No podrán existir cobros duplicados.

Los repuestos deberán descontarse antes de calcular la comisión.

Una Rendición Liquidada no podrá modificarse.

Toda modificación deberá quedar registrada en el historial.

---

# Integraciones

En futuras versiones.

- Exportar PDF

- Exportar Excel

- Google Sheets

- Contabilidad

- ERP

Sin modificar la estructura principal.

---

# Principios UX

La Rendición debe poder revisarse completamente en menos de cinco minutos.

Todos los cálculos deberán mostrarse de forma clara y transparente.

Administración nunca deberá utilizar calculadora para verificar importes.

---

# Escalabilidad

La arquitectura queda preparada para incorporar.

- Comisiones variables por Técnico.

- Diferentes porcentajes por tipo de trabajo.

- Bonificaciones.

- Descuentos.

- Adelantos.

- Retenciones.

- Gastos de movilidad.

- Premios por productividad.

Sin modificar la estructura principal del módulo.
