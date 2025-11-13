import { Tabs } from "expo-router";

import CustomTabBar from "@/src/components/parent/navigation/CustomTabBar";

export default function ParentTabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="learning-hub" />
      <Tabs.Screen name="insights" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
