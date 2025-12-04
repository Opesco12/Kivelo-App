import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import TextField from "@/src/components/form/parent/TextField";
import { Alert } from "@/src/components/ui/Alert";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { useLogin } from "@/src/services/mutations/parent/use-login";
import { ParentLoginSchema } from "@/src/utils/schemas/auth";
import { useAuth } from "@/src/context/auth-provider";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const { saveUser } = useAuth();

  const mutation = useLogin();

  const handleLogin = (
    values: FormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    mutation.mutate(values, {
      onSuccess: ({ data, status }) => {
        console.log(data);
        Alert.success({
          title: "Login Succesful",
          autoCloseAfter: 2000,
        });
        console.log("status code: ", status);
        setSubmitting(false);
        saveUser(data.accessToken, data?.data?.user);
        setTimeout(() => {
          router.push({
            pathname: "/(parent)/(tabs)",
            params: {
              email: values?.email,
            },
          });
        }, 1000);
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
        if (error?.status === 403) {
          setTimeout(() => {
            router.push({
              pathname: "/(parent)/auth/email-verification-code",
              params: {
                email: values?.email,
              },
            });
          }, 1000);
        }
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
        <View style={{ marginVertical: 10 }}>
          <BackButton style={{ backgroundColor: "#F5F5F5" }} />
        </View>

        <View className="flex-1">
          <Text className="text-3xl text-center mb-[25]">Sign In</Text>

          <View className="flex-1 bg-[#F5F5F5] rounded-[12] mb-[20] px-[10] py-[20]">
            <Formik
              validationSchema={ParentLoginSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) =>
                handleLogin(values, setSubmitting)
              }
            >
              {({ handleChange, values, handleSubmit, isSubmitting }) => (
                <View className="gap-[10]">
                  <Text className="text-xl">Sign in to your account</Text>

                  <TextField
                    label="Email Address"
                    name="email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <TextField
                    label="Password"
                    name="password"
                    onChangeText={handleChange("password")}
                    value={values.password}
                    secureTextEntry
                  />

                  <View className="my-[10]">
                    <Pressable>
                      <Text className="text-right">Forgot Password?</Text>
                    </Pressable>
                  </View>

                  <GradientButton
                    isLoading={isSubmitting}
                    onPress={handleSubmit}
                    text="Sign In"
                  />
                </View>
              )}
            </Formik>

            <View className="mt-[30]">
              <TouchableOpacity
                className="bg-white border  p-[15] rounded-[12] justify-center items-center flex-row gap-[5]"
                style={{ borderColor: "#d1d5db" }}
              >
                <Image
                  source={require("@/src/assets/images/icons/google logo.png")}
                  className="h-[25] w-[25]"
                />
                <Image
                  source={require("@/src/assets/images/icons/apple logo.png")}
                  className="h-[25] w-[25]"
                />
                <Text
                  className="text-lg"
                  font="poppins-medium"
                >
                  Continue with Google or Apple
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-1 flex-row gap-[10] items-end justify-center pb-[25]">
              <Text>Don't Have An Account?</Text>
              <Pressable onPress={() => router.push("/(parent)/auth/login")}>
                <Text className="text-[#2563EB]">Sign up</Text>
              </Pressable>
            </View>
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

export default Login;
