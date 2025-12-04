import DateTimePicker from "@react-native-community/datetimepicker";
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

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import SelectField from "@/src/components/SelectField";
import { Alert } from "@/src/components/ui/Alert";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { useGenerateCode } from "@/src/services/hooks/parent/use-generate-code";
import { copyToClipboard } from "@/src/utils/functions/copy-to-clipboard";
import { ChildSetupSchema } from "@/src/utils/schemas/auth";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: "male" | "female" | null;
};

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const ChildSetup = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dob, setDob] = useState<Date | null>(null);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  const initalValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    gender: null,
  };

  const mutation = useGenerateCode();

  const handleChildSetup = (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void,
    resetForm: () => void
  ) => {
    const { dob, email, firstname, lastname, gender } = values;
    const requestData = {
      childEmail: email,
      childName: `${firstname} ${lastname}`,
      childDOB: dob,
      childGender: gender,
    };
    mutation.mutate(requestData, {
      onSuccess: (data) => {
        resetForm();
        console.log(data);
        Alert.success({
          title: `Child set-up code \n \n \n ${data.code.slice(0, 3)}-${data.code.slice(3, 6)} `,
          primaryButton: {
            text: "Copy Code",
            onPress: () => copyToClipboard(data?.code ?? ""),
          },
        });
        setSubmitting(false);

        // setTimeout(() => {
        //   router.replace({
        //     pathname: "/(parent)/(tabs)",
        //     params: {
        //       email: values?.email,
        //     },
        //   });
        // }, 1000);
      },
      onError: (error: any) => {
        const msg = error.data?.message;
        console.log(msg);
        setSubmitting(false);
        Alert.error({
          // title: "Login Failed",
          subtitle: msg ?? "",
          autoCloseAfter: 2000,
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
            <Text className="text-2xl text-center mb-[25]">
              Create Child's Account
            </Text>

            <View className="flex-1 bg-[#F5F5F5] rounded-[12] mb-[20] px-[10] py-[20]">
              <Formik
                initialValues={initalValues}
                validationSchema={ChildSetupSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handleChildSetup(values, setSubmitting, resetForm);
                }}
              >
                {({
                  handleChange,
                  handleSubmit,
                  values,
                  touched,
                  errors,
                  setFieldValue,
                  setFieldTouched,
                  isSubmitting,
                }) => (
                  <View className="gap-[16]">
                    <Text className="text-xl mb-4">
                      Set up your child's account
                    </Text>

                    <TextField
                      label="Child's First Name"
                      name="firstname"
                      onChangeText={handleChange("firstname")}
                      value={values.firstname}
                      placeholder="Enter First Name"
                    />

                    <TextField
                      label="Child's Last Name"
                      name="lastname"
                      onChangeText={handleChange("lastname")}
                      value={values.lastname}
                      placeholder="Enter Last Name"
                    />

                    <TextField
                      label="Email Address"
                      name="email"
                      onChangeText={handleChange("email")}
                      value={values.email}
                      keyboardType="email-address"
                      placeholder="Enter Email"
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

                    <SelectField
                      label="Gender"
                      name="gender"
                      placeholder="Select gender"
                      options={genderOptions}
                    />

                    <View className="mt-6">
                      <GradientButton
                        isLoading={isSubmitting}
                        onPress={handleSubmit}
                        text="Set Up Account"
                      />
                    </View>
                  </View>
                )}
              </Formik>
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
  header: {
    fontSize: 26,
    marginVertical: 20,
  },
});

export default ChildSetup;
