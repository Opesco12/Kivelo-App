import { Text as RNText, TextProps } from "react-native";
import { Fonts, FontKey, Weight } from "@/src/constants/fonts";

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
  const fontFamily = font ?? Fonts[family][weight] ?? Fonts.poppins.regular;

  return (
    <RNText
      {...props}
      style={[{ fontFamily }, style]}
    />
  );
}
