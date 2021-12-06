import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './style/app.scss'
import PageInstagram from './components/Pageinstagram';
import PageLogin from './components/PageLogin';
import AuthContext,  {User} from './context/AuthContext';
import {BrowserRouter , Switch, Route , Redirect} from "react-router-dom";
import PageHome from './components/PageHome';
import PageContactUs from './components/PageContactUs';
import PageRestorePassword from './components/PageRestorePassword';



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

            <PrivateRoute path="/contactenos" component={PageContactUs}/>
            <Route path="/login" component={PageLogin} />
            <PrivateRoute path="/instagram" component={PageInstagram}/>
            <PrivateRoute path="/home" component={PageHome}/>
            <PrivateRoute path="/restablecerContraseña" component={PageRestorePassword}/>
            
            
            
          </Switch>
        </BrowserRouter>
    </AuthContext.Provider>
    </>
  );
}

export default App;
