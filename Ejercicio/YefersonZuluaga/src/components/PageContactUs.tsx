import React, { useContext } from "react";
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router'
import UserData from "./UserData";

const PageContactUs = () => {

    const { user } = useContext(AuthContext);
    const history = useHistory();

    const redirect = (direccion: string) => {
        history.push(direccion);
    }

    return (
        <div>
            <div className="headerContacUs">
                <div className="centerIcons">
                    <h1>CeluWeb</h1>
                </div>
                <div className="centerIcons">
                    <button className="buttonHedaerHome" onClick={() => redirect("/home")}>Home</button>
                    <button className="buttonHedaerHome" onClick={() => redirect("/instagram")}>Instagram</button>
                    <button className="buttonHedaerHome" onClick={() => redirect("/restablecerContraseña")}>Contraseña</button>
                </div>
            </div>
            <div className="centerBienvenida">
                {user ? <h1>bienvenido {user.nickname}</h1> : " "}
            </div>
            <div className="centerBienvenida">
                <UserData />
            </div>
            <div className = "centerBienvenida">
            <h3>Sugerencias : </h3>
            </div>
            <div className="alingInput">
            <input className="inputSugerencias"></input>
            </div>
        </div>

    )
}
export default PageContactUs;