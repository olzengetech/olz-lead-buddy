import { Layout } from "@/components/layout/Layout";
import { LeadsTable } from "@/components/leads/LeadsTable";

const Leads = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground">
            Gerencie todos os seus leads e oportunidades de vendas
          </p>
        </div>
        
        <LeadsTable />
      </div>
    </Layout>
  );
};

export default Leads;