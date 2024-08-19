export const truncateText = (text: string, replacement: string = "") => {
  if (text.length > 90) {
    return text.slice(0, 90);
  }

  if ((text || "").length === 0) {
    return replacement;
  }

  return text;
};
