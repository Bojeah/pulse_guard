'use client';
import { StatsCard } from '@/app/components/StatsCard';
import { EquipmentCard } from '@/app/components/EquipmentCard';
import { PowerChart } from '@/app/components/PowerChart';
import { equipmentData, systemMetrics } from '@/data/sampleData';
import { Activity, AlertTriangle, CheckCircle, TrendingUp, Zap, DollarSign, Clock, Sparkles} from 'lucide-react';
import  Image  from "next/image";
import Link from "next/link";


const Dashboard = () => {
  const criticalEquipment = equipmentData.filter((e: { status: string; }) => e.status === 'critical').length;
  const warningEquipment = equipmentData.filter((e: { status: string; }) => e.status === 'warning').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
          <Image src="/favicon.ico" alt="Project Logo" width={40} height={40} className='logo' />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Pulse Guard</h1>
                <p className="text-sm text-muted-foreground">Predictive Maintenance Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Equipment"
            value={systemMetrics.totalEquipment}
            subtitle="Monitored assets"
            icon={Activity}
            trend="neutral"
          />
          <StatsCard
            title="Active Alerts"
            value={criticalEquipment + warningEquipment}
            subtitle={`${criticalEquipment} critical, ${warningEquipment} warning`}
            icon={AlertTriangle}
            trend={criticalEquipment > 0 ? 'down' : 'neutral'}
          />
          <StatsCard
            title="Avg Health Score"
            value={`${systemMetrics.avgHealthScore}%`}
            subtitle="System-wide average"
            icon={CheckCircle}
            trend="up"
          />
          <StatsCard
            title="System Uptime"
            value={`${systemMetrics.uptime}%`}
            subtitle="Last 30 days"
            icon={Clock}
            trend="up"
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Power Output"
            value={`${systemMetrics.totalPowerOutput.toLocaleString()} kW`}
            subtitle="Current generation"
            icon={Zap}
            trend="up"
          />
          <StatsCard
            title="System Efficiency"
            value={`${systemMetrics.efficiency}%`}
            subtitle="+2% from last week"
            icon={TrendingUp}
            trend="up"
          />
          <StatsCard
            title="Predicted Savings"
            value={`$${systemMetrics.predictedSavings.toLocaleString()}`}
            subtitle="AI-optimized maintenance"
            icon={DollarSign}
            trend="up"
          />
        </div>

        {/* AI Insights Banner */}
        <div className="mb-8 p-6 rounded-lg bg-(--gradient-primary)! border border-primary/20 shadow-(--shadow-glow)">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-background/20">
              <Sparkles className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Insights</h3>
              <p className="text-sm text-foreground/90 mb-2">
                Based on current equipment health and historical data, our AI recommends immediate attention to Circuit Breaker Gamma (CIR-003). 
                Predictive models indicate a 55% failure probability within the next 48 hours.
              </p>
              <p className="text-xs text-foreground/70">
                Addressing this issue now could prevent an estimated $42,000 in downtime costs and ensure grid stability.
              </p>
            </div>
          </div>
        </div>

        {/* Power Trends Chart */}
        <div className="mb-8">
          <PowerChart />
        </div>

        {/* Equipment Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Equipment Health Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentData.map((equipment) => (
              <Link key={equipment.id} href={`/equipments/${equipment.id}`}>
              <EquipmentCard equipment={equipment} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard
