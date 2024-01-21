import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <h1>Accueil</h1>

      <div className="demo-carousel">
        <Carousel>
          <div>
            <img src="https://picsum.photos/1200/400?img=1" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
