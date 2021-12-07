import Header from "../components/home/Header"
import AuthContext from '../context/AuthContext'
import { useHistory } from "react-router-dom"
import { useContext } from 'react'
import { useState } from 'react'
import data from '../json/users.json'

const ChangePassword = () => {
    const history = useHistory();
    const { user, setUser } = useContext(AuthContext);
    const [userPassword, setUserPassword] = useState<any>({
        password: "",
        newPassword: ""
    });

    const submit = (e: any) => {
        e.preventDefault();
        if (user?.password === userPassword.password) {
            data.forEach((element, index: number) => {
                if (element.email === user?.email) {

                    data[index].password = userPassword.newPassword;
                    console.log(data[index]);
                    history.push('/login');
                }
            })
        }

    }

    return (
        <>
            <Header />

            <div className="change-password-container">
                <div className="card">
                    <form onSubmit={submit}>
                        <h2>Changue password</h2>
                        <input type="text" value={user?.email} disabled />
                        <input type="password" placeholder="contraseña actual"
                            onChange={(e) => setUserPassword({ ...userPassword, ["password"]: e.target.value })} />
                        <input type="password" placeholder="nueva contraseña"
                            onChange={(e) => setUserPassword({ ...userPassword, ["newPassword"]: e.target.value })} />
                        <button>Change password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
