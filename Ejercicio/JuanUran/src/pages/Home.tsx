import Footer from "../components/home/Footer"
import Header from "../components/home/Header"
import React, { useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import AuthContext from '../context/AuthContext'
import {useContext} from 'react'

const Home = () => {

    const history = useHistory();

    const { user } = useContext(AuthContext);


    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div className="body">
            <h2>Bienvendio al home {user?.name}</h2>
                <div className="data-user">

                        <ul>
                            <li>Nombre: {user?.name}</li>
                            <li>Apellido: {user?.last_name}</li>
                            <li>Edad: {user?.age}</li>
                            <li>Correo: {user?.email}</li>
                            <li>Telefono: {user?.phone}</li>
                            <li>Nombre de usuario: {user?.nickname}</li>
                        </ul>
                </div>
               
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
