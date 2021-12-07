import React, {useContext} from "react";
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router'

const PageRestorePassword = () =>{

    const { user } = useContext(AuthContext);
    const history = useHistory();

    const redirect = (direccion: string) => {
        history.push(direccion);
    }

    return(

        <div>
        <div className="headerContacUs">
                <div className="centerIcons">
                    <h1>CeluWeb</h1>
                </div>
                <div className="centerIcons">
                    <button className="buttonHedaerHome" onClick={() => redirect("/contactenos")}>Contactenos</button>
                    <button className="buttonHedaerHome" onClick={() => redirect("/instagram")}>Instagram</button>
                    <button className="buttonHedaerHome" onClick={() => redirect("/home")}>Home</button>
                </div>
            </div>
        </div>

    )
}
export default PageRestorePassword;