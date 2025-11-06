import { Image, Pressable, StyleSheet, View } from "react-native";

import AuthScreen from "@/src/components/child/AuthScreen";
import Button from "@/src/components/form/Button";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ConfirmCode = () => {
  return (
    <AuthScreen title="Confirm Code">
      <View
        style={styles.padlockContainer}
        className=" bg-[#D9D9D975] justify-center items-center self-center"
      >
        <Image
          source={require("@/src/assets/images/project-images/email.png")}
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

        <View
          className="flex-row justify-between"
          style={{ marginVertical: 15 }}
        >
          <Text
            font="poppins-medium"
            className="text-white text-lg"
          >
            Don't have a code?
          </Text>
          <Pressable onPress={() => console.log("")}>
            <Text
              font="poppins-medium"
              className="text-white text-lg"
            >
              Resend
            </Text>
          </Pressable>
        </View>

        <Button
          text="Verify"
          onPress={() => router.push("/(child)/auth/create-new-password")}
        />
      </View>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  padlockContainer: { height: 196, width: 196, borderRadius: 98 },
});

export default ConfirmCode;
