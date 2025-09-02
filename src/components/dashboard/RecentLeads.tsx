import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Lead {
  id: string;
  name: string;
  company: string;
  stage: string;
  value: string;
  initials: string;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "João Silva",
    company: "Tech Solutions",
    stage: "Qualificado",
    value: "R$ 45.000",
    initials: "JS",
  },
  {
    id: "2",
    name: "Maria Santos",
    company: "Inovação Digital",
    stage: "Proposta",
    value: "R$ 75.000",
    initials: "MS",
  },
  {
    id: "3",
    name: "Pedro Costa",
    company: "Sistemas Avançados",
    stage: "Negociação",
    value: "R$ 120.000",
    initials: "PC",
  },
  {
    id: "4",
    name: "Ana Oliveira",
    company: "Future Corp",
    stage: "Primeiro Contato",
    value: "R$ 35.000",
    initials: "AO",
  },
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Primeiro Contato":
      return "bg-muted text-muted-foreground";
    case "Qualificado":
      return "bg-primary-light text-primary";
    case "Proposta":
      return "bg-warning/20 text-warning";
    case "Negociação":
      return "bg-success/20 text-success";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const RecentLeads = () => {
  return (
    <Card className="fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Leads Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary-light text-primary font-medium">
                    {lead.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.company}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge
                  variant="secondary"
                  className={getStageColor(lead.stage)}
                >
                  {lead.stage}
                </Badge>
                <p className="text-sm font-medium mt-1">{lead.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};