import { Formik, FormikHelpers } from "formik";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import GradientButton from "@/src/components/form/GradientButton";
import { OtpInput } from "@/src/components/form/OtpInput";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const validationSchema = Yup.object({
  otp: Yup.string()
    .length(6, "Enter all 6 digits")
    .matches(/^\d{6}$/, "Must be 6 digits")
    .required("OTP is required"),
});

type FormValues = { otp: string };

const handleSubmit = (
  values: FormValues,
  { setSubmitting }: FormikHelpers<FormValues>
) => {
  router.push("/(parent)/auth/login");
  setSubmitting(false);
};

const VerifyAccount = () => {
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
          validationSchema={validationSchema}
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
                <Text
                  className="text-center text-xl text-[#4D81E7]"
                  font="poppins-medium"
                >
                  Resend Code
                </Text>

                <Text
                  className="text-center text-xl text-[#4D81E7]"
                  font="poppins-medium"
                >
                  Change Method
                </Text>
              </View>

              <GradientButton
                text="Send Code"
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
