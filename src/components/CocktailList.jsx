import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        <Cocktail />
      </div>
    </section>
  );
};

export default CocktailList;
