import { router } from "expo-router";
import { Formik } from "formik";
import { Image, View } from "react-native";

import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/parent/TextField";
import AuthScreen from "@/src/components/parent/AuthScreen";
import Text from "@/src/components/ui/Text";

const CreateNewPassword = () => {
  return (
    <AuthScreen title="Create New Password">
      <Image
        className="self-center my-[15]"
        source={require("@/src/assets/images/project-images/Smartphone password protection and cybersecurity.png")}
      />

      <Text className="text-center text-xl mt-[10]">
        Please enter your email address to receive a verification code
      </Text>

      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={() => router.push("/(parent)/auth/verify-email")}
      >
        {({ isSubmitting, handleChange, handleSubmit, values }) => (
          <View className="gap-[20] mt-[15]">
            <TextField
              label="Password"
              name="password"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              secureTextEntry
            />
            <Button
              text="Create Password"
              disabled={isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default CreateNewPassword;
