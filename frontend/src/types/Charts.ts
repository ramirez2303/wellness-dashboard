export type RGB = [number, number, number];

export type DataPoint = Record<string, string | number>;

export type BarChartData = {
    name: string;
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
