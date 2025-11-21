import { Messages2 } from "iconsax-react-nativejs";
import { Compass, Heart, Shield } from "lucide-react-native";
import { Dimensions, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import Text from "../../ui/Text";

const { width: ScreenWidth } = Dimensions.get("screen");

export const categories = [
  {
    Icon: Messages2,
    iconType: "iconsax",
    color: "#27AE60",
    name: "Communications",
    subtitle: "Active Listening, Asking questions, Creating openness",
    mins: "5-10",
  },

  {
    Icon: Compass,
    iconType: "lucide",
    color: "#FF8C42",
    name: "Trauma Awareness",
    subtitle: "Recognize, Respond, Support",
    mins: "5-10",
  },

  {
    Icon: Heart,
    iconType: "iconsax",
    color: "#8E44AD",
    name: "Emotional Wellness",
    subtitle: "Mental Health, Resilience, Self-esteem",
    mins: "5-10",
  },

  {
    Icon: Shield,
    iconType: "iconsax",
    color: "#3FD0C9",
    name: "Safety Skills",
    subtitle: "Stranger Danger, Body autonomy, Online safety",
    mins: "6-15",
  },
];

const LearningCategories2 = () => {
  const cardWidth = (ScreenWidth - 30 - 12) / 2;
  return (
    <View className="mt-[10]">
      <Text
        className="text-xl"
        family="inter"
        weight="bold"
      >
        Learning Categories
      </Text>

      <View className="mt-[10] flex-row gap-[12] flex-wrap">
        {categories.map((category, index) => {
          const Icon = category.Icon;
          return (
            <TouchableOpacity
              onPress={() =>
                router.push(`/learning-hub/categories/${category.name}`)
              }
              key={index}
              className={`h-[185] bg-[${category.color}] rounded-[16] p-[15]`}
              style={{ width: cardWidth }}
            >
              <View className="bg-[#FFFFFF4D] h-[48] w-[48] rounded-[24] items-center justify-center">
                {category.iconType === "iconsax" ? (
                  <Icon
                    size={30}
                    color={category.color}
                    variant="Bold"
                  />
                ) : (
                  <Icon
                    size={30}
                    color={category.color}
                  />
                )}
              </View>
              <Text
                className="text-xl text-white mt-[10] mb-[5]"
                family="inter"
                weight="bold"
                numberOfLines={1}
              >
                {category.name}
              </Text>

              <Text className="text-white">{category.subtitle}</Text>
              <Text className="text-white">{category.mins} mins lessons</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default LearningCategories2;
