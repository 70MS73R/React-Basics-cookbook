import RecipeBox from "../components/RecipeBox";
import SearchBar from "../components/SearchBar";
import { data } from "../utils/data";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

function RecipeListPage({ onRecipeClick }) {
  // Add onRecipeClick as a prop
  // State to hold the filtered recipes
  const [filteredRecipes, setFilteredRecipes] = useState(
    data.hits.map((hit) => hit.recipe)
  );

  // Function to handle search query
  const handleSearch = (filteredRecipes) => {
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <Box
      as="body"
      backgroundColor="lightblue"
      minHeight="100vh"
      padding="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h1" textAlign="center" marginTop="50px">
        {/* eslint-disable-next-line */}
        Tom's Recipe Book
      </Heading>

      {/* Pass filteredRecipes and handleSearch function to SearchBar component */}
      <SearchBar
        recipes={data.hits.map((hit) => hit.recipe)}
        handleSearch={handleSearch}
      />

      {/* Container to center the grid of cards */}
      <Box
        display="flex"
        justifyContent="center"
        gridGap="25px"
        marginTop="50px"
        maxWidth="1400px"
        width="100%"
        flexWrap="wrap"
      >
        {/*code to show all cards on the Grid of cards */}
        {filteredRecipes.map((recipe, index) => (
          <RecipeBox
            key={index}
            recipe={recipe}
            onClick={() => onRecipeClick(recipe)} // Use onRecipeClick prop
          />
        ))}
      </Box>
    </Box>
  );
}

export default RecipeListPage;
