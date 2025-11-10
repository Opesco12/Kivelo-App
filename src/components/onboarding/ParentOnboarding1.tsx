import { Image, View } from "react-native";

import Text from "../ui/Text";

const ParentOnboarding1 = () => {
  return (
    <View className="flex-1 bg-[#A8D5F4] px-[20]">
      <View className="flex-1 justify-end items-center">
        <View className=" self-center">
          <Text
            style={{ fontSize: 40 }}
            className=""
            font="poppins-bold"
          >
            Your Child’s Emotional Well-Being
          </Text>
          <Text
            style={{ fontSize: 17 }}
            className="mt-[5] leading-[1.5]"
          >
            Track, Understand & Support your child, emotionally and otherwise.
          </Text>
        </View>
        <View className="h-[500] justify-end">
          <Image
            source={require("@/src/assets/images/onboarding-images/parent-onboarding1.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default ParentOnboarding1;
