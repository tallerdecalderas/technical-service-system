# Reglas de Negocio — taller de calderas

# Objetivo del Sistema

taller de calderas es un sistema de administración integral para empresas de servicio técnico para una comunicacion precisa entre tecnicos y administracion.

Su objetivo es administrar el ciclo completo de un trabajo técnico desde la creación del servicio hasta la rendición económica del técnico.

El sistema posee dos perfiles principales:

- Administrador
- Técnico

Cada usuario posee permisos específicos según su rol.

---

# Principios del Sistema

Toda la lógica del sistema debe respetar las siguientes reglas.

## 1. El sistema es la fuente oficial de información

Toda la información oficial se almacena en la base de datos del sistema.

Ninguna integración externa puede modificar directamente la base de datos ni escribir en ella de manera autónoma.

Una importación explícitamente iniciada por Administración (por ejemplo, una carga de lista de precios desde un CSV autorizado) es una operación del sistema: Go valida los datos y, solo si la importación completa correctamente, publica el resultado en la base oficial y registra quién la inició. Si falla, la versión vigente se conserva.

---

## 2. Cada servicio representa un servicio que hace el tecnico

Un Servicio representa una visita programada a un cliente.

El servicio posee su propio historial, estado, cliente asociado, técnico asignado, pago del servicio y documentación asociada.

---

## 3. Un cliente puede tener múltiples servicios

No existe límite de servicios asociados a un cliente.

El historial debe permanecer disponible de forma permanente del servicio ya que queda registrado cada servicio de cada tecnico y cada servicio que tubo cada cliente.

---

## 4. Los servicios nunca se eliminan físicamente

Los servicios forman parte del historial operativo de la empresa.

Solo podrán marcarse como cancelados o el estado correspondiente solo administracion puede eliminar o actualizar cada servicio.

---

# Flujo de un Servicio

Todo servicio sigue el siguiente flujo.

```
Creación del servicio con su formulario requeridos

↓

Asignacion de Empresa

↓

Asignación de Técnico

↓

Busqueda de cliente existente o crear cliente en el momento

↓


Comunicación con Cliente (mensaje manual copy paste del formulario creado)

↓

el servicio creado pasa a la Agenda

↓

Visita Técnica del servicio

↓

Cobro o deuda (Requerido)

↓

Presupuesto (opcional)

↓

Cierre

↓

Finalización del servicio
```

---

# Estados del Servicio

Todo servicio debe encontrarse en uno de los siguientes estados.

- `PENDING` (Pendiente)
- `IN_PROGRESS` (En proceso)
- `COMPLETED` (Finalizado)
- `CANCELLED` (Cancelado)

Cada cambio de estado debe quedar registrado en el historial.

Las transiciones permitidas son:

```text
PENDING     -> IN_PROGRESS | CANCELLED
IN_PROGRESS -> COMPLETED  | CANCELLED
```

Los estados `COMPLETED` y `CANCELLED` son terminales. No se permite reabrir
un servicio ni agregar estados alternativos en frontend, backend o base de
datos.

---

# Creación del Servicio

El Administrador crea un servicio indicando como mínimo:

- Empresa
- Cliente (requerido)
- telefono
- Dirección
- Localidad
- Equipo
- categoria de servicio
- Observaciones (opcional)
- monto estimado de servicio ya que el tecnico una vez que asista al service puede finalizar el cierre con otro valor que ese va hacer el verdadero.
- Fecha (que se va a realizar el servicio)
- Hora (se genera automaticamente por detras, no se pone manual)
- el servicio puede ya tener el nombre de un repuesto varios que se va a usar de manera interna para poder rendir el servicios, ya van aparecer con repuestos cargados y otros se cargaran al momento de rendir
- Técnico (opcional)
- Gastos asociados al servicio, si corresponden.

Una vez creado:

- aparece en la agenda
- puede enviarse al cliente mediante WhatsApp (copy past manual lo hace administracion)
- puede sincronizarse con Google Sheets como vista externa de la agenda y servicios (implementación para la V2, separada del catálogo)

