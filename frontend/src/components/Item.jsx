import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCurrentBasketContext } from "../context/CurrentBasketContext";

function Item({ item }) {
  const { itemData, setItemData, basketData, setBasketData } =
    useCurrentBasketContext();
  const [data, setData] = useState({
    id: item.id,
    description: item.description,
    quantity: item.quantity,
    price: item.price,
    name: item.name,
    imgPath: item.img_path,
  });
  const [quantity, setQuantity] = useState(0);
  const [menu, setMenu] = useState(false);
  const [newData, setNewData] = useState({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity,
  });

  const handleAdd = () => {
    if (data.quantity > 0) {
      setQuantity(quantity + 1);
      setNewData({ ...newData, quantity: quantity + 1 });
      setBasketData({ ...basketData, [item.name]: newData });
      setData({ ...data, quantity: data.quantity - 1 });
      const adjustedData = itemData.map((object) => {
        if (object.id === data.id) {
          return { ...item, quantity: object.quantity - 1 };
        }
        return { ...item };
      });
      setItemData(adjustedData);
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setData({ ...data, quantity: data.quantity + 1 });
      const otherData = itemData.map((object) => {
        if (object.id === data.id) {
          return { ...item, quantity: object.quantity + 1 };
        }
        return { ...item };
      });
      setItemData(otherData);
    }
  };
  return (
    <>
      {!menu && (
        <div className="flex flex-col w-80 bg-primary border-pink-200 border-2 rounded-xl text-secondary font-bold">
          <div className="p-3">
            <div className="flex flex-col my-2 gap-1">
              <div>{data.name}</div>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  import.meta.env.VITE_BACKEND_PUBLIC_URL
                }/${data.imgPath}`}
                alt={data.name}
              />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className="btn border-none bg-blue text-primary text-base"
            >
              +
            </button>
          </div>
        </div>
      )}
      {menu && (
        <div className="flex justify-around w-80 md:w-[85%] lg:max-mx-[20vh] lg:mx-40 max-w-3xl rounded-xl bg-primary border-2 border-pink-200">
          <div className="flex flex-col p-3">
            <div className="flex flex-col md:flex-row place-content-around my-2 gap-1 mx-auto font-bold text-secondary">
              <div className="flex flex-col justify-center">
                {data.name}
                <img
                  className="md:w-[50%] h-auto "
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    import.meta.env.VITE_BACKEND_PUBLIC_URL
                  }/${data.imgPath}`}
                  alt={data.name}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>Description: {data.description}</div>
                <div>Quantité disponible: {data.quantity}</div>
                <div>Prix: {data.price}€</div>

                <button
                  type="button"
                  className="btn border-none bg-pink-200 text-primary text-base  rounded-full"
                  onClick={handleAdd}
                >
                  <svg
                    width="30px"
                    height="30px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#525B5A"
                  >
                    <path
                      stroke="#525B5A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6h19l-3 10H6L3 6Zm0 0-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0M17 19.5a1.5 1.5 0 0 1-3 0"
                    />
                  </svg>
                  <p className="hidden md:flex">ajouter au panier</p>
                </button>
                <p className="quantity">{quantity}</p>
                <button
                  type="button"
                  className="btn border-none bg-pink-200 text-primary text-base  rounded-full"
                  onClick={handleRemove}
                >
                  <svg
                    width="30px"
                    height="30px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#525B5A"
                  >
                    <path
                      stroke="#525B5A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6h19l-3 10H6L3 6Zm0 0-.75-2.5M9.992 11h4M11 19.5a1.5 1.5 0 0 1-3 0M17 19.5a1.5 1.5 0 0 1-3 0"
                    />
                  </svg>
                  <p className="hidden md:flex">enlever du panier</p>{" "}
                </button>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setMenu(!menu)}
                type="button"
                className="btn border-none bg-pink-200 text-primary text-base rounded-full"
              >
                <svg
                  width="30px"
                  height="30px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#F1F1F1"
                >
                  <path
                    d="m6 11 6-6 6 6M6 19l6-6 6 6"
                    stroke="#F1F1F1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img_path: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
