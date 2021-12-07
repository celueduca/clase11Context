import React, { useContext } from 'react';
import "../styles/navbar.scss"
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import AuthContext from "../context/AuthContext";

const Navbar = () => {

    const { user }: any = useContext(AuthContext)

    return (
        <div className="Navbar">
            <div className="container-nav">
                <div className="container-user">
                    <Link to="/Inicio" className="linkUser">
                        {
                            user ? user.name + " " + user.last_name : "Sin conexión"
                        }
                    </Link>
                </div>


                <NavLink to="/Inicio" className="btnSupport">
                    Inicio
                </NavLink>

                <NavLink to="/Support" className="btnSupport">
                    Soporte
                </NavLink>
                <NavLink to="/ChangePass" className="btnRestore">
                    Restablecer Contraseña
                </NavLink>
                <NavLink to="/Home" className="btnHome">
                    Instagram
                </NavLink>


            </div>
        </div >
    )
}

export default Navbar
