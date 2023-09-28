import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <h1>Goodies from Japan or other things</h1>
      <div className="flex md:hidden">
        <NavBar />
      </div>
    </>
  );
}

export default Home;
