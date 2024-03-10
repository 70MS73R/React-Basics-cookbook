import { useState } from "react";
import RecipeListPage from "../src/pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

export function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipeDetailPage recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeListPage onRecipeClick={handleRecipeClick} />
      )}
    </div>
  );
}
