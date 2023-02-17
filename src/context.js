import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const Provider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [drinkDetails, setDrinkDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const getDrinkDetails = (id) => {
    const foundDrink = cocktails.find((drink) => drink.idDrink === id);
    setDrinkDetails(foundDrink);
  };

  async function fetchCocktails() {
    try {
      const response = await fetch(`${url}`);
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
  }, []);

  const value = { cocktails, getDrinkDetails, drinkDetails, loading };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export default Context;
