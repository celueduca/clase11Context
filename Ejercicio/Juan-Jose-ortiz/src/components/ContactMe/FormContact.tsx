import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const FormContact = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="Main-Container">
      <form className="Form-RestorePass">
        <div className="Form-RestorePass--title">
          <h5>contacto</h5>
        </div>
        <div className="Form-Group">
          <label htmlFor="">Informacion personal</label>
          <input
            className="Form-Group--input"
            type="text"
            disabled={true}
            value={user?.name}
          />
        </div>
        
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            disabled={true}
            type="text"
            value={user?.last_name}
          />
        </div>
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="text"
            disabled={true}
            value={user?.nickname}
          />
        </div>
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="text"
            disabled={true}
            value={user?.age}
          />
        </div>
        
        <div className="Form-Group">
            <label htmlFor=""> Informacion contacto</label>
          <input
            className="Form-Group--input"
            type="text"
            disabled={true}
            value={user?.email}
          />
        </div>
        
        
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="text"
            disabled={true}
            value={user?.phone}
          />
        </div>
        <div className="Form-Group">
          <textarea
            className="Form-Group--input"

            placeholder="Observaciones"
          />
        </div>
      </form>
    </div>
  );
};

export default FormContact;
