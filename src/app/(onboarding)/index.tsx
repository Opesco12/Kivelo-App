import { Colors } from "@/src/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        style={{ flex: 1, width: "100%" }}
        colors={["green", Colors.light.white]}
      ></LinearGradient>
    </View>
  );
}
