import { DataPoint, RGB } from "@/types/Charts";

export const parseRGBString = (rgbStr: string): RGB => {
    const match = rgbStr.match(/\d+/g);
    if (!match || match.length !== 3) throw new Error("Formato RGB inválido");
    return match.map(Number) as RGB;
};

export const generateRGBGradient = (
    startColor: string,
    endColor: string,
    steps: number
): string[] => {
    const start = parseRGBString(startColor);
    const end = parseRGBString(endColor);

    const stepFactor = 1 / (steps - 1);
    const result: string[] = [];

    for (let i = 0; i < steps; i++) {
        const interpolated: RGB = [
            Math.round(start[0] + (end[0] - start[0]) * stepFactor * i),
            Math.round(start[1] + (end[1] - start[1]) * stepFactor * i),
            Math.round(start[2] + (end[2] - start[2]) * stepFactor * i),
        ];
        result.push(`rgb(${interpolated.join(" ")})`);
    }

    return result;
};

export function getNonZeroKeys(data: DataPoint[]): string[] {
    const nonZeroKeys = new Set<string>();

    data.forEach((entry) => {
        Object.entries(entry).forEach(([key, value]) => {
            // Ignora la key "name" y agrega solo si el valor es numérico y distinto de 0
            if (key !== "name" && typeof value === "number" && value !== 0) {
                nonZeroKeys.add(key);
            }
        });
    });

    return Array.from(nonZeroKeys).sort();
}
