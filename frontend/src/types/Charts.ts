export type BarChartData = {
    name: string;
    firstValue: number;
    [key: string]: number | string;
};

export type LinearChartData = {
    name: string;
    value: number;
};

export type PieChartData = {
    name: string;
    value: number;
    fill: string;
};
