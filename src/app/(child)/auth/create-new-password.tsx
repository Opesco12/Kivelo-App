import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/child/TextField";

const CreateNewPassword = () => {
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
          onSubmit={() => console.log("trying to navigate")}
        >
          {({ handleChange, handleSubmit }) => (
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
