import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/404";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
