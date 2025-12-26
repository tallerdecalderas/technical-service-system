"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Plus } from "lucide-react";
import type { Client, User, Service } from "@/types";
import { NewClientDialog } from "@/components/clients/new-client-dialog";

interface ServiceFormProps {
  clients: Client[];
  technicians: User[];
  createdById: string;
  service?: Service;
}

export function ServiceForm({
  clients,
  technicians,
  createdById,
  service,
}: ServiceFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [clientsList, setClientsList] = useState(clients);
  const [showNewClient, setShowNewClient] = useState(false);

  const [formData, setFormData] = useState({
    title: service?.title || "",
    description: service?.description || "",
    clientId: service?.clientId || "",
    technicianId: service?.technicianId || "",
    scheduledDate: service?.scheduledDate
      ? new Date(service.scheduledDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    scheduledTime: service?.scheduledTime || "09:00",
    address: service?.address || "",
    notes: service?.notes || "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const url = service ? `/api/services/${service.id}` : "/api/services";
      const method = service ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          scheduledDate: new Date(`${formData.scheduledDate}T12:00:00`),
          createdById,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al guardar");
      }

      toast.success(service ? "Servicio actualizado" : "Servicio creado");
      router.push("/admin/services");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error al guardar el servicio"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClientCreated(newClient: Client) {
    setClientsList([...clientsList, newClient]);
    setFormData({ ...formData, clientId: newClient.id });
    setShowNewClient(false);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {service ? "Editar Servicio" : "Datos del Servicio"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título del servicio *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Ej: Instalación aire acondicionado"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Detalles del trabajo a realizar..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Cliente *</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNewClient(true)}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Nuevo cliente
                </Button>
              </div>
              <Select
                value={formData.clientId}
                onValueChange={(v) => setFormData({ ...formData, clientId: v })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar cliente" />
                </SelectTrigger>
                <SelectContent>
                  {clientsList.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name} - {client.address}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Técnico asignado</Label>
              <Select
                value={formData.technicianId}
                onValueChange={(v) =>
                  setFormData({ ...formData, technicianId: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar técnico (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  {technicians.map((tech) => (
                    <SelectItem key={tech.id} value={tech.id}>
                      {tech.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scheduledDate">Fecha *</Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) =>
                    setFormData({ ...formData, scheduledDate: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheduledTime">Hora *</Label>
                <Input
                  id="scheduledTime"
                  type="time"
                  value={formData.scheduledTime}
                  onChange={(e) =>
                    setFormData({ ...formData, scheduledTime: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección del servicio</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder="Dirección donde se realizará el servicio"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notas internas</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Notas adicionales..."
                rows={2}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => router.back()}
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {service ? "Guardar Cambios" : "Crear Servicio"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <NewClientDialog
        open={showNewClient}
        onOpenChange={setShowNewClient}
        onClientCreated={handleClientCreated}
      />
    </>
  );
}
