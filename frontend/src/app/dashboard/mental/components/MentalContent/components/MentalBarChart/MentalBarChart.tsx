import BarChart from "@/components/charts/BarChart";
import { useMentalBarChart } from "../../hooks/useMentalBarChart";
import { MentalRecordData } from "@/types/Mental";

type MentalBarChartProps = {
    mentalRecords?: MentalRecordData[];
};

const MentalBarChart = ({ mentalRecords }: MentalBarChartProps) => {
    const { getBarChartData, chartConfig } = useMentalBarChart();

    return (
        <div>
            <BarChart
                title="Mental Health Mood Trends"
                description="January - June 2024"
                chartData={getBarChartData(mentalRecords || [])}
                chartConfig={chartConfig}
                isStacked
            />
        </div>
    );
};

export default MentalBarChart;
