import { router, useLocalSearchParams } from "expo-router";
import { Formik, FormikHelpers } from "formik";
import LottieView from "lottie-react-native";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import { OtpInput } from "@/src/components/form/OtpInput";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

import { Alert } from "@/src/components/ui/Alert";
import {
    useForgotPassword,
    useVerifyResetToken,
} from "@/src/services/hooks/parent/use-forgot-password";
import {
    useResendVerification,
    useVerifyEmail,
} from "@/src/services/hooks/parent/use-verify-email";
import { VerifyEmailSchema } from "@/src/utils/schemas/auth";
import { useState } from "react";

type FormValues = { otp: string };

const VerifyAccount = () => {
  const params = useLocalSearchParams();

  const [isResendingCode, setIsResendingCode] = useState(false);
  const [hasResentCode, setHasResentCode] = useState(false);

  console.log("params: ", params);

  if (!params?.email) {
    router.replace("/(parent)/auth/login");
  }

  const isResetFlow = String(params?.mode) === "reset";

  const mutation: any = isResetFlow ? useVerifyResetToken() : useVerifyEmail();
  const resendVerificationMutation: any = useResendVerification();
  const forgotMutation: any = useForgotPassword();

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // For account verification useVerifyEmail -> navigates to app tabs
    // For password reset verify useVerifyResetToken -> navigate to create-new-password
    mutation.mutate(
      isResetFlow
        ? { email: params?.email, token: values?.otp }
        : { email: params?.email, verificationCode: values?.otp },
      {
        onSuccess: (data: any) => {
          Alert.success({
            title: "Verification Succesful",
            subtitle: data?.message,
          });
          setSubmitting(false);
          if (isResetFlow) {
            router.replace({ pathname: "/(parent)/auth/create-new-password", params: { email: params?.email, token: values?.otp } });
          } else {
            router.replace("/(parent)/(tabs)");
          }
        },
        onError(error: any) {
          const msg = error?.data?.message;
          console.log(msg);
          setSubmitting(false);
          Alert.error({
            title: "Verification Failed",
            subtitle: msg ?? "",
          });
        },
      }
    );
  };

  const ResendVerification = () => {
    setIsResendingCode(true);
    const target = isResetFlow ? forgotMutation : resendVerificationMutation;

    target.mutate(
      { email: params?.email },
      {
        onSuccess: (data: any) => {
          Alert.success({ subtitle: data?.message });
          setIsResendingCode(false);
          setHasResentCode(true);
        },
        onError(error: any) {
          const msg = error?.data?.message ?? error?.message;
          console.log(msg);
          setIsResendingCode(false);

          // If the resendVerification failed because account is already verified, try forgot-password as fallback
          if (!isResetFlow && String(msg).toLowerCase().includes("already verified")) {
            forgotMutation.mutate(
              { email: params?.email },
              {
                onSuccess: (d: any) => {
                  Alert.success({ subtitle: d?.message });
                  setHasResentCode(true);
                },
                onError: (e: any) => {
                  Alert.error({ title: "Failed to resend code", subtitle: e?.data?.message ?? e?.message });
                },
              }
            );
            return;
          }

          Alert.error({ title: "Failed to resend code", subtitle: msg ?? "" });
        },
      }
    );
  };

  return (
    <View className="flex-1 bg-white px-[15]">
      <SafeAreaView className="flex-1">
        <View style={{ marginVertical: 20 }}>
          <BackButton style={{ backgroundColor: "#F5F5F5" }} />
        </View>
        <Text
          className="text-2xl text-center"
          font="poppins-medium"
        >
          Enter Verification Code
        </Text>
        <Text className="text-[#ACB5BB] my-[10] text-center">
          We sent a 6-digit code to your email
        </Text>
        <LottieView
          source={{
            uri: "https://lottie.host/33247467-284d-4da7-a395-1e9c93148304/8hHqrPrUT3.lottie",
          }}
          loop
          autoPlay
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />

        <Formik
          initialValues={{ otp: "" }}
          validationSchema={VerifyEmailSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isSubmitting, errors, touched }) => (
            <>
              <OtpInput name="otp" />

              {touched.otp && errors.otp && (
                <Text className="text-[#EF4444] text-center mt-[5]">
                  {errors.otp}
                </Text>
              )}

              <View className="my-[20] gap-[15]">
                <TouchableOpacity
                  onPress={ResendVerification}
                  disabled={isResendingCode || hasResentCode}
                >
                  <Text
                    className="text-center text-xl text-[#4D81E7]"
                    font="poppins-medium"
                  >
                    Resend Code
                  </Text>
                </TouchableOpacity>

                {/* <Text
                  className="text-center text-xl text-[#4D81E7]"
                  font="poppins-medium"
                >
                  Change Method
                </Text> */}
              </View>

              <GradientButton
                isLoading={isSubmitting}
                text="Verify Email"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};

export default VerifyAccount;
