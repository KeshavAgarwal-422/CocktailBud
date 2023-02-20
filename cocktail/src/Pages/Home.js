import React from "react";
import CocktailList from "../Compnents/CocktailList";
import Loading from "../Compnents/Loading";
import SearchBar from "../Compnents/SearchBar";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <>
      <SearchBar />
      <CocktailList />
    </>
  );
};

export default Home;
