import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Settings } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";

const Profile = () => {
  return (
    <View className="flex-1 bg-[#B39DDB]">
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

          <View className="flex-row absolute justify-between items-center w-[100%] bottom-[-30] px-[15]">
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
          className="flex-1 mt-[70] bg-white px-[15]"
          style={{ borderTopRightRadius: 70, borderTopLeftRadius: 70 }}
        >
          <View className="px-[15] bg-white"></View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
