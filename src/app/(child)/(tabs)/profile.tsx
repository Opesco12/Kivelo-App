import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Settings, Star } from "lucide-react-native";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";

const Repeat: React.FC<{
  times: number;
  children: (index: number) => React.ReactNode;
}> = ({ times, children }) => (
  <>{Array.from({ length: times }, (_, i) => children(i))}</>
);

const Profile = () => {
  return (
    <View className="flex-1 bg-[#B39DDB]">
      <ScrollView>
        <SafeAreaView className="flex-1">
          <View className="flex-row justify-between items-center px-[15]">
            <BackButton />
            <Text
              className="text-xl text-white"
              font="poppins-medium"
            >
              Profile
            </Text>
            <Settings
              size={30}
              color={Colors.light.white}
            />
          </View>

          <View className="my-[20] relative px-[15]">
            <View className="h-[120] rounded-[25] overflow-hidden">
              <LinearGradient
                colors={["#294F7C", "#4A90E2"]}
                style={{ flex: 1 }}
              ></LinearGradient>
            </View>

            <View className="flex-row absolute justify-between items-center w-[100%] bottom-[-30] left-[15] px-[15]">
              <View className="relative">
                <Image
                  source={require("@/src/assets/images/project-images/avatar1.svg")}
                  style={{ height: 100, width: 100 }}
                />
                <Image
                  source={require("@/src/assets/images/project-images/first-place-badge.svg")}
                  style={{
                    height: 50,
                    width: 35,
                    position: "absolute",
                    bottom: -10,
                    right: 5,
                    zIndex: 1,
                  }}
                />
              </View>

              <View className="bg-white rounded-[12] p-[12]">
                <Text
                  className="text-[#4A90E2] text-center text-lg"
                  font="poppins-medium"
                >
                  Your points
                </Text>

                <View className="bg-[#F9F9F9] flex-row items-center rounded-[12] gap-[5] p-[5]">
                  <Image
                    source={require("@/src/assets/images/project-images/five-pointed-star.svg")}
                    style={{ height: 40, width: 40 }}
                  />
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
            className="flex-1 mt-[70] bg-[#F9FAFB] px-[15]"
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

            <View
              className="flex-row items-center justify-between bg-white my-[20] p-[15] rounded-[12] "
              // style={{ elevation: 2 }}
            >
              <View className="relative">
                <Image
                  source={require("@/src/assets/images/project-images/avatar2.svg")}
                  style={{ height: 70, width: 70 }}
                />

                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={4}>
                    {(index) => (
                      <Image
                        key={index}
                        source={require("@/src/assets/images/project-images/five-pointed-star.svg")}
                        style={{ height: 15, width: 11 }}
                      />
                    )}
                  </Repeat>
                </View>
              </View>

              <View className="relative">
                <Image
                  source={require("@/src/assets/images/project-images/avatar1.svg")}
                  style={{ height: 100, width: 100 }}
                />
                <Image
                  source={require("@/src/assets/images/project-images/first-place-badge.svg")}
                  style={{
                    height: 50,
                    width: 35,
                    position: "absolute",
                    bottom: 20,
                    right: 5,
                    zIndex: 1,
                  }}
                />

                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={5}>
                    {(index) => (
                      <Image
                        key={index}
                        source={require("@/src/assets/images/project-images/five-pointed-star.svg")}
                        style={{ height: 15, width: 11 }}
                      />
                    )}
                  </Repeat>
                </View>
              </View>

              <View className="relative">
                <Image
                  source={require("@/src/assets/images/project-images/avatar3.svg")}
                  style={{ height: 70, width: 70 }}
                />

                <View className="flex-row gap-[2] self-center mt-[10]">
                  <Repeat times={3}>
                    {(index) => (
                      <Image
                        key={index}
                        source={require("@/src/assets/images/project-images/five-pointed-star.svg")}
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
                      <Image
                        source={require("@/src/assets/images/project-images/avatar1.svg")}
                        style={{ height: 45, width: 45 }}
                      />

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
