import { DateRange } from "react-day-picker";
import { v4 as uuidv4 } from "uuid";

export const generateId = (): string => {
    return uuidv4();
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
