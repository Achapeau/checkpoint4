import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CurrentBasketContext = createContext();

export const useCurrentBasketContext = () => useContext(CurrentBasketContext);

export function CurrentBasketContextProvider({ children }) {
  const [itemData, setItemData] = useState({});
  const [basketData, setBasketData] = useState({});
  const contextValue = useMemo(
    () => ({
      itemData,
      setItemData,
      basketData,
      setBasketData,
    }),
    [itemData, basketData]
  );
  return (
    <CurrentBasketContext.Provider value={contextValue}>
      {children}
    </CurrentBasketContext.Provider>
  );
}

CurrentBasketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
