import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleCocktail = () => {
  const { drinkDetails } = useGlobalContext();
  const {
    idDrink,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = drinkDetails;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <section className="section cocktail-section" key={idDrink}>
      <NavLink className="btn btn-primary" to={"/"}>
        back home
      </NavLink>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span> {strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span> {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((ingredient, index) =>
              ingredient ? <span key={index}>{ingredient}</span> : null
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
