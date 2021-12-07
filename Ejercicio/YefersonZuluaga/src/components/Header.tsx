import React from "react";
import NavIcons from "./NavIcons";

const Header = () => {

    return (


        <div className="header" >
            <div className="navTab">

                <div className="imgInst">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="observar" className="imgInsta" />
                </div>
                <div className="centrarBusqueda">
                    <input className="busqueda" type="text" placeholder="buscar" />

                </div>
                <div className="centerIcons">
                    <NavIcons />
                </div>

            </div>


        </div>
    );
}
export default Header;