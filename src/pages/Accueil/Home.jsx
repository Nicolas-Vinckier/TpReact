import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Plat from "../../components/Plat";
import ListePlat from "../../components/ListePlat/ListePlat";
import { ListePlatContext } from "../../models/utils/context";
import { useFetchData } from "../../models/utils/hooks";

function Home() {
  const { data } = useFetchData("https://dummyjson.com/recipes");
  const [platState, setPlatState] = useState([]);

  useEffect(() => {
    setPlatState(data.recipes);
  }, [data]);

  return (
    <div>
      <h1>Accueil</h1>

      <div className="demo-carousel">
        <Carousel>
          {platState.map((plat) => (
            <div key={plat.id}>
              <img src={plat.image} alt={plat.name} />
              <p className="legend">{plat.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
