import { Box, Text, Tag } from "@chakra-ui/react";

export const Labels = ({ recipe }) => {
  return (
    <Box flex="1">
      {recipe.healthLabels.length > 0 && (
        <Text size="ml" textColor="black" p="6">
          Health Labels:
          <br />
          {recipe.healthLabels.map((healthLabel, index) => (
            <Tag
              key={index}
              size="xs"
              colorScheme="purple"
              borderRadius="6px"
              opacity="95%"
              marginRight="5px"
            >
              {healthLabel}
            </Tag>
          ))}
        </Text>
      )}
      {recipe.dietLabels.length > 0 && (
        <Text size="ml" textColor="black" p="6">
          Diet Labels:
          <br />
          {recipe.dietLabels.map((dietLabel, index) => (
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
        </Text>
      )}
      {recipe.cautions.length > 0 && (
        <Text size="ml" textColor="black" p="6">
          Cautions:
          <br />
          {recipe.cautions.map((cautions, index) => (
            <Tag
              key={index}
              size="xs"
              colorScheme="red"
              borderRadius="6px"
              opacity="95%"
              marginRight="5px"
            >
              {cautions}
            </Tag>
          ))}
        </Text>
      )}
    </Box>
  );
};
