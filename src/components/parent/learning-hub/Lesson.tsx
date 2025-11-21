import { Clock, Heart } from "iconsax-react-nativejs";
import { Bookmark } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";
import Text from "../../ui/Text";

const Lesson = () => {
  return (
    <TouchableOpacity
      className="h-[150] rounded-[12] bg-white w-[99%] self-center p-[12] flex-row justify-between my-[8]"
      style={styles.shadow}
      onPress={() => router.push("/learning-hub/lesson")}
    >
      <View className="bg-[#4CAF50] h-[40] w-[40] rounded-[20] items-center justify-center mr-[5]">
        <Heart
          size={25}
          variant="Bold"
          color={Colors.light.white}
        />
      </View>

      <View className="w-[55%] justify-between">
        <Text
          className="text-xl"
          family="inter"
          weight="bold"
          numberOfLines={2}
        >
          Understanding Big Emotions{" "}
        </Text>
        <Text
          family="inter"
          className="text-lg text-[#666666]"
          numberOfLines={2}
        >
          Help your child recognize and express emotions safely
        </Text>
        <View className="flex-row gap-[3] items-center">
          <Clock
            size={15}
            color={"#666666"}
          />
          <Text
            family="inter"
            className="text-[#666666]"
          >
            15 Minutes
          </Text>
        </View>
      </View>

      <View className="items-start w-[30%] gap-[10]">
        <Text
          className="text-white bg-[#4CAF50] rounded-[50] px-[12] py-[3]"
          family="inter"
        >
          Completed
        </Text>
        <Bookmark
          style={{ alignSelf: "flex-end" }}
          size={25}
          color={"#4CAF50"}
          fill={"#4CAF50"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 3,
  },
});

export default Lesson;
