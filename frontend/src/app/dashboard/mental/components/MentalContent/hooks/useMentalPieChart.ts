import { generateRGBGradient } from "@/lib/charts";
import { MentalRecordData } from "@/types/Mental";
import { capitalizeFirstLetter } from "@/lib/utils";

export const useMentalPieChart = () => {
  const getPieChartData = (data: MentalRecordData[]) => {
    const moodCounts = data.reduce<Record<string, number>>((acc, { mood }) => {
      acc[mood] = (acc[mood] || 0) + 1;
      return acc;
    }, {});

    const gradientColors = generateRGBGradient(
      "rgb(110 125 251)",
      "rgb(126 210 188)",
      Object.keys(moodCounts).length
    );

    return Object.entries(moodCounts).map(([name, value], index) => ({
      name: capitalizeFirstLetter(name),
      value,
      fill: gradientColors[index],
    }));
  };

  const chartConfig = {
    mood: {
      label: "Mood",
      color: "var(--chart-1)",
    },
  };

  return {
    getPieChartData,
    chartConfig,
  };
};
