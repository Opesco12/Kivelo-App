import { Platform, ScrollView, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  className?: string;
  padBottom?: boolean;
};

const Screen = ({ children, style, className, padBottom }: ScreenProps) => {
  return (
    <View
      className={`flex-1 ${className ?? ""}`}
      style={style}
    >
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
            paddingBottom: padBottom ? (Platform.OS === "ios" ? 60 : 110) : 20,
          }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
