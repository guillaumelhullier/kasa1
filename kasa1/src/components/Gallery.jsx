import React from "react";
import { useState } from "react";
import vectorLeft from "../assets/vector-left.png";
import vectorRight from "../assets/vector-right.png";

//Apport de la props logement
const Gallery = ({ logement }) => {
  //Définition du hook useState avec un état initial égal à 0
  const [showImg, setShowImg] = useState(0);

  const handleNext = () => {
    setShowImg(showImg === logement.pictures.length - 1 ? 0 : showImg + 1);
  };

  const handlePrevious = () => {
    setShowImg(showImg === 0 ? logement.pictures.length - 1 : showImg - 1);
  };

  return (
    <div>
      {/*Le clic sur l'image fait appel à la fonction handlePrevious */}
      <img
        onClick={handlePrevious}
        className={
          logement.pictures.length > 1 ? "vector-left" : "vector-left-off"
        }
        src={vectorLeft}
        alt="fleche gauche"
      />
      {/*Le clic sur l'image fait appel à la fonction handleNext */}
      <img
        onClick={handleNext}
        className={
          logement.pictures.length > 1 ? "vector-right" : "vector-right-off"
        }
        src={vectorRight}
        alt="fleche droite"
      />
      <img
        className="slidesShow-image"
        src={logement.pictures[showImg]}
        alt={logement.pictures.title}
      />
      <span className="number">
        {logement.pictures.length > 1
          ? `${showImg + 1}/${logement.pictures.length}`
          : ""}
      </span>

      {/*Définition du compteur photo */}
      {/* <span className="number">{`${showImg + 1}/${
        logement.pictures.length
      }`}</span>*/}
    </div>
  );
};

export default Gallery;
