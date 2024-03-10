import { Text, Stack } from "@chakra-ui/react";

export function NutritionalInfo({ recipe }) {
  return (
    <Stack spacing={1}>
      <Text fontWeight="bold">Total Nutrients:</Text>
      <Text>
        <span style={{ display: "inline-block", width: "150px" }}>
          Calories:
        </span>{" "}
        {parseFloat(recipe.calories).toFixed(2)}
      </Text>
      <Text>
        <span style={{ display: "inline-block", width: "150px" }}>
          {recipe.totalNutrients.FAT.label}:
        </span>{" "}
        {parseFloat(recipe.totalNutrients.FAT.quantity).toFixed(2)}{" "}
        {recipe.totalNutrients.FAT.unit}
      </Text>
      <Text>
        <span style={{ display: "inline-block", width: "150px" }}>
          {recipe.totalNutrients.PROCNT.label}:
        </span>{" "}
        {parseFloat(recipe.totalNutrients.PROCNT.quantity).toFixed(2)}{" "}
        {recipe.totalNutrients.PROCNT.unit}
      </Text>
      <Text>
        <span style={{ display: "inline-block", width: "150px" }}>
          {recipe.totalNutrients.CHOLE.label}:
        </span>{" "}
        {parseFloat(recipe.totalNutrients.CHOLE.quantity).toFixed(2)}{" "}
        {recipe.totalNutrients.CHOLE.unit}
      </Text>
      <Text>
        <span style={{ display: "inline-block", width: "150px" }}>
          {recipe.totalNutrients.CHOCDF.label}:
        </span>{" "}
        {parseFloat(recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}{" "}
        {recipe.totalNutrients.CHOCDF.unit}
      </Text>
    </Stack>
  );
}
