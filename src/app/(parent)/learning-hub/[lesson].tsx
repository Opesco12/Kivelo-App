import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

const Lesson = () => {
  const params = useLocalSearchParams();

  console.log("params: ", params);
  return (
    <View className="flex-1">
      <LinearGradient
        style={{ height: 120 }}
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
            className="text-center text-xl font-medium"
            family="inter"
            weight="medium"
          >
            Emotional Regulation
          </Text>
        </SafeAreaView>
      </LinearGradient>

      <View className="flex-1 px-[15] bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
            paddingBottom: 35,
          }}
        >
          <View
            className="p-[15] w-[99%] rounded-[12] bg-white"
            style={styles.shadow}
          >
            <Text
              family="inter"
              weight="bold"
              className="text-xl"
            >
              Welcome to Today's Lesson
            </Text>

            <Text
              className="text-lg text-[#666666] mt-[5]"
              family="inter"
            >
              Learn how to help your child recognize and express their emotions
              in healthy ways. This builds stronger connections and better
              self-regulation.
            </Text>
          </View>

          <View
            className="p-[15] w-[99%] rounded-[12] bg-white items-center justify-center my-[15]"
            style={styles.shadow}
          >
            <Image
              source={require("@/src/assets/images/project-images/family.svg")}
              style={{ height: 190, width: 190 }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
});

export default Lesson;
