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

export const description = "A pie chart with a label";

// const chartData = [
//     { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//     { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//     { browser: "firefox", visitors: 187, fill: "black" },
//     { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//     { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     chrome: {
//         label: "Chrome",
//         color: "var(--chart-1)",
//     },
//     safari: {
//         label: "Safari",
//         color: "var(--chart-2)",
//     },
//     firefox: {
//         label: "Firefox",
//         color: "var(--chart-3)",
//     },
//     edge: {
//         label: "Edge",
//         color: "var(--chart-4)",
//     },
//     other: {
//         label: "Other",
//         color: "var(--chart-5)",
//     },
// } satisfies ChartConfig;

type PieChartProps = {
    className?: string;
    title?: string;
    description?: string;
    chartData: {
        name: string;
        value: number;
        fill: string;
    }[];
    chartConfig: ChartConfig;
};

const PieChart = ({
    title,
    description,
    chartData,
    chartConfig,
}: PieChartProps) => {
    return (
        <Card className="flex flex-col">
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
                        <ChartLegend className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center" />
                    </PieChartComponent>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default PieChart;
