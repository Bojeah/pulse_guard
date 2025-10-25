export interface Equipment {
  id: string;
  name: string;
  type: string;
  location: string;
  healthScore: number;
  failureProbability: number;
  status: 'healthy' | 'warning' | 'critical';
  lastMaintenance: string;
  nextMaintenance: string;
  powerOutput: number;
  temperature: number;
  vibration: number;
  aiPrediction: string;
}

export interface PowerMetric {
  timestamp: string;
  consumption: number;
  generation: number;
  efficiency: number;
}

export const equipmentData: Equipment[] = [
  {
    id: 'TRN-001',
    name: 'Transformer Alpha',
    type: 'Power Transformer',
    location: 'Substation A',
    healthScore: 92,
    failureProbability: 8,
    status: 'healthy',
    lastMaintenance: '2024-09-15',
    nextMaintenance: '2025-03-15',
    powerOutput: 2500,
    temperature: 68,
    vibration: 2.1,
    aiPrediction: 'Optimal performance. Next maintenance in 3 months.',
  },
  {
    id: 'GEN-002',
    name: 'Generator Beta',
    type: 'Turbine Generator',
    location: 'Plant B',
    healthScore: 76,
    failureProbability: 24,
    status: 'warning',
    lastMaintenance: '2024-06-10',
    nextMaintenance: '2024-12-10',
    powerOutput: 5200,
    temperature: 82,
    vibration: 4.3,
    aiPrediction: 'Elevated vibration detected. Schedule inspection within 2 weeks.',
  },
  {
    id: 'CIR-003',
    name: 'Circuit Breaker Gamma',
    type: 'High Voltage Breaker',
    location: 'Distribution Center C',
    healthScore: 45,
    failureProbability: 55,
    status: 'critical',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-07-20',
    powerOutput: 0,
    temperature: 95,
    vibration: 7.8,
    aiPrediction: 'CRITICAL: High failure risk. Immediate maintenance required.',
  },
  {
    id: 'MTR-004',
    name: 'Motor Delta',
    type: 'Induction Motor',
    location: 'Facility D',
    healthScore: 88,
    failureProbability: 12,
    status: 'healthy',
    lastMaintenance: '2024-08-05',
    nextMaintenance: '2025-02-05',
    powerOutput: 850,
    temperature: 72,
    vibration: 2.8,
    aiPrediction: 'Running smoothly. Monitor temperature trends.',
  },
  {
    id: 'TRN-005',
    name: 'Transformer Epsilon',
    type: 'Distribution Transformer',
    location: 'Substation E',
    healthScore: 68,
    failureProbability: 32,
    status: 'warning',
    lastMaintenance: '2024-05-12',
    nextMaintenance: '2024-11-12',
    powerOutput: 1800,
    temperature: 78,
    vibration: 3.9,
    aiPrediction: 'Oil analysis recommended. Potential insulation degradation.',
  },
  {
    id: 'GEN-006',
    name: 'Generator Zeta',
    type: 'Backup Generator',
    location: 'Emergency Facility F',
    healthScore: 95,
    failureProbability: 5,
    status: 'healthy',
    lastMaintenance: '2024-10-01',
    nextMaintenance: '2025-04-01',
    powerOutput: 3200,
    temperature: 65,
    vibration: 1.8,
    aiPrediction: 'Excellent condition. Continue routine checks.',
  },
];

export const powerTrendData: PowerMetric[] = [
  { timestamp: '00:00', consumption: 3200, generation: 3500, efficiency: 91 },
  { timestamp: '04:00', consumption: 2800, generation: 3200, efficiency: 88 },
  { timestamp: '08:00', consumption: 4500, generation: 4800, efficiency: 94 },
  { timestamp: '12:00', consumption: 5200, generation: 5600, efficiency: 93 },
  { timestamp: '16:00', consumption: 4800, generation: 5100, efficiency: 94 },
  { timestamp: '20:00', consumption: 4200, generation: 4600, efficiency: 91 },
];

export const systemMetrics = {
  totalEquipment: 6,
  activeAlerts: 2,
  healthyEquipment: 3,
  avgHealthScore: 77,
  totalPowerOutput: 13550,
  efficiency: 92,
  uptime: 99.7,
  predictedSavings: 145000,
};