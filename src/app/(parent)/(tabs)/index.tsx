import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";

const ParentDashboard = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 mt-[10] px-[15]">
        <View className="flex-row gap-[10]">
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
                Hello, Bella
              </Text>
              <Text
                className="text-[#6B7280]"
                font="poppins-medium"
              >
                Welcome Back Today!
              </Text>
            </View>

            <NotificationBadge />
          </View>
        </View>

        <View className="h-[160] bg-[#FF725E8C] my-[25] rounded-[12]">
          <View className="px-[8] py-[10]">
            <Text
              className="text-white text-2xl"
              font="poppins-bold"
            >
              Welcome to Kivelo
            </Text>
            <Text
              className="text-white"
              font="poppins-medium"
            >
              Your trusted space to support and understand your child
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ParentDashboard;
