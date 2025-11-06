export const Fonts = {
  poppins: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
  },
  rammettoOne: {
    regular: "RammettoOne-Regular",
  },
} as const;

export type FontKey = keyof typeof Fonts;
export type Weight = "regular" | "medium" | "bold";
