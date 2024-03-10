import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { formatCookingTime } from "./formatCookingTime";

export const CookingInfo = ({ recipe }) => {
  return (
    <Box flex="1" p="6">
      <Text size="ml" textColor="black">
        Total cooking time:{" "}
        <Text as="span" fontWeight="bold">
          {formatCookingTime(recipe.totalTime)}
        </Text>
        <br />
        Servings:{" "}
        <Text as="span" fontWeight="bold">
          {recipe.yield}
        </Text>
        <br />
        <br />
        <Text as="span" fontWeight="bold" fontSize="lg">
          Ingredients:
        </Text>
        <UnorderedList>
          {recipe.ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>{ingredient.replace("*", "")}</ListItem>
          ))}
        </UnorderedList>
      </Text>
    </Box>
  );
};
