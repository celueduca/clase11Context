import { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../context/AuthContext";
import UsersContext from "../context/UserContext";
import Layout from "../layout/index";
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
          alert("Contraseña actualizada,debe iniciar sesion nuevamente");
          history.push("/");
      } 
    }else{
      alert("verique las contraseñas")
    }
  };

  return (
    <Layout>
    <div className="main-container">

    <div className="main">
    <div className="login">
    <label aria-hidden="true">Restore</label>

      <form className="Form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Ingresa la contraseña actual"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPassword({ ...passwords, currentPassword: e.target.value })
            }
          />
          <input
            className="input"
            type="password"
            placeholder="Ingresa la contraseña nueva"
            value={passwords.newPassword}
            onChange={(e) =>
              setPassword({ ...passwords, newPassword: e.target.value })
            }
          />
          <input
            className="input"
            type="password"
            placeholder="Repita la contraseña nueva"
            value={passwords.repeatPassword}
            onChange={(e) =>
              setPassword({ ...passwords, repeatPassword: e.target.value })
            }
          />
        <button>Login</button>
      </form>
      </div>
     
    </div>
  </div>
  </Layout>
  );
};

export default FormRestore;