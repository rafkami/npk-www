import React from "react";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import Popup from "../components/Popup";

class Offer extends React.Component {
  state = {
    offer: [],
    showContract: false
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

  showHideContract = () => {
    this.setState({
      showContract: !this.state.showContract
    });
  };

  render() {
    const serviceList = this.state.offer
      .sort((a, b) => (a.fields.order > b.fields.order ? 1 : -1))
      .map(({ fields }) => (
        <Link
          key={fields.shortName}
          to={{
            pathname: `/offer/${fields.shortName}`,
            state: fields
          }}
          className={`offer__single offer__single--${fields.shortName}`}
        >
          <h4 className="heading-medium offer__single--heading">
            {fields.name}
          </h4>
          <div className="offer__single--desc">{fields.shortDesc}</div>
        </Link>
      ));

    return (
      <div className="page offer">
        <div className="offer__intro">
          <h3 className="heading-big">Oferta</h3>
          <p className="offer__intro--paragraph">
            Zapoznaj się z moją ofertą usług i wybierz formę współpracy
            odpowiadającą Twoim potrzebom
          </p>
        </div>
        <div className="offer__container">{serviceList}</div>
        <div className="offer__contract-container">
          <div className="offer__contract-head">
            <div className="offer__contract-title">
              Kontrakt - zasady współpracy terapeutycznej
            </div>
            <button
              className="offer__contract-toggler btn"
              onClick={this.showHideContract}
            >
              Pokaż
            </button>
          </div>
          <Popup
            showContract={this.state.showContract}
            click={this.showHideContract}
          />
        </div>
      </div>
    );
  }
}

export default Offer;
