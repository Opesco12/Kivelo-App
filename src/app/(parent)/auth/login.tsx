import { Checkbox } from "expo-checkbox";
import { Formik } from "formik";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/src/components/form/Button";
import AnimatedTextField from "@/src/components/form/parent/AnimatedTextField";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: "#A8D5F4" }}
    >
      <SafeAreaView
        className="flex-1"
        edges={["top"]}
      >
        <View style={{ marginVertical: 30, paddingHorizontal: 15 }}>
          <BackButton />
        </View>
        <View
          className="flex-1 bg-white"
          style={styles.container}
        >
          <Text
            font="poppins-medium"
            style={styles.header}
          >
            Login
          </Text>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={() => console.log("")}
          >
            {({ handleChange, values, isSubmitting }) => (
              <View>
                <AnimatedTextField
                  label="Email Address"
                  name="email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                <AnimatedTextField
                  label="Password"
                  name="password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  secureTextEntry
                />

                <View className="flex-row items-center justify-between gap-[5] mt-[5] mb-[25]">
                  <View className="items-center gap-[2] flex-row">
                    <Checkbox
                      value={isChecked}
                      style={{ height: 16, width: 16 }}
                      onValueChange={setIsChecked}
                      color={isChecked ? "#2563EB" : "#1E1E1E80"}
                    />
                    <Text>Remember me</Text>
                  </View>
                  <Pressable
                    onPress={() =>
                      router.push("/(parent)/auth/forgot-password")
                    }
                  >
                    <Text className="text-[#2563EB]">Forgot Password</Text>
                  </Pressable>
                </View>

                <Button
                  text="Login"
                  disabled={isSubmitting}
                />
              </View>
            )}
          </Formik>

          <View className="flex-row items-center my-[10]">
            <View className="w-[45%] h-[1] bg-gray-300" />
            <Text className="text-sm  mx-4">or</Text>
            <View className="w-[45%] h-[1] bg-gray-300" />
          </View>

          <TouchableOpacity
            className="h-[60]  border-[#D1D5DB] justify-center items-center flex-row gap-[5]"
            style={{ borderRadius: 100, borderWidth: 1 }}
          >
            <Text className="text-[#3F3F3F]">Continue Google or Apple</Text>
            <View className="w-[48] h-[48] bg-[#E8E8E8] rounded-full justify-center items-center">
              <Image
                source={require("@/src/assets/images/icons/apple logo.png")}
              />
            </View>
            <View className="w-[48] h-[48] bg-[#E8E8E8] rounded-full justify-center items-center">
              <Image
                source={require("@/src/assets/images/icons/google logo.png")}
              />
            </View>
          </TouchableOpacity>

          <View className="flex-1 flex-row gap-[10] items-end justify-center pb-[25]">
            <Text>Don't Have An Account?</Text>
            <Pressable onPress={() => router.push("/(parent)/auth/signup")}>
              <Text className="text-[#2563EB]">Register</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 26,
    marginVertical: 20,
  },
});

export default Login;
