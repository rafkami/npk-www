import React from "react";
import Menu from "../components/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../images/psychology_faces.jpg";

const Header = () => {
  return (
    <div className="header__wrapper">
      <img src={Logo} alt="Zarysy twarzy - rysunek" className="header__logo" />
      <NavLink to="/" exact className="header__title">
        <span className="header__title--name">Natalia Przybyłek-Król</span>
        <br />
        <span className="header__title--subtitle">psycholog</span>&bull;<span className="header__title--subtitle">psychoterapeuta</span>&bull;<span className="header__title--subtitle">seksuolog</span>
      </NavLink>
      <Menu />
    </div>
  );
};

export default Header;
