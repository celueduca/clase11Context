import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import perfil from '../img/perfil.jpg'
const Content = () => {
  const { user } = useContext(AuthContext);

    return (
        <div className="Sidebar">
        <div className="Sidebar-Profile">
          <img src={perfil} alt="" />
          <div className='Name'>
            <span>{user?.nickname}</span>
          </div>
          <Link to="/restore">
          <button>Restablecer</button>
          </Link>
        </div>
        <div className="Sidebar-Content">
            <p              >No tienes sugerencias nuevas</p>
        </div>
      </div>
    )
}

export default Content
