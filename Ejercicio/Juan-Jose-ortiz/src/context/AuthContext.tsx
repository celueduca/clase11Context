import { createContext } from "react"
import { IUser } from "../interfaces/IUser";



export type UserContext = {
    user: IUser | undefined;
    setUser:(user:IUser) => void;
}

const AuthContext  = createContext<UserContext>({
    user: undefined,
    setUser: () => {}
})

export default AuthContext;