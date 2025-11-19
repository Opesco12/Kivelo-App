import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Search, Star } from "lucide-react-native";

const Learn = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={styles.gradient}
        colors={["#6EC5E9", "#3FD0C9"]}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          <BackButton />
          <Text
            className="text-center text-xl "
            font="poppins-medium"
          >
            Learn
          </Text>
        </SafeAreaView>
      </LinearGradient>

      <View className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
          }}
        >
          <View className="h-[100] bg-[#E3F2FD] rounded-[16] p-[15] flex-row justify-between">
            <View className="w-[75%] gap-[5]">
              <Text
                className="text-[#2196F3] text-lg"
                font="poppins-medium"
              >
                Your Progress
              </Text>
              <Text className="">You've completed 2 lessons this week.</Text>
            </View>
            <View className="h-[38] w-[38]  bg-[#FFD93B] rounded-[19] items-center justify-center">
              <Star
                size={20}
                fill={"#FFF"}
                strokeWidth={0}
              />
            </View>
          </View>

          <View
            className="h-[50] rounded-[50] my-[15] flex-row overflow-hidden items-center pl-[15] gap-[10]"
            style={{ borderColor: "#d1d5db", borderWidth: 1 }}
          >
            <Search size={30} />
            <TextInput
              className=" text-xl flex-1"
              placeholder="Search parenting lessons"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 120,
  },
});

export default Learn;
