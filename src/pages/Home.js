import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page home">
      <div className="home__bcg">
        <div className="home__motto">
          <span className="home__motto--italic">
            Myślenia nie da się oddzielić od uczuć (...) Każda myśl wiąże się z
            jakimś uczuciem - albo je wspiera, albo mu się przeciwstawia, w
            zależności od struktury charakteru
          </span>
          <span className="home__motto--author"> - A. Lowen</span>
        </div>
        <div className="home__slogan">
          <Link to="/offer" className="home__single home__single--1">
            Psychoterapia
          </Link>
          <Link to="/offer" className="home__single home__single--2">
            Rozwój
          </Link>
          <Link to="/offer" className="home__single home__single--3">
            Edukacja
          </Link>
          <Link to="/offer" className="home__single home__single--4">
            Relaksacja
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
