/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import { useState } from "react";

const Recipes = ({handleAddToCart}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:grid grid-cols-2 gap-4 container mx-auto my-10">
      {recipes.map(recipe => (
        <Recipe
        handleAddToCart={handleAddToCart} 
        recipe={recipe}
        key={recipe.id}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
