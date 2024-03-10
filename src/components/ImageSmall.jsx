import { Box, Image } from "@chakra-ui/react";

export function ImageSmall({ recipe }) {
  return (
    <Box maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={recipe.image} maxW="100%" />
    </Box>
  );
}
