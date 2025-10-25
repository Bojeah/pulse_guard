import { ArrowLeft } from "lucide-react";
import React from "react";
import ChartSection from "./ChartSection";
import EquipmentHealthSection from "./EquipmentHealthSection";
import Link from "next/link";

interface EquipmentHealthProps {
  params: Promise<{ id: string }>;
}

export default async function EquipmentHealthScreen({ params }: EquipmentHealthProps) {
  const { id } = await params;

  return (
    <div className="relative min-h-screen bg-[#051a2f] flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16 pt-20 pb-12">
      {/* Back button */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
        <Link href="/" aria-label="Go back">
          <ArrowLeft className="w-8 h-7 text-cyan-400 hover:text-cyan-300 transition-colors" />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-10 w-full max-w-7xl">
        <EquipmentHealthSection equipmentId={id} />
        <ChartSection equipmentId={id} />
      </div>
    </div>
  );
}
