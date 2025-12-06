import { Alert } from "@/src/components/ui/Alert";
import { router } from "expo-router";
import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/child/TextField";
import { useAuth } from "@/src/context/auth-provider";
import { useSetChildPassword } from "@/src/services/hooks/child/use-set-child-password";

const CreateNewPassword = () => {
  const mutation = useSetChildPassword();
  const { saveUser } = useAuth();

  const handleSubmitPassword = (values: { password: string; confirmPassword: string }, { setSubmitting }: any) => {
    if (values.password !== values.confirmPassword) {
      Alert.error({ subtitle: "Passwords do not match" });
      setSubmitting(false);
      return;
    }

    mutation.mutate({ password: values.password }, {
      onSuccess: async (res: any) => {
        // Expecting res to be { data: { accessToken, user, ... }, status }
        const data = res?.data ?? res;
        try {
          const accessToken = data?.accessToken ?? data?.token ?? null;
          const user = data?.user ?? data?.userDetails ?? null;

          if (accessToken && user) {
            await saveUser(accessToken, user);
          }

          Alert.success({ title: "Password set successfully" });
          // Navigate to child dashboard
          router.replace("/(child)/(tabs)");
        } catch (err) {
          console.error("Error after setting password:", err);
        }
      },
      onError: (err: any) => {
        console.error("Set child password error:", err);
        const msg = err?.data?.message ?? err?.message ?? "Failed to set password";
        Alert.error({ subtitle: msg });
        setSubmitting(false);
      },
    });
  };

  return (
    <AuthScreen title="Create New Password">
      <View
        style={styles.padlockContainer}
        className=" bg-[#D9D9D975] justify-center items-center self-center"
      >
        <Image
          source={require("@/src/assets/images/project-images/padlock.png")}
        />
      </View>

      <View
        className="w-[90%] self-center"
        style={{ marginTop: 35 }}
      >
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={(values, formikHelpers) => handleSubmitPassword(values, formikHelpers)}
        >
          {({ handleChange, handleSubmit, isSubmitting }) => (
            <View style={{ gap: 15 }}>
              <TextField
                name="password"
                label="New Password"
                onChangeText={handleChange("password")}
                secureTextEntry
              />

              <TextField
                name="confirmPassword"
                label="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                secureTextEntry
              />
              <Button
                text="Send"
                onPress={handleSubmit}
                isLoading={isSubmitting || mutation.isLoading}
              />
            </View>
          )}
        </Formik>
      </View>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  padlockContainer: { height: 196, width: 196, borderRadius: 98 },
});

export default CreateNewPassword;
