import {useState} from 'react'
import { useHistory } from "react-router-dom"
import data from'../json/users.json'
import AuthContext from '../context/AuthContext'
import {useContext} from 'react'

interface Props {
    name: string,    
	last_name: string,
	age:number,
	email:string,
	phone:string,
	nickname:string,
	password:string
}

const FormLogin = () => {

    const history = useHistory();
    const [userForm, setUsersForm] =  useState<any>({});
    const { setUser } = useContext(AuthContext);

    const submit= (e: any)=>{
        e.preventDefault();
        data.forEach(element => {
            if (element.email=== userForm.email && element.password === userForm.password) {
                setUser(element)
                history.push('/');
            }
        });
    }

    return (
        <div className="container-login">
            <div className="login">
                <form onSubmit={submit}>
                    <h2>Login</h2>
                    <div className="input-text">
                        <h4>Email</h4>
                        <input type="email" placeholder="Correo electrónico" 
                        onChange={(e) => setUsersForm({ ...userForm, ["email"]: e.target.value })}/>
                    </div>
                    <div className="input-text">
                        <h4>Password</h4>
                        <input type="password" placeholder="Contraseña" 
                        onChange={(e) => setUsersForm({ ...userForm, ["password"]: e.target.value })}/>
                    </div>
                    <button>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
