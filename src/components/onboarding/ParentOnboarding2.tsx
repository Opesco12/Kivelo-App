import { Image, View } from "react-native";

import Text from "../ui/Text";

const ParentOnboarding2 = () => {
  return (
    <View className="flex-1 bg-[#F2D1DC] px-[20]">
      <View className="flex-1 justify-end items-center">
        <View className=" self-center">
          <Text
            style={{ fontSize: 40 }}
            className=""
            font="poppins-bold"
          >
            Empower Your Child’s Emotional Intelligence
          </Text>
          <Text
            style={{ fontSize: 17 }}
            className="mt-[5] leading-[1.5]"
          >
            Discover your child’s mood and feeling with{" "}
            <Text font="poppins-bold">SAFTNEST</Text>
          </Text>
        </View>
        <View className="h-[500] justify-end">
          <Image
            source={require("@/src/assets/images/onboarding-images/parent-onboarding2.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default ParentOnboarding2;
