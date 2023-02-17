import { useGlobalContext } from "../context";
import CocktailList from "../components/CocktailList";
import Search from "../components/Search";
import Loading from "../components/Loading";

const Home = () => {
  const { loading } = useGlobalContext();

  return (
    <main>
      <Search />
      {loading ? <Loading /> : <CocktailList />}
    </main>
  );
};

export default Home;
