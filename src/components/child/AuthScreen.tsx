import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

type AuthScreenProps = {
  title?: string;
  children: React.ReactNode;
};

const AuthScreen = ({ title, children }: AuthScreenProps) => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 60,
          paddingHorizontal: 20,
        }}
        colors={["#76D7F7", "#457E91"]}
      >
        <View style={{ height: 45, position: "relative" }}>
          <View style={{ position: "absolute", left: 0, top: 0, zIndex: 10 }}>
            <BackButton />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              font="poppins-bold"
              className="text-white"
              style={{ fontSize: 20 }}
            >
              {title}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default AuthScreen;
