export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister extends UserLogin {
    firstname: string;
    lastname: string;
}
