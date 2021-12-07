import { createContext } from "react"
import { User } from "../interfaces/User";



export type UserContext = {
    user: User | undefined;
    setUser:(user:User) => void;
}

const AuthContext  = createContext<UserContext>({
    user: undefined,
    setUser: () => {}
})

export default AuthContext;