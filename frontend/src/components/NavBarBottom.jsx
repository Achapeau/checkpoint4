function NavBarTop() {
  const handleConnexionClick = () => {};

  return (
    <div className=" md:hidden absolute inset-x-0 bottom-0 z-50 bg-blue flex justify-around items-center h-[10vh] min-h-16 lg:hidden">
      <input
        placeholder="Rechercher"
        type="search"
        name="Rechercher"
        id="recherche"
        className="input bg-pink-300 opacity-75 uppercase w-44 text-base text-primary font-semibold focus:bg-primary focus:text-blue  placeholder:text-primary"
      />
      <div className="flex gap-2">
        <button type="button">
          <svg
            width="45px"
            height="45px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#FBC2D4"
          >
            <path
              d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button type="button" onClick={handleConnexionClick}>
          <svg
            width="45px"
            height="45px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#FBC2D4"
          >
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBarTop;
