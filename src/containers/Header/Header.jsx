import React from 'react';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";

import './Header.scss';
import { useAuthContext } from "../../context/AuthContext";


const Header = () => {
  const {
    logOut
  } = useAuthContext();

  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <NavLink to={ROUTES.home}>
            <img src="/media/images/logo.svg" alt=""/>
          </NavLink>

          <button className="header__logout" onClick={logOut}>
            <img src="/media/images/logout-icon.svg" alt=""/>

            <span>Выйти</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;