import React from "react";
import { CSSTransition } from "react-transition-group";
import handshake from "../images/achievement-3739554_1280.jpg";

const contractList = [
  "Sesje nakierowane są na realizację celów terapii, które ustalamy po początkowych spotkaniach diagnostycznych",
  "Sesje odbywają się raz w tygodniu i trwają około 50 min.",
  "Spóźnienie na sesje skutkuje skróceniem danej sesji o czas spóźnienia",
  "W wypadku braku możliwości pojawienia się na sesji pacjent zobowiązuje się do odwołania wizyty za pośrednictwem maila lub telefonu (SMS/telefon, w weekendy wyłącznie SMS lub mail)",
  "Sesja odwołana później niż na 24 godziny przed zaplanowanym terminem jest pełnopłatna",
  "Wszystkie kwestie dotyczące terapii omawiane są w gabinecie podczas sesji, pozostałe formy kontaktu (telefon, mail) służą tylko do umawiania lub odwoływania wizyt",
  "Pacjent zobowiązuje się do aktywnej pracy podczas psychoterapii oraz podejmowania wysiłku wykonywania zalecanych zadań domowych",
  "Pacjent zobowiązuje się do przychodzenia na sesje nie będąc pod wpływem środków zmieniających świadomość",
  "Pacjent zobowiązuje się do niepodejmowania prób samobójczych podczas okresu trwania terapii",
  "Psychoterapeuta zobowiązuje się do zachowania zasady poufności - informacje odnośnie leczenia pacjenta udzielane są osobom wskazanym przez pacjenta, wyłącznie za jego zgodą",
  "W wyjątkowych sytuacjach zasada poufności nie obowiązuje – kiedy pacjent sygnalizuje zamiar popełnienia czynu zabronionego lub gdy istnieje realne zagrożenie życia pacjenta",
  "Psychoterapeuta objęty jest superwizją pod kierunkiem doświadczonego psychoterapeuty - superwizora; superwizja odbywa się anonimowo, bez ujawniania danych osobowych pacjenta",
  "Nieprzestrzeganie zasad kontraktu terapeutycznego może skutkować przerwaniem terapii"
];

const Popup = props => {
  const contractListView = contractList.map(contractPoint => (
    <li
      className="offer__contract--point"
      key={contractList.indexOf(contractPoint)}
    >
      {contractPoint}
    </li>
  ));
  return (
    <CSSTransition
      in={props.showContract}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div className="offer__contract-popup">
        <div className="offer__contract-popup--content">
          <img
            src={handshake}
            alt="Uścisk dłoni"
            className="offer__contract--handshake"
          />
          <div className="offer__contract--wrapper">
            <button
              className="offer__contract-toggler btn"
              onClick={props.click}
            >
              Zamknij kontrakt
            </button>
            <div className="offer__contract--list">{contractListView}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Popup;
