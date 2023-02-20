import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import SingleCocktail from "../Pages/SingleCocktail";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { loading, cocktails, searchTerm } = useGlobalContext();
  console.log(loading, cocktails, searchTerm);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (cocktails.length < 1) {
    return (
      <>
        <h3> no cocktails matched your search criteria</h3>
      </>
    );
  }

  return (
    <>
      <section className="cocktail-section">
        <h1>Cocktails</h1>
        <div className="cocktail-container">
          <div className="cocktail-center">
            {cocktails.map((item) => {
              return <Cocktail key={item.id} {...item}></Cocktail>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CocktailList;
