import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import AuthContext from '../context/AuthContext';
import "../styles/support.scss";

const Support = () => {

    const { user }: any = useContext(AuthContext);

    return (
        <div>
            <Navbar />
            <div className="Support">
                <div className="container-form">
                    <form action="">
                        <h3>Datos del Usuarios</h3>
                        <ul>
                            <li>Nombre: {user.name}</li>
                            <li>Apellido: {user.last_name}</li>
                            <li>Edad: {user.age}</li>
                            <li>Correo: {user.email}</li>
                            <li>Celular: {user.phone}</li>
                            <li>Usuario: {user.nickname}</li>
                            <li>Observaciones: <textarea name="" id="" ></textarea></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Support
