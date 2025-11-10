import { Heart, Smile } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";
const ParentIndex = () => {
  return (
    <View className="flex-1 bg-[#6EC5E9] px-[20]">
      <SafeAreaView>
        <View className="h-[45] w-[45] rounded-[22.5] bg-[#4A90E2] mt-[20] items-center justify-center">
          <Heart
            size={20}
            fill={Colors.light.white}
            color={Colors.light.white}
          />
        </View>

        <Text
          font="inter-bold"
          className="text-5xl font-bold mt-[20] leading-[1.2]"
        >
          {`Welcome \nTo KIVELO`}
        </Text>
        <Text
          font="poppins-regular"
          className="text-xl my-[18]"
        >
          {`Protect, connect, and empower \nyour child, daily.`}
        </Text>

        <Text
          font="poppins-regular"
          style={{ fontSize: 25 }}
        >
          What you will get
        </Text>

        <View className="my-[20] gap-[10]">
          <View className="bg-white rounded-[12] flex-row items-center gap-5 px-[10] py-[20]">
            <View
              style={{ borderRadius: 25 }}
              className="h-[50] w-[50]  bg-[rgba(39,174,96,0.1)] items-center justify-center"
            >
              <Smile
                size={25}
                // stroke={"#FFFFFF"}
                // color={"#27AE60"}
                // strokeWidth={2}
                fill={"#27AE60"}
              />
            </View>
            <Text
              font="poppins-regular"
              className="text-xl"
            >
              {`See how your child feels \neach day.`}
            </Text>
          </View>

          <View className="bg-white rounded-[12] flex-row items-center gap-5 px-[10] py-[20]">
            <View
              style={{ borderRadius: 25 }}
              className="h-[50] w-[50]  bg-[rgba(39,174,96,0.1)] items-center justify-center"
            >
              <Smile
                size={25}
                // stroke={"#FFFFFF"}
                // color={"#27AE60"}
                // strokeWidth={2}
                fill={"#27AE60"}
              />
            </View>
            <Text
              font="poppins-regular"
              className="text-xl"
            >
              {`See how your child feels \neach day.`}
            </Text>
          </View>

          <View className="bg-white rounded-[12] flex-row items-center gap-5 px-[10] py-[20]">
            <View
              style={{ borderRadius: 25 }}
              className="h-[50] w-[50]  bg-[rgba(39,174,96,0.1)] items-center justify-center"
            >
              <Smile
                size={25}
                // stroke={"#FFFFFF"}
                // color={"#27AE60"}
                // strokeWidth={2}
                fill={"#27AE60"}
              />
            </View>
            <Text
              font="poppins-regular"
              className="text-xl"
            >
              {`See how your child feels \neach day.`}
            </Text>
          </View>
        </View>
        <GradientButton
          text="Get Started"
          onPress={() => router.push("/(parent)/auth/signup")}
        />
      </SafeAreaView>
    </View>
  );
};

export default ParentIndex;
