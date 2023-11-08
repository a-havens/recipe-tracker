import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Function to delete a recipe
const deleteRecipe = (name) => {
  const updatedRecipes = recipes.filter((recipe) => recipe.name !== name);
  setRecipes(updatedRecipes);
};

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
