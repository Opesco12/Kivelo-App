import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "@/global.css";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("@/src/assets/fonts/Poppins-Bold.ttf"),
    RammettoOne: require("@/src/assets/fonts/RammettoOne.ttf"),
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
      screenOptions={{ headerShown: false }}
      initialRouteName="(child)"
    >
      <Stack.Screen name="(child)" />
      {/* <Stack.Screen name="(onboarding)" /> */}
      <Stack.Screen name="(parent)" />
    </Stack>
  );
}
