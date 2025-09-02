import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
}: MetricCardProps) => {
  return (
    <div className={cn("metric-card fade-in", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs mt-1 flex items-center gap-1",
                trend.isPositive ? "text-success" : "text-destructive"
              )}
            >
              <span>{trend.isPositive ? "↗" : "↘"}</span>
              {Math.abs(trend.value)}% vs mês anterior
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-primary-light">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};