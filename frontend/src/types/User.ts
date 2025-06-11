export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister extends UserLogin {
    firstname: string;
    lastname: string;
}

export interface User {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    token?: string;
}