import React from "react";
import "./AdviceGenerator.css";
import iconDice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-desktop.svg";

export const AdviceGenerator = ({ id, advice, handleCallAPI }) => {
  return (
    <>
      {advice &&
        <div className="container">
        <h4 className="title">Advice #{id}</h4>
        <p>{advice}</p>
        <img className="divider" src={divider} alt="" />
      </div>
      }
      <div className="dice" onClick={handleCallAPI}>
        <img src={iconDice} alt="" />
      </div>
    
    </>
  );
}; 
