import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import "@/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <RootLayout />
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("@/src/assets/fonts/Poppins-Bold.ttf"),
    "RammettoOne-Regular": require("@/src/assets/fonts/RammettoOne-Regular.ttf"),
    "Bauhaus-Regular": require("@/src/assets/fonts/Bauhaus-Regular.ttf"),
    // "Inter-Regular": require("@/src/assets/fonts/Inter-Regular.ttf"),
    // "Inter-Medium": require("@/src/assets/fonts/Inter-Medium.ttf"),
    // "Inter-Bold": require("@/src/assets/fonts/Inter-Bold.ttf"),

    Inter: require("@/src/assets/fonts/Inter.Variable.ttf"),
  });

  useEffect(() => {
    const checkFonts = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    checkFonts();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "ios_from_right" }}
      initialRouteName="(onboarding)"
    >
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(child)" />
      <Stack.Screen name="(parent)" />
    </Stack>
  );
}
