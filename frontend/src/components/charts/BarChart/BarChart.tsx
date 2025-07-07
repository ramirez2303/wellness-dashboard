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
import { getNonZeroKeys } from "@/lib/charts";

type BarChartProps = {
    title?: string;
    description?: string;
    chartData: BarChartData[];
    chartConfig: ChartConfig;
    barCategoryGap?: number;
    isStacked?: boolean;
};

const BarChart = ({
    title,
    description,
    chartData,
    chartConfig,
    barCategoryGap = undefined,
    isStacked = false,
}: BarChartProps) => {
    const barsToShow = getNonZeroKeys(chartData);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChartComponent
                        accessibilityLayer
                        data={chartData}
                        barCategoryGap={barCategoryGap}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        {barsToShow.map((item, ix) => (
                            <Bar
                                key={ix}
                                dataKey={item}
                                fill={`var(--color-${item})`}
                                stackId={isStacked ? "a" : undefined}
                            />
                        ))}
                    </BarChartComponent>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BarChart;
