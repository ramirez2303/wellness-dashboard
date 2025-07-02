import { HabitsChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import LinearChart from "@/components/charts/LinearChart";
import { ChartConfig } from "@/components/ui/chart";
import React from "react";

type WaterChartProps = {
    waterLitersData?: HabitsChartFormatedData["waterLiters"];
};

const WaterChart = ({ waterLitersData }: WaterChartProps) => {
    const chartConfig = {
        value: {
            label: "Monthly Water Intake (Liters)",
            color: "var(--color-custom-accent)",
        },
    } satisfies ChartConfig;

    return (
        <>
            <LinearChart
                title="Water Liters"
                description="Track your daily water intake in liters."
                chartData={waterLitersData || []}
                chartConfig={chartConfig}
            />
        </>
    );
};

export default WaterChart;
