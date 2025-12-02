import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox } from "expo-checkbox";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

// Validation Schema with Yup
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase, lowercase, number and special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .test("age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age >= 18;
    }),
});

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dob, setDob] = useState<Date | null>(null);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <View className="flex-1 bg-white px-[15]">
      <StatusBar style="dark" />
      <SafeAreaView
        className="flex-1"
        edges={["top"]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
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
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  dob: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form submitted:", values);
                  router.push("/(parent)/auth/verify-account");
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  setFieldTouched,
                }) => (
                  <View className="gap-[10]">
                    <Text className="text-xl mb-4">
                      Register with your email
                    </Text>

                    <TextField
                      name="firstname"
                      label="First Name"
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                    />

                    <TextField
                      name="lastname"
                      label="Last Name"
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                    />

                    <TextField
                      label="Email Address"
                      name="email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />

                    <TextField
                      label="Set Password"
                      name="password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                    />

                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry
                    />

                    <View className="mt-2  rounded-[12]">
                      <Text className="font-medium mb-1 text-gray-700 ">
                        Date of Birth
                      </Text>
                      <Pressable
                        onPress={() => setShowDatePicker(true)}
                        className="border-[#D1D5DB] h-[60] border-2 rounded-lg px-4 py-3 bg-white justify-center"
                      >
                        <Text style={{ fontSize: 18 }}>
                          {dob
                            ? dob.toLocaleDateString()
                            : "Tap to select your date of birth"}
                        </Text>
                      </Pressable>
                      {touched.dob && errors.dob && (
                        <Text className="text-red-500 text-xs mt-1">
                          {errors.dob}
                        </Text>
                      )}
                      {showDatePicker && (
                        <DateTimePicker
                          value={dob || new Date()}
                          mode="date"
                          display={
                            Platform.OS === "ios" ? "spinner" : "default"
                          }
                          onChange={(event, selectedDate) => {
                            onDateChange(event, selectedDate);
                            if (selectedDate) {
                              setFieldValue("dob", selectedDate.toISOString());
                              setFieldTouched("dob", true);
                            }
                            if (Platform.OS === "android") {
                              setShowDatePicker(false);
                            }
                          }}
                          maximumDate={new Date()}
                        />
                      )}
                    </View>

                    <View
                      className="flex-row items-center mt-4"
                      style={{ gap: 8 }}
                    >
                      <Checkbox
                        value={isChecked}
                        style={{ height: 18, width: 18, borderRadius: 4 }}
                        onValueChange={setIsChecked}
                        color={isChecked ? "#2563EB" : undefined}
                      />
                      <Text style={{ fontSize: 12, flex: 1 }}>
                        I agree to the{" "}
                        <Text style={{ color: "#2563EB" }}>
                          Terms and Conditions
                        </Text>{" "}
                        and{" "}
                        <Text style={{ color: "#2563EB" }}>Privacy Policy</Text>
                      </Text>
                    </View>

                    <GradientButton
                      onPress={handleSubmit}
                      text="Signup"
                      disabled={!isChecked || Object.keys(errors).length > 0}
                    />
                  </View>
                )}
              </Formik>

              <View className="flex-row gap-[10] items-center justify-center mt-6">
                <Text>Already Have An Account?</Text>
                <Pressable onPress={() => router.push("/(parent)/auth/login")}>
                  <Text className="text-[#2563EB] font-medium">Login</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
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
});

export default SignUp;
