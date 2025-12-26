import { ClientForm } from "@/components/clients/client-form"

export default function NewClientPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Nuevo Cliente</h1>
        <p className="text-muted-foreground">Registra un nuevo cliente en el sistema</p>
      </div>

      <ClientForm />
    </div>
  )
}
