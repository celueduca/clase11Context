import React, { useState, useContext } from "react";
import users from '../json/users.json';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


interface User {

    name: string,
    last_name: string,
    age: number,
    email: string,
    phone: string,
    nickname: string,
    password: string,
}

const Login = () => {

    const [userLocal, setUserLoca] = useState<any>({});
    const history = useHistory();
    const { setUser } = useContext(AuthContext);

    const submit = (e: any) => {
        e.preventDefault();
        console.log(userLocal.name);
        let centinela: boolean = false;

        for (let index = 0; index < users.length - 1; index++) {
            if (users[index].email === userLocal.email && users[index].password === userLocal.password) {
                setUser(users[index]);
                history.push("/home");
                centinela = true;
            }
        }
        if (centinela == false) {
            alert("usuario incorrecto")
        }
    };

    return (
        <div className="center">
            <div className="container_login">


                <div className="formAling">
                    <h3>CeluWeb</h3>
                    <form onSubmit={submit} className="formLogin">
                        <div className="centerForm">
                            <h4> ingrese su correo electronico : </h4>
                            <input
                                type="text"
                                className="form-control inputTam "
                                placeholder="ingrese su correo"
                                name="correo"
                                onChange={(e) => setUserLoca({ ...userLocal, ["email"]: e.target.value })}
                            ></input>
                        </div>
                        <div className="centerForm">
                            <h4> ingrese su contraseña : </h4>
                            <input
                                type="password"
                                className="form-control inputTam"
                                placeholder="ingrese su contraseña"
                                name="password"
                                onChange={(e) => setUserLoca({ ...userLocal, ["password"]: e.target.value })}
                            ></input>
                        </div>
                        <div className="buttonAling">
                            <button className="buttonLogin">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;