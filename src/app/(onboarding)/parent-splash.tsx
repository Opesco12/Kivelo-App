import { ImageBackground, View } from "react-native";

const ParentSplash = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 w-[100%]"
        source={require("@/src/assets/images/onboarding-images/parent-splash.png")}
      ></ImageBackground>
    </View>
  );
};

export default ParentSplash;
