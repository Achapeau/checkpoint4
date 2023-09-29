import React, { useState, useEffect } from "react";
import { useCurrentBasketContext } from "../context/CurrentBasketContext";
import BasketCard from "../components/BasketCard";

function Basket() {
  const { basketData } = useCurrentBasketContext();
  const [basketDataArray, setBasketDataArray] = useState([]);

  useEffect(() => {
    if (basketData.length) setBasketDataArray(Object.entries(basketDataArray));
  }, [basketData]);

  if (basketData.length === 0) {
    return (
      <div>
        <p>Vous n'avez rien commandé</p>
      </div>
    );
  }
  return (
    <div className="text-primary relative bg-mobile md:bg-desktop bg-cover bg-center h-screen w-full flex flex-col items-center z-0">
      {basketData.length && (
        <div className="pt-32 text-primary">
          {basketData.length && (
            <div className="lg:mb-0 mb-[11vh] flex flex-wrap justify-center gap-6 mt-3 opacity-90">
              {basketData.map((basket) => (
                <BasketCard key={basket.id} basket={basket} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Basket;
