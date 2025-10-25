'use client'
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Card } from '../../../components/ui/card'
import {
  voltageData,
  currentData,
  equipmentData,
  VoltageMetric,
  CurrentMetric,
} from '@/data/sampleData'

interface ChartSectionProps {
  equipmentId: string
}

export default function ChartSection({ equipmentId }: ChartSectionProps) {
  const equipment = equipmentData.find((eq) => eq.id === equipmentId)
  const voltageMetrics: VoltageMetric[] = voltageData[equipmentId] || []
  const currentMetrics: CurrentMetric[] = currentData[equipmentId] || []

  if (!equipment) {
    return (
      <div className="text-white text-center p-6 bg-[#274666] rounded-[25.58px]">
        Equipment not found.
      </div>
    )
  }

  return (
    <section className="flex flex-col w-full gap-6 md:gap-8">
      {/* Voltage Chart */}
      <Card className="w-full bg-[#274666] rounded-[25.58px] border-0 shadow-md p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
          Voltage Profile - {equipment.name}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={voltageMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff33" />
            <XAxis
              dataKey="timestamp"
              stroke="#ffffffb2"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#ffffffb2"
              style={{ fontSize: '12px' }}
              label={{
                value: 'Voltage (V)',
                angle: -90,
                position: 'insideLeft',
                fill: '#ffffffb2',
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#274666',
                border: '1px solid #ffffff33',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Legend wrapperStyle={{ color: 'white' }} />
            <Line
              type="monotone"
              dataKey="voltage"
              stroke="#1bda64"
              strokeWidth={2}
              dot={{ fill: '#1bda64' }}
              name="Voltage (V)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Current Chart */}
      <Card className="w-full bg-[#274666] rounded-[25.58px] border-0 shadow-md p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
          Current Profile - {equipment.name}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={currentMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff33" />
            <XAxis
              dataKey="timestamp"
              stroke="#ffffffb2"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#ffffffb2"
              style={{ fontSize: '12px' }}
              label={{
                value: 'Current (A)',
                angle: -90,
                position: 'insideLeft',
                fill: '#ffffffb2',
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#274666',
                border: '1px solid #ffffff33',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Legend wrapperStyle={{ color: 'white' }} />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#08acf8"
              strokeWidth={2}
              dot={{ fill: '#08acf8' }}
              name="Current (A)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </section>
  )
}
