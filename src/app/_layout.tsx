import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "@/global.css";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Italic": require("@/src/assets/fonts/Poppins-Bold.ttf"),
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
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(child)" />
      <Stack.Protected guard>
        {/* <Stack.Screen name="(onboarding)" /> */}
      </Stack.Protected>
      <Stack.Screen name="(parent)" />
    </Stack>
  );
}
