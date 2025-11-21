import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import DateOfBirthField from "@/src/components/form/DatePicker";
import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Child's name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date cannot be in the future")
    .test("is-under-18", "Child must be under 18 years old", (value) => {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 < 18;
      }
      return age < 18;
    }),
});

const ChildSetup = () => {
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
          <Text className="text-3xl text-center mb-[25]">
            Create Child's Account
          </Text>

          <View className="flex-1 bg-[#F5F5F5] rounded-[12] mb-[20] px-[10] py-[20]">
            <Formik
              initialValues={{
                name: "",
                email: "",
                dob: null as Date | null,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Child Setup:", {
                  name: values.name,
                  email: values.email,
                  dob: values.dob,
                });
                router.push("/(parent)/(tabs)");
              }}
            >
              {({ handleChange, handleSubmit, values }) => (
                <View className="gap-[16]">
                  <Text className="text-xl mb-4">
                    Set up your child's account
                  </Text>

                  <TextField
                    label="Child's Name"
                    name="name"
                    onChangeText={handleChange("name")}
                    value={values.name}
                    placeholder="Enter child's full name"
                  />

                  <TextField
                    label="Email Address"
                    name="email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder="parent@example.com"
                  />

                  <DateOfBirthField
                    label="Date of Birth"
                    name="dob"
                  />

                  <View className="mt-6">
                    <GradientButton
                      onPress={handleSubmit}
                      text="Set Up Account"
                    />
                  </View>
                </View>
              )}
            </Formik>
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

export default ChildSetup;
