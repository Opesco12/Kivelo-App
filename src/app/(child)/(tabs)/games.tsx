import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Avatar1 from "@/src/assets/images/svg/Avatar1";
import FirstPlaceBadge from "@/src/assets/images/svg/FirstPlaceBadge";
import NotificationBadge from "@/src/components/ui/NotificationBadge";
import Text from "@/src/components/ui/Text";
import { useAuth } from "@/src/context/auth-provider";

const { height, width } = Dimensions.get("screen");

const Games = () => {
  const { user } = useAuth();
  const firstName = user?.name ? user.name.split(" ")[0] : "";

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <ImageBackground
        style={{ height: height, width: width }}
        source={require("@/src/assets/images/project-images/child-chat-bg.svg")}
      >
        <SafeAreaView className="flex-1">
          <View className="flex-row gap-[10] px-[15] mt-[20]">
            <View className="relative">
              <Avatar1
                height={40}
                width={40}
              />

              <View
                style={{
                  position: "absolute",
                  bottom: -5,
                  right: -5,
                  zIndex: 1,
                }}
              >
                <FirstPlaceBadge
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
            </View>
            <View className="flex-row items-center justify-between flex-1">
              <View>
                <Text
                  className="text-2xl"
                  font="poppins-bold"
                >
                  {`Hello, ${firstName}`}
                </Text>
                <Text
                  className="text-[#6B7280]"
                  font="poppins-medium"
                >
                  Ready to learn and play today?
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
      </ImageBackground>
    </View>
  );
};

export default Games;
