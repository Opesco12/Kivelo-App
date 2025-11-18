import { router } from "expo-router";
import { BellRing } from "lucide-react-native";
import { Pressable, View } from "react-native";

import Text from "./Text";

const NotificationBadge = () => {
  return (
    <Pressable onPress={() => router.push("/other-routes/notifications")}>
      <View className="bg-[#FF725E] h-[15] w-[15] rounded-[8] justify-center items-center  absolute top-[-2] right-0 z-10">
        <Text
          className="text-white"
          style={{ fontSize: 9 }}
        >
          15
        </Text>
      </View>
      <BellRing
        size={28}
        strokeWidth={1}
        fill={"#5DADEC"}
        color={"#5DADEC"}
      />
    </Pressable>
  );
};

export default NotificationBadge;
