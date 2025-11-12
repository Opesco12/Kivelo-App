import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: React.ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pt-[20]"
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
