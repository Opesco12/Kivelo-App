import { ImageBackground } from "expo-image";
import {
  Bell,
  ChevronRight,
  Heart,
  Lightbulb,
  Link,
  LogOut,
  Palette,
  Shield,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "@/src/components/ui/Text";
import { useAuth } from "@/src/context/auth-provider";
import { useLogout } from "@/src/services/hooks/parent/use-logout";

const { height, width } = Dimensions.get("screen");

const Settings = () => {
  const { clearUser } = useAuth();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacySafetyEnabled, setPrivacySafetyEnabled] = useState(false);

  const settingsItems = [
    {
      title: "Notifications",
      icon: Bell,
      iconBg: "#FBBF24",
      hasSwitch: true,
      value: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
    {
      title: "Privacy and safety",
      icon: Shield,
      iconBg: "#14B8A6",
      hasSwitch: true,
      value: privacySafetyEnabled,
      onToggle: setPrivacySafetyEnabled,
    },
    {
      title: "Themes",
      icon: Palette,
      iconBg: "#C4B5FD",
      hasSwitch: false,
    },
    {
      title: "Linked accounts",
      icon: Link,
      iconBg: "#FDA4AF",
      hasSwitch: false,
    },
    {
      title: "Parental Guidance",
      icon: Heart,
      iconBg: "#F87171",
      hasSwitch: false,
    },
    {
      title: "Help & Tips",
      icon: Lightbulb,
      iconBg: "#FBBF24",
      hasSwitch: false,
    },
    {
      title: "Logout",
      icon: LogOut,
      iconBg: "#F87171",
      hasSwitch: false,
      onPress: () => handleLogout(),
    },
  ];

  const mutation = useLogout();

  const handleLogout = () => {
    mutation.mutate(undefined, {
      onSuccess: ({ data, status }) => {
        console.log(data);
        clearUser();
      },
      onError: (error: any) => {
        clearUser();
      },
    });
  };

  return (
    <ImageBackground
      style={{ width: width, height: height }}
      source={require("@/src/assets/images/project-images/parent-settings-background.svg")}
    >
      <SafeAreaView className="flex-1 px-[15] mt-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 100,
          }}
        >
          <View className="flex-row justify-between items-center">
            <Image
              source={{ uri: "https://picsum.photos/40" }}
              className="h-[40] w-[40] rounded-[20]"
            />
            <Text className="text-2xl text-white font-bold">Settings</Text>

            <TouchableOpacity className="bg-[#FFFFFF26] h-[48] w-[48] rounded-[24] items-center justify-center">
              <Palette
                size={25}
                color={"#FBBF24"}
                // stroke={"#FFFFFF26"}
              />
            </TouchableOpacity>
          </View>

          <View className="mt-[20] gap-[15]">
            {settingsItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  activeOpacity={item.hasSwitch ? 1 : 0.4}
                  key={index}
                  className="bg-[#FFFFFF26] h-[80] rounded-[16] px-[15] flex-row items-center justify-between"
                >
                  <View
                    className="h-[48] w-[48] rounded-[12] items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon
                      size={22}
                      color={"#FFF"}
                      // strokeWidth={0}
                    />
                  </View>

                  <Text className="text-white text-xl flex-1 ml-[15]">
                    {item.title}
                  </Text>

                  {item.hasSwitch ? (
                    <Switch
                      style={{ alignSelf: "center" }}
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: "#FDA4AF", true: "#14B8A6" }}
                      thumbColor={"#FFF"}
                      ios_backgroundColor="#4B5563"
                    />
                  ) : (
                    <ChevronRight
                      size={24}
                      color="#FFF"
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Settings;
