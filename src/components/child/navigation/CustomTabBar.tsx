import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import {
  CircleUser,
  Gamepad2,
  House,
  ListTodo,
  MessageCircleMore,
} from "lucide-react-native";
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
    "check-in": ListTodo,
    games: Gamepad2,
    chat: MessageCircleMore,
    profile: CircleUser,
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={["#294F7C", "#4A90E2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
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
            const color = "#ffffff";

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                style={styles.tab}
              >
                {Icon && (
                  <Icon
                    size={20}
                    color={color}
                  />
                )}
                <Text style={[styles.label, { color }]}>
                  {route.name === "index"
                    ? "Home"
                    : route.name === "learning-hub"
                      ? "Learning Hub"
                      : route.name.charAt(0).toUpperCase() +
                        route.name.slice(1)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: TabBarWidth,
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
    left: (width - TabBarWidth) / 2,
    overflow: "hidden",
    borderRadius: 24,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 12,
    // elevation: 5,
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    padding: 1,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
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
