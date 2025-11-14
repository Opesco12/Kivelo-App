import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft } from "iconsax-react-nativejs";
import LottieView from "lottie-react-native";
import {
  Calendar,
  CircleAlert,
  Heart,
  Lightbulb,
  Mic,
  Palette,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Select, { SelectOption } from "@/src/components/ui/Select";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ChildWellness = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [value, setValue] = useState<string | number>("");

  const options: SelectOption[] = [
    { label: "Emma", value: "1" },
    { label: "Shola", value: "2" },
  ];
  return (
    <View className="flex-1 bg-[#D1FAE5]">
      <ScrollView
        className="pt-[5]"
        // contentContainerStyle={{ paddingBottom: 25 }}
      >
        <SafeAreaView className="">
          <View className="px-[15]">
            <ArrowLeft
              size={25}
              color={"#666666"}
              style={{ marginBottom: 10 }}
              onPress={() => router.back()}
            />
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
        </SafeAreaView>

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
              <View className="flex-row justify-between w-[55%]">
                <Text style={{ fontSize: 22 }}>😊</Text>
                <Text style={{ fontSize: 22 }}>😌</Text>
                <Text style={{ fontSize: 22 }}>😄</Text>
                <Text style={{ fontSize: 22 }}>🤔</Text>
              </View>
              <View>
                <Text className="text-sm text-[#334155}">7-day Trend</Text>
                <View className="h-[32] w-[70]  overflow-hidden rounded-[6]">
                  <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={["#22C55E", "#FACC15"]}
                    className="h-[32] w-[70] rounded-[8]"
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

          <View className="h-[180] bg-white rounded-[12] p-[12] mt-[15]">
            <Text
              className="text-xl "
              font="poppins-medium"
            >
              Coaching Insights
            </Text>

            <View className="bg-[#EFF6FF] rounded-[12] mt-[12] p-[8] flex-row gap-[10]">
              <Lightbulb
                size={25}
                fill={"#2563EB"}
              />
              <View className="w-[85%]">
                <Text className="text-lg text-[#0F172A]">
                  Your child is in the Stable Zone — great time to celebrate
                  their positive mood!
                </Text>

                <Pressable>
                  <Text className="text-[#2563EB] text-lg mt-[10]">
                    View more tips
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View className="h-[110] bg-white rounded-[12] p-[12] my-[15]">
            <Text
              className="text-xl "
              font="poppins-medium"
            >
              Adjust detail level
            </Text>
            <View className="relative">
              <Slider
                minimumValue={0}
                maximumValue={2}
                step={1}
                value={sliderValue}
                onValueChange={(newValue) => setSliderValue(newValue)}
                minimumTrackTintColor="#1E90FF"
                maximumTrackTintColor="#D3D3D3"
                thumbTintColor="#1E90FF"
                style={{
                  height: 30,
                  width: "100%",
                  position: "relative",
                  alignSelf: "flex-start",
                }}
                StepMarker={({ index, currentValue }) => (
                  <Text style={{ position: "absolute", bottom: -60 }}>
                    {["Basic", "Moderate", "Full"][index] || currentValue}
                  </Text>
                )}
              />
            </View>
          </View>

          <View className="min-h-[130] bg-white rounded-[12] p-[12] mb-[15]">
            <Text
              className="text-xl "
              font="poppins-medium"
            >
              Quick Actions
            </Text>

            <TouchableOpacity className="h-[48] my-[10] rounded-[100] gap-[5] flex-row items-center justify-center bg-[#6A1B9A]">
              <Heart
                size={22}
                fill={"#FFFFFF"}
              />
              <Text
                className="text-white text-xl"
                font="poppins-medium"
              >
                Send Encouragement
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-between mt-[5]">
              <TouchableOpacity className="bg-[#F3F4F6] h-[48] w-[48%] items-center justify-center rounded-[8]  flex-row gap-[3]">
                <Image
                  source={require("@/src/assets/images/project-images/woman-child.png")}
                  style={{ height: 33, width: 40 }}
                />
                <Text className="text-lg">Child setup</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#F3F4F6] h-[48] w-[48%] items-center justify-center rounded-[8] flex-row gap-[3]">
                <LottieView
                  source={{
                    uri: "https://lottie.host/fc848c7b-c9f5-4c3f-b6b2-5f0536b9aa67/NOVc2hsVra.lottie",
                  }}
                  style={{ height: 33, width: 40 }}
                  loop
                  autoPlay
                />
                <Text className="text-lg">Insights</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default ChildWellness;
