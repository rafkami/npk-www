import React from "react";
import { Link } from "react-router-dom";
import * as Markdown from "react-markdown";
// import Service from "../components/Service";

const SingleOffer = props => {
  const service = props.location.state;
  return (
    <>
      <div className="page single-offer">
        <div
          className={`single-offer__container single-offer__container--${
            service.shortName
          }`}
        >
          <h3 className="single-offer__heading heading-big">{service.name}</h3>
          <div className="offer__single--single-desc">{service.shortDesc}</div>
          <div className="single-offer__details">
            <Markdown
              source={service.detailsPsy}
              className="single-offer__details--desc"
            />
            <Markdown
              source={service.detailsPsy2}
              className="single-offer__details--desc2"
            />
            <div className="single-offer__details--price">
              {service.shortName === "warsztaty_rozwojowe" ||
              service.shortName === "edukacja_seksualna"
                ? `Cena ustalana indywidualnie`
                : `Cena za 1 spotkanie / sesję (50 min.): ${service.price} zł`}
            </div>
          </div>
        </div>
        <Link className="single-offer__return btn" to="/offer">
          Powrót do pełnej oferty
        </Link>
      </div>
    </>
  );
};

export default SingleOffer;
