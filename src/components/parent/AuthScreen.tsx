import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

type AuthScreenProps = {
  title?: string;
  children: React.ReactNode;
};

const AuthScreen = ({ title, children }: AuthScreenProps) => {
  return (
    <SafeAreaView className="flex-1 bg-white px-[15]">
      <StatusBar style="dark" />

      <View className="flex-1 my-[20]">
        <View className="h-[45] relative">
          <View className="absolute left-[0] top-[0] z-[10]">
            <BackButton style={{ backgroundColor: "#F6EFEF" }} />
          </View>
          <View className="flex-1 justify-center items-center">
            <Text
              font="poppins-medium"
              style={{ fontSize: 18 }}
            >
              {title}
            </Text>
          </View>
        </View>

        <View className="">{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
