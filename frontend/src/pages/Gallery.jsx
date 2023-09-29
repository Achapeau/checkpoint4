import React, { useEffect } from "react";
import expressApi from "../services/expressApi";
import Item from "../components/Item";
import { useCurrentBasketContext } from "../context/CurrentBasketContext";

function Gallery() {
  const { itemData, setItemData } = useCurrentBasketContext();

  useEffect(() => {
    expressApi
      .get(`${import.meta.env.VITE_BACKEND_URL}/items`)
      .then((res) => {
        setItemData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (itemData.length === 0) {
    return (
      <div className="text-primary relative ">
        <p className="font-french text-3xl text-pink-400 text-opacity-75 md:text-primary text-center">
          Désolé, vous devez vous connecter pour accéder aux ventes. 🙇🏻{" "}
        </p>
        <p className="font-japanese text-3xl text-pink-400 text-opacity-75 md:text-secondary font-bold text-center">
          申し訳ございませんが、販売にアクセスするにはログインが必要です。🙇🏻
        </p>
      </div>
    );
  }

  return (
    <div className=" bg-fixed bg-mobile md:bg-desktop bg-cover bg-center h-full w-full flex flex-col items-center z-0">
      {itemData.length && (
        <div className="pt-32 text-primary">
          {itemData.length && (
            <div className="lg:mb-0 mb-[11vh] flex flex-wrap justify-center gap-6 mt-3 opacity-90">
              {itemData.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
