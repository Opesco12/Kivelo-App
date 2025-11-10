import { LinearGradient } from "expo-linear-gradient";
import { Image, TouchableOpacity, View } from "react-native";

import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import Text from "../ui/Text";

const ParentOnboarding3 = () => {
  return (
    <View className="flex-1 bg-[#A8D5F4] px-[20]">
      <View className="flex-1 justify-end items-center">
        <View className="self-center">
          <Text
            style={{ fontSize: 40 }}
            className=""
            font="poppins-bold"
          >
            Parent Them With Confidence
          </Text>
          <Text
            style={{ fontSize: 17 }}
            className="mt-[5] leading-[1.5]"
          >
            Get started with <Text font="poppins-bold">SAFTNEST</Text> today and
            help your child to feel good.
          </Text>
        </View>
        <View className="h-[500] justify-end">
          <Image
            source={require("@/src/assets/images/onboarding-images/parent-onboarding3.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        className="h-[65] w-[65] rounded-[32.5] overflow-hidden absolute bottom-[40] right-[30]"
        onPress={() => router.push("/(onboarding)/parent-index")}
      >
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={["#2563EB", "#153885"]}
          className="flex-1 justify-center items-center"
        >
          <ChevronRight
            size={40}
            color={Colors.light.white}
            strokeWidth={1.5}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ParentOnboarding3;
