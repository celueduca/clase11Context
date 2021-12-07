import { createContext } from "react"
import { User } from "../interfaces/User";



export type UsersContext = {
    users: User[] | [];
    setUsers:(users:User[]) => void;
}

const UsersContext  = createContext<UsersContext>({
    users: [],
    setUsers: () => {}
})

export default UsersContext;