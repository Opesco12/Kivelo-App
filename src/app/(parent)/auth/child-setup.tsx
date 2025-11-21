import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
                dob: "",
              }}
              onSubmit={() => console.log("")}
            >
              {({ handleChange, values }) => (
                <View className="gap-[10]">
                  <Text className="text-xl">Set up your child's account</Text>

                  <TextField
                    label="Child's Name"
                    name="name"
                    onChangeText={handleChange("name")}
                    value={values.name}
                  />

                  <TextField
                    label="Email Address"
                    name="email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <GradientButton
                    onPress={() => router.push("/(parent)/(tabs)")}
                    text="Sign In"
                  />
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
