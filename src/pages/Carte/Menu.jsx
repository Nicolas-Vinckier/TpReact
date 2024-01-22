// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import "./Menu.css";

import ListePlat from "../../components/ListePlat/ListePlat";
import { useFetchData } from "../../models/utils/hooks";

function Menu() {
  const { data } = useFetchData("https://dummyjson.com/recipes");

  const [platState, setPlatState] = useState([]);

  useEffect(() => {
    setPlatState(data.recipes);
  }, [data]);

  return (
    <div id="menu">
      <h1>Menu</h1>

      <ListePlat listePlat={platState} />
    </div>
  );
}

export default Menu;
