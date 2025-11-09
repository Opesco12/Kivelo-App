export const Fonts = {
  poppins: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
  },
  rammettoOne: {
    regular: "RammettoOne-Regular",
  },
  bauhaus: {
    regular: "Bauhaus-Regular",
  },
  inter: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    Bold: "Inter-Bold"
  }
} as const;

export type FontKey = keyof typeof Fonts;
export type Weight = "regular" | "medium" | "bold";
