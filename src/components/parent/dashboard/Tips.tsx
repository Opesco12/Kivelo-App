import { router } from "expo-router";
import { Lightbulb } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import Text from "../../ui/Text";

const Tips = () => {
  return (
    <View className="mb-[25]">
      <Text
        className="text-[#4A90E2]"
        style={{ fontSize: 20 }}
        font="poppins-medium"
      >
        Tip of the day
      </Text>
      <Text className="text-[#4B5563]">
        Track, Understand & Support your child, emotionally and otherwise.
      </Text>

      <View className="my-3 gap-[15]">
        <View className="h-[85] bg-[#9333EA8C] rounded-[12] p-[10] justify-center flex-row gap-[8] items-center">
          <View className="bg-[#4A90E2] h-[48] w-[48] rounded-[12] items-center justify-center z-[10]">
            <Lightbulb
              size={20}
              color={"#FFD700"}
              fill={"#FFD700"}
            />
          </View>
          <View className="absolute bottom-[8] h-[24] w-[32] bg-white/25 left-[55]  rounded-[100]"></View>
          <View className="w-[80%]">
            <Text
              className="text-white text-lg"
              font="poppins-medium"
              numberOfLines={2}
            >
              Children open up more when they feel safe from judgment.
            </Text>
          </View>
        </View>

        <View className="h-[85] bg-[#6EE7B78C] rounded-[12] p-[10] justify-center flex-row gap-[8] items-center">
          <View className="bg-[#4A90E2] h-[48] w-[48] rounded-[12] items-center justify-center z-[10]">
            <Lightbulb
              size={20}
              color={"#FFD700"}
              fill={"#FFD700"}
            />
          </View>
          <View className="absolute bottom-[8] h-[24] w-[32] bg-white/25 left-[55]  rounded-[100]"></View>
          <View className="w-[80%]">
            <Text
              className="text-lg"
              numberOfLines={2}
            >
              Ask them ‘how did you feel’ instead of “what did you do”
            </Text>
          </View>
        </View>

        <View className="h-[85] bg-[#FFD93B8C] rounded-[12] p-[10] justify-center flex-row gap-[8] items-center">
          <View className="bg-[#4A90E2] h-[48] w-[48] rounded-[12] items-center justify-center z-[10]">
            <Lightbulb
              size={20}
              color={"#FFD700"}
              fill={"#FFD700"}
            />
          </View>
          <View className="absolute bottom-[8] h-[24] w-[32] bg-white/25 left-[55]  rounded-[100]"></View>
          <View className="w-[80%]">
            <Text
              className="text-lg"
              numberOfLines={2}
            >
              Always check insights about your child, daily, all insights are
              available.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="h-[48] rounded-[12] bg-[#4A90E2] items-center justify-center"
          onPress={() => router.push("/(parent)/other-routes/learn-more")}
        >
          <Text
            className="text-lg text-white"
            font="poppins-medium"
          >
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tips;
