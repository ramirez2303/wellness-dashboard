import PieChart from "@/components/charts/PieChart";
import { MentalRecordData } from "@/types/Mental";
import { useMentalPieChart } from "../../hooks/useMentalPieChart";

type MentalPieChartProps = {
    mentalRecords?: MentalRecordData[];
};

const MentalPieChart = ({ mentalRecords }: MentalPieChartProps) => {
    const { getPieChartData, chartConfig } = useMentalPieChart();
    return (
        <div>
            <PieChart
                title="Mental Health Mood Distribution"
                description="January - June 2024"
                chartData={mentalRecords ? getPieChartData(mentalRecords) : []}
                chartConfig={chartConfig}
            />
        </div>
    );
};

export default MentalPieChart;
