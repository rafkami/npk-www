import React from "react";
import { Link } from "react-router-dom";
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
            <div className="single-offer__details--table">
              <div className="single-offer__details--suboffer">
                <div className="single-offer__details--column">
                  {service.detailsPsy}
                </div>
                <div className="single-offer__details--column">
                  {service.detailsSex}
                </div>
              </div>
            </div>
            <div className="single-offer__details--price">
              Cena za 1 sesję (50 min.): {service.price} zł
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
