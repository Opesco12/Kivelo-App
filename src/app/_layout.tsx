import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Toaster } from "sonner-native";

import "@/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertProvider } from "../components/ui/Alert";
import { AuthProvider } from "../context/auth-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60, // 1 minute
    },
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <AlertProvider>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
          >
            <RootLayout />
            <Toaster />
          </KeyboardAvoidingView>
        </AlertProvider>
      </AuthProvider>
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
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerShown: false, animation: "ios_from_right" }}
        initialRouteName="(onboarding)"
      >
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(child)" />
        <Stack.Screen name="(parent)" />
      </Stack>
    </QueryClientProvider>
  );
}
