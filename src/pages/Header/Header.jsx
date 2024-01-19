// eslint-disable-next-line no-unused-vars
import React from "react";

import "../style.css";

function Header() {
  return (
    <header className="navbar">
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/presentation">Présentation</a>
        </li>
        <li>
          <a href="/carte">Carte</a>
        </li>
        <li>
          <a href="/localisation">Localisation</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
