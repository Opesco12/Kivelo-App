import { Stack } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
export default function ParentAuthLayout() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
      keyboardVerticalOffset={5}
    >
      <Stack
        screenOptions={{ headerShown: false, animation: "ios_from_right" }}
      />
    </KeyboardAvoidingView>
  );
}
