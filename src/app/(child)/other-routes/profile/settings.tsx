import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

const Settings = () => {
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
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Settings;
