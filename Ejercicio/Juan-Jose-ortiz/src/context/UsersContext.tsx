import { createContext } from "react"
import { IUser } from "../interfaces/IUser";



export type UsersContext = {
    users: IUser[] | [];
    setUsers:(users:IUser[]) => void;
}

const UsersContext  = createContext<UsersContext>({
    users: [],
    setUsers: () => {}
})

export default UsersContext;