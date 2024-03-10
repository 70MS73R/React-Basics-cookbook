import {
  Box, // Import Box component from Chakra UI
  Card,
  AspectRatio,
  Image,
  CardBody,
  Text,
  Tag,
  Flex,
} from "@chakra-ui/react";

function RecipeBox({ recipe, onClick }) {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      width="250px"
      height="400px"
      marginBottom="20px"
    >
      <Card
        overflow="hidden"
        variant="elevated"
        width="100%"
        height="100%"
        bg="teal.50"
      >
        <AspectRatio ratio={16 / 9}>
          <Image src={recipe.image} objectFit="cover" />
        </AspectRatio>

        <CardBody p="6" textAlign="center">
          <Text size="sm" as="b" textColor="black">
            {recipe.label}
          </Text>

          <Text size="xs" textColor="black">
            {recipe.mealType}
          </Text>

          <Flex justifyContent="center" marginBottom="5px">
            {recipe.healthLabels
              .filter(
                (label) =>
                  label.includes("Vegetarian") || label.includes("Vegan")
              )
              .map((filteredLabel, index) => (
                <Tag
                  key={index}
                  size="xs"
                  colorScheme="purple"
                  borderRadius="6px"
                  opacity="95%"
                  marginRight="5px"
                >
                  {filteredLabel}
                </Tag>
              ))}
          </Flex>

          {recipe.dietLabels.length > 0 && (
            <Flex justifyContent="center">
              {recipe.dietLabels.slice(0, 2).map((dietLabel, index) => (
                <Tag
                  key={index}
                  size="xs"
                  colorScheme="green"
                  borderRadius="6px"
                  opacity="95%"
                  marginRight="5px"
                >
                  {dietLabel}
                </Tag>
              ))}
            </Flex>
          )}

          <Text size="xs" textColor="black">
            <Text size="xs" as="b" textColor="black">
              dish:
            </Text>{" "}
            {recipe.dishType}
          </Text>

          {recipe.cautions.length > 0 && (
            <>
              <Text size="xs" as="b" textColor="black">
                Cautions:
              </Text>
              <br />
              <Flex justifyContent="center">
                {recipe.cautions.slice(0, 2).map((caution, index) => (
                  <Tag
                    key={index}
                    size="xs"
                    colorScheme="red"
                    borderRadius="6px"
                    opacity="95%"
                    marginRight="5px"
                  >
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </>
          )}
        </CardBody>
      </Card>
    </Box>
  );
}

export default RecipeBox;
