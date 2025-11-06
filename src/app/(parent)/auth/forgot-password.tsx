import { Formik } from "formik";
import { Image, View } from "react-native";

import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/parent/TextField";
import AuthScreen from "@/src/components/parent/AuthScreen";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ForgotPassword = () => {
  return (
    <AuthScreen title="Forgot Password?">
      <Image
        className="self-center my-[15]"
        source={require("@/src/assets/images/project-images/Smartphone password protection and cybersecurity.png")}
      />

      <Text className="text-center text-xl mt-[10]">
        Please enter your email address to receive a verification code
      </Text>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={() => router.push("/(parent)/auth/verify-email")}
      >
        {({ isSubmitting, handleChange, handleSubmit, values }) => (
          <View className="gap-[20] mt-[15]">
            <TextField
              label="Email Address"
              name="email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <Button
              text="Send"
              disabled={isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default ForgotPassword;
