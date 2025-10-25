import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { equipmentData } from "@/data/sampleData";
import { Equipment } from "@/data/sampleData";
import {
  Activity,
  MapPin,
  Thermometer,
  TriangleAlert,
  Zap,
} from "lucide-react";

interface EquipmentHealthProps {
  equipmentId: string;
}

export default function EquipmentHealthSection({
  equipmentId,
}: EquipmentHealthProps) {
  const equipment = equipmentData.find((eq) => eq.id === equipmentId);

  if (!equipment) {
    return (
      <div className="text-white text-center p-6 bg-[#274666] rounded-[25.58px]">
        Equipment not found.
      </div>
    );
  }

  // dynamic metrics
  const metricsData = [
    {
      label: "Health Score",
      value: `${equipment.healthScore}%`,
      valueColor: "text-[#1ada64]",
    },
    {
      label: "Failure Probability",
      value: `${equipment.failureProbability}%`,
      valueColor: "text-white opacity-80",
    },
  ];

  // dynamic sensors
  const sensorData = [
    { icon: Zap, label: "Power", value: `${equipment.powerOutput} kW` },
    { icon: Thermometer, label: "Temp", value: `${equipment.temperature}°C` },
    { icon: Activity, label: "Vib", value: `${equipment.vibration} mm/s` },
  ];

  // badge color logic
  const getBadgeClass = () => {
    switch (equipment.status) {
      case "healthy":
        return "bg-[#1ada6421] text-[#1ada64]";
      case "warning":
        return "bg-[#ffb02021] text-[#ffb020]";
      case "critical":
        return "bg-[#ff4d4d21] text-[#ff4d4d]";
      default:
        return "bg-[#1ada6421] text-[#1ada64]";
    }
  };

  return (
    <Card className="h-full flex flex-col items-start justify-between px-4 md:px-8 py-6 md:py-[39px] bg-[#274666] rounded-[30px] overflow-hidden shadow-[inset_0px_0px_4px_#ffffff40] border-0">
      <CardContent className="flex flex-col gap-6 md:gap-[37px] w-full p-0">
        <header className="flex flex-col items-start gap-6 md:gap-[37px] w-full">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-[49px] w-full">
            <h1 className="-mt-px font-['Montserrat-Bold',Helvetica] font-bold text-white text-lg md:text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
              {equipment.name}
            </h1>

            <Badge
              className={`inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-[20px] hover:opacity-90 border-0 h-auto ${getBadgeClass()}`}
            >
              <span className="-mt-px font-['Roboto-Bold',Helvetica] font-bold text-sm md:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                {equipment.status.toUpperCase()}
              </span>
            </Badge>
          </div>

          <div className="inline-flex items-center gap-[5px]">
            <MapPin className="w-5 h-5 text-white" />
            <p className="-mt-px opacity-80 font-['Roboto-Medium',Helvetica] font-medium text-white text-lg md:text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
              {equipment.location}
            </p>
          </div>
        </header>

        <section className="flex flex-col w-full items-start gap-12 md:gap-[79px]">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <p className="-mt-px opacity-80 font-['Roboto-Medium',Helvetica] font-medium text-white text-lg md:text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                {metric.label}
              </p>
              <p
                className={`-mt-px font-['Roboto-Medium',Helvetica] font-medium text-lg md:text-[25px] tracking-[0] leading-[normal] whitespace-nowrap ${metric.valueColor}`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap items-end gap-8 md:gap-[54px]">
          {sensorData.map((sensor, index) => (
            <div key={index} className="flex flex-col items-start gap-6 md:gap-9">
              <div className="flex items-center gap-2.5">
                <sensor.icon className="w-6 h-6 text-[#ffffff99]" />
                <p className="mt-[-0.50px] font-['Roboto-Medium',Helvetica] font-medium text-[#ffffff99] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {sensor.label}
                </p>
              </div>
              <p className="font-['Montserrat-Bold',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-[normal]">
                {sensor.value}
              </p>
            </div>
          ))}
        </section>

        <footer className="flex flex-col w-full items-center gap-6 md:gap-[41px] bg-transparent">
          <Separator className="w-full mt-[-0.50px] bg-white opacity-20" />
          <div className="flex items-start gap-[13px] w-full">
            <TriangleAlert className="w-[17px] h-[17px] text-white mt-0.5 flex-shrink-0" />
            <p className="flex-1 -mt-px font-['Montserrat-Bold',Helvetica] text-lg md:text-xl tracking-[0] leading-[normal]">
              <span className="font-bold text-white">AI Prediction: </span>
              <span className="font-['Montserrat-SemiBold',Helvetica] font-semibold text-[#ffffffb2]">
                {equipment.aiPrediction}
              </span>
            </p>
          </div>
        </footer>
      </CardContent>
    </Card>
  );
}
