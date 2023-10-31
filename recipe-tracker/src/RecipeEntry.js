import React, { useState } from "react";

function RecipeEntry({ recipe, deleteRecipe }) {
  const handleDelete = () => {
    deleteRecipe(recipe.name);
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeEntry;