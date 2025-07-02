import { HabitsRecordData } from "@/app/dashboard/physical/types/Physical";
import { BarChartData, LinearChartData } from "@/types/Charts";

export const mapEnergyLevelsToBarChartData = (
    data: HabitsRecordData[]
): BarChartData[] => {
    const energyLevelMap: Record<string, number> = {
        LOW: 3,
        MEDIUM: 5,
        HIGH: 10,
    };

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const filteredData: Record<string, HabitsRecordData | null> =
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysOfWeek[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysOfWeek.map((day) => ({
        name: day,
        firstValue: filteredData[day]
            ? energyLevelMap[filteredData[day]!.energyLevel]
            : 0,
    }));
};

export const mapSleepHoursToBarChartData = (
    data: HabitsRecordData[]
): LinearChartData[] => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const filteredData: Record<string, HabitsRecordData | null> =
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysOfWeek[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysOfWeek.map((day) => ({
        name: day,
        value: filteredData[day] ? filteredData[day]!.sleepHours : 0,
    }));
};

export const mapWaterLitersToBarChartData = (
    data: HabitsRecordData[]
): LinearChartData[] => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const filteredData: Record<string, HabitsRecordData | null> =
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysOfWeek[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysOfWeek.map((day) => ({
        name: day,
        value: filteredData[day] ? filteredData[day]!.waterLiters : 0,
    }));
};
