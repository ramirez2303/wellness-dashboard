import { HabitsChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import LinearChart from "@/components/charts/LinearChart";
import { ChartConfig } from "@/components/ui/chart";
import React from "react";

type SleepChartProps = {
    sleepHoursData?: HabitsChartFormatedData["sleepHours"];
};

const SleepChart = ({ sleepHoursData }: SleepChartProps) => {
    const chartConfig = {
        value: {
            label: "Weekly Sleep Hours",
            color: "var(--color-custom-primary)",
        },
    } satisfies ChartConfig;

    return (
        <>
            <LinearChart
                title="Sleep Hours"
                description="Track your daily sleep hours."
                chartData={sleepHoursData || []}
                chartConfig={chartConfig}
            />
        </>
    );
};

export default SleepChart;
