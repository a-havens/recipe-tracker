import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipeData, setRecipeData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new recipe object from the form data
    const newRecipe = {
      name: recipeData.name,
      cuisine: recipeData.cuisine,
      photo: recipeData.photo,
      ingredients: recipeData.ingredients,
      preparation: recipeData.preparation,
    };

    // Call the addRecipe function to add the new recipe to your list of recipes
    addRecipe(newRecipe);

    // Clear the form data after submission
    setRecipeData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <div>
      <div className="form-box">
        <form name="create" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={recipeData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="cuisine"
              value={recipeData.cuisine}
              onChange={handleInputChange}
              placeholder="Cuisine"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              name="photo"
              value={recipeData.photo}
              onChange={handleInputChange}
              placeholder="URL"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="ingredients"
              value={recipeData.ingredients}
              onChange={handleInputChange}
              required
              placeholder="Ingredients"
            />
          </div>

          <div className="form-group">
            <textarea
              name="preparation"
              value={recipeData.preparation}
              onChange={handleInputChange}
              placeholder="Preparation"
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeCreate;
