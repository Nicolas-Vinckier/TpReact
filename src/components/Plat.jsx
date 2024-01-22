import React, { Component, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Plat({ plat }) {
  return (
    <div className="plat-item">
      <img src={plat.image} alt={plat.name} />
      <p>{plat.name}</p>
    </div>
  );
}

export default Plat;
