import PropTypes from "prop-types";
import { useState } from "react";

import expressApi from "../services/expressApi";
import { useCurrentUserContext } from "../context/CurrentUserContext";

function ModalInscription({ toggleModalInscritpion, toggleModalConnexion }) {
  const [formDataInscription, setFormDataInscription] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorValues, setErrorValues] = useState("");
  const { setUser } = useCurrentUserContext();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormDataInscription((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOpenConnexion = () => {
    toggleModalInscritpion();
    toggleModalConnexion();
  };

  const checkSignupForm = (obj) => {
    const values = [];
    let message = "";

    for (const [key, value] of Object.entries(obj)) {
      if (!value.length) {
        values.push(` ${key}`);
      }
    }

    if (values.length) {
      if (values.length === 1) {
        message = `Compléter le champs${values[0]}.`;
      } else {
        message = `Compléter le champs${[...values]}.`;
      }
    }
    if (obj.password !== obj.passwordConfirm) {
      message += "La confirmation du mot de passe ne match pas";
    }
    if (obj.password.length < 8) {
      message += " Votre mot de passe doit faire au minimum 8 caractères";
    }
    const hasDigit = /\d/.test(obj.password);
    const hasUpperCase = /[A-Z]/.test(obj.password);
    const hasSpecialChar = /[+−*/=<>%!@#$^&;:"'(),.~_]/.test(obj.password);
    if (!hasDigit || !hasUpperCase || !hasSpecialChar) {
      message +=
        " Le mot de passe doit contenir au moins un chiffre, une lettre majuscule et un caractère spécial. Les caract";
    }
    return message.replace("_", " ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = checkSignupForm(formDataInscription);
    if (!errorMessage.length) {
      try {
        const res = await expressApi.post(`/signup`, {
          firstName: formDataInscription.firstName,
          lastName: formDataInscription.lastName,
          nickName: formDataInscription.nickName,
          email: formDataInscription.email,
          password: formDataInscription.password,
        });
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toggleModalInscritpion();
      } catch (err) {
        console.error(err);
        setErrorValues(err.response.data);
      }
    } else {
      setErrorValues(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-secondary bg-opacity-40 z-20 ">
      <div className=" bg-primary rounded-xl w-80 ">
        <div className="flex items-center justify-between bg-blue rounded-t-xl p-3">
          <h3 className="text-xl text-primary font-bold">Inscription :</h3>
          <button type="button" onClick={toggleModalInscritpion}>
            <svg
              width="32px"
              height="32px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#E5E9E7"
            >
              <path
                d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="#E5E7E9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="text-blue font-bold text-lg "
              >
                Prénom :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="text"
                id="formDataConnexion.firstName"
                name="firstName"
                placeholder="Entrer votre prénom"
                value={formDataInscription.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-blue font-bold text-lg">
                Nom :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="text"
                id="formDataInscritption.lastName"
                name="lastName"
                placeholder="Entrer votre nom"
                value={formDataInscription.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="nickName" className="text-blue font-bold text-lg">
                Nom d'utilisateur :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="text"
                id="formDataInscritption.nickName"
                name="nickName"
                placeholder="Entrer votre nom"
                value={formDataInscription.nickName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-blue font-bold text-lg">
                Email :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="email"
                id="formDataInsciption.email"
                name="email"
                placeholder="Entrez votre adresse mail"
                value={formDataInscription.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-blue font-bold text-lg">
                Mot de passe :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="password"
                id="formDataInscription.password"
                name="password"
                placeholder="Entrez votre mot de passe"
                value={formDataInscription.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-blue font-bold text-lg">
                Confirmez votre mot de passe :
              </label>
              <input
                className="input bg-neutral-300 w-full focus:border-none focus:bg-blue text-secondary focus:text-primary placeholder-secondary focus:placeholder-primary"
                type="password"
                id="formDataInscription.passwordConfirm"
                name="passwordConfirm"
                placeholder="Vérification du mot de passe"
                value={formDataInscription.passwordConfirm}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <p className="text-sm text-red-700">{errorValues}</p>

          <button
            type="submit"
            className="  btn btn-sm border-none bg-blue text-primary"
            onClick={handleSubmit}
          >
            S'incrire
          </button>

          <p className="text-sm text-secondary">
            Déjà inscrit ? &nbsp;
            <button
              type="button"
              onClick={handleOpenConnexion}
              className="text-blue text-sm underline cursor-pointer"
            >
              se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
ModalInscription.propTypes = {
  toggleModalInscritpion: PropTypes.func.isRequired,
  toggleModalConnexion: PropTypes.func.isRequired,
};
export default ModalInscription;
