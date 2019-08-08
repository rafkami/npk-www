import React from "react";
import ReactMapboxGl, {
  ScaleControl,
  ZoomControl,
  Marker
} from "react-mapbox-gl";
import icon1 from "../images/contact1.png";
import icon2 from "../images/contact2.png";
import icon3 from "../images/logo-mktpl-docplanner-color.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicmFma2FtaSIsImEiOiJjanV2M2ZtZnMwbjk3NDRwaTcxZndqaDV6In0.Ir9V-RDPPvvT5giFhI9COw"
});

const Contact = () => {
  return (
    <div className="page contact">
      <div className="contact__heading ">
        <h3 className="heading-big">Skontaktuj się ze mną</h3>
        <p className="contact__heading--sub">
          - wybierz dogodną dla siebie formę
        </p>
      </div>
      <div className="contact__it">
        <div className="contact__it--channel">
          <img src={icon1} alt="e-mail" className="contact__it--mail" />
          <a
            href="mailto:nprzybylek.krol@gmail.com"
            className="contact__it--link btn"
          >
            nprzybylek.krol@gmail.com
          </a>
        </div>
        <div className="contact__it--channel">
          <img src={icon2} alt="telefon" />
          <a href="tel:660241352" className="contact__it--link btn">
            660 241 352
          </a>
        </div>
        <div className="contact__it--channel">
          <img src={icon3} alt="Znany Lekarz" className="contact__it--zl" />
          <a
            href="https://www.znanylekarz.pl/natalia-przybylek-krol/seksuolog-psycholog-psychoterapeuta/warszawa"
            className="contact__it--link btn"
          >
            Mój profil - ZnanyLekarz.pl
          </a>
        </div>
      </div>
      <div className="contact__availability">
        Kontakt telefoniczny jest możliwy od poniedziałku do piątku w godzinach
        10.00-18.00 - w pozostałych godzinach i dniach zapraszam do kontaktu
        mailowego
      </div>
      <div className="contact__address">
        <div className="contact__address--wrapper">
          <div className="contact__address--cabinet">
            <h2 className="heading-medium">Gabinet nr 1</h2>
            <p className="contact__address--details">
              ul. Dolna 24 lok. 21
              <br />
              00-774 Warszawa
            </p>
          </div>
          <Map
            className="contact__map"
            center={[21.0259943, 52.2003472]}
            zoom={[16.5]}
            style={`mapbox://styles/mapbox/streets-v8`}
          >
            <ScaleControl />
            <ZoomControl />
            <Marker coordinates={[21.0259943, 52.2003472]}>
              <div className="contact__map--marker" />
            </Marker>
          </Map>
        </div>
        <div className="contact__address--wrapper">
          <div className="contact__address--cabinet">
            <h3 className="heading-medium">Gabinet nr 2</h3>
            <p className="contact__address--details">
              Centrum Psychoterapii
              <br />
              ul. Dolna 42
              <br />
              00-774 Warszawa
            </p>
          </div>
          <Map
            className="contact__map"
            center={[21.0297441, 52.2007513]}
            zoom={[16.5]}
            style={`mapbox://styles/mapbox/streets-v8`}
          >
            <ScaleControl />
            <ZoomControl />
            <Marker coordinates={[21.0297441, 52.2007513]}>
              <div className="contact__map--marker" />
            </Marker>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Contact;
