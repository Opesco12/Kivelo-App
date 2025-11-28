import {
  Bell,
  ChevronRight,
  Lightbulb,
  Music,
  Palette,
  Shield,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacySafetyEnabled, setPrivacySafetyEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const settingsItems = [
    {
      title: "Notifications",
      icon: Bell,
      iconBg: "#FBBF24",
      bgColor: "#E5E7EB",
      hasSwitch: true,
      value: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
    {
      title: "Privacy and safety",
      icon: Shield,
      iconBg: "#14B8A6",
      bgColor: "#E5E7EB",
      hasSwitch: true,
      value: privacySafetyEnabled,
      onToggle: setPrivacySafetyEnabled,
    },
    {
      title: "Sound",
      icon: Music,
      iconBg: "#14B8A6",
      bgColor: "#E5E7EB",
      hasSwitch: true,
      value: soundEnabled,
      onToggle: setSoundEnabled,
    },
    {
      title: "Themes",
      icon: Palette,
      iconBg: "#C4B5FD",
      bgColor: "#E5E7EB",
      hasSwitch: false,
    },
    {
      title: "Help & Support",
      icon: Lightbulb,
      iconBg: "#FBBF24",
      bgColor: "#E5E7EB",
      hasSwitch: false,
    },
  ];
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
            className="flex-1 mt-[100] bg-[#f5f5f5] px-[15]"
            style={{
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
              paddingBottom: 30,
            }}
          >
            <View className="px-[15] py-[25]  bg-white gap-[15]  rounded-[16] mt-[-50]">
              {settingsItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <TouchableOpacity
                    activeOpacity={item.hasSwitch ? 1 : 0.4}
                    key={index}
                    className={`bg-[${item.bgColor}] py-[20] rounded-[16] px-[15] flex-row items-center justify-between`}
                  >
                    <View
                      className="h-[48] w-[48] rounded-[12] items-center justify-center"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <Icon
                        size={22}
                        color={"#FFFFFF"}
                      />
                    </View>

                    <Text className=" text-xl flex-1 ml-[15]">
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

            <TouchableOpacity className="h-[60] rounded-[50] my-[20] bg-[#9333EA] items-center justify-center">
              <Text
                className="text-white text-lg"
                font="poppins-medium"
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Settings;
