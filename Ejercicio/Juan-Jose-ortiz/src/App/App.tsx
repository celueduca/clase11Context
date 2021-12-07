import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import Home from "../pages/Home";
import Login from "../pages/Login";

import AuthContext from "../context/AuthContext";
import "../style/app.scss";
import RestorePassword from "../pages/RestorePassword";
import UsersContext from "../context/UsersContext";

import users from "../api/fakeUsers";
import ContactMe from "../pages/ContactMe";

const App = () => {
  const [user, setUser] = useState<IUser>();
  const [usersApp, setUsersApp] = useState<IUser[]>(users);

  const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props: any) => (
      user
        ? <Component {...props} />
        : <Redirect to="/" />
    )} />
  )

  return (
    <UsersContext.Provider value={{ users: usersApp, setUsers: setUsersApp }}>
      <AuthContext.Provider value={{ user, setUser: setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/restore-password" component={RestorePassword} />
            <PrivateRoute exact path="/contact-me" component={ContactMe} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </UsersContext.Provider>
  );
};

export default App;
