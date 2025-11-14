import { Compass, Heart, Shield } from "lucide-react-native";
import { View } from "react-native";

import { Calendar, Message } from "iconsax-react-nativejs";
import Text from "../../ui/Text";

const LearningCategories = () => {
  return (
    <View className="mt-[5]">
      <Text
        className="text-xl"
        font="poppins-medium"
      >
        Learning Categories
      </Text>
      <View className="mt-[10] flex-wrap flex-row justify-between gap-y-[10]">
        <View className="h-[160] w-[160] rounded-[16] bg-[#3FD0C9] items-center justify-center">
          <View className="bg-[#FFFFFF4D] h-[50] w-[50] rounded-[25] items-center justify-center">
            <Shield
              fill={"#FFF"}
              strokeWidth={0}
              size={30}
            />
          </View>
          <Text
            className="mt-[5] text-white"
            font="poppins-medium"
          >
            Safety Skills
          </Text>
        </View>

        <View className="h-[160] w-[160] rounded-[16] bg-[#8E44AD] items-center justify-center">
          <View className="bg-[#FFFFFF4D] h-[50] w-[50] rounded-[25] items-center justify-center">
            <Heart
              fill={"#FFF"}
              strokeWidth={0}
              size={30}
            />
          </View>
          <Text
            className="mt-[5] text-white"
            font="poppins-medium"
          >
            Emotional Wellness
          </Text>
        </View>

        <View className="h-[160] w-[160] rounded-[16] bg-[#27AE60] items-center justify-center">
          <View className="bg-[#FFFFFF4D] h-[50] w-[50] rounded-[25] items-center justify-center">
            <Message
              color="#FFF"
              variant="Bold"
              size={30}
            />
          </View>
          <Text
            className="mt-[5] text-white"
            font="poppins-medium"
          >
            Communication
          </Text>
        </View>

        <View className="h-[160] w-[160] rounded-[16] bg-[#FF8C42] items-center justify-center">
          <View className="bg-[#FFFFFF4D] h-[50] w-[50] rounded-[25] items-center justify-center">
            <Compass
              color={"#FFF"}
              size={30}
            />
          </View>
          <Text
            className="mt-[5] text-white"
            font="poppins-medium"
          >
            Trauma Awareness
          </Text>
        </View>
      </View>
      <View className="bg-[#4A90E2] h-[160] my-[15] rounded-[16] items-center justify-center flex-row gap-[10]">
        <View className="bg-[#FFFFFF4D] h-[50] w-[50] rounded-[25] items-center justify-center">
          <Calendar
            color={"#FFF"}
            variant="Bold"
            size={30}
          />
        </View>
        <Text
          className="mt-[5] text-white"
          font="poppins-medium"
        >
          Age-Appropriate Topics
        </Text>
      </View>
    </View>
  );
};

export default LearningCategories;
