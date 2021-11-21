import React, { createContext, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../config/constants";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  const history = useHistory();

  const logIn = ({login, password}) => {
    if (login === 'admin' && password === '123456') {
      setIsAuth(true)

      history.push(ROUTES.home)
    } else {
      return false;
    }
  }

  const logOut = () => {
    setIsAuth(false)
    history.push(ROUTES.login)
  }

  return (
    <AuthContext.Provider value={{logIn, isAuth, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);