import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = (props) => {
  return (
    //Barre de navigation
    <div className="header-container">
      {/*Logo Kasa avec retour à la page d'accueil*/}
      <div className="header-img">
        <Link to="/">
          <img className="img-logo" src={logo} alt="logo KASA" />
        </Link>
      </div>
      {/*Barre de navigation */}
      <nav>
        <ul className="header-nav">
          {/*Envoi vers la page d'accueil */}
          <Link to="/" className="li li-border">
            <h2
              style={
                props.showBorder ? { borderBottom: "2px solid #FF6060" } : null
              }
            >
              Accueil
            </h2>
          </Link>
          {/*Envoi vers la page à propos */}
          <Link to="/about" className="li li-space">
            <h2
              style={
                props.showBorder2 ? { borderBottom: "2px solid #FF6060" } : null
              }
            >
              A Propos
            </h2>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
