import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Select, { SelectOption } from "@/src/components/ui/Select";
import Text from "@/src/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";
import { Heart } from "iconsax-react-nativejs";
import {
  Calendar,
  CircleAlert,
  Lightbulb,
  Mic,
  Palette,
} from "lucide-react-native";

const ChildWellness = () => {
  const [value, setValue] = useState<string | number>("");

  const options: SelectOption[] = [
    { label: "Emma", value: "1" },
    { label: "Shola", value: "2" },
  ];
  return (
    <View className="flex-1 bg-[#D1FAE5]">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="pt-[20] flex-1"
          contentContainerStyle={{ flex: 1 }}
        >
          <View className="px-[15] pb-[15]">
            <View className="flex-row gap-[10]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                className="h-[40] w-[40] rounded-[20]"
              />
              <View className="flex-row items-center justify-between flex-1">
                <View>
                  <Text
                    className="text-2xl"
                    font="poppins-medium"
                  >
                    Hi, Bella!
                  </Text>
                </View>

                <View className="flex-row items-center gap-[8]">
                  <Select
                    options={options}
                    value={value}
                    onValueChange={setValue}
                    placeholder=""
                    style="w-[80]"
                  />

                  <View className="w-[36] h-[36] rounded-[8] bg-white items-center justify-center">
                    <Calendar
                      size={18}
                      strokeWidth={1}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-[8] flex-row justify-between">
              <View className="flex-row gap-[2] items-center">
                <View className="bg-[#22C55E] h-[8] w-[8] rounded-[4]" />
                <Text>Online</Text>
              </View>

              <Text>Last Sync: 2 mins ago</Text>
            </View>
          </View>

          <View className="bg-gray-50 flex-1 p-[15]">
            <View className="h-[140] bg-white rounded-[12] p-[12]">
              <View className="flex-row justify-between items-center">
                <Text
                  className="text-xl "
                  font="poppins-medium"
                >
                  Trust Zone
                </Text>
                <CircleAlert
                  size={18}
                  color={"#FFF"}
                  fill={"#000"}
                />
              </View>

              <View className="h-[48] rounded-[12] overflow-hidden flex-row my-[12]">
                <View className="w-[25%] bg-[#22C55E]  items-center justify-center">
                  <Text className="text-white text-lg">Stable</Text>
                </View>

                <View className="w-[25%] bg-[#FACC154D]  items-center justify-center">
                  <Text className=" text-lg">Mild</Text>
                </View>

                <View className="w-[25%] bg-[#FB923C66]  items-center justify-center">
                  <Text className=" text-lg">Elevated</Text>
                </View>

                <View className="w-[25%] bg-[#FF725EA6]  items-center justify-center">
                  <Text className=" text-lg">High Risk</Text>
                </View>
              </View>
              <Text className="text-[#334155]">
                Based on shared mood and activity patterns
              </Text>
            </View>

            <View className="h-[140] bg-white rounded-[12] p-[12] mt-[15]">
              <Text
                className="text-xl "
                font="poppins-medium"
              >
                Mood Summary
              </Text>

              <View className="h-[48] rounded-[12] overflow-hidden flex-row my-[12] justify-between items-center">
                <View className="flex-row justify-between w-[200]">
                  <Text style={{ fontSize: 25 }}>😊</Text>
                  <Text style={{ fontSize: 25 }}>😌</Text>
                  <Text style={{ fontSize: 25 }}>😄</Text>
                  <Text style={{ fontSize: 25 }}>🤔</Text>
                </View>
                <View>
                  <Text className="text-sm text-[#334155}">7-day Trend</Text>
                  <View className="h-[32] w-[64]  overflow-hidden rounded-[4]">
                    <LinearGradient
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      colors={["#22C55E", "#FACC15"]}
                      className="h-[32] rounded-[8]"
                    ></LinearGradient>
                  </View>
                </View>
              </View>

              <Text className="text-[#334155]">
                Zone colors shows emotional climate over time
              </Text>
            </View>

            <View className="h-[140] bg-white rounded-[12] p-[12] mt-[15]">
              <View className="flex-row justify-between items-center">
                <Text
                  className="text-xl "
                  font="poppins-medium"
                >
                  Journal Highlights
                </Text>
                <Text className="text-[#2563EB]">View all</Text>
              </View>

              <View className="flex-row gap-[10] my-[12]">
                <View className="bg-[#FEF9C3] h-[80] w-[80] rounded-[12] items-center justify-center">
                  <Palette
                    size={28}
                    stroke={"#FEF9C3"}
                    fill={"#CA8A04"}
                  />
                </View>

                <View className="bg-[#DBEAFE] h-[80] w-[80] rounded-[12] items-center justify-center">
                  <Mic
                    size={28}
                    stroke={"#DBEAFE"}
                    fill={"#2563EB"}
                  />
                </View>

                <View className="bg-[##F3E8FF] h-[80] w-[80] rounded-[12] items-center justify-center">
                  <Heart
                    size={25}
                    stroke={"#F3E8FF"}
                    fill={"#9333EA"}
                  />
                </View>
              </View>
            </View>

            <View className="h-[140] bg-white rounded-[12] p-[12] mt-[15]">
              <Text
                className="text-xl "
                font="poppins-medium"
              >
                Coaching Insights
              </Text>

              <View className="bg-[#EFF6FF] rounded-[12] mt-[12] p-[12]">
                <Lightbulb
                  size={25}
                  fill={"#2563EB"}
                />
                <View>
                  <Text className="text-lg text-[#0F172A]">
                    Your child is in the Stable Zone — great time to celebrate
                    their positive mood!
                  </Text>

                  <Text className="text-[#2563EB] text-lg">View more tips</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ChildWellness;
