import { ScrollView, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  className?: string;
};

const Screen = ({ children, style, className }: ScreenProps) => {
  return (
    <View
      className={`flex-1 ${className ?? ""}`}
      style={style}
    >
      <SafeAreaView className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pt-[20] pb-[50]"
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
