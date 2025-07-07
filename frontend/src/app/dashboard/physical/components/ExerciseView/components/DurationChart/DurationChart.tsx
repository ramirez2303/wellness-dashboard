import { ExercisesChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import BarChart from "@/components/charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import React from "react";

type DurationChartProps = {
    durationData?: ExercisesChartFormatedData["duration"];
};

const DurationChart = ({ durationData }: DurationChartProps) => {
    const chartConfig = {
        firstValue: {
            label: "Run",
            color: "rgb(110, 125, 251)", // primary
        },
        secondValue: {
            label: "Bike",
            color: "rgb(126, 210, 188)", // accent
        },
        thirdValue: {
            label: "Gym",
            color: "rgb(173, 182, 255)", // soft primary
        },
        fourthValue: {
            label: "Swim",
            color: "rgb(186, 235, 221)", // soft accent
        },
        fifthValue: {
            label: "Yoga",
            color: "rgb(75, 88, 220)", // deep primary
        },
        sixthValue: {
            label: "Walk",
            color: "rgb(145, 160, 235)", // blend tone
        },
    } as ChartConfig;

    return (
        <div className="h-fit col-span-3">
            <BarChart
                title="Duration of Exercises"
                description="Track the duration of your exercises over the last 7 days in minutes."
                chartData={durationData || []}
                chartConfig={chartConfig}
            />
        </div>
    );
};

export default DurationChart;
