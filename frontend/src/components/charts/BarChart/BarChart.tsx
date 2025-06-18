import React from "react";

import {
    Bar,
    BarChart as BarChartComponent,
    CartesianGrid,
    XAxis,
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

type BarChartProps = {
    title?: string;
    description?: string;
    chartData: {
        name: string;
        firstValue: number;
        secondValue: number;
    }[];
    chartConfig: ChartConfig;
};

const BarChart = ({
    title,
    description,
    chartData,
    chartConfig,
}: BarChartProps) => {
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
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="secondValue"
                            stackId="a"
                            fill="var(--color-custom-accent)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChartComponent>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BarChart;
