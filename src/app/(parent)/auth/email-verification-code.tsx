import LottieView from "lottie-react-native";
import { Mail, MessagesSquare } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GradientButton from "@/src/components/form/GradientButton";
import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";

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
          We sent a 6-digit code to your selected method
        </Text>
        <LottieView
          source={{
            uri: "https://lottie.host/33247467-284d-4da7-a395-1e9c93148304/8hHqrPrUT3.lottie",
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
          onPress={() => console.log()}
        />
      </SafeAreaView>
    </View>
  );
};

export default VerifyAccount;
