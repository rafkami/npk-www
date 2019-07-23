import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="page">
      <div>Strona o podanym adresie nie istnieje.</div>
      <NavLink to="/" exact>
        Przejdź do strony głównej
      </NavLink>
    </div>
  );
};

export default ErrorPage;
