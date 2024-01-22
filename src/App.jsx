// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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

// import ListePlatProvider from "./models/utils/context";
// import ListePlat from "./components/ListePlat/ListePlat";
// import { useFetchData } from "./models/utils/hooks";
// import { useEffect } from "react";

function App() {
  // const { data } = useFetchData("https://dummyjson.com/recipes");

  // const [platState, setPlatState] = useState([]);

  // useEffect(() => {
  //   setPlatState(data.recipes);
  // }, [data]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/carte" element={<Map />} />
        <Route path="/localisation" element={<Localization />} />
        <Route path="/panier" element={<Panier />} />

        <Route path="/gestion-stock" element={<GestionStock />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
