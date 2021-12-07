import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../styles/login.scss";
import users from "../json/users.json";
import AuthContext from "../context/AuthContext";

const Login = () => {

    const history = useHistory();
    const [user, setUsers] = useState<any>({});
    const {setUser} = useContext(AuthContext);

    const handleLogin = (e: any) => {
        e.preventDefault();
       
        users.forEach(element => {
            if (element.email === user.email && element.password === user.password) {
                setUser(element);
                console.log(element);
                redirect();
            }
        });     
    };

    const redirect = () => {
        history.push("/Inicio");
    }
    return (
        <div className="Login">
            <div className="container_log">
                <form onSubmit={handleLogin}>
                    <h1>Instagram</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setUsers({...user, ["email"]: e.target.value})}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setUsers({...user, ["password"]: e.target.value })}
                    />
                    <button>Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default Login
