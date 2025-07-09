import { DateRange } from "react-day-picker";

export interface MentalState {
    refetchData: boolean;
    toggleRefetchData: () => void;

    selectedDate?: DateRange;
    setSelectedDate: (date?: DateRange) => void;
}
