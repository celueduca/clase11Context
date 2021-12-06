import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  return (
    <UsersContext.Provider value={{ users: usersApp, setUsers: setUsersApp }}>
      <AuthContext.Provider value={{ user, setUser: setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/restore-password" component={RestorePassword} />
            <Route exact path="/contact-me" component={ContactMe} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </UsersContext.Provider>
  );
};

export default App;
