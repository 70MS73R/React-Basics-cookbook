import { Box, Heading } from "@chakra-ui/react";

export const HeaderDetail = ({ recipe }) => {
  return (
    <Box position="relative">
      <Heading as="h1" textColor="black" mt="220px" ml="6" p="6" zIndex="1">
        {recipe.label}
      </Heading>
      <Heading
        as="b"
        fontSize="lg"
        textColor="grey"
        opacity="50%"
        zIndex="1"
        ml="6"
        p="6"
        mt="-45px"
      >
        {recipe.mealType}
      </Heading>
    </Box>
  );
};
