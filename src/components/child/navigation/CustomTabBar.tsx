import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import LottieView from "lottie-react-native";
import { Activity, House, MessageSquare, Settings } from "lucide-react-native";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "@/src/components/ui/Text";

const { width } = Dimensions.get("screen");

const TabBarWidth = 0.95 * width;

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const icons: { [key: string]: any } = {
    index: House,
    "learning-hub": null,
    insights: Activity,
    messages: MessageSquare,
    settings: Settings,
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const Icon = icons[route.name];
          const color = isFocused ? "#9333EA" : "#6B7280";

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tab}
            >
              {route.name === "learning-hub" ? (
                <LottieView
                  source={{
                    uri: "https://lottie.host/c70e318d-3128-464e-8587-a486fe160381/k2tpBmQjzA.lottie",
                  }}
                  style={{ height: 21, width: 45 }}
                  autoPlay
                  loop
                />
              ) : (
                Icon && (
                  <Icon
                    size={20}
                    color={color}
                  />
                )
              )}
              <Text style={[styles.label, { color }]}>
                {route.name === "index"
                  ? "Home"
                  : route.name === "learning-hub"
                    ? "Learning Hub"
                    : route.name.charAt(0).toUpperCase() + route.name.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: TabBarWidth,
    alignSelf: "center",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 15,
    left: (width - TabBarWidth) / 2,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: "500",
  },
});
