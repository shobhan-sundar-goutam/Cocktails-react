import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const Provider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedTerm, setSearchedTerm] = useState("");

  async function fetchCocktails() {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchedTerm}`);
      const { drinks } = await response.json();
      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCocktails();
  }, [searchedTerm]);

  const value = {
    cocktails,
    loading,
    setLoading,
    searchedTerm,
    setSearchedTerm,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export default Context;
