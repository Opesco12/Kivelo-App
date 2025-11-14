import ContinueLearning from "@/src/components/parent/learning-hub/ContinueLearning";
import LearningCategories from "@/src/components/parent/learning-hub/LearningCategories";
import Text from "@/src/components/ui/Text";
import { Image, ImageBackground } from "expo-image";
import LottieView from "lottie-react-native";
import { Info, Star } from "lucide-react-native";
import React from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("screen");

const LearningHub = () => {
  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View
          className="h-[200] overflow-hidden"
          style={{
            height: 250,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <ImageBackground
            source={require("@/src/assets/images/project-images/parent-header-bg.svg")}
            style={{ height: 250 }}
          >
            <SafeAreaView className="flex-1 px-[15] my-[10]">
              <Info
                size={18}
                fill={"#FFF"}
                stroke={"#6EC5E9"}
                strokeWidth={1.5}
                style={{ alignSelf: "flex-end" }}
              />
              <View className="relative items-center justify-center ">
                <LottieView
                  source={{
                    uri: "https://lottie.host/1685022b-f82e-425d-9525-0f9d0071f1c4/CgWT0Cz3mf.lottie",
                  }}
                  style={{
                    height: 25,
                    width: 25,
                    position: "absolute",
                    top: 0,
                    left: 15,
                  }}
                  autoPlay
                  loop
                />
                <Text className="text-white text-2xl">Parent Learning Hub</Text>
              </View>
              <Image
                source={{ uri: "https://picsum.photos/80" }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  alignSelf: "center",
                  marginTop: 20,
                }}
                contentFit="cover"
              />
            </SafeAreaView>
          </ImageBackground>
        </View>

        <View className="flex-1 px-[15]">
          <View className="h-[160] bg-white rounded-[12] mt-[-35] p-[15] justify-between">
            <View className="flex-row justify-between items-center">
              <View className="">
                <Text className="text-xl mb-[5]">Your Progress</Text>
                <Text className="text-[#666666]">
                  You started one lesson this week
                </Text>
              </View>

              <View>
                <View className="h-[38] w-[38]  bg-[#FFD93B] rounded-[19] items-center justify-center">
                  <Star
                    size={30}
                    fill={"#FFF"}
                    strokeWidth={0}
                  />
                </View>
                <Text>Starter</Text>
              </View>
            </View>

            <TouchableOpacity className="bg-[#27AE60] h-[48] rounded-[100] items-center justify-center">
              <Text className="text-lg text-white">
                Continue where you left off
              </Text>
            </TouchableOpacity>
          </View>

          <View className="h-[200] bg-white my-[15] rounded-[12] p-[15] justify-between">
            <View className="flex-row  gap-[15]">
              <Image
                source={{ uri: "https://picsum.photos/80" }}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 24,
                }}
                contentFit="cover"
              />
              <View className="flex-1">
                <Text className="text-xl mb-[5]">Today's Insight</Text>
                <Text className="text-[#666666]">
                  Try this 5-minute activity
                </Text>
                <Text
                  className="mt-[10] text-2xl text-pretty text-[#8E44AD]"
                  numberOfLines={2}
                  font="poppins-medium"
                >
                  How to Build Calm Conversations
                </Text>
              </View>
            </View>
            <TouchableOpacity className="bg-[#FFD93B] h-[48] rounded-[100] items-center justify-center">
              <Text className="text-lg ">Start Now</Text>
            </TouchableOpacity>
          </View>

          <LearningCategories />
          <ContinueLearning />

          <View className="my-[15]">
            <Text
              className="text-xl"
              font="poppins-medium"
            >
              Continue Learning
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LearningHub;
