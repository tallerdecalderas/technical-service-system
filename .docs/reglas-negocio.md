# Reglas de Negocio — TechService

# Objetivo del Sistema

TechService es un sistema de administración integral para empresas de servicio técnico para una comunicacion precisa entre tecnicos y administracion.

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

Ninguna integración externa (Google Sheets, WhatsApp, etc.) puede modificar información directamente.

Las integraciones únicamente reflejan información existente.

---

## 2. Cada servicio representa un servicio técnica precial que hace el tecnico

Un Servicio representa una visita programada a un cliente.

El servicio posee su propio historial, estado, técnico asignado y documentación asociada.

---

## 3. Un cliente puede tener múltiples servicios

No existe límite de servicios asociados a un cliente.

El historial debe permanecer disponible de forma permanente del servicio ya que queda registrado cada servicio de cada tecnico y cada servicio que tubo el cliente.

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

Agenda

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

- Pendiente
- En Proceso
- Completado
- Cancelado
- Cerrado
- Falta terminar el trabajo

Cada cambio de estado debe quedar registrado en el historial.

---

# Creación del Servicio

El Administrador crea un servicio indicando como mínimo:

- Empresa
- Cliente
- Fecha
- Hora (se pone por detras automaticamente)
- Dirección
- Localidad
- Descripción
- Técnico (opcional)

Una vez creado:

- aparece en la agenda
- puede sincronizarse con Google Sheets
- puede enviarse al cliente mediante WhatsApp (copy past manual lo hace administracion)

---

# Comunicación con el Cliente

Cada servicio puede generar automáticamente un mensaje para WhatsApp.

El mensaje debe poder:

- copiarse al portapapeles
- abrir WhatsApp directamente

La plantilla será configurable en futuras versiones.

El sistema nunca enviará mensajes automáticamente.

Siempre será el usuario quien confirme el envío.

---

# Agenda (schedule)

La agenda representa todos los servicios programados,cada tecnico tiene su propia agenda, cada tecnico tiene una hoja de googlesheest como agenda.

Debe actualizarse automáticamente cuando:

- se crea un servicio
- cambia la fecha
- cambia la hora
- cambia el técnico
- cambia el estado
- se cancela un servicio

La agenda puede sincronizarse con Google Sheets.

Google Sheets es únicamente una vista externa.

Nunca modifica la información del sistema ya que el sistema es offline se ctualiza la base dde datos igual cuando la coneccion se levante. asi tenemos el respaldo que los tecnico puedan ver sus servicios en googlesheet.

---

# Técnico

Cada técnico únicamente puede visualizar:

- sus servicios
- sus cobros
- sus presupuestos
- su rendición

Nunca podrá acceder a información perteneciente a otro técnico.

---

# Finalización del Servicio

Cuando un técnico finaliza un servicio podrá:

- cerrar el trabajo
- registrar un cobro
- enviar un presupuesto

Las acciones son independientes.

Un servicio puede:

- tener cobro sin presupuesto

---

# Presupuestos

Los presupuestos representan trabajos futuros derivados de una visita técnica.

Un servicio puede generar como máximo un presupuesto.

Los presupuestos poseen únicamente dos estados.

- Pendiente
- Finalizado

No existen estados intermedios.

Cuando el técnico envía un presupuesto:

- Administración recibe el presupuesto pendiente.
- El presupuesto permanece visible hasta que Administración lo finaliza.

Los presupuestos desaparecen del menu de presupuestos una vez finalizado por administracion.

---

# Cobros

Los cobros representan dinero efectivamente recibido por el técnico.

Cada servicio puede tener un único cobro o deuda.

El cobro puede incluir:

- monto cobrado (requerido)
- efectivo / transferencia / otros (requerido)
- deuda si es el caso (opcional)
- gastos (opcional)

siempre se debera poner el valor por el tecnico si pago o debe
esto simplifica administracion contactarce con el cliente que no abono

---

# Repuestos

Un cobro puede contener múltiples repuestos los repuestos van a estar vivulados al inventario para una rapida buscada de repuesto que se uso y valor agilizando el cierre de rendicion.

Cada repuesto debe registrar al momento de rendir:

- Provedoor (de donde compro el repuesto)
- cantidad
- costo unitario
- costo total

Los repuestos forman parte de la rendición económica donde administracion va agregar al momento de rendir con el tecnico uno a uno que repuesto uso, administracion agrega el nombre de reuesto que va a poder tener todos los repuestos coon busqueda por codigo o por nom bre ccon proveddor y valor de venta.

adminitracionb al mometo de rendir acciones

- agregar repuesto que viene del inventario
- editar valor
- finalizar repuesto con monto total

---

# Inventario Proveedores

Los proveedores permiten identificar el origen de cada repuesto.

administran stock Lista de precios de tecnico y interna de administracion donde se puede ver el costo real de repuestos.

Su finalidad es poder darle una lista de precios a los tecnicos y tener una lista propia de administracion al momento de rendir va a servir parqa sacar el costo de los repuestos una vez finalizado el cierre con el tecnico.

El INVENTARIO proveedores podrán administrarse desde el panel de Administración unicamente el Panel solo pordra ver la lista de precios que se le asigne.

**Administracion**

- carga lista que es una hoja de googlesheets
- ver lista tal cual se cargo
- calculo automatico de porcentaje de ganancia de
- editar
- buscar repuesto
- asinar una lista de precios para el tecnico donde le agrega 1.40 porciento

**Tecnico**

- ver lista de precios
- Buscador

---

# Rendición Semanal, Mensual o con fecha seleccionadas

Cada técnico posee una rendición.

La rendición agrupa todos los cobros realizados durante la seleccion que se establecio en administracion, las fechas de renciones completadas ya no deben poder ser seleccionadas.

**Para cada servicio se calcula en una tabla legible y simple **

Monto Cobrado total del tecnico

↓

- Efectivo

- Transferencia

↓

Monto de gastos

↓

a favor

↓

empresa cobros por compania

↓

Los repuestos siempre se descuentan despues de calcular la carga de repuestos, quelo carga administracion en cada servicio que reespuesto se uso simple y rapipido.

Total de Repuestos - Total de Técnico

↓

Administracion + repuestos + seguros

Rest que quedo de esa cuenta

por el momento el ccalucolo final debe ser asi puede que sufra cambios. hasta perfecccionar el modulo de rendicion los datos siempre llegan de los servicios realizados y lña lista de precios de inventario

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
- cambio de estado
- cobro
- envío de presupuesto
- cierre
- finalización

El historial nunca debe eliminarse ya que es el historial de cada cliente.

---

# Integraciones

El sistema podrá integrarse con servicios externos.

Inicialmente:

- Google Sheets

Futuras integraciones:

- Google Calendar
- Outlook Calendar
- APIs de mensajería

Las integraciones nunca reemplazan al sistema principal.

---

# Seguridad

Los técnicos únicamente pueden modificar información de sus propios servicios.

Todas las operaciones sensibles requieren autenticación.

Toda modificación debe validar permisos antes de ejecutarse.

---

# Escalabilidad

Toda nueva funcionalidad deberá respetar estas reglas.

No podrán implementarse módulos que contradigan la lógica definida en este documento.

Este archivo constituye la especificación funcional principal del sistema.
