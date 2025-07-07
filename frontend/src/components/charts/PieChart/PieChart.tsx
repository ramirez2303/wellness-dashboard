"use client";

import { Pie, PieChart as PieChartComponent } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChartData } from "@/types/Charts";

export const description = "A pie chart with a label";

type PieChartProps = {
    title?: string;
    description?: string;
    chartData: PieChartData[];
    chartConfig: ChartConfig;
};

const PieChart = ({
    title,
    description,
    chartData,
    chartConfig,
}: PieChartProps) => {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px] text-sm"
                >
                    <PieChartComponent>
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie data={chartData} dataKey="value" />
                        <ChartLegend className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center *:items-center" />
                    </PieChartComponent>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default PieChart;
