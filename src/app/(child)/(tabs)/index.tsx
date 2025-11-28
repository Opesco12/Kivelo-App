import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ChildDashboard = () => {
  return (
    <View className="flex-1">
      <View className="h-[120] bg-[#ADD7F4]">
        <SafeAreaView className="flex-1">
          <View className="flex-row gap-[10] px-[15] items-center justify-center flex-1">
            <Image
              source={{ uri: "https://picsum.photos/40" }}
              className="h-[40] w-[40] rounded-[20]"
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
          contentContainerStyle={{ marginTop: 20 }}
        >
          <View className="bg-white p-[15] rounded-[12]">
            <Text className="text-xl">This Week's Moods</Text>

            <View className="bg-[#DEF7FF73] py-[15] items-center justify-center">
              <Text className="text-center">{`You've checked in 4 days in a row \nawesome! ⭐`}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChildDashboard;
