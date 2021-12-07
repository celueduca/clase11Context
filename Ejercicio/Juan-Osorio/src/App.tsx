import React, { useState } from 'react';
import './App.css';
import "./styles/App.scss";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthContext, { User } from './context/AuthContext';
import UserProvider from "./context/UserProvider";
import MainPage from "./routes/MainPage";
import Login from "./routes/Login";
import Inicio from "./routes/Inicio";
import Support from "./routes/Support";
import ChangePass from "./routes/ChangePass";

function App() {

  const [user, setUser] = useState<User>();
  // RUTAS PRIVADAS
  const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props: any) => (
      user
        ? <Component {...props} />
        : <Redirect to="/" />
    )} />
  )

  return (
    <>
      <UserProvider>
        <AuthContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Home" component={MainPage} />
              <Route exact path="/Inicio" component={Inicio} />
              <Route exact path="/Support" component={Support} />
              <Route exact path="/ChangePass" component={ChangePass} />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </UserProvider>
    </>
  );
}

export default App;
