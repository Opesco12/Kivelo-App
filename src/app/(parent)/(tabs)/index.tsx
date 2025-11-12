import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";
import { Lightbulb } from "lucide-react-native";

const ParentDashboard = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pt-[15]"
        >
          <View className="flex-row gap-[10]">
            <Image
              source={{ uri: "https://picsum.photos/40" }}
              className="h-[40] w-[40] rounded-[20]"
            />
            <View className="flex-row items-center justify-between flex-1">
              <View>
                <Text
                  className="text-2xl"
                  font="poppins-bold"
                >
                  Hello, Bella
                </Text>
                <Text
                  className="text-[#6B7280]"
                  font="poppins-medium"
                >
                  Welcome Back Today!
                </Text>
              </View>

              <NotificationBadge />
            </View>
          </View>

          <View className="h-[160] bg-[#FF725E8C] my-[25] rounded-[12] flex-row overflow-hidden">
            <View className="pl-[12] py-[14] w-[60%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 22 }}
              >
                Welcome to Kivelo
              </Text>
              <Text
                className="text-white my-[6]"
                font="poppins-medium"
                style={{ fontSize: 14 }}
              >
                Your trusted space to support and understand your child
              </Text>

              <TouchableOpacity className="bg-white w-[120] mt-[5] py-[10] rounded-[100] items-center justify-center">
                <Text className="text-sm">Learn More</Text>
              </TouchableOpacity>
            </View>
            <View className="w-[40%]">
              <Image
                source={require("@/src/assets/images/project-images/banner-image.png")}
              />
            </View>
          </View>

          <View className="mb-[25]">
            <Text
              className="text-[#4A90E2]"
              style={{ fontSize: 20 }}
              font="poppins-medium"
            >
              What The App Offers
            </Text>
            <Text className="text-[#4B5563]">
              Focus on what the app offers:
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-[10] w-full"
            >
              <View className="h-[130] w-[300] rounded-[12] overflow-hidden mr-[15]">
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  className="flex-1 p-[10] px-[15] flex-row items-center justify-between"
                  colors={["#4A90E2", "#5DADEC"]}
                >
                  <View className="w-[70%]">
                    <Text
                      className="text-white"
                      font="poppins-bold"
                      style={{ fontSize: 22 }}
                    >
                      Trust & Privacy
                    </Text>
                    <Text
                      className="text-white my-[2]"
                      style={{ fontSize: 14 }}
                    >
                      Your child chooses what to share. You get only what they
                      allow.
                    </Text>
                  </View>
                  <View className="w-[25%]">
                    <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                      <Image
                        className="h-[50] w-[50]"
                        source={require("@/src/assets/images/project-images/padlock.png")}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <View className="h-[130]  w-[300] rounded-[12] overflow-hidden mr-[15]">
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  className="flex-1 p-[10] px-[15] flex-row items-center justify-between"
                  colors={["#4B2E83", "#9333EA"]}
                >
                  <View className="w-[70%]">
                    <Text
                      className="text-white"
                      font="poppins-bold"
                      style={{ fontSize: 22 }}
                    >
                      Guided Insights
                    </Text>
                    <Text
                      className="text-white my-[2]"
                      style={{ fontSize: 14 }}
                    >
                      Simple trends and tips to understand your child better
                    </Text>
                  </View>
                  <View className="w-[25%]">
                    <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                      <Image
                        className="h-[50] w-[50]"
                        source={require("@/src/assets/images/project-images/padlock.png")}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <View className="h-[130]  w-[300] rounded-[12] overflow-hidden mr-[15]">
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  className="flex-1 p-[10] px-[15] flex-row items-center justify-between"
                  colors={["#7F753E", "#E5D370"]}
                >
                  <View className="w-[70%]">
                    <Text
                      className="text-white"
                      font="poppins-bold"
                      style={{ fontSize: 22 }}
                    >
                      Trust & Privacy
                    </Text>
                    <Text
                      className="text-white my-[2]"
                      style={{ fontSize: 14 }}
                    >
                      Your child chooses what to share. You get only what they
                      allow.
                    </Text>
                  </View>
                  <View className="w-[25%]">
                    <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                      <Image
                        className="h-[50] w-[50]"
                        source={require("@/src/assets/images/project-images/padlock.png")}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </ScrollView>
          </View>

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
                    size={30}
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
                    size={30}
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
                    size={30}
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
                    Always check insights about your child, daily, all insights
                    are available.
                  </Text>
                </View>
              </View>

              <TouchableOpacity className="h-[48] rounded-[12] bg-[#4A90E2] items-center justify-center">
                <Text
                  className="text-lg text-white"
                  font="poppins-medium"
                >
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-[25]">
            <Text
              className="text-[#4A90E2]"
              style={{ fontSize: 20 }}
              font="poppins-medium"
            >
              Go to Dashboard
            </Text>
            <Text className="text-[#4B5563]">
              See your child’s well-being updates, Track, Understand & Support
              your child, emotionally and otherwise.
            </Text>

            <TouchableOpacity className="bg-[#9637EC] w-[130] items-center justify-center py-[10] rounded-[100] my-[10]">
              <Text className="text-white">Go to dashboard</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ParentDashboard;
