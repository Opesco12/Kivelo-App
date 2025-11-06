import { Image, View } from "react-native";
import Text from "@/src/components/ui/Text";

import AuthScreen from "@/src/components/parent/AuthScreen";
import Button from "@/src/components/form/Button";
import { router } from "expo-router";

const VerifyEmail = () => {
  return (
    <AuthScreen title="Verify Your Email">
      <Image
        className="self-center my-[15]"
        source={require("@/src/assets/images/project-images/Smartphone password protection and cybersecurity.png")}
      />

      <Text className="text-center text-xl mt-[10]">
        Please enter the 4 digits code sent to oyelekemmanuel@gmail.com
      </Text>

      <View></View>
      <Button
        text="Verify"
        onPress={() => router.push("/(parent)/auth/create-new-password")}
      />
    </AuthScreen>
  );
};

export default VerifyEmail;
