import PieChart from "@/components/charts/PieChart";
import React, { Fragment } from "react";
import { useMentalPieChart } from "../hooks/useMentalPieChart";
import { MentalRecordData } from "@/types/Mental";

type MentalPieChartProps = {
    mentalRecords?: MentalRecordData[];
};

const MentalPieChart = ({ mentalRecords }: MentalPieChartProps) => {
    const { getPieChartData, chartConfig } = useMentalPieChart();
    return (
        <Fragment>
            <PieChart
                title="Mental Health Mood Distribution"
                description="January - June 2024"
                chartData={mentalRecords ? getPieChartData(mentalRecords) : []}
                chartConfig={chartConfig}
            />
        </Fragment>
    );
};

export default MentalPieChart;
