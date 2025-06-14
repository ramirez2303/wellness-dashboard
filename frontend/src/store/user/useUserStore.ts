import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "./types";

const useUserStore = create(
    persist<UserState>(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),

            isOpenSidebar: false,
            setIsOpenSidebar: (isOpen) => set({ isOpenSidebar: isOpen }),
        }),
        {
            name: "user-store",
        }
    )
);

export default useUserStore;
