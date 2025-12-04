import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox } from "expo-checkbox";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { useState } from "react";
import { Platform, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import { Alert } from "@/src/components/ui/Alert";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

import { useParentRegister } from "@/src/services/hooks/parent/use-parent-register";
import { ParentRegistrationSchema } from "@/src/utils/schemas/auth";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  phoneNo: string;
};

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dob, setDob] = useState<Date | null>(null);

  const formatPhoneNumber = (text: string) => {
    let cleaned = text.replace(/[^\d+]/g, "");

    if (!cleaned.startsWith("+")) {
      cleaned = "+" + cleaned.replace(/\+/g, "");
    }

    cleaned = "+" + cleaned.slice(1).replace(/\+/g, "");

    return cleaned;
  };
  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  const mutation = useParentRegister();

  const handleRegister = (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const { firstname, lastname, dob, email, password, phoneNo } = values;
    const requestData = {
      name: `${firstname} ${lastname}`,
      email: email,
      password: password,
      phone: phoneNo,
      dob: dob?.split("T")[0],
      termsAccepted: isChecked,
    };
    console.log(values);

    mutation.mutate(requestData, {
      onSuccess: ({ data }) => {
        console.log(data);
        Alert.success({
          title: "Registration Succesful",
          subtitle: data?.message,
        });
        setSubmitting(false);
        router.replace({
          pathname: "/(parent)/auth/email-verification-code",
          params: {
            email: values?.email,
          },
        });
      },
      onError: (error: any) => {
        const msg = error.data?.message;
        console.log(msg);
        setSubmitting(false);
        Alert.error({
          title: "Registration Failed",
          subtitle: msg,
        });
      },
    });
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
                enableReinitialize={true}
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  dob: "",
                  phoneNo: "+234",
                }}
                validationSchema={ParentRegistrationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleRegister(values, setSubmitting);
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
                  isSubmitting,
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
                      autoCapitalize="none"
                    />

                    <TextField
                      label="Phone Number"
                      name="phoneNo"
                      placeholder="+2348012345678"
                      onChangeText={(text) => {
                        const formatted = formatPhoneNumber(text);
                        setFieldValue("phoneNo", formatted);
                      }}
                      onBlur={handleBlur("phoneNo")}
                      value={values.phoneNo}
                      keyboardType="phone-pad"
                    />

                    <TextField
                      label="Password"
                      name="password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                      autoCapitalize="none"
                    />

                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry
                      autoCapitalize="none"
                    />

                    <View className="mt-2 rounded-[12]">
                      <Text className="font-medium mb-1 text-gray-700">
                        Date of Birth
                      </Text>
                      <Pressable
                        onPress={() => setShowDatePicker(true)}
                        className="border-[#D1D5DB] h-[60] border-2 rounded-lg px-4 py-3 bg-white justify-center"
                      >
                        <Text
                          style={{
                            fontSize: dob ? 18 : 15,
                            color: dob ? "#000" : "#374151",
                          }}
                        >
                          {dob
                            ? dob.toLocaleDateString()
                            : "select date of birth"}
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
                      isLoading={isSubmitting}
                      onPress={handleSubmit}
                      text="Signup"
                      disabled={!isChecked || isSubmitting}
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

export default SignUp;
