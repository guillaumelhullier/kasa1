import React from "react";
import { useState } from "react";
import vector from "../assets/vector.png";

//Props reçoit les données de la page à propos
const Collapse = ({ question }) => {
  //Définition du hook state local initialisé par le booleen false
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="collapse-about">
        <div className="collapse-infos" onClick={() => setIsActive(!isActive)}>
          <h3>{question.title}</h3>
          {isActive ? (
            <img src={vector} alt="vector" className="active" />
          ) : (
            <img src={vector} alt="vector" className="closed" />
          )}
        </div>
        {isActive ? (
          <div className="collapse-description">{question.description}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Collapse;
