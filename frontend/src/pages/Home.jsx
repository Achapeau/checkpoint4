import React from "react";

function Home() {
  return (
    <div className="bg-mobile md:bg-desktop bg-cover bg-center h-screen w-full flex flex-col justify-around md:justify-evenly items-center">
      <h2 className="font-french text-3xl text-pink-400 text-opacity-75 md:text-primary text-center">
        Souvenirs et autres friandises du Japon
      </h2>
      <h2 className="font-japanese text-3xl text-pink-400 text-opacity-75 md:text-secondary font-bold text-center">
        日本からのお土産とその他の良いもの
      </h2>
    </div>
  );
}

export default Home;
