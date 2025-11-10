import { Checkbox } from "expo-checkbox";
import { Formik } from "formik";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View className="flex-1 bg-white px-[15]">
      <StatusBar style="dark" />
      <SafeAreaView
        className="flex-1"
        edges={["top"]}
      >
        <View style={{ marginVertical: 10 }}>
          <BackButton style={{ backgroundColor: "#F5F5F5" }} />
        </View>

        <View className="flex-1">
          <Text className="text-3xl text-center mb-[15]">
            Create Your Account
          </Text>
          <Text className="text-center text-xl mb-[25]">
            Parent Registration
          </Text>
          <View className="flex-1 bg-[#F5F5F5] rounded-[12] mb-[20] px-[10] py-[20]">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                fullName: "",
              }}
              onSubmit={() => console.log("")}
            >
              {({ handleChange, values }) => (
                <View className="gap-[10]">
                  <Text className="text-xl">Register with your email</Text>

                  <TextField
                    name="fullName"
                    label="Full Name"
                    onChangeText={handleChange("fullName")}
                    value={values.fullName}
                  />

                  <TextField
                    label="Email Address"
                    name="email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <TextField
                    label="Set Password"
                    name="password"
                    onChangeText={handleChange("password")}
                    value={values.password}
                    secureTextEntry
                  />

                  <View
                    className="flex-row items-center"
                    style={{ gap: 5, marginTop: 5, marginBottom: 25 }}
                  >
                    <Checkbox
                      value={isChecked}
                      style={{ height: 16, width: 16 }}
                      onValueChange={setIsChecked}
                      color={isChecked ? "#2563EB" : "#1E1E1E80"}
                    />

                    <Text style={{ fontSize: 11 }}>
                      I agree to the{" "}
                      <Text style={{ color: "#2563EB" }}>
                        Terms and Conditions
                      </Text>{" "}
                      and{" "}
                      <Text style={{ color: "#2563EB" }}>Privacy Policy</Text>
                    </Text>
                  </View>

                  <GradientButton
                    onPress={() => router.push("/(parent)/auth/verify-account")}
                    text="Signup"
                    disabled={!isChecked}
                  />
                </View>
              )}
            </Formik>

            <View className="flex-1 flex-row gap-[10] items-end justify-center pb-[25]">
              <Text>Already Have An Account?</Text>
              <Pressable onPress={() => router.push("/(parent)/auth/login")}>
                <Text className="text-[#2563EB]">Login</Text>
              </Pressable>
            </View>
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

export default SignUp;
