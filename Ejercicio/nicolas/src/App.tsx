import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from "./interfaces/User";

import AuthContext from "./context/AuthContext";
import "./style/app.scss";
import UsersContext from "./context/UserContext";

import users from "./data/Users.json"
import Login from "./pages/Login";
import Home from "./pages/Home";
import RestorePassword from "./pages/Restorepassword";
import Contact from "./pages/Contact";

const App = () => {
  const [user, setUser] = useState<User>();
  const [userLogin, setuserLogin] = useState<User[]>(users);
  return (
    <UsersContext.Provider value={{ users: userLogin, setUsers: setuserLogin }}>
      <AuthContext.Provider value={{ user, setUser: setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/restore" component={RestorePassword} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </UsersContext.Provider>
  );
};

export default App;
