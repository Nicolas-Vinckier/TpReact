import { useEffect, useState } from "react";
import { createContext } from "react";
import { useFetchData } from "../hooks";

export const ListePlatContext = createContext();

export default function ListePlatProvider({ children }) {
  const { data } = useFetchData("https://dummyjson.com/recipes");

  const [ListePlatState, setListePlat] = useState([]);

  useEffect(() => {
    setListePlat(data.recipes);
    debugger;
  }, [data]);

  return (
    <ListePlatContext.Provider
      value={{
        ListePlatState,
      }}
    >
      {children}
    </ListePlatContext.Provider>
  );
}
