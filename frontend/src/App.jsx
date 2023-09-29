import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { CurrentBasketContextProvider } from "./context/CurrentBasketContext";

import "./Index.css";
import AppRoutes from "./routes/AppRoutes";
import NavBarTop from "./components/NavBarTop";
import NavBarBottom from "./components/NavBarBottom";
import ModalConnexion from "./components/ModalConnexion";
import ModalInscription from "./components/ModalInscription";
import { CurrentUserContextProvider } from "./context/CurrentUserContext";

function App() {
  const [modalConnexionIsVisible, setModalConnexionIsVisible] = useState(false);
  const [modalInscriptionIsVisible, setModalInscriptionIsVisible] =
    useState(false);

  const toggleModalConnexion = () => {
    setModalConnexionIsVisible(!modalConnexionIsVisible);
  };

  const toggleModalInscritpion = () => {
    setModalInscriptionIsVisible(!modalInscriptionIsVisible);
  };

  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <CurrentBasketContextProvider>
          <NavBarTop toggleModalConnexion={toggleModalConnexion} />
          <AppRoutes />
          <NavBarBottom toggleModalConnexion={toggleModalConnexion} />
          {modalConnexionIsVisible && (
            <ModalConnexion
              toggleModalConnexion={toggleModalConnexion}
              toggleModalInscritpion={toggleModalInscritpion}
            />
          )}
          {modalInscriptionIsVisible && (
            <ModalInscription
              toggleModalConnexion={toggleModalConnexion}
              toggleModalInscritpion={toggleModalInscritpion}
            />
          )}
        </CurrentBasketContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
