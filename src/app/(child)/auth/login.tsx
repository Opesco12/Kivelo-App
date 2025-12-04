import { Formik } from "formik";
import { Pressable, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/child/TextField";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

type FormValues = {
  email: string;
  password: string;
};

const ChildLogin = () => {
  const initalValues: FormValues = {
    email: "",
    password: "",
  };
  return (
    <AuthScreen>
      <Text
        className="text-center text-white"
        font="rammettoOne-regular"
        style={{ marginVertical: 30, fontSize: 45 }}
      >
        Login
      </Text>

      <Formik
        initialValues={initalValues}
        onSubmit={(values) =>
          console.log("form submitted with values: ", values)
        }
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <View style={{ gap: 20 }}>
            <TextField
              name={"email"}
              placeholder={"Email"}
              onChangeText={handleChange("email")}
            />
            <TextField
              name="password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <View
              className="flex-row justify-between"
              style={{ marginTop: 5, marginBottom: 10 }}
            >
              <Text
                font="rammettoOne-regular"
                className="text-white"
              >
                Remember Me
              </Text>
              <Pressable
                onPress={() => router.push("/(child)/auth/forgot-password")}
              >
                <Text
                  font="rammettoOne-regular"
                  className="text-white"
                >
                  Forgot Password?
                </Text>
              </Pressable>
            </View>
            <Button
              isLoading={isSubmitting}
              onPress={handleSubmit}
              text="Login"
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default ChildLogin;
