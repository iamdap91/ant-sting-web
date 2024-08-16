export const figureFontColor = (score: number) => {
  switch (true) {
    case score > 3:
      return "text-red-500";
    case score < 3:
      return "text-blue-500";
  }
  return "";
};
