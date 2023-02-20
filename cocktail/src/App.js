import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SingleCocktail from "./Pages/SingleCocktail";
import NavBar from "./Compnents/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
