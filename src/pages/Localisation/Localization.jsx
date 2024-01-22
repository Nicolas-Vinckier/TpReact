import React from "react";

import "./Localization.css";

function Localization() {
  return (
    <div id="localization">
      <h1>Localisation</h1>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.471379280481!2d3.9443116759979593!3d43.575896971105934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6ac29a1ed0e77%3A0x12bff7420e0ee1bd!2sDiginamic%20Montpellier!5e0!3m2!1sfr!2sfr!4v1705938687020!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Localization;
