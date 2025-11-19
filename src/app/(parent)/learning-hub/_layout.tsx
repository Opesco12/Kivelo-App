import { Stack } from "expo-router";
export default function LearningHubLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "ios_from_right" }}
    />
  );
}
