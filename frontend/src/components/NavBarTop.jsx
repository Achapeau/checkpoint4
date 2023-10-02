import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useCurrentUserContext } from "../context/CurrentUserContext";

function NavBarTop({ toggleModalConnexion }) {
  const { user, setUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const handleConnexionClick = () => {
    if (user) {
      setUser(null);
      navigate("/");
    } else {
      toggleModalConnexion();
    }
  };

  return (
    <div className="fixed hidden md:flex inset-x-0 top-0 z-50 mx-auto my-2 w-96 rounded-full bg-primary justify-around items-center h-[10vh] min-h-16 shadow-xl ">
      <div className="flex gap-6">
        <button type="button" onClick={() => navigate("/")}>
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
        <button type="button" onClick={() => navigate("/")}>
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
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 18v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
            />
          </svg>
        </button>
        <button type="button" onClick={() => navigate("/gallery")}>
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
              stroke="#FBC2D4"
              strokeWidth="1.5"
              d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 0 0 2.139-.806.503.503 0 0 0 .15-.465L21.076 3.5A.6.6 0 0 0 20.485 3Z"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              d="m16.493 3 .5 5s-1 1-2.5 1-2.5-1-2.5-1V3h4.5Z"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              d="M11.993 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5h4.5Z"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              d="M7.493 3H3.502a.6.6 0 0 0-.592.501L2.205 7.73c-.029.172.02.349.15.465.328.29 1.061.806 2.138.806 1.5 0 2.5-1 2.5-1l.5-5Z"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeMiterlimit="16"
              d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
            />
          </svg>
        </button>
        <button type="button" onClick={() => navigate("/basket")}>
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
              fill="#FBC2D4"
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            />
            <path
              stroke="#FBC2D4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 4H22l-2 11h-4.5m1-11-1 11m1-11h-5.75m4.75 11h-4m-.75-11H5l2 11h4.5m-.75-11 .75 11M5 4c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
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

NavBarTop.propTypes = {
  toggleModalConnexion: PropTypes.func.isRequired,
};
