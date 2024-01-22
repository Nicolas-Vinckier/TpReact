import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useFetchData } from "../../models/utils/hooks";

import "../style.css";

function Home() {
  const { data } = useFetchData("https://dummyjson.com/recipes");
  const [platState, setPlatState] = useState([]);

  useEffect(() => {
    setPlatState(data.recipes);
  }, [data]);

  return (
    <div id="home">
      <h1>Accueil</h1>

      <div className="carousel">

        {/* Mettre en commentaire le carousel si il fait planter React*/}

        {/* <Carousel>
          {platState.map((plat) => (
            <div key={plat.id}>
              <img src={plat.image} alt={plat.name} />
              <p className="legend">{plat.name}</p>
            </div>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}

export default Home;
