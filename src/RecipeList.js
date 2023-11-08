import React from "react";
import RecipeEntry from "./RecipeEntry";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <RecipeEntry
              key={recipe.name}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
