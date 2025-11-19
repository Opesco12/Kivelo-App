import { View } from "react-native";

import Text from "@/src/components/ui/Text";
import LottieView from "lottie-react-native";

const AllNotifications = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#B8E0FF]">
      <LottieView
        source={{
          uri: "https://lottie.host/1685022b-f82e-425d-9525-0f9d0071f1c4/CgWT0Cz3mf.lottie",
        }}
        style={{
          height: 50,
          width: 50,
        }}
        autoPlay
        loop
      />
      <Text
        className="text-xl text-center"
        font="poppins-medium"
      >
        You're all caught up
      </Text>
      <Text className="text-center">
        We'll notify you when there's something new
      </Text>
    </View>
  );
};

export default AllNotifications;
