import React, { useState } from 'react';
import AuthContext, { User } from './context/AuthContext';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// PAGES
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

function App() {

  const [user, setUser] = useState<User>();
  // RUTAS PRIVADAS
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
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/"
              component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>

    </>
  );
}

export default App;
