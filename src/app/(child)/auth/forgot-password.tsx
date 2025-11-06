import { router } from "expo-router";
import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/child/TextField";
import Text from "@/src/components/ui/Text";

const ForgotPassword = () => {
  return (
    <AuthScreen title="Forgot Password">
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
        <Text
          font="poppins-medium"
          className="text-xl text-white text-center"
        >
          Please enter your email address to receive a verification code
        </Text>

        <Formik
          initialValues={{ email: "" }}
          onSubmit={() => router.push("/(child)/auth/confirm-code")}
        >
          {({ handleChange, handleSubmit }) => (
            <View style={{ marginTop: 20, gap: 15 }}>
              <TextField
                name="email"
                label="Email Address"
                onChangeText={handleChange("email")}
              />
              <Button
                text="Send"
                onPress={handleSubmit}
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

export default ForgotPassword;
