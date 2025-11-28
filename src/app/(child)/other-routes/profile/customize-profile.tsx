import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";

const CustomizeProfile = () => {
  return (
    <View className="flex-1 bg-[#B39DDB]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1">
          <View className="flex-row justify-between items-center h-[45]">
            <BackButton style={{ position: "absolute", left: 15 }} />
            <Text
              className="text-xl text-white text-center w-[100%]"
              font="poppins-medium"
            >
              Choose Avatar
            </Text>
          </View>

          <View
            className="flex-1 mt-[80] bg-[#f5f5f5] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
              paddingBottom: 30,
            }}
          >
            <View className="px-[15] py-[25]  bg-white gap-[15]  rounded-[16] mt-[-50]">
              <Image
                source={require("@/src/assets/images/project-images/avatar1.svg")}
                style={{ height: 80, width: 80 }}
              />

              <View className="flex-row">
                <TouchableOpacity className="bg-[#4A90E2] py-[10] px-[15] rounded-[50]">
                  <Text className="text-white">Select your avatar</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row flex-wrap justify-between gap-y-[15] mt-[25]">
                <Image
                  source={require("@/src/assets/images/project-images/avatar1.svg")}
                  style={{ height: 80, width: 80 }}
                />
                <Image
                  source={require("@/src/assets/images/project-images/avatar2.svg")}
                  style={{ height: 80, width: 80 }}
                />
                <Image
                  source={require("@/src/assets/images/project-images/avatar3.svg")}
                  style={{ height: 80, width: 80 }}
                />

                <Image
                  source={require("@/src/assets/images/project-images/avatar1.svg")}
                  style={{ height: 80, width: 80 }}
                />

                <Image
                  source={require("@/src/assets/images/project-images/avatar2.svg")}
                  style={{ height: 80, width: 80 }}
                />
                <Image
                  source={require("@/src/assets/images/project-images/avatar3.svg")}
                  style={{ height: 80, width: 80 }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default CustomizeProfile;
