import React from "react";
import { NavLink } from "react-router-dom";

const list = [
  { name: "strona główna", path: "/", exact: true },
  { name: "o mnie", path: "/about", exact: false },
  { name: "oferta", path: "/offer", exact: false },
  { name: "kontakt", path: "/contact", exact: false }
];

const Menu = () => {
  const menu = list.map(item => (
    <li key={item.name} className="menu__item">
      <NavLink to={item.path} exact className="menu__item--link">
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="menu">
      <ul className="menu__list">{menu}</ul>
    </nav>
  );
};

export default Menu;
