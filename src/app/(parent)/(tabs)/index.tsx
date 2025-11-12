import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppOffers from "@/src/components/parent/dashboard/AppOffers";
import Tips from "@/src/components/parent/dashboard/Tips";
import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";

const ParentDashboard = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pt-[15]"
        >
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

          <View className="h-[160] bg-[#FF725E8C] my-[25] rounded-[12] flex-row overflow-hidden">
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

              <TouchableOpacity className="bg-white w-[120] mt-[5] py-[10] rounded-[100] items-center justify-center">
                <Text className="text-sm">Learn More</Text>
              </TouchableOpacity>
            </View>
            <View className="w-[40%]">
              <Image
                source={require("@/src/assets/images/project-images/banner-image.png")}
              />
            </View>
          </View>

          <AppOffers />

          <Tips />

          <View className="mb-[25]">
            <Text
              className="text-[#4A90E2]"
              style={{ fontSize: 20 }}
              font="poppins-medium"
            >
              Go to Dashboard
            </Text>
            <Text className="text-[#4B5563]">
              See your child’s well-being updates, Track, Understand & Support
              your child, emotionally and otherwise.
            </Text>

            <TouchableOpacity className="bg-[#9637EC] w-[130] items-center justify-center py-[10] rounded-[100] my-[10]">
              <Text className="text-white">Go to dashboard</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ParentDashboard;
