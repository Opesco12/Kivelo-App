import { Image } from "expo-image";
import { router } from "expo-router";
import { Cup, Headphone, Message } from "iconsax-react-nativejs";
import LottieView from "lottie-react-native";
import {
  BicepsFlexed,
  ChartSpline,
  CircleAlert,
  Heart,
  Mic,
  Palette,
} from "lucide-react-native";
import {
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DailyTips from "@/src/components/child/dashboard/DailyTIps";
import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";

import { useAuth } from "@/src/context/auth-provider";

const ChildDashboard = () => {
  const { user } = useAuth();

  console.log("Child logged in: ", user);
  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "android" ? 110 : 60,
        }}
      >
        <View
          className="h-[120] bg-[#ADD7F4]"
          style={{ zIndex: 100 }}
        >
          <SafeAreaView className="flex-1">
            <View className="flex-row gap-[10] px-[15] mt-[20] items-center flex-1">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                style={{ height: 40, width: 40, borderRadius: 40 }}
              />
              <View className="flex-row items-center justify-between flex-1">
                <View>
                  <Text
                    className="text-2xl"
                    font="poppins-bold"
                  >
                    Hello, Favour
                  </Text>
                  <Text
                    className="text-[#6B7280]"
                    font="poppins-medium"
                  >
                    Welcome Back!
                  </Text>
                </View>

                <NotificationBadge
                  onPress={() =>
                    router.push("/(child)/other-routes/profile/notifications")
                  }
                />
              </View>
            </View>
          </SafeAreaView>
        </View>

        <View className="flex-1 px-[15] mt-[25]">
          <View className="bg-white p-[15] rounded-[12]">
            <Text className="text-xl">This Week's Moods</Text>

            <View className="flex-row my-[15] justify-between">
              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#4ADE80] items-center justify-center">
                  <Text className="text-2xl">😊</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Mon</Text>
              </View>

              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#4ADE80] items-center justify-center">
                  <Text className="text-2xl">😊</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Tue</Text>
              </View>

              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#3B82F6] items-center justify-center">
                  <Text className="text-2xl">😊</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Wed</Text>
              </View>

              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#EAB308] items-center justify-center">
                  <Text className="text-2xl">😊</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Thu</Text>
              </View>

              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#F4F2F2] items-center justify-center">
                  <Text className="text-2xl text-[#9CA3AF]">?</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Thu</Text>
              </View>

              <View>
                <View className="h-[48] w-[48] rounded-[24] bg-[#F4F2F2] items-center justify-center">
                  <Text className="text-2xl text-[#9CA3AF]">?</Text>
                </View>
                <Text className="text-center mt-[10] text-[#4B2E83]">Thu</Text>
              </View>
            </View>

            <View className="flex-row justify-between">
              <Text>This week's streak</Text>
              <Text>4/7 days</Text>
            </View>

            <View className="h-[9]  bg-[#F5F5F5]  overflow-hidden rounded-[100] my-[5]">
              <View className="bg-[#EAB308] rounded-[50] w-[70%] h-[9]" />
            </View>

            <View className="bg-[#DEF7FF73] py-[15] items-center justify-center mt-[10]">
              <Text className="text-center">{`You've checked in 4 days in a row \nawesome! ⭐`}</Text>
            </View>
          </View>

          <View className="bg-white p-[15] rounded-[12] my-[15]">
            <Text className="text-xl">Journal Highlights</Text>

            <View className="mt-[15] flex-row justify-between">
              <View className="bg-[#FEF9C3] h-[80] w-[80] rounded-[12] items-center justify-center">
                <Palette
                  size={25}
                  color={"#CA8A04"}
                />
              </View>

              <View className="bg-[#DBEAFE] h-[80] w-[80] rounded-[12] items-center justify-center">
                <Mic
                  size={25}
                  color={"#2563EB"}
                />
              </View>

              <View className="bg-[#F3E8FF] h-[80] w-[80] rounded-[12] items-center justify-center">
                <Heart
                  size={25}
                  color={"#9333EA"}
                />
              </View>
            </View>
          </View>

          <View className="bg-white p-[15] rounded-[12]">
            <Text className="text-xl">Quick Actions</Text>
            <View className="flex-row mt-[15] justify-between">
              <View className="p-[10] bg-[#9EC9FBBF] rounded-[12] flex-row gap-[8]">
                <View className="bg-white p-[5] rounded-[12]">
                  <View className="h-[48] w-[48]  bg-[#F0EFEF] rounded-[25] items-center justify-center">
                    <LottieView
                      source={{
                        uri: "https://lottie.host/4b52c942-25c0-4a89-8996-685939395c7d/bW8An7BNRZ.lottie",
                      }}
                      loop
                      autoPlay
                      style={{ height: 36, width: 36 }}
                    />
                  </View>
                  <Text
                    className="text-[#4A1A4AB2] text-center mt-[4]"
                    style={{ fontSize: 8 }}
                  >
                    Happy or Sad?
                  </Text>
                </View>

                <View>
                  <Text>{`Mood \nCheck`}</Text>
                  <Text
                    className="text-[#4A1A4AB2]"
                    style={{ fontSize: 10 }}
                  >
                    {`tell us how \nyou feel \ntoday`}
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => router.push("/(child)/other-routes/journal")}
              >
                <View className="p-[10] bg-[#51F88EBF] rounded-[12] flex-row gap-[8]">
                  <View className="bg-white p-[5] rounded-[12] justify-center items-center">
                    <LottieView
                      source={{
                        uri: "https://lottie.host/b16e1026-11c6-4367-ae8f-94dd509ef06e/V4I5HIXAsK.lottie",
                      }}
                      loop
                      autoPlay
                      style={{ height: 45, width: 45 }}
                    />
                  </View>

                  <View>
                    <Text>{`Mini \nJournal`}</Text>
                    <Text
                      className="text-[#4A1A4AB2]"
                      style={{ fontSize: 10 }}
                    >
                      {`Write or \ndoodle about \nyour day`}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>

          <View className="bg-white p-[15] rounded-[12] mt-[15]">
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
                fill={"#4A90E2"}
              />
            </View>

            <View className="h-[48] rounded-[12] overflow-hidden flex-row my-[12]">
              <View className="w-[25%] bg-[#60A5FA73]  items-center justify-center">
                <Text className="text-white text-lg">Stable</Text>
              </View>

              <View className="w-[25%] bg-[#FACC154D]  items-center justify-center">
                <Text className=" text-lg">Mild</Text>
              </View>

              <View className="w-[25%] bg-[#FB923C4D]  items-center justify-center">
                <Text className=" text-lg">Elevated</Text>
              </View>

              <View className="w-[25%] bg-[#EF44444D]  items-center justify-center">
                <Text className=" text-lg">High Risk</Text>
              </View>
            </View>
            <Text className="text-[#334155]">
              Based on shared mood and activity patterns
            </Text>
          </View>

          <View className="my-[25]">
            <Text
              className="text-xl"
              font="poppins-medium"
            >
              Today's Overview
            </Text>

            <View className="mt-[15] flex-row justify-between flex-wrap gap-y-[10]">
              <View className="bg-[#4A90E2BF] rounded-[12] p-[12] w-[48%] justify-between">
                <View>
                  <View className="h-[44] w-[44] rounded-[22] bg-white items-center justify-center">
                    <ChartSpline
                      size={25}
                      color={"#4A90E2BF"}
                    />
                  </View>
                  <Text
                    className="text-xl text-white mt-[10] mb-[5]"
                    font="poppins-bold"
                  >
                    Journal Activity
                  </Text>

                  <Text
                    className="text-white"
                    numberOfLines={5}
                  >
                    You've written 3 journal entries this week. Writing helps
                    you understand your feelings better
                  </Text>
                </View>
                <View className="flex-row ">
                  <TouchableOpacity
                    className="bg-white rounded-[50] px-[15] py-[10] mt-[15]"
                    onPress={() => router.push("/other-routes/draw")}
                  >
                    <Text className="text-[#4B2E83] text-sm">
                      Draw something
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="bg-[#A5D22DBF] rounded-[12] p-[12] w-[48%] justify-between">
                <View>
                  <View className="h-[44] w-[44] rounded-[22] bg-white items-center justify-center">
                    <LottieView
                      source={{
                        uri: "https://lottie.host/4b52c942-25c0-4a89-8996-685939395c7d/bW8An7BNRZ.lottie",
                      }}
                      loop
                      autoPlay
                      style={{ height: 25, width: 25 }}
                    />
                  </View>
                  <Text
                    className="text-xl text-white mt-[10] mb-[5]"
                    font="poppins-bold"
                  >
                    Today’s Mood
                  </Text>

                  <Text className="text-white">
                    Feeling Happy Today Keep that smile going 😊” or “It’s okay
                    to have ups and downs.
                  </Text>
                </View>

                <View className="flex-row">
                  <TouchableOpacity className="bg-white rounded-[50] px-[15] py-[10] mt-[15]">
                    <Text className="text-[#4B2E83] text-sm">Update mood</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="bg-[#EB996EBF] rounded-[12] p-[12] w-[48%] justify-between">
                <View>
                  <View className="h-[44] w-[44] rounded-[22] bg-white items-center justify-center">
                    <Image
                      source={require("@/src/assets/images/project-images/growing-graph.png")}
                      style={{ height: 25, width: 25 }}
                    />
                  </View>
                  <Text
                    className="text-xl text-white mt-[10] mb-[5]"
                    font="poppins-bold"
                  >
                    My Progress
                  </Text>

                  <Text className="text-white">
                    You’re doing great! You’ve completed 70% of your weekly
                    goals.
                  </Text>
                </View>

                <View className="flex-row">
                  <TouchableOpacity className="bg-white rounded-[50] px-[15] py-[10] mt-[15]">
                    <Text className="text-[#4B2E83] text-sm">Update mood</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="bg-[#22C55EBF] rounded-[12] p-[12] w-[48%] justify-between">
                <View>
                  <View className="h-[44] w-[44] rounded-[22] bg-white items-center justify-center">
                    <Image
                      source={require("@/src/assets/images/project-images/businessman.png")}
                      style={{ height: 25, width: 25 }}
                    />
                  </View>
                  <Text
                    className="text-xl text-white mt-[10] mb-[5]"
                    font="poppins-bold"
                  >
                    Today’s Challenge
                  </Text>

                  <Text className="text-white">
                    Say something nice to a friend or family member. Little acts
                    of kindness make big smiles.
                  </Text>
                </View>

                <View className="flex-row">
                  <TouchableOpacity className="bg-white rounded-[50] px-[15] py-[10] mt-[15]">
                    <Text className="text-[#4B2E83] text-sm">mark as done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View className="flex-row justify-between items-center">
              <Text
                className="text-xl text-[#4B2E83]"
                font="poppins-medium"
              >
                Achievements
              </Text>

              <Text className="text-[#4B2E83]">See all {">"}</Text>
            </View>
            <ScrollView
              style={{
                marginTop: 15,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            >
              {Array.from({ length: 8 }, (_, i) => (
                <View
                  key={i}
                  className="h-[48] w-[48]  bg-[#4A90E273] overflow-hidden rounded-[24] items-center justify-center"
                >
                  <Image
                    source={require("@/src/assets/images/project-images/cup.png")}
                    style={{ height: 32, width: 20 }}
                    contentFit="contain"
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          <DailyTips />

          <View className="mt-[15]">
            <Text
              className="text-xl text-[#4B2E83]"
              font="poppins-medium"
            >
              Activity Suggestion
            </Text>

            <View className="mt-[10] gap-[10]">
              <TouchableOpacity className="bg-[#BDEAF973] p-[15] rounded-[12] flex-row gap-[8] items-center">
                <View className="h-[48] w-[48] rounded-[24] bg-[#BDEAF973] items-center justify-center">
                  <BicepsFlexed
                    size={25}
                    color={"#2563EB"}
                  />
                </View>

                <View>
                  <Text>Try a 5-minute stretch</Text>
                  <Text className="text-[#4A1A4A99]">
                    Move your body and feel great!
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#98FFBE73] p-[15] rounded-[12] flex-row gap-[8] items-center">
                <View className="h-[48] w-[48] rounded-[24] bg-[#DCFCE7] items-center justify-center">
                  <Headphone
                    size={25}
                    color={"#16A34A"}
                    variant="Bold"
                  />
                </View>

                <View>
                  <Text>Listen to calming music</Text>
                  <Text className="text-[#4A1A4A99]">
                    Relax with your favorite tunes
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#C2F0FF73] p-[15] rounded-[12] flex-row gap-[8] items-center">
                <View className="h-[48] w-[48] rounded-[24] bg-[#FCE7F3] items-center justify-center">
                  <Message
                    size={25}
                    color={"#DB2777"}
                    variant="Bold"
                  />
                </View>

                <View>
                  <Text>Share a happy thought</Text>
                  <Text className="text-[#4A1A4A99]">
                    Spread some positivity!
                  </Text>
                </View>
              </TouchableOpacity>

              <View className="bg-[#CDFCDF73] p-[15] rounded-[12] flex-row gap-[5] items-center justify-center">
                <Cup
                  size={20}
                  variant="Bold"
                  color="#EAB308"
                />
                <Text>Next reward unlocks in 2 quests!</Text>
                <View className="flex-row gap-[2]">
                  <View className="h-[8] w-[8] rounded-[4] bg-[#EAB308]" />
                  <View className="h-[8] w-[8] rounded-[4] bg-[#EAB308]" />
                  <View className="h-[8] w-[8] rounded-[4] bg-[#D1D5DB]" />
                  <View className="h-[8] w-[8] rounded-[4] bg-[#D1D5DB]" />
                </View>
              </View>
            </View>
          </View>

          <View className="bg-white px-[15] py-[8] my-[20] rounded-[12] flex-row gap-[5] items-center justify-center">
            <Text className="text-[#4A1A4A99] text-center">
              🔒 Your journal is private. Only you and your parent can see it
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChildDashboard;
