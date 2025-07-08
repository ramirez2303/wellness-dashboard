import { DateRange } from "react-day-picker";

export interface PhysicalState {
    refetchData: "exercises" | "habits" | null;
    toggleRefetchData: (refetchDataa: PhysicalState["refetchData"]) => void;

    selectedDate?: DateRange;
    setSelectedDate: (date?: DateRange) => void;

    tabSelected: "habits" | "exercises";
    setTabSelected: (tab: PhysicalState["tabSelected"]) => void;

    isFormOpen: boolean;
    toggleFormOpen: () => void;
}
