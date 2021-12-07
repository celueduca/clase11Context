import React, { useContext, useState } from "react";
import data from '../data/Users.json';
import { useHistory } from "react-router-dom";
import AuthContext  from "../context/AuthContext";
import UsersContext from "../context/UserContext";
import { UserLogin } from "../interfaces/UserLogin";
const Login = () => {
  
  const {setUser} = useContext(AuthContext);
  const {users} = useContext(UsersContext);
  const history = useHistory();

  const [userLogin, setUserLogin] = React.useState<UserLogin>({
    email: "devniico@gmail.com",
    password: "123456",
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
      alert("usuario o contraseña incorrecto")
    }
  };
  return (
    <>
    
    <div className="main-container">

      <div className="main">
      <div className="login">
      <label aria-hidden="true">Login</label>

        <form className="Form" onSubmit={handleSubmit}>
        <input
              className="input"
              type="text"
              placeholder="Correo"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
               <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          <button>Login</button>
        </form>
        </div>
       
      </div>
     
    </div>

    </>
  );
};

export default Login;
