import { FontKey, Fonts, Weight } from "@/src/constants/fonts";
import { Text as RNText, TextProps } from "react-native";

type CustomTextProps = TextProps & {
  font?: `${FontKey}-${Weight}` | keyof (typeof Fonts)[keyof typeof Fonts];
  weight?: Weight;
  family?: FontKey;
};

export default function Text({
  font,
  family = "poppins",
  weight = "regular",
  style,
  ...props
}: CustomTextProps) {
  const familyFonts = Fonts[family] as Partial<Record<Weight, string>>;

  // Resolve font prop:
  // - if user passes "family-weight" (case-insensitive), map to Fonts[family][weight]
  // - otherwise use the provided font string (assumed to be exact registered name)
  let resolvedFont: string | undefined;

  if (typeof font === "string") {
    if (font.includes("-")) {
      const [rawFamily, rawWeight] = font.split("-");
      const familyKey = (Object.keys(Fonts) as FontKey[]).find(
        (k) => k.toLowerCase() === rawFamily.toLowerCase()
      );
      const weightKey =
        (["regular", "medium", "bold"] as Weight[]).find(
          (w) => w.toLowerCase() === (rawWeight ?? "").toLowerCase()
        ) ?? "regular";

      if (familyKey) {
        resolvedFont =
          (Fonts as Record<string, Record<string, string>>)[familyKey][
            weightKey
          ] ??
          (Fonts as Record<string, Record<string, string>>)[familyKey].regular;
      } else {
        // fallback to provided value (might already be exact loaded name)
        resolvedFont = font;
      }
    } else {
      resolvedFont = font;
    }
  }

  const fontFamily =
    resolvedFont ?? familyFonts[weight] ?? Fonts.poppins.regular;

  return (
    <RNText
      {...props}
      style={[{ fontFamily }, style]}
    />
  );
}
