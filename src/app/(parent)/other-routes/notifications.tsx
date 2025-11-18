import { StyleSheet, View } from "react-native";

import ParentNotificationTab from "@/src/components/notifications/parent/Index";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={styles.gradient}
        colors={["#6EC5E9", "#3FD0C9"]}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          <BackButton />
          <Text
            className="text-center text-xl "
            font="poppins-medium"
          >
            Notifications
          </Text>
        </SafeAreaView>
      </LinearGradient>
      <ParentNotificationTab />
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 120,
  },
});

export default Notifications;
