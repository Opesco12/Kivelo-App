import { Formik } from "formik";
import { Image, View } from "react-native";

import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/parent/TextField";
import AuthScreen from "@/src/components/parent/AuthScreen";
import { Alert } from "@/src/components/ui/Alert";
import Text from "@/src/components/ui/Text";
import { useForgotPassword } from "@/src/services/hooks/parent/use-forgot-password";
import { router } from "expo-router";

const ForgotPassword = () => {
  const mutation = useForgotPassword();

  const handleSubmit = (values: { email: string }, { setSubmitting }: any) => {
    mutation.mutate(
      { email: values.email },
      {
        onSuccess: (data: any) => {
          Alert.success({ title: "Code Sent", subtitle: data?.message });
          setSubmitting(false);
          router.push({ pathname: "./email-verification-code", params: { email: values.email, mode: "reset" } });
        },
        onError: (error: any) => {
          setSubmitting(false);
          const msg = error?.data?.message ?? error?.message;
          Alert.error({ title: "Failed", subtitle: msg ?? "Could not send reset code" });
        },
      }
    );
  };

  return (
    <AuthScreen title="Forgot Password?">
      <Image
        className="self-center my-[15]"
        source={require("@/src/assets/images/project-images/Smartphone password protection and cybersecurity.png")}
      />

      <Text className="text-center text-xl mt-[10]">
        Please enter your email address to receive a verification code
      </Text>

      <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting, handleChange, handleSubmit, values }) => (
          <View className="gap-[20] mt-[15]">
            <TextField
              label="Email Address"
              name="email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <Button text="Send" disabled={isSubmitting || mutation.isLoading} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default ForgotPassword;
