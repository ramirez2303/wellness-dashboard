export interface AuthUser {
    id: string;
    email: string;
    passwordHash: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
}
