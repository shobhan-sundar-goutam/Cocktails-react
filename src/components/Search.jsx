import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { searchedTerm, setSearchedTerm } = useGlobalContext();
  const searchBox = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchBox.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
            ref={searchBox}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
