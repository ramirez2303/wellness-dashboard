type RGB = [number, number, number];

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
