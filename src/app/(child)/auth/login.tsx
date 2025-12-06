import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Formik } from "formik";
import { Pressable, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import TextField from "@/src/components/form/child/TextField";
import { Alert } from "@/src/components/ui/Alert";
import Text from "@/src/components/ui/Text";
import { useAuth } from "@/src/context/auth-provider";
import { useChildLogin } from "@/src/services/hooks/child/use-child-login";
import { childLoginSchema } from "@/src/utils/schemas/auth";
import { STORAGE_KEYS } from "@/src/utils/storage/keys";

type FormValues = {
  email: string;
  code: string;
};

const ChildLogin = () => {
  const initalValues: FormValues = {
    email: "",
    code: "",
  };
  const { saveUser } = useAuth();
  const mutation = useChildLogin();

  const handleLogin = (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    mutation.mutate(values, {
      onSuccess: async ({ data, status }) => {
        console.log(data);
        Alert.success({
          title: "Login Succesful",
          subtitle: data?.message,
          autoCloseAfter: 3000,
        });
        await SecureStore.setItemAsync(STORAGE_KEYS.role, "parent");
        setSubmitting(false);
        if (data?.user?.hasSetPassword) {
          saveUser(data.accessToken ?? "", data?.user);
          setTimeout(() => {
            router.push({
              pathname: "/(child)/(tabs)",
              params: {
                email: values?.email,
              },
            });
          }, 1000);
        } else {
          setTimeout(() => {
            router.push({
              pathname: "/(child)/auth/create-new-password",
            });
          }, 1500);
        }
      },
      onError: (error: any) => {
        const msg = error.data?.message;
        console.log(msg);
        setSubmitting(false);
        Alert.error({
          title: "Login Failed",
          subtitle: msg ?? "",
          autoCloseAfter: 2000,
        });
      },
    });
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
        validationSchema={childLoginSchema}
        onSubmit={async (values, { setSubmitting }) =>
          // handleLogin(values, setSubmitting)
          router.push({
            pathname: "/(child)/(tabs)",
          })
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
              name="code"
              placeholder="Password (or generated code)"
              onChangeText={handleChange("code")}
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
