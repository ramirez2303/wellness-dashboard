import { create } from "zustand";
import { MentalState } from "./types";

const useMentalStore = create<MentalState>((set) => ({
    refetchData: false,
    toggleRefetchData: () =>
        set((state) => ({ refetchData: !state.refetchData })),
}));

export default useMentalStore;
