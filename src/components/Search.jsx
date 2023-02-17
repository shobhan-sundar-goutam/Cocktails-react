import { useGlobalContext } from "../context";

const Search = () => {
  const { searchedTerm, setSearchedTerm } = useGlobalContext();

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
