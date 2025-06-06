export interface UserState {
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    setUser: (user: { id: string; name: string; email: string }) => void;
    clearUser: () => void;
}
