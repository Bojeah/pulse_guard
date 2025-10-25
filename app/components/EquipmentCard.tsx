"use client"
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Equipment } from '@/data/sampleData';
import { Activity, MapPin, Zap, ThermometerSun, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EquipmentCardProps {
  equipment: Equipment;
}

export const EquipmentCard = ({ equipment }: EquipmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-(--success)/10 text-(--success) border-(--success)/20';
      case 'warning':
        return 'bg-(--warning)/10 text-(--warning) border-(--warning)/20';
      case 'critical':
        return 'bg-(--danger)/10 text-(--danger) border-(--danger)/20 animate-pulse-glow';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-(--success)';
    if (score >= 60) return 'text-(--warning)';
    return 'text-(--danger)';
  };

  return (
    <Card className="p-6 bg-(--gradient-card) border-border shadow(--shadow-card) hover:shadow-(--shadow-glow) transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{equipment.name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {equipment.location}
          </p>
        </div>
        <Badge className={cn('font-semibold', getStatusColor(equipment.status))}>
          {equipment.status.toUpperCase()}
        </Badge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Health Score</span>
          <span className={cn('font-bold text-lg', getHealthColor(equipment.healthScore))}>
            {equipment.healthScore}%
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Failure Probability</span>
          <span className={cn('font-semibold', equipment.failureProbability > 30 ? 'text-danger' : 'text-foreground')}>
            {equipment.failureProbability}%
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <Zap className="w-3 h-3" />
              <span>Power</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{equipment.powerOutput} kW</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <ThermometerSun className="w-3 h-3" />
              <span>Temp</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{equipment.temperature}°C</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
              <Activity className="w-3 h-3" />
              <span>Vib</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{equipment.vibration} mm/s</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex items-start gap-2">
          <AlertTriangle className={cn('w-4 h-4 mt-0.5 shrink-0', 
            equipment.status === 'critical' ? 'text-(--danger)' : 
            equipment.status === 'warning' ? 'text-(--warning)' : 
            'text-primary'
          )} />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">AI Prediction:</span> {equipment.aiPrediction}
          </p>
        </div>
      </div>
    </Card>
  );
};