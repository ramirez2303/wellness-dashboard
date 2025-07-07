import { ExercisesChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import PieChart from "@/components/charts/PieChart";
import React from "react";

type TypeChartProps = {
    typeData?: ExercisesChartFormatedData["type"];
};

const TypeChart = ({ typeData }: TypeChartProps) => {
    const chartConfig = {
        mood: {
            label: "Exercise Type",
        },
    };
    return (
        <div className="h-fit col-span-2">
            <PieChart
                title="Exercise Type Distribution"
                description="January - June 2024"
                chartData={typeData ?? []}
                chartConfig={chartConfig}
            />
        </div>
    );
};

export default TypeChart;
