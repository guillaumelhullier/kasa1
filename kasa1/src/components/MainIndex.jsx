import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MainIndex = () => {
  const [logements, setLogements] = useState([]);

  /*Appel de la data */
  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="mainColorGrey">
        {/*Définition de la grille de la page d'accueil */}
        <div className="grille">
          {/*map de la base de données */}
          {logements.map((logement) => (
            <div key={logement.id} className="grille-item">
              {/*Lien vers l'élément logement */}
              <Link to={`/logements/${logement.id}`}>
                <img src={logement.cover} alt={logement.title} />
              </Link>
              <span key={logement.id}>{logement.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainIndex;
