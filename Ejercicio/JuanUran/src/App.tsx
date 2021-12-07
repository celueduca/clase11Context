import './App.css';
import './style/app.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import AuthContext, { User } from './context/AuthContext';
import Instagram from './pages/Instagram';
import Login from './pages/Login';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ChangePassword from './pages/ChangePassword';

function App() {

  const [user, setUser] = useState<User>();

  const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props: any) => (
      user
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  )

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/instagram" component={Instagram}/>
          <PrivateRoute exact path="/contactUs" component={ContactUs}/>
          <PrivateRoute exact path="/changePassword" component={ChangePassword}/>
          <PrivateRoute exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
