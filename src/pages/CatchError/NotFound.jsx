// eslint-disable-next-line no-unused-vars
import React from "react";

import "./CatchError.css";

function NotFound() {
  return (
    <div id="not-found">
      <h1>404</h1>

      <h2>La page que vous recherchez n'existe pas ou a été déplacée.</h2>

      <a href="/">
        <button>Retour à l'accueil</button>
      </a>
    </div>
  );
}

export default NotFound;
