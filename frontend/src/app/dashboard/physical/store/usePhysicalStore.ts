import { create } from "zustand";
import { PhysicalState } from "./types";

const usePhysicalStore = create<PhysicalState>((set) => ({
    refetchData: false,
    toggleRefetchData: () =>
        set((state) => ({ refetchData: !state.refetchData })),
    selectedDate: undefined,
    setSelectedDate: (date) =>
        set(() => ({
            selectedDate: date,
        })),
}));

export default usePhysicalStore;
