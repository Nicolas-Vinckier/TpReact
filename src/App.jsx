// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Accueil/Home";
import Presentation from "./pages/Presentation/Presentation";
import Map from "./pages/Carte/Menu";
import Localization from "./pages/Localisation/Localization";
import Panier from "./pages/Panier/Panier";
import GestionStock from "./pages/GestionStock/GestionStock";
import Sitemap from "./pages/Sitemap/Sitemap";
import NotFound from "./pages/CatchError/NotFound";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import PageAuth from "./pages/PageAuth/PageAuth";

import "./pages/style.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header />

      <section>
        <Routes>
          {/* Classic pages */}
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/carte" element={<Map />} />
          <Route path="/localisation" element={<Localization />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/pageauth" element={<PageAuth />} />

          {/* Authed pages */}
          <Route
            path="/gestionstock"
            element={user ? <GestionStock /> : <Navigate to="/pageauth" />}
          />

          {/* Error page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
