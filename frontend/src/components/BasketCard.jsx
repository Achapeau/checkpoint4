import React from "react";
import PropTypes from "prop-types";
// import { useCurrentBasketContext } from "../context/CurrentBasketContext";

function BasketCard({ basket }) {
  // const { basketData, setBasketData } = useCurrentBasketContext();

  return (
    <div className="flex flex-col bg-secondary w-80 h-80">
      <div className="flex">
        <div>name:</div>
        <div>{basket.name}</div>
      </div>
      <div className="flex">
        <div>price:</div>
        <div>{basket.price}</div>
      </div>
      <div className="flex">
        <div>quantity:</div>
        <div>{basket.quantity}</div>
      </div>
      <p>BasketCard</p>
    </div>
  );
}

export default BasketCard;

BasketCard.propTypes = {
  basket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
