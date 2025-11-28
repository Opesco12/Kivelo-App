import { Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

const Settings = () => {
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
              Settings
            </Text>
          </View>

          <View
            className="flex-1 mt-[80] bg-[#F9FAFB] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
              paddingBottom: Platform.OS === "ios" ? 60 : 110,
            }}
          ></View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Settings;
