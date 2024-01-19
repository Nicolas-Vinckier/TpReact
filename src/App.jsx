// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Accueil/Home";
import Presentation from "./pages/Presentation/Presentation";
import Map from "./pages/Carte/Map";
import Localization from "./pages/Localisation/Localization";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/carte" element={<Map />} />
        <Route path="/localisation" element={<Localization />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
