import { Layout } from "@/components/layout/Layout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { 
  Users, 
  UserCheck, 
  CheckCircle, 
  Calendar,
  TrendingUp,
  DollarSign,
  Target,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral do seu sistema CRM
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total de Leads"
            value="1,234"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Leads Qualificados"
            value="456"
            icon={UserCheck}
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Leads Finalizados"
            value="89"
            icon={CheckCircle}
            trend={{ value: 15, isPositive: true }}
          />
          <MetricCard
            title="Próximos Contatos"
            value="23"
            icon={Calendar}
            trend={{ value: 3, isPositive: false }}
          />
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Taxa de Conversão"
            value="7.2%"
            icon={Target}
            trend={{ value: 2, isPositive: true }}
          />
          <MetricCard
            title="Valor Total Pipeline"
            value="R$ 2.4M"
            icon={DollarSign}
            trend={{ value: 18, isPositive: true }}
          />
          <MetricCard
            title="Tempo Médio Ciclo"
            value="45 dias"
            icon={Clock}
            trend={{ value: 5, isPositive: false }}
          />
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <Card className="lg:col-span-2 fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance de Vendas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">
                  Gráfico de performance será implementado com dados reais
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Leads */}
          <RecentLeads />
        </div>

        {/* Quick Actions */}
        <Card className="fade-in">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border-2 border-dashed border-muted hover:border-primary transition-colors cursor-pointer text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Adicionar Lead</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-dashed border-muted hover:border-primary transition-colors cursor-pointer text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Agendar Contato</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-dashed border-muted hover:border-primary transition-colors cursor-pointer text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Ver Relatórios</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-dashed border-muted hover:border-primary transition-colors cursor-pointer text-center">
                <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Pipeline</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
