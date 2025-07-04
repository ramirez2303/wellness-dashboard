import { HabitsRecordData } from "@/app/dashboard/physical/types/Physical";
import { getDaysBetweenDates, getLastSevenDays } from "@/app/utils";
import { BarChartData, LinearChartData } from "@/types/Charts";
import { DateRange } from "react-day-picker";

export const mapEnergyLevelsToBarChartData = (
    data: HabitsRecordData[],
    range?: DateRange
): BarChartData[] => {
    const energyLevelMap: Record<string, number> = {
        LOW: 3,
        MEDIUM: 5,
        HIGH: 10,
    };

    const daysSelected =
        range?.from && range?.to
            ? getDaysBetweenDates(range)
            : getLastSevenDays();

    const filteredData: Record<string, HabitsRecordData | null> =
        getLastSevenDays().reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysSelected[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysSelected.map((day) => ({
        name: day,
        firstValue: filteredData[day]
            ? energyLevelMap[filteredData[day]!.energyLevel]
            : 0,
    }));
};

export const mapSleepHoursToBarChartData = (
    data: HabitsRecordData[],
    range?: DateRange
): LinearChartData[] => {
    const daysSelected =
        range?.from && range?.to
            ? getDaysBetweenDates(range)
            : getLastSevenDays();

    const filteredData: Record<string, HabitsRecordData | null> =
        daysSelected.reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysSelected[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysSelected.map((day) => ({
        name: day,
        value: filteredData[day] ? filteredData[day]!.sleepHours : 0,
    }));
};

export const mapWaterLitersToBarChartData = (
    data: HabitsRecordData[],
    range?: DateRange
): LinearChartData[] => {
    const daysSelected =
        range?.from && range?.to
            ? getDaysBetweenDates(range)
            : getLastSevenDays();

    const filteredData: Record<string, HabitsRecordData | null> =
        daysSelected.reduce((acc, day) => ({ ...acc, [day]: null }), {});

    data.forEach((record) => {
        const dayName = daysSelected[new Date(record.date).getDay()];
        if (
            !filteredData[dayName] ||
            new Date(record.createdAt) >
                new Date(filteredData[dayName]!.createdAt)
        ) {
            filteredData[dayName] = record;
        }
    });

    return daysSelected.map((day) => ({
        name: day,
        value: filteredData[day] ? filteredData[day]!.waterLiters : 0,
    }));
};
