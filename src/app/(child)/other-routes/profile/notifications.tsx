import { router } from "expo-router";
import {
  ChevronRight,
  Lightbulb,
  Palette,
  Settings,
} from "lucide-react-native";
import { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";

const { width } = Dimensions.get("window");
const TAB_WIDTH = (width - 30 - 30) / 4;

const Notifications = () => {
  const tabs = ["All", "Games", "Journal", "System"];
  const [selected, setSelected] = useState("All");

  const translateX = useSharedValue(0);

  const handleTabPress = (tab: string, index: number) => {
    setSelected(tab);
    translateX.value = withTiming(index * TAB_WIDTH, { duration: 300 });
  };

  const animatedPillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="flex-1 bg-[#B39DDB]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1">
          <View className="flex-row justify-between items-center px-[15] pt-[10]">
            <BackButton />
            <Text
              className="text-xl text-white"
              font="poppins-medium"
            >
              Notifications
            </Text>
            <Settings
              size={30}
              color={Colors.light.white}
              onPress={() =>
                router.push("/(child)/other-routes/profile/settings")
              }
            />
          </View>

          <View className="px-[15] my-[20]">
            <View className="relative  py-[20] bg-white rounded-[12] overflow-hidden">
              <Animated.View
                style={[
                  animatedPillStyle,
                  {
                    position: "absolute",
                    left: 15,
                    top: 10,
                    width: TAB_WIDTH,
                    height: 40,
                    backgroundColor: "#B39DDB",
                    borderRadius: 50,
                    zIndex: 0,
                  },
                ]}
              />

              <View className="flex-row justify-between px-[15]">
                {tabs.map((tab, index) => (
                  <Animated.View
                    key={tab}
                    layout={LinearTransition}
                    style={{ width: TAB_WIDTH }}
                    className="items-center justify-center"
                  >
                    <Text
                      onPress={() => handleTabPress(tab, index)}
                      className="text-center text-[15px] font-medium"
                      style={{
                        color: selected === tab ? "#FFFFFF" : "#B39DDB",
                        zIndex: 1,
                      }}
                      font="poppins-medium"
                    >
                      {tab}
                    </Text>
                  </Animated.View>
                ))}
              </View>
            </View>
          </View>

          <View
            className="flex-1 mt-[70] bg-[#F9FAFB] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
            }}
          >
            <View className="px-[15] py-[25] bg-white gap-[15] rounded-[16] mt-[-50]">
              <TouchableOpacity className="bg-[#F5F4F8] h-[80] rounded-[16] px-[15] flex-row items-center justify-between">
                <View
                  className="h-[48] w-[48] rounded-[12] items-center justify-center"
                  style={{ backgroundColor: "#C4B5FD" }}
                >
                  <Palette
                    size={22}
                    color={"#FFF"}
                  />
                </View>

                <Text className=" text-xl flex-1 ml-[15]">
                  Don't forget to draw today
                </Text>

                <ChevronRight size={24} />
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#F5F4F8] h-[80] rounded-[16] px-[15] flex-row items-center justify-between">
                <View
                  className="h-[48] w-[48] rounded-[12] items-center justify-center"
                  style={{ backgroundColor: "#FBBF24" }}
                >
                  <Lightbulb
                    size={22}
                    color={"#FFF"}
                  />
                </View>

                <Text className=" text-xl flex-1 ml-[15]">
                  Learning games up for you
                </Text>

                <ChevronRight size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Notifications;
