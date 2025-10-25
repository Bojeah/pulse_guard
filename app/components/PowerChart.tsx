'use client';
import { Card } from '@/app/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { powerTrendData } from '@/data/sampleData';

export const PowerChart = () => {
  return (
    <Card className="p-6 bg-(--gradient-card) border-border shadow-(--shadow-card) animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-4">Power Trends - 24 Hour Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={powerTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis 
            dataKey="timestamp" 
            stroke="var(--muted-foreground)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="var(--muted-foreground)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--foreground)'
            }}
          />
          <Legend 
            wrapperStyle={{ color: 'var(--foreground)' }}
          />
          <Line 
            type="monotone" 
            dataKey="consumption" 
            stroke="var(--primary)" 
            strokeWidth={2}
            dot={{ fill: 'var(--primary)' }}
            name="Consumption (kW)"
          />
          <Line 
            type="monotone" 
            dataKey="generation" 
            stroke="var(--success)" 
            strokeWidth={2}
            dot={{ fill: 'var(--success)' }}
            name="Generation (kW)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};