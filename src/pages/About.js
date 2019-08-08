import React from "react";
import myImage from "../images/npk_b&w_new.jpg";

const About = () => {
  return (
    <div className="page about">
      <div className="about__block">
        <div className="about__description">
          <h3 className="heading-big about__description--heading">
            Kim jestem?
          </h3>
        </div>
        <div className="about__description">
          <p className="about__description--paragraph">
            Zawodowo: psycholog, psychoterapeuta, seksuolog. Jestem absolwentką
            studiów psychologicznych oraz studiów podyplomowych z zakresu
            seksuologii klinicznej w Szkole Wyższej Psychologii Społecznej w
            Warszawie. Ukończyłam 4-letnie szkolenie z zakresu psychoterapii
            poznawczo – behawioralnej w Centrum CBT. Posiadam certyfikat
            Terapeuty Poznawczo-Behawioralnego PTTPB (certyfikat nr 519).
            Doświadczenie zawodowe zdobywałam na stażach i wolontariatach, m.in.
            w Poradni Zdrowia Psychicznego "Arka", Poradni Seksuologicznej i
            Patologii Współżycia, Poradni Psychologiczno-pedagogicznej oraz
            Ośrodku dla Uchodźców. Od 8 lat pracuję w Poradni Seksuologicznej i
            Patologii Współżycia Szpitala Nowowiejskiego w Warszawie oraz w
            praktyce prywatnej.
          </p>
        </div>
        <div className="about__description">
          <p className="about__description--paragraph">
            Prywatnie: miłośniczka przyrody, fotografii, podróżowania w rytmie
            slow, nauczycielka jogi. Cenię sobie oparty na szacunku i uważności
            bliski kontakt z naturą. Wierzę, że las działa na człowieka kojąco i
            może wspierać proces zdrowienia, co też potwierdzają badania
            naukowe.
          </p>
        </div>
        <div className="about__description">
          <p className="about__description--paragraph">
            Praca z ludźmi daje mi wiele radości. To wyjątkowe doświadczenie móc
            towarzyszyć człowiekowi w niełatwym dla niego procesie zmiany.
            Obserwacja tego jak się wzmacnia, zauważa swoje potrzeby, zaczyna
            żyć w zgodzie ze sobą i zyskuje większą radość z życia, jest
            najpiękniejszym elementem mojej pracy.
          </p>
        </div>
      </div>
      <div className="about__img-wrapper">
        <img
          src={myImage}
          alt="Natalia Przybyłek-Król"
          className="about__img"
        />
      </div>
    </div>
  );
};

export default About;
