import { User } from "@/types/User";

export interface UserState {
    user: User | null;
    setUser: (user: UserState["user"]) => void;
    clearUser: () => void;
}
