import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UsersContext from "../context/UsersContext";
import { IUserLogin } from "../interfaces/IUserLogin";

const Login = () => {

  const {setUser} = useContext(AuthContext);
  const {users} = useContext(UsersContext);
  const history = useHistory();

  const [userLogin, setUserLogin] = React.useState<IUserLogin>({
    email: "juanperez@gmail.es",
    password: "juanperez12345",
  });
  const [showError, setShowError] = React.useState<boolean>(false);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const userFind = users.find((userFilter) => {
      return (
        userFilter.email === userLogin.email &&
        userFilter.password === userLogin.password
      );
    });
    console.log(userFind);
    if (userFind !== undefined) {
      setUser(userFind);
      history.push("/home");
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };
  return (
    <div className="FormLogin">
      <div className="CardLogin">
        <form className="CardLogin-Form" onSubmit={handleSubmit}>
          <div className="CardLogin-Header--img">
            <img src="./assets/logo.png" alt="logo instagram" />
          </div>
          <div className="CardLogin-Group">
            <input
              className="CardLogin-Group--input"
              type="text"
              placeholder="Correo"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
          </div>
          <div className="CardLogin-Group">
            <input
              className="CardLogin-Group--input"
              type="password"
              placeholder="Contraseña"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          </div>
          <div className={showError ? "CardLogin--ErrorMessage" : "none"}>
            <p>
              <strong>ERROR: </strong> El usuario o la contraseña no coinciden.
            </p>
          </div>
          <div className="CardLogin-Group">
            <button className="CardLogin-Group--button"> Iniciar sesíon</button>
          </div>
          <div className="CardLogin-footer">
            <p>¿Has olvidado la contraseña?</p>
          </div>
        </form>
        <div className="CardRegister">
          <p>¿No tienes una cuenta?</p>
          <p className="CardRegister--link">Registrate</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
