// eslint-disable-next-line no-unused-vars
import React from "react";

import "../style.css";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="/gestionstock">Gestion du stock</a>
          <a href="/sitemap">Plan du site</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Accueil</a>
          <a href="/presentation">Présentation</a>
          <a href="/carte">Carte</a>
          <a href="/localisation">Localisation</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
