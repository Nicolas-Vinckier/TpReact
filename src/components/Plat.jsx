import React, { Component, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./Plat.css";
import "./button.css";

function Plat({ plat }) {
  return (
    <div className="plat-item">
      <div className="plat-title">
        <h1>{plat.name}</h1>
      </div>
      <div className="plat-img">
        <img src={plat.image} alt={plat.name} />
      </div>
      <div className="plat-ingr">
        <h2>Ingrédients :</h2>
        <ul>
          {plat.ingredients.map((ingredient) => (
            <li key={ingredient}>- {ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="plat-achat">
        <button className="button" style={{ "--clr": "#00ad54" }}>
          <span className="button-decor"></span>
          <div className="button-content">
            <span className="button__text">Ajouter</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Plat;
