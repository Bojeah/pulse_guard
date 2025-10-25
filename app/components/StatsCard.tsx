"use client"

import { LucideIcon } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const StatsCard = ({ title, value, subtitle, icon: Icon, trend, className }: StatsCardProps) => {
  return (
    <Card className={cn('p-6 bg-(--gradient-card) border-border shadow-(--shadow-card) animate-fade-in', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          {subtitle && (
            <p className={cn(
              'text-xs font-medium',
              trend === 'up' && 'text-(--success)',
              trend === 'down' && 'text-(--danger)',
              trend === 'neutral' && 'text-muted-foreground'
            )}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
