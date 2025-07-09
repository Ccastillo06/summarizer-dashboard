export const getBackgroundColor = <T extends string>(
  hightlight: T | undefined
) => {
  if (!hightlight) return "";

  if (hightlight === "most-shared") return "bg-orange-200";
  if (hightlight === "most-viewed") return "bg-pink-200";
};

export const getTitleColor = <T extends string>(hightlight: T | undefined) => {
  return hightlight ? "text-black" : "";
};

export const getTextContentColor = <T extends string>(
  hightlight: T | undefined
) => {
  return hightlight ? "text-gray-700" : "text-muted-foreground";
};
