import { CookingInfo } from "../components/CookingInfo";
import { Labels } from "../components/Labels";
import { NutritionalInfo } from "../components/NutritionalInfo";
import { HeaderDetail } from "../components/HeaderDetail";
import { ImageSmall } from "../components/ImageSmall";
import { Button, Heading, Box, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function RecipeDetailPage({ recipe, onBack }) {
  const handleBack = () => {
    onBack(); // Call the onBack function passed from the parent component
  };

  return (
    <Box
      height="100vh"
      bg="lightblue"
      display="flex"
      justifyContent="center"
      overflow="auto"
    >
      <Box width="1000px" position="relative" minheight="100vh">
        {/* Title */}
        <Heading
          as="h1"
          textAlign="center"
          marginTop="15px"
          marginBottom="15px"
        >
          {/* eslint-disable-next-line */}
          Tom's Recipe Book
        </Heading>

        {/* Back Button */}
        <Box position="absolute" top="15px" bottom="15px" left="20px">
          <Button bg="transparent" p="0" onClick={handleBack} zIndex="1">
            <ArrowLeftIcon boxSize={6} />
          </Button>
        </Box>

        {/* Whitesmoke Box */}
        <Box
          bg="teal.50"
          bottom="-0"
          width="100%"
          padding="20px"
          borderRadius="10px"
          marginBottom="30px" // Add margin to separate the box from the bottom of the page
        >
          {/* Content */}
          {/* Render Header component */}
          <Box
            mt="-250px"
            marginLeft="-25px"
            display="flex"
            flexDirection="column"
          >
            {/* HeaderDetail */}
            <Box>
              <HeaderDetail recipe={recipe} />
            </Box>

            {/* Flex container for CookingInfo, Labels, Photo and NutritionalInfo */}
            <Flex flex="1" justifyContent="space-between">
              {/* CookingInfo */}
              <Box flex="1" marginLeft="25px">
                <CookingInfo recipe={recipe} />
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  marginBottom="20px"
                >
                  <ImageSmall recipe={recipe} />
                </Flex>
              </Box>

              {/* Flex container for Labels and NutritionalInfo */}
              <Flex flex="1" flexDirection="column">
                {/* Labels */}
                <Box>
                  <Labels recipe={recipe} />
                </Box>

                {/* NutritionalInfo */}
                <Box marginLeft="25px" marginBottom="50px">
                  <NutritionalInfo recipe={recipe} />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RecipeDetailPage;
