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

export interface VoltageMetric {
  timestamp: string;
  voltage: number;
}

export interface CurrentMetric {
  timestamp: string;
  current: number;
}

export const voltageData: Record<string, VoltageMetric[]> = {
  'TRN-001': [
    { timestamp: '00:00', voltage: 410 },
    { timestamp: '04:00', voltage: 405 },
    { timestamp: '08:00', voltage: 420 },
    { timestamp: '12:00', voltage: 435 },
    { timestamp: '16:00', voltage: 430 },
    { timestamp: '20:00', voltage: 415 },
  ],
  'GEN-002': [
    { timestamp: '00:00', voltage: 460 },
    { timestamp: '04:00', voltage: 455 },
    { timestamp: '08:00', voltage: 470 },
    { timestamp: '12:00', voltage: 485 },
    { timestamp: '16:00', voltage: 475 },
    { timestamp: '20:00', voltage: 465 },
  ],
  'CIR-003': [
    { timestamp: '00:00', voltage: 380 },
    { timestamp: '04:00', voltage: 370 },
    { timestamp: '08:00', voltage: 390 },
    { timestamp: '12:00', voltage: 400 },
    { timestamp: '16:00', voltage: 395 },
    { timestamp: '20:00', voltage: 382 },
  ],
  'MTR-004': [
    { timestamp: '00:00', voltage: 415 },
    { timestamp: '04:00', voltage: 410 },
    { timestamp: '08:00', voltage: 425 },
    { timestamp: '12:00', voltage: 435 },
    { timestamp: '16:00', voltage: 430 },
    { timestamp: '20:00', voltage: 418 },
  ],
  'TRN-005': [
    { timestamp: '00:00', voltage: 400 },
    { timestamp: '04:00', voltage: 395 },
    { timestamp: '08:00', voltage: 405 },
    { timestamp: '12:00', voltage: 415 },
    { timestamp: '16:00', voltage: 408 },
    { timestamp: '20:00', voltage: 398 },
  ],
  'GEN-006': [
    { timestamp: '00:00', voltage: 470 },
    { timestamp: '04:00', voltage: 465 },
    { timestamp: '08:00', voltage: 475 },
    { timestamp: '12:00', voltage: 485 },
    { timestamp: '16:00', voltage: 480 },
    { timestamp: '20:00', voltage: 470 },
  ],
};

export const currentData: Record<string, CurrentMetric[]> = {
  'TRN-001': [
    { timestamp: '00:00', current: 145 },
    { timestamp: '04:00', current: 140 },
    { timestamp: '08:00', current: 155 },
    { timestamp: '12:00', current: 165 },
    { timestamp: '16:00', current: 160 },
    { timestamp: '20:00', current: 150 },
  ],
  'GEN-002': [
    { timestamp: '00:00', current: 225 },
    { timestamp: '04:00', current: 215 },
    { timestamp: '08:00', current: 240 },
    { timestamp: '12:00', current: 255 },
    { timestamp: '16:00', current: 250 },
    { timestamp: '20:00', current: 235 },
  ],
  'CIR-003': [
    { timestamp: '00:00', current: 18 },
    { timestamp: '04:00', current: 15 },
    { timestamp: '08:00', current: 22 },
    { timestamp: '12:00', current: 25 },
    { timestamp: '16:00', current: 23 },
    { timestamp: '20:00', current: 20 },
  ],
  'MTR-004': [
    { timestamp: '00:00', current: 70 },
    { timestamp: '04:00', current: 68 },
    { timestamp: '08:00', current: 75 },
    { timestamp: '12:00', current: 80 },
    { timestamp: '16:00', current: 78 },
    { timestamp: '20:00', current: 72 },
  ],
  'TRN-005': [
    { timestamp: '00:00', current: 95 },
    { timestamp: '04:00', current: 90 },
    { timestamp: '08:00', current: 100 },
    { timestamp: '12:00', current: 110 },
    { timestamp: '16:00', current: 105 },
    { timestamp: '20:00', current: 98 },
  ],
  'GEN-006': [
    { timestamp: '00:00', current: 175 },
    { timestamp: '04:00', current: 170 },
    { timestamp: '08:00', current: 180 },
    { timestamp: '12:00', current: 195 },
    { timestamp: '16:00', current: 190 },
    { timestamp: '20:00', current: 178 },
  ],
};