Administración es responsable del alta completa y de la gestión administrativa
del servicio. El técnico solo puede operar servicios que le fueron asignados y
puede llevarlos a `COMPLETED` mediante el formulario de cierre, una vez
finalizado el trabajo. El backend debe validar esta regla; ocultar acciones en
la interfaz no constituye autorización.

---

# Comunicación con el Cliente

Cada servicio puede generar automáticamente un mensaje para WhatsApp.
esto no es un modelo o un modulo grande es simple y util.

El mensaje debe poder:

- copiarse al portapapeles
- abrir WhatsApp directamente al numero del cliente

La plantilla tiene los datos del formulario de creacion del servicio.

El sistema nunca enviará mensajes automáticamente.
Siempre será el usuario quien confirme el envío no hay una automatizacion o una integracion de la api de whatsApp.

---

# Agenda (schedule)

La agenda representa todos los servicios programados. Cada técnico puede tener una vista externa sincronizada con Google Sheets, pero la fuente oficial sigue siendo el sistema.

Debe actualizarse automáticamente cuando:

- se crea un servicio
- cambia la fecha
- cambia la hora
- cambia el técnico
- cambia el estado
- se cancela un servicio

La agenda puede sincronizarse con Google Sheets.

Google Sheets es una vista externa de la agenda: refleja los servicios de TechService y no los modifica. Este flujo no se usa para cargar la lista de precios ni el catálogo.

La importación administrativa de listas de precios se hace por CSV. Go valida y publica cada importación exitosa como una nueva versión oficial; los técnicos actualizan su caché offline al sincronizar esa versión. Una importación fallida no reemplaza el catálogo vigente.

Las operaciones offline del técnico se sincronizan con la API Go cuando vuelve la conexión. La información local no se considera confirmada hasta que Go la acepte.

---

# Técnico

Cada técnico únicamente puede visualizar:

- sus servicios
- Lista de presio para tecnico (Modelo: inventario va a poder dar las listas)
- sus presupuestos
- su rendición

Nunca podrá acceder a información perteneciente a otro técnico lo unicos que se va a poder ver es por logica es el historial del cliente.

ya que el tecnico pude ver del detalle del servicio y con eso el historial del cliente.


## Finalización del Servicio

Cuando un técnico finaliza un servicio podrá:

- cerrar el trabajo
- registrar un cobro (es el cobro que importa ya que al crear el servicio se crea un valor parcial nosabemos en que cobro se va a terminar al final del servicio ya que puede sugir adicionales)
- enviar un presupuesto (opcional)

Las acciones son independientes.

Un servicio puede:

- tener cobro sin presupuesto


## Presupuestos

Los presupuestos representan trabajos futuros derivados de una visita técnica.

Un servicio puede generar como máximo un presupuesto.

Los presupuestos poseen únicamente dos estados.

- Pendiente
- Finalizado

No existen estados intermedios.

Cuando el técnico envía un presupuesto:

- Administración recibe el presupuesto pendiente con los detalles de ese servicio.
- El presupuesto permanece visible hasta que Administración lo finaliza.

Los presupuestos desaparecen del menu de presupuestos una vez finalizado por administracion el que desaparezcan de ese menu no significa que ese servicio es eliminado.

## Cobros

Los cobros representan dinero efectivamente recibido por el técnico.

Cada servicio puede tener un único cobro o deuda o ambas ya que puede faltar parte del pago.

El cobro puede incluir:

- monto cobrado total
- efectivo / transferencia / otros (requerido)
- deuda si es el caso (opcional)
- gastos (opcional)

siempre se debera poner el valor por el tecnico si pago o debe
esto simplifica administracion contactarce con el cliente que no abono

---

# Repuestos

Un Servicio realizado puede contener múltiples repuestos, los repuestos van a estar viculados al inventario y rendicion para una rapida buscada de repuesto que se uso y valor agilizando el cierre de rendicion.

Este modelo debe registrar:

- Provedoor (de donde compro el repuesto)
- Nombre
- cantidad
- costo unitario
- costo total

