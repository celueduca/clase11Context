import React, { useContext, useState } from 'react';
import Navbar from "../components/Navbar";
import AuthContext from '../context/AuthContext'
import { useHistory } from "react-router-dom"
import users from '../json/users.json'
import "../styles/changepass.scss";

const ChangePass = () => {

    const history = useHistory();
    const { user, setUser }: any = useContext(AuthContext)
    const [userPass, setUserPass] = useState<any>({
        password: "",
        newPassword: ""
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        if (user?.password === userPass.password) {
            users.forEach((element, index: number) => {
                if (element.email === user.email) {
                    users[index].password = userPass.newPassword;
                    console.log("asdasd")
                    history.push('/');
                    // const updatedJSON = { "password": users[index].password }
                    // fs.writeFile('../json/users.json', JSON.stringify(updatedJSON), (err: any) => {
                    //     if (err) console.log('Error writing file:', err);
                    // })    
                }
            })
        }
    }


    return (
        <>
            <Navbar />
            <div className="changePass-container">
                <div className="card">
                    <form onSubmit={handleChange}>
                        <h2>Cambiar contraseña</h2>
                        <input type="text" value={user?.email} disabled />
                        <br />
                        <input type="password" placeholder="contraseña actual"
                            onChange={(e) => setUserPass({ ...userPass, ["password"]: e.target.value })} />
                            <br />
                        <input type="password" placeholder="nueva contraseña"
                            onChange={(e) => setUserPass({ ...userPass, ["newPassword"]: e.target.value })} />
                            <br />
                        <button>Cambiar contraseña</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePass;
