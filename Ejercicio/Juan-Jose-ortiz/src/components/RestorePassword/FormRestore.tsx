import { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import UsersContext from "../../context/UsersContext";

interface RestorePassword {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}
const FormRestore = () => {
  const errorInitialState = {
    errorInvalidPassword: "",
    errorPassNotEquals: "",
  };
  const { user } = useContext(AuthContext);
  const { users, setUsers } = useContext(UsersContext);
  const [errorMessages, setErrorMessage] = useState(errorInitialState);
  const history = useHistory();
  const [passwords, setPassword] = useState<RestorePassword>({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user?.password === passwords.currentPassword) {
      if (passwords.newPassword === passwords.repeatPassword) {
        const usersTemp = users;
        const indexUser = users.findIndex(
          (item) => item.name === user.name && item.nickname === user.nickname
        );
        usersTemp[indexUser].password = passwords.newPassword;
        setUsers(usersTemp);
        setTimeout(() => {
          alert("Contraseña actualizada,debe iniciar sesion nuevamente");
          history.push("/");
        }, 2000);
      } else {
        setErrorMessage({
          ...errorMessages,
          errorPassNotEquals: "Las contraseñas nuevas deben coincidir.",
        });
      }
    } else {
      setErrorMessage({
        ...errorMessages,
        errorInvalidPassword: "La contraseña actual no coincide.",
      });
    }
  };

  return (
    <div className="Main-Container">
      <form className="Form-RestorePass" onSubmit={handleSubmit}>
        <div className="Form-RestorePass--title">
          <h4>Restablecer contraseña</h4>
        </div>
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="text"
            placeholder="Ingresa la contraseña actual"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPassword({ ...passwords, currentPassword: e.target.value })
            }
          />
        </div>
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="password"
            placeholder="Ingresa la contraseña nueva"
            value={passwords.newPassword}
            onChange={(e) =>
              setPassword({ ...passwords, newPassword: e.target.value })
            }
          />
        </div>
        <div className="Form-Group">
          <input
            className="Form-Group--input"
            type="password"
            placeholder="Repita la contraseña nueva"
            value={passwords.repeatPassword}
            onChange={(e) =>
              setPassword({ ...passwords, repeatPassword: e.target.value })
            }
          />
        </div>
        <div className="Form-Group">
          <button className="Form-Group--button"> Cambiar contraseña</button>
        </div>
      </form>
    </div>
  );
};

export default FormRestore;