Los repuestos forman parte de la rendición económica donde administracion va agregar al momento de rendir con el tecnico uno a uno que repuesto uso, administracion agrega Provedoor, nombre, ect.

adminitracionb al mometo de rendir, acciones.

- agregar repuesto que va a tener de referencia la lista del modelo inventario ya con el valor y lo agrega al servicio
- editar valor
- finalizar

Los repuestos se agregan desde un buscador del inventario y se mantienen como
líneas independientes dentro del servicio. El mismo código puede aparecer más
de una vez. Al agregarse se congela el snapshot de proveedor, costo, precio,
cotización del dólar y equivalente en moneda local. Administración puede
corregir las líneas antes de liquidar la rendición.

# Gastos

Los gastos se registran directamente dentro del servicio para que formen parte
de su historial y se incorporen automáticamente a la rendición. Cada gasto
conserva concepto, importe, moneda y usuario que lo registró. Administración
puede revisarlo y corregirlo antes de liquidar.

---

# Inventario Proveedores

El modulo de inventario permiten identificar el origen de cada repuesto y tener el valor de costo y venta.

administra catálogo y listas de precio.

- una de tecnico
- otra interna de administracion donde se puede ver el costo real de repuestos.

Su finalidad es poder darle una lista de precios a los técnicos y tener una
lista propia de Administración para calcular el costo de los repuestos al
momento de rendir con el técnico. El stock físico no se controla en esta fase.

El tecnico solo va a poder ver la lista para tecnicos.

**Administracion**

- carga lista de precios por archivo CSV
- ve la lista tal cual se cargó
- calcula automáticamente el porcentaje de ganancia
- edita
- busca repuesto
- asigna una lista de precios para el técnico donde va a tener el valor de venta

**Tecnico**

- ver lista de precios
- Buscador

---

# Modulo Rendición

Rendición semanal o con un período de fechas seleccionado. Cada técnico posee
una rendición por período sin solapamientos ni reutilización de fechas ya
liquidadas.

La rendición agrupa todos los cobros realizados durante la fecha que se establecio, las fechas ya renddidas no seran seleccionables administracion.

las fechas de renciones completadas ya no deben poder ser seleccionadas para rendirse nuevamente.

**Rendicion tabla legible y simple **

servicio
↓

Monto Cobrado total del tecnico
↓
empresa cobros por compania
↓

Monto de gastos

↓

a favor (una seccion que se agrega para descontar)

↓

↓

- Efectivo

- Transferencia

↓

Los repuestos, gastos, seguros y otros ajustes se descuentan antes de calcular
el porcentaje de la empresa y el importe del técnico. Los repuestos se cargan
en cada servicio y se conservan como líneas separadas.

Total de Repuestos + Total de Gastos + Total de Seguros + Otros Ajustes

↓

Administracion + repuestos + seguros

Rest que quedo de esa cuenta

Los datos llegan de los servicios realizados y de los snapshots del inventario.
La liquidación conserva los valores calculados y no se modifica posteriormente.

# Cálculo de rendicion de los servicios tabla interna repuestos

de costos (es el costo final donde administracion ve el costo y la venta del repuesto que queda que debe pagar a cada provedor de esos repuestos)

La fórmula oficial es:

- Servicios por empresa total

- Repuestos total por provedoor

- costo de repuesto por provedoor - venta de repuesto

---

# Historial del cliente

Toda acción de servicios esta fuertemente viculada a los clientes importante tener el historial del cliente eso es oro.

El CLIENTE :

- Todos lo servicios que realizo con el detalle de cada servicio
- asignación de técnico
- cobro
- envío de presupuesto
- cierre finalización 

El historial nunca debe eliminarse ya que es el historial de cada cliente.

---

# Integraciones

El sistema podrá integrarse con servicios externos.

Inicialmente:

- Google Sheets

Futuras integraciones:

- Google Calendar
- Outlook Calendar

Las integraciones nunca reemplazan al sistema principal.

---

# Escalabilidad

Toda nueva funcionalidad deberá respetar estas reglas.

No podrán implementarse módulos que contradigan la lógica definida en este documento.

Este archivo constituye la especificación funcional principal del sistema.
