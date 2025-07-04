import { HabitsChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import BarChart from "@/components/charts/BarChart";
import React from "react";

type EnergyChartProps = {
    energyLevelData?: HabitsChartFormatedData["energyLevels"];
};

const EnergyChart = ({ energyLevelData }: EnergyChartProps) => {
    const chartConfig = {
        firstValue: {
            label: "Daily Energy Levels",
        },
    };

    return (
        <>
            <BarChart
                title="Energy Levels"
                description="Track your daily energy levels."
                chartData={energyLevelData || []}
                chartConfig={chartConfig}
            />
        </>
    );
};

export default EnergyChart;
