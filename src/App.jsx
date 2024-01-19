// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Accueil/Home";
import Presentation from "./components/Presentation/Presentation";
import Map from "./components/Carte/Map";
import Localization from "./components/Localisation/Localization";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/carte" component={Map} />
        <Route path="/localisation" component={Localization} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
