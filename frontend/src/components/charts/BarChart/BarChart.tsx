import React from "react";

import {
    Bar,
    BarChart as BarChartComponent,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

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
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartData } from "@/types/Charts";

type BarChartProps = {
    title?: string;
    description?: string;
    chartData: BarChartData[];
    chartConfig: ChartConfig;
};

const BarChart = ({
    title,
    description,
    chartData,
    chartConfig,
}: BarChartProps) => {
    const hasSecondValue = chartData.some(
        (data) => data.secondValue !== undefined
    ); // Check if any data point has a secondValue to determine if the second bar should be rendered

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChartComponent accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <YAxis
                            dataKey="firstValue"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="firstValue"
                            stackId="a"
                            fill="var(--color-custom-primary)"
                            radius={
                                hasSecondValue ? [0, 0, 4, 4] : [4, 4, 4, 4]
                            }
                        />
                        {hasSecondValue && (
                            <Bar
                                dataKey="secondValue"
                                stackId="a"
                                fill="var(--color-custom-accent)"
                                radius={[4, 4, 0, 0]}
                            />
                        )}
                    </BarChartComponent>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BarChart;
