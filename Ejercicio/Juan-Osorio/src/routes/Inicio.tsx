import "../styles/inicio.scss";
import React, { useContext, useState } from 'react';
import Navbar from "../components/Navbar";
import { UserContext } from '../context/UserProvider';
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";


const Inicio = () => {

    const history = useHistory();

    const {user}:any = useContext(AuthContext);

    const redirect = () => {
        
        history.push("/");
        
    }

    return (
        <>
        <Navbar />
        <div className="Inicio">
            <h1>Inicio</h1>
            <h3>{user ? "conectado" : "desconectado"}</h3>
            {
                user ? (
                    <button className="btnAcceder"
                    onClick={()=> redirect()}>Desconectar</button>

                ) : (
                    <button className="btnAcceder"
                    onClick={()=> history.push("/")}>Acceder</button>
                )
            }
           
        </div>
        </>
    )
}

export default Inicio;
