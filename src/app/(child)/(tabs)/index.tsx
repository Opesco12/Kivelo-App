import { Image } from "expo-image";
import { Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { CircleAlert, Heart, Mic, Palette } from "lucide-react-native";

const ChildDashboard = () => {
  return (
    <View className="flex-1">
      <View className="h-[120] bg-[#ADD7F4]">
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

      <View className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            paddingBottom: Platform.OS === "android" ? 110 : 60,
          }}
        >
          <View className="bg-white p-[15] rounded-[12]">
            <Text className="text-xl">This Week's Moods</Text>

            <View className="bg-[#DEF7FF73] py-[15] items-center justify-center">
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
                    style={{ fontSize: 12 }}
                  >
                    {`tell us how \nyou feel \ntoday`}
                  </Text>
                </View>
              </View>

              <View className="p-[10] bg-[#9EC9FBBF] rounded-[12] flex-row gap-[8]">
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
                  <Text>{`Mood \nCheck`}</Text>
                  <Text
                    className="text-[#4A1A4AB2]"
                    style={{ fontSize: 12 }}
                  >
                    {`tell us how \nyou feel \ntoday`}
                  </Text>
                </View>
              </View>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default ChildDashboard;
