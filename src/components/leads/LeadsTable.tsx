import { useState } from "react";
import { MoreVertical, Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Lead {
  id: string;
  numero: number;
  cliente: string;
  cargo: string;
  empresa: string;
  vendedor: string;
  tipoPrimeiroContato: string;
  dataPrimeiroContato: string;
  etapaContato: string;
  situacaoRelacao: string;
  gatilho: string;
  tipoSegundoContato: string;
  dataSegundoContato: string;
  situacaoRelacao2: string;
  proximoContato: string;
  situacaoContato: string;
  situacaoFinal: string;
  motivoPerda: string;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    numero: 1,
    cliente: "João Silva",
    cargo: "CTO",
    empresa: "Tech Solutions",
    vendedor: "Carlos Mendes",
    tipoPrimeiroContato: "E-mail",
    dataPrimeiroContato: "2024-01-15",
    etapaContato: "Qualificação",
    situacaoRelacao: "Interessado",
    gatilho: "Necessidade de Sistema",
    tipoSegundoContato: "Ligação",
    dataSegundoContato: "2024-01-20",
    situacaoRelacao2: "Muito Interessado",
    proximoContato: "2024-01-25",
    situacaoContato: "Agendado",
    situacaoFinal: "Em Andamento",
    motivoPerda: "",
  },
  {
    id: "2",
    numero: 2,
    cliente: "Maria Santos",
    cargo: "Diretora",
    empresa: "Inovação Digital",
    vendedor: "Ana Costa",
    tipoPrimeiroContato: "LinkedIn",
    dataPrimeiroContato: "2024-01-10",
    etapaContato: "Proposta",
    situacaoRelacao: "Muito Interessado",
    gatilho: "Expansão de Negócio",
    tipoSegundoContato: "Reunião",
    dataSegundoContato: "2024-01-18",
    situacaoRelacao2: "Fechamento",
    proximoContato: "2024-01-22",
    situacaoContato: "Confirmado",
    situacaoFinal: "Finalizado",
    motivoPerda: "",
  },
  {
    id: "3",
    numero: 3,
    cliente: "Pedro Costa",
    cargo: "Gerente TI",
    empresa: "Sistemas Avançados",
    vendedor: "Roberto Silva",
    tipoPrimeiroContato: "Telefone",
    dataPrimeiroContato: "2024-01-08",
    etapaContato: "Negociação",
    situacaoRelacao: "Considerando",
    gatilho: "Modernização",
    tipoSegundoContato: "E-mail",
    dataSegundoContato: "2024-01-15",
    situacaoRelacao2: "Dúvidas",
    proximoContato: "2024-01-30",
    situacaoContato: "Pendente",
    situacaoFinal: "Perdido",
    motivoPerda: "Orçamento",
  },
];

const getSituacaoColor = (situacao: string) => {
  switch (situacao.toLowerCase()) {
    case "em andamento":
      return "bg-primary-light text-primary";
    case "finalizado":
      return "bg-success/20 text-success";
    case "perdido":
      return "bg-destructive/20 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const LeadsTable = () => {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(mockLeads.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (leadId: string, checked: boolean) => {
    if (checked) {
      setSelectedLeads([...selectedLeads, leadId]);
    } else {
      setSelectedLeads(selectedLeads.filter(id => id !== leadId));
    }
  };

  const handleDeleteSelected = () => {
    // Implementar exclusão em massa
    console.log("Excluir leads selecionados:", selectedLeads);
    setSelectedLeads([]);
  };

  return (
    <Card className="fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Gestão de Leads</CardTitle>
          <div className="flex gap-2">
            {selectedLeads.length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDeleteSelected}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Excluir ({selectedLeads.length})
              </Button>
            )}
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Lead
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="data-table">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedLeads.length === mockLeads.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Nº</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Vendedor</TableHead>
                <TableHead>1º Contato</TableHead>
                <TableHead>Data 1º</TableHead>
                <TableHead>Etapa</TableHead>
                <TableHead>Situação</TableHead>
                <TableHead>Gatilho</TableHead>
                <TableHead>2º Contato</TableHead>
                <TableHead>Data 2º</TableHead>
                <TableHead>Situação 2</TableHead>
                <TableHead>Próximo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Final</TableHead>
                <TableHead>Motivo</TableHead>
                <TableHead className="w-12">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Checkbox
                      checked={selectedLeads.includes(lead.id)}
                      onCheckedChange={(checked) =>
                        handleSelectLead(lead.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{lead.numero}</TableCell>
                  <TableCell className="font-medium">{lead.cliente}</TableCell>
                  <TableCell>{lead.cargo}</TableCell>
                  <TableCell>{lead.empresa}</TableCell>
                  <TableCell>{lead.vendedor}</TableCell>
                  <TableCell>{lead.tipoPrimeiroContato}</TableCell>
                  <TableCell>{lead.dataPrimeiroContato}</TableCell>
                  <TableCell>{lead.etapaContato}</TableCell>
                  <TableCell>{lead.situacaoRelacao}</TableCell>
                  <TableCell>{lead.gatilho}</TableCell>
                  <TableCell>{lead.tipoSegundoContato}</TableCell>
                  <TableCell>{lead.dataSegundoContato}</TableCell>
                  <TableCell>{lead.situacaoRelacao2}</TableCell>
                  <TableCell>{lead.proximoContato}</TableCell>
                  <TableCell>{lead.situacaoContato}</TableCell>
                  <TableCell>
                    <Badge className={getSituacaoColor(lead.situacaoFinal)}>
                      {lead.situacaoFinal}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.motivoPerda}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};