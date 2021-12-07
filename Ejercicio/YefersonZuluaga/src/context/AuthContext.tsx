import { createContext } from "react";

export type User = {
    name: string,
    last_name: string,
    age: string,
    email: string,
    phone: string,
    nickname: string,
    password: string
}

export type UserContext = {
    user: User | undefined,
    setUser: (user: User) => void;
}

const AuthContext = createContext<UserContext>({
    user: undefined,
    setUser: () => { }
});
export default AuthContext;