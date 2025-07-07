import { ExercisesChartFormatedData } from "@/app/dashboard/physical/types/Physical";
import BarChart from "@/components/charts/BarChart";
import React from "react";

type CaloriesChartProps = {
    caloriesBurnedData?: ExercisesChartFormatedData["caloriesBurned"];
};

const CaloriesChart = ({ caloriesBurnedData }: CaloriesChartProps) => {
    const chartConfig = {
        firstValue: {
            label: "Calories Burned",
            color: "var(--color-custom-primary)",
        },
    };

    return (
        <div className="h-fit col-span-3">
            <BarChart
                title="Calories Burned"
                description="Track your daily calories burned during exercises."
                chartData={caloriesBurnedData || []}
                chartConfig={chartConfig}
            />
        </div>
    );
};

export default CaloriesChart;
