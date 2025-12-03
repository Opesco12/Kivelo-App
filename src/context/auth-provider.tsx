import { router, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  //   refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  saveUser: (email: string, accessToken: string, user: User) => Promise<void>;
  clearUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Secure storage keys
const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  //   REFRESH_TOKEN: "refresh_token",
  USER_DATA: "user_data",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  //   const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const segments = useSegments();

  // Load stored auth data on mount
  useEffect(() => {
    loadStoredAuth();
  }, []);

  // Handle navigation based on auth state
  useEffect(() => {
    if (isLoading) return;

    // const inAuthGroup = segments[0] === "(auth)";
    // const inParentAuthGroup = segments[1] === "auth";

    if (!user) {
      // Redirect to login if not authenticated
      router.replace("/(parent)/auth/login");
    } else if (user) {
      // Redirect to home if authenticated and on auth screens
      router.replace("/(parent)/(tabs)");
    }
  }, [user, segments, isLoading]);

  const loadStoredAuth = async () => {
    try {
      const [storedAccessToken, storedUserData] = await Promise.all([
        SecureStore.getItemAsync(STORAGE_KEYS.ACCESS_TOKEN),
        SecureStore.getItemAsync(STORAGE_KEYS.USER_DATA),
      ]);

      if (storedAccessToken && storedUserData) {
        setAccessToken(storedAccessToken);
        setUser(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error("Error loading stored auth:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveUser = async (email: string, accessToken: string, user: User) => {
    try {
      // Store tokens and user data securely
      await Promise.all([
        SecureStore.setItemAsync(STORAGE_KEYS.ACCESS_TOKEN, accessToken),
        SecureStore.setItemAsync(STORAGE_KEYS.USER_DATA, JSON.stringify(user)),
      ]);

      setAccessToken(accessToken);
      setUser(user);
    } catch (error) {
      console.error("Error storing auth data:", error);
      throw error;
    }
  };

  const clearUser = async () => {
    try {
      // Clear all stored data
      await Promise.all([
        SecureStore.deleteItemAsync(STORAGE_KEYS.ACCESS_TOKEN),
        SecureStore.deleteItemAsync(STORAGE_KEYS.USER_DATA),
      ]);

      setAccessToken(null);
      setUser(null);

      router.replace("/(parent)/auth/login");
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    accessToken,
    isLoading,
    isAuthenticated: !!user,
    saveUser,
    clearUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
