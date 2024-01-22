import React, { useState } from "react";

import "./Panier.css";

const Panier = () => {
  const [count, setCount] = useState(0);

  return (
    <a href="/panier">
      <div id="panier">
        <div className="titre">
          <h1>Panier</h1>
        </div>
        <div className="contenu">
          <p>{count}</p>
        </div>
      </div>
    </a>
  );
};

export default Panier;
