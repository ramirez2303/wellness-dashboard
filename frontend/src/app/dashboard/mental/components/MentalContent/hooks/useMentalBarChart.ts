import { MentalRecordData } from "@/types/Mental";
import { parseISO, format } from "date-fns";

const positiveMoods = [
    "HAPPY",
    "EXCITED",
    "ENERGETIC",
    "PROUD",
    "MOTIVATED",
    "LOVED",
    "GRATEFUL",
    "CALM",
    "HOPEFUL",
    "CONFIDENT",
    "NEUTRAL",
] as const;

const negativeMoods = [
    "TIRED",
    "BORED",
    "DISTRACTED",
    "INDIFFERENT",
    "REFLECTIVE",
    "SAD",
    "ANGRY",
    "ANXIOUS",
    "WORRIED",
    "FRUSTRATED",
    "OVERWHELMED",
    "LONELY",
    "EMBARRASSED",
    "STRESSED",
    "GUILTY",
    "HOPELESS",
] as const;

export const useMentalBarChart = () => {
    const getBarChartData = (data: MentalRecordData[]) => {
        const groupedByDate: Record<
            string,
            { positives: number; negatives: number }
        > = {};
        data.forEach((entry) => {
            const date = format(parseISO(entry.createdAt), "dd MMMM");
            const mood = entry.mood;

            if (!groupedByDate[date]) {
                groupedByDate[date] = { positives: 0, negatives: 0 };
            }

            if (
                positiveMoods.includes(mood as (typeof positiveMoods)[number])
            ) {
                groupedByDate[date].positives++;
            } else if (
                negativeMoods.includes(mood as (typeof negativeMoods)[number])
            ) {
                groupedByDate[date].negatives++;
            }
        });

        return Object.entries(groupedByDate)
            .map(([date, counts]) => ({
                name: date,
                firstValue: counts.positives,
                secondValue: counts.negatives,
            }))
            .reverse();
    };

    const chartConfig = {
        firstValue: {
            label: "Positives",
            color: "var(--color-custom-primary)",
        },
        secondValue: {
            label: "Negatives",
            color: "var(--color-custom-accent)",
        },
    };

    return {
        getBarChartData,
        chartConfig,
    };
};
