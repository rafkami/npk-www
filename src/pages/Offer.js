import React from "react";
import { Link } from "react-router-dom";
import * as contentful from "contentful";

class Offer extends React.Component {
  state = {
    offer: []
  };
  client = contentful.createClient({
    space: "v042bffefd5p",
    environment: "master",
    accessToken: "te8FhWalW-4BYzgI_HCJLWdWNJzTso2pQY1ykQHRuQs"
  });
  componentDidMount() {
    this.fetchOffer()
      .then(this.setOffer)
      .catch(console.error);
  }

  fetchOffer = () => this.client.getEntries({ content_type: "offer" });

  setOffer = response => {
    this.setState({
      offer: response.items
    });
  };

  render() {
    const serviceList = this.state.offer.map(({ fields }) => (
      <Link
        key={fields.shortName}
        to={{
          pathname: `/offer/${fields.shortName}`,
          state: fields
        }}
        className={`offer__single offer__single--${fields.shortName}`}
      >
        <h4 className="heading-medium">{fields.name}</h4>
        <div className="offer__single--desc">{fields.shortDesc}</div>
      </Link>
    ));
    return (
      <div className="page offer">
        <div className="offer__intro">
          <h3 className="heading-big">Oferta wsparcia psychoterapeutyczego</h3>
          <p className="offer__intro--paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            repudiandae rem accusamus? Sint molestias rem dolore placeat nobis
            sit dolores error illum. Temporibus enim amet porro deserunt ipsa
            ratione vel.
          </p>
        </div>
        <div className="offer__container">{serviceList}</div>
      </div>
    );
  }
}

export default Offer;
