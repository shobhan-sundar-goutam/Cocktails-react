import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = () => {
  const { cocktails, getDrinkDetails } = useGlobalContext();

  return (
    <>
      {cocktails.map((drink) => {
        const { idDrink, strDrink, strGlass, strCategory, strDrinkThumb } =
          drink;
        return (
          <article className="cocktail" key={idDrink}>
            <div className="img-container">
              <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className="cocktail-footer">
              <h3>{strDrink}</h3>
              <h4>{strGlass}</h4>
              <p>{strCategory}</p>
              <NavLink
                className="btn btn-primary btn-details"
                to={"/cocktail"}
                onClick={() => getDrinkDetails(idDrink)}
              >
                details
              </NavLink>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Cocktail;
