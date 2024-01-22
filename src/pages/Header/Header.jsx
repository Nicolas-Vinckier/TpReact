// eslint-disable-next-line no-unused-vars
import React from "react";

import "../style.css";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <ul>
        <li>
          <a href="/">
            <img src="src/pages/Header/logo.png" alt="Logo du restaurant" />
          </a>
        </li>
      </ul>

      <ul>
        {/* <li>
          <a href="/">Accueil</a>
        </li> */}
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
