const Search = () => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </section>
  );
};

export default Search;
