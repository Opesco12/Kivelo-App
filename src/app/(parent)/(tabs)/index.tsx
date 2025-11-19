import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import AppOffers from "@/src/components/parent/dashboard/AppOffers";
import Tips from "@/src/components/parent/dashboard/Tips";
import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ParentDashboard = () => {
  return (
    <Screen padBottom>
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

      <View className="min-h-[160] bg-[#FF725E8C] my-[25] rounded-[12] flex-row overflow-hidden">
        <View className="pl-[12] py-[14] w-[60%]">
          <Text
            className="text-white"
            font="poppins-bold"
            style={{ fontSize: 22 }}
          >
            Welcome to Kivelo
          </Text>
          <Text
            className="text-white my-[6]"
            font="poppins-medium"
            style={{ fontSize: 14 }}
          >
            Your trusted space to support and understand your child
          </Text>

          <TouchableOpacity
            className="bg-white w-[120] mt-[5] py-[10] rounded-[100] items-center justify-center"
            onPress={() => router.push("/(parent)/other-routes/learn-more")}
          >
            <Text className="text-sm">Learn More</Text>
          </TouchableOpacity>
        </View>
        <View className="w-[40%] justify-end">
          <Image
            style={{ alignSelf: "flex-end" }}
            source={require("@/src/assets/images/project-images/banner-image.png")}
          />
        </View>
      </View>

      <AppOffers />

      <Tips />

      <View className="]">
        <Text
          className="text-[#4A90E2]"
          style={{ fontSize: 20 }}
          font="poppins-medium"
        >
          Go to Dashboard
        </Text>
        <Text className="text-[#4B5563]">
          See your child’s well-being updates, Track, Understand & Support your
          child, emotionally and otherwise.
        </Text>

        <TouchableOpacity
          className="bg-[#9637EC] w-[130] items-center justify-center py-[10] rounded-[100] mt-[10]"
          onPress={() => router.push("/other-routes/child-wellness")}
        >
          <Text className="text-white">Go to dashboard</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default ParentDashboard;
