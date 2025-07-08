import { create } from "zustand";
import { PhysicalState } from "./types";

const usePhysicalStore = create<PhysicalState>((set) => ({
    refetchData: null,
    toggleRefetchData: (refetchData) =>
        set(() => ({
            refetchData: refetchData || null,
        })),

    selectedDate: undefined,
    setSelectedDate: (date) =>
        set(() => ({
            selectedDate: date,
        })),

    tabSelected: "exercises",
    setTabSelected: (tab) =>
        set(() => ({
            tabSelected: tab,
        })),

    isFormOpen: false,
    toggleFormOpen: () => set((state) => ({ isFormOpen: !state.isFormOpen })),
}));

export default usePhysicalStore;
