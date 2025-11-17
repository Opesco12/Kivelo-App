import { View } from "react-native";

import GradientButton from "@/src/components/form/GradientButton";
import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";
import LottieView from "lottie-react-native";

const Index = () => {
  return (
    <Screen>
      <Text
        className="text-2xl font-bold text-[#9333EA] text-center"
        font="inter-medium"
      >
        Quick Literacy Check
      </Text>

      <LottieView
        source={{
          uri: "https://lottie.host/099c5a42-edee-4f8f-ba37-2e1bd8e1643b/zOnTM1EW1w.lottie",
        }}
        autoPlay
        style={{ height: 200, width: 200, alignSelf: "center" }}
        loop
      />

      <Text
        className="font-bold text-xl text-[#9333EA]  text-center"
        font="inter-medium"
      >
        This helps use make the app easier for you to use.
      </Text>

      <View className="flex-1 justify-center gap-[8]">
        <GradientButton
          text="Start"
          onPress={() => router.push("/literacy-check/literacy-check")}
        />
        <Text className="underline text-center text-lg text-[#2563EB]">
          Why am i seeing this?
        </Text>
      </View>
    </Screen>
  );
};

export default Index;
