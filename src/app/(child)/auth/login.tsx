import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

const ChildLogin = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 60,
          paddingHorizontal: 15,
        }}
        colors={["#76D7F7", "#457E91"]}
      >
        <BackButton />

        <Text
          className="text-center text-white"
          font="RammettoOne-regular"
          style={{ marginTop: 30, fontSize: 45 }}
        >
          Login
        </Text>
      </LinearGradient>
    </View>
  );
};

export default ChildLogin;
