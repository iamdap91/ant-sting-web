export const opinionFontStyle = (opinion?: string) => {
  const text = opinion?.toLowerCase();
  switch (true) {
    case text?.includes("매수"):
    case text?.includes("보유"):
    case text?.includes("buy"):
      return "text-red-500";
    case text?.includes("sell"):
    case text?.includes("매도"):
    case text?.includes("nr"):
    case text?.includes("NR"):
    case text?.includes("not rated"):
    case text?.includes("not recommended"):
    case text?.includes("Not Rated"):
      return "text-blue-500";
  }

  return "";
};
