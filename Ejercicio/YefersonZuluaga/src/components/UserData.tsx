import React, {useContext } from "react";
import AuthContext from '../context/AuthContext';

const UserData = () => {
    const { user } = useContext(AuthContext);

    return(
        <div>
            <div className ="dataUser">
                {user ? <p>Nombre : {user.name}</p> : ""}
            </div>
            <div>
                {user ? <p>Apellido : {user.last_name}</p> : ""}
            </div>
            <div>
                {user ? <p>Edad : {user.age}</p> : ""}
            </div>
            <div>
                {user ? <p>Email : {user.email}</p> : ""}
            </div>
            <div>
                {user ? <p>Celular : {user.phone}</p> : ""}
            </div>
            </div>
    )
}
export default UserData;