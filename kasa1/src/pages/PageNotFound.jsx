import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      {/*Appel du composant Header */}
      <Header />
      <div className="error">404</div>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      {/*Renvoi vers la page Accueil */}
      <Link to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default Error;
