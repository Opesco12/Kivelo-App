import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { TextInput } from "react-native-gesture-handler";

const Journal = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={styles.gradient}
        colors={["#76D7F7", "#FFFFFF"]}
      >
        <SafeAreaView className="flex-1 pt-[25] px-[15]">
          <BackButton />

          <Text
            className="text-2xl mt-[15]"
            font="poppins-bold"
          >
            {`What would you be doing \ntoday?`}
          </Text>
          <Text className="text-[#6B7280] text-lg mt-[5]">
            Start to write here, interesting message you wish to send to your
            friends
          </Text>

          <TextInput
            className="bg-[#F9FAFB] h-[200] rounded-[12] my-[20] px-[15] text-lg"
            placeholder="Tell us something about yourself"
          />

          <TouchableOpacity className="h-[54] rounded-[100] overflow-hidden">
            <LinearGradient
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              colors={["#4A90E2", "#294F7C"]}
            >
              <Text className="text-lg text-white">Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default Journal;
