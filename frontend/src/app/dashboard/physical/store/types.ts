import { DateRange } from "react-day-picker";

export interface PhysicalState {
    refetchData: boolean;
    toggleRefetchData: () => void;
    selectedDate?: DateRange;
    setSelectedDate: (date?: DateRange) => void;
}
