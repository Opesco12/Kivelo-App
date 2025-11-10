import LottieView from "lottie-react-native";
import { Mail, MessagesSquare } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

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
          Verify Your Account
        </Text>
        <LottieView
          source={{
            uri: "https://lottie.host/2e39c9c5-a603-457e-9de9-c74ff8a4afa2/hTsoJaja0m.lottie",
          }}
          loop
          autoPlay
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />

        <TouchableOpacity
          className="flex-row gap-[8] items-center mt-[25]"
          style={{
            borderWidth: 1,
            borderColor: "#ACB5BB",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <MessagesSquare size={25} />
          <Text
            className="text-xl"
            font="poppins-medium"
          >
            SMS Verification
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row gap-[8] items-center mt-[15] mb-[25]"
          style={{
            borderWidth: 1,
            borderColor: "#ACB5BB",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <Mail size={25} />
          <Text
            className="text-xl "
            font="poppins-medium"
          >
            Email Verification
          </Text>
        </TouchableOpacity>

        <GradientButton
          text="Send Code"
          onPress={() => router.push("/(parent)/auth/email-verification-code")}
        />
      </SafeAreaView>
    </View>
  );
};

export default VerifyAccount;
