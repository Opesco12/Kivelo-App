import { Settings } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";

const Notifications = () => {
  const tabs = ["All", "Games", "Journal", "System Updates"];

  const [selected, setSelected] = useState("all");

  return (
    <View className="flex-1 bg-[#B39DDB]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1">
          <View className="flex-row justify-between items-center px-[15]">
            <BackButton />
            <Text
              className="text-xl text-white"
              font="poppins-medium"
            >
              Notifications
            </Text>
            <Settings
              size={30}
              color={Colors.light.white}
              onPress={() =>
                router.push("/(child)/other-routes/profile/settings")
              }
            />
          </View>
          <View className="px-[15] my-[20]">
            <View className="px-[15] py-[20] bg-white rounded-[12] flex-row justify-between items-center">
              <Text style={styles.active}>All</Text>
              <Text>Games</Text>
              <Text>Journal</Text>
              <Text>System Updates</Text>
            </View>
          </View>
          <View
            className="flex-1 mt-[70] bg-[#F9FAFB] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
            }}
          >
            <View className="px-[15] py-[25]  bg-white gap-[15]  rounded-[16] mt-[-50]"></View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#B39DDB",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 50,
    color: Colors.light.white,
  },
});

export default Notifications;
