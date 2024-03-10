import {
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function SearchBar({ recipes, handleSearch }) {
  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.label.toLowerCase().includes(query) ||
        recipe.healthLabels.some((label) => label.toLowerCase().includes(query))
    );
    handleSearch(filtered);
  };

  return (
    <InputGroup marginTop="50px" maxWidth="350px">
      <Input placeholder="Search..." bg="whitesmoke" onChange={handleChange} />
      <InputLeftElement>
        <IconButton
          aria-label="Search"
          variant="ghost"
          icon={<Search2Icon />}
          color="black"
        />
      </InputLeftElement>
    </InputGroup>
  );
}

export default SearchBar;
