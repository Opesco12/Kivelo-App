import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("screen");

const Draw = () => {
  return (
    <View>
      <ImageBackground
        source={require("@/src/assets/images/project-images/child-chat-bg.svg")}
        style={{ height: height, width: width }}
      >
        <SafeAreaView className="flex-1 px-[15] pt-[20]">
          <BackButton style={{ backgroundColor: "#F6EFEF" }} />
          <Text
            className="text-2xl text-[#9333EA] mt-[20]"
            font="poppins-bold"
          >
            Draw what you feel here
          </Text>
          <Text className="text-lg text-[#6B7280]">
            pick a color and draw what you feel
          </Text>

          <View className="flex-[0.8] my-[25] rounded-[16] bg-[#F9FAFB]">
            <LottieView
              source={{
                uri: "https://lottie.host/b16e1026-11c6-4367-ae8f-94dd509ef06e/V4I5HIXAsK.lottie",
              }}
              loop
              autoPlay
              style={{ height: 100, width: 100, alignSelf: "center" }}
            />
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity
              activeOpacity={0.9}
              className="h-[70] w-[70] bg-[#4A90E2] rounded-[35]"
            />
            <TouchableOpacity
              activeOpacity={0.9}
              className="h-[70] w-[70] bg-[#81D4FA] rounded-[35]"
            />
            <TouchableOpacity
              activeOpacity={0.9}
              className="h-[70] w-[70] bg-[#FFD54F] rounded-[35]"
            />
            <TouchableOpacity
              activeOpacity={0.9}
              className="h-[70] w-[70] bg-[#FF5F5F] rounded-[35]"
            />
          </View>

          <TouchableOpacity className="h-[50]  rounded-[50] overflow-hidden mt-[20]">
            <LinearGradient
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              colors={["#4A90E2", "#294F7C"]}
            >
              <Text className="text-lg text-white">Save Drawing</Text>
            </LinearGradient>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Draw;
