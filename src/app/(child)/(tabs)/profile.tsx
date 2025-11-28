import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Settings, Star } from "lucide-react-native";
import {
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Avatar1 from "@/src/assets/images/svg/Avatar1";
import Avatar2 from "@/src/assets/images/svg/Avatar2";
import Avatar3 from "@/src/assets/images/svg/Avatar3";
import FirstPlaceBadge from "@/src/assets/images/svg/FirstPlaceBadge";
import FivePointedStar from "@/src/assets/images/svg/FivePointedStar";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";

const Profile = () => {
  return (
    <View className="flex-1 bg-[#B39DDB]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView className="flex-1">
          <View className="items-end px-[15] mt-[10]">
            <Settings
              size={30}
              color={Colors.light.white}
              onPress={() =>
                router.push("/(child)/other-routes/profile/settings")
              }
            />
          </View>
          <Text
            className="text-xl text-center text-white"
            font="poppins-medium"
          >
            Profile
          </Text>

          <View className="my-[20] relative px-[15]">
            <View className="h-[120] rounded-[25] overflow-hidden">
              <LinearGradient
                colors={["#294F7C", "#4A90E2"]}
                style={{ flex: 1 }}
              ></LinearGradient>
            </View>

            <View className="flex-row absolute justify-between items-center w-[100%] bottom-[-30] left-[15] px-[15]">
              <Pressable
                onPress={() =>
                  router.push("/(child)/other-routes/profile/customize-profile")
                }
              >
                <View className="relative">
                  <Avatar1
                    height={100}
                    width={100}
                  />

                  <View
                    style={{
                      position: "absolute",
                      bottom: -10,
                      right: -10,
                      zIndex: 1,
                    }}
                  >
                    <FirstPlaceBadge
                      style={{
                        height: 60,
                        width: 60,
                      }}
                    />
                  </View>
                </View>
              </Pressable>

              <View className="bg-white rounded-[12] p-[12]">
                <Text
                  className="text-[#4A90E2] text-center text-lg"
                  font="poppins-medium"
                >
                  Your points
                </Text>

                <View className="bg-[#F9F9F9] flex-row items-center rounded-[12] gap-[5] p-[5]">
                  <FivePointedStar style={{ height: 40, width: 40 }} />
                  <Text
                    className="text-[#E9962E] text-xl"
                    font="poppins-bold"
                  >
                    500,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            className="flex-1 mt-[70] bg-[#f5f5f5] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
              paddingBottom: Platform.OS === "ios" ? 60 : 110,
            }}
          >
            <View
              className="bg-white p-[15] rounded-[12] mt-[-30]"
              style={{ elevation: 5 }}
            >
              <View className="flex-row justify-between items-center ">
                <View className="">
                  <Text className="text-xl mb-[5]">Your Progress</Text>
                  <Text className="text-[#666666]">
                    You played one game this week
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
              <TouchableOpacity className="h-[45] rounded-[50] bg-[#4A90E2] items-center justify-center mt-[20]">
                <Text className="text-white">Continue where you left off</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="h-[45] rounded-[50] bg-[#FB923C] items-center justify-center mt-[20]">
              <Text
                className="text-white text-2xl"
                font="poppins-bold"
              >
                Leaderboard
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-between bg-white my-[20] p-[15] rounded-[12] ">
              <View className="relative">
                <Avatar2 style={{ height: 70, width: 70 }} />

                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={4}>
                    {(index) => (
                      <FivePointedStar
                        key={index}
                        style={{ height: 15, width: 11 }}
                      />
                    )}
                  </Repeat>
                </View>
              </View>

              <View className="relative">
                <Avatar1
                  height={100}
                  width={100}
                />

                <View
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: -10,
                    zIndex: 1,
                  }}
                >
                  <FirstPlaceBadge
                    style={{
                      height: 60,
                      width: 60,
                    }}
                  />
                </View>
                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={5}>
                    {(index) => (
                      <FivePointedStar
                        key={index}
                        style={{ height: 15, width: 11 }}
                      />
                    )}
                  </Repeat>
                </View>
              </View>

              <View className="relative">
                <Avatar3 style={{ height: 70, width: 70 }} />

                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={3}>
                    {(index) => (
                      <FivePointedStar
                        key={index}
                        style={{ height: 15, width: 11 }}
                      />
                    )}
                  </Repeat>
                </View>
              </View>
            </View>

            <View className="bg-white rounded-[12] p-[15] gap-[15]">
              <Repeat times={5}>
                {(item) => (
                  <View
                    key={item}
                    style={{ borderWidth: 1, borderStyle: "dashed" }}
                    className="p-[10] flex-row rounded-[12] justify-between items-center"
                  >
                    <View className="flex-row gap-[15] items-center">
                      <Avatar1 style={{ height: 45, width: 45 }} />

                      <Text>Favour Theodeon</Text>
                    </View>

                    <View className="bg-[#E5E7EB8F] h-[35] w-[35] rounded-[15] items-center justify-center">
                      <Text>1</Text>
                    </View>
                  </View>
                )}
              </Repeat>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const Repeat: React.FC<{
  times: number;
  children: (index: number) => React.ReactNode;
}> = ({ times, children }) => (
  <>{Array.from({ length: times }, (_, i) => children(i))}</>
);
