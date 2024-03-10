//function to calculate more then 60 mins to hours and minutes. Or show "Unknown" If totalTime isnt avalible

export const formatCookingTime = (totalTime) => {
  if (!totalTime) return "Unknown";

  if (totalTime <= 60) {
    return `${totalTime} Minutes`;
  } else {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    if (minutes === 0) {
      return `${hours} ${hours > 1 ? "Hours" : "Hour"}`;
    } else {
      return `${hours} ${hours > 1 ? "Hours" : "Hour"} ${minutes} Minutes`;
    }
  }
};
