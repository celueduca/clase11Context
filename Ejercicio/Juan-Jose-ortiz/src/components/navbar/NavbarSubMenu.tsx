import { Link, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {ReactComponent as PerfilSVG} from '../../assets/svg/perfil.svg'
import {ReactComponent as ResPassSVG} from '../../assets/svg/arrowRepeat.svg'
import {ReactComponent as LogoutSVG} from '../../assets/svg/logout.svg'

const NavbarLogout = () => {

  const {user} = useContext(AuthContext);
  const history = useHistory();
  const logout = () => {
    history.push("/");
  };
  return (
    <li className="NavbarLogout">
      <img className="Navbar-List--img" src={"/assets/perfil.jpg"} />
      <div className="MenuLogout">
        <ul>
          <li className="UserSession">
            
               <h3> Bienvenido :  {user?.name}</h3>
          </li>
          <Link  className="MenuLogout--Link" to="/contact-me">
            <PerfilSVG/>
            <p>Contactenos </p>
          </Link>
          <Link className="MenuLogout--Link" to="/restore-password">
            <ResPassSVG/>
            <p>Restablecer contraseña</p>
          </Link>
          <hr />
          <li className="MenuLogout--Link" onClick={logout}>
           <LogoutSVG/>
            <p>Cerrar sesión</p>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default NavbarLogout;
