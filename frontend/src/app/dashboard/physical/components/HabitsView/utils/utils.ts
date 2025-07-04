import { HabitsRecordData } from "@/app/dashboard/physical/types/Physical";
import { BarChartData, LinearChartData } from "@/types/Charts";
import { DateRange } from "react-day-picker";

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const getLastSevenDays = (): string[] => {
    const today = new Date();
    const lastSevenDays: string[] = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        lastSevenDays.push(daysOfWeek[date.getDay()]);
    }

    return lastSevenDays;
};

export const getDaysBetweenDates = (range?: DateRange): string[] => {
    if (!range?.from) {
        throw new Error("The 'from' date is required.");
    }

    const fromDate = new Date(range?.from);
    const toDate = range?.to ? new Date(range?.to) : new Date();

    if (fromDate > toDate) {
        throw new Error("'from' date cannot be later than 'to' date.");
    }

    const daysBetween: string[] = [];
    const currentDate = new Date(fromDate);

    while (currentDate <= toDate) {
        daysBetween.push(daysOfWeek[currentDate.getDay()]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysBetween;
};

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
