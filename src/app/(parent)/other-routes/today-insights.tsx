import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";
import { ArrowRight } from "lucide-react-native";

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
            className="text-center text-xl font-medium"
            family="inter"
            weight="medium"
          >
            Learn
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
          <View className="flex-row justify-between">
            <View className="bg-[#2196F3] rounded-[50] p-[10]">
              <Text
                className="text-white"
                family="inter"
              >
                Today's Insight
              </Text>
            </View>
            <View className="bg-[#FACC15] rounded-[50] p-[10]">
              <Text
                className=""
                family="inter"
              >
                5 mins
              </Text>
            </View>
          </View>

          <View className="bg-[#DBEAFE] rounded-[16] mt-[15] p-[15]">
            <Text
              className="text-2xl mb-[5]"
              family="inter"
              weight="bold"
            >
              How to Build Calm Conversations
            </Text>

            <Text
              className="text-lg"
              family="inter"
            >
              Learn simple techniques to create peaceful dialogue with your
              child
            </Text>

            <View className="bg-[#0EB855] w-[200] rounded-[50] py-[10] items-center justify-center my-[15]">
              <Text
                className="text-white"
                family="inter"
              >
                Step 1: Pause & Breathe
              </Text>
            </View>

            <Text family="inter">
              Take three deep breaths before responding to create space for
              calm.
            </Text>

            <View className="bg-[#1D4ED8] w-[200] rounded-[50] py-[10] items-center justify-center my-[15]">
              <Text
                className="text-white"
                family="inter"
              >
                Step 2: Listen Activity
              </Text>
            </View>

            <Text family="inter">
              Give your full attention and reflect back what you hear.
            </Text>

            <View className="bg-[#1E7DB2] w-[200] rounded-[50] py-[10] items-center justify-center my-[15]">
              <Text
                className="text-white"
                family="inter"
              >
                Step 3: Respond with Empathy
              </Text>
            </View>

            <Text family="inter">
              Acknowledge feelings and offer support without judgment
            </Text>
          </View>

          <View className="my-[20]">
            <Text
              className="text-xl mb-[10]"
              family="inter"
              weight="bold"
            >
              Starter Paths
            </Text>

            <ScrollView
              horizontal
              contentContainerStyle={{ gap: 10 }}
            >
              <View className="h-[140] w-[270]  rounded-[16] overflow-hidden ">
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  colors={["#3B82F6", "#9333EA"]}
                  style={{
                    flex: 1,
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    family="inter"
                    weight="bold"
                    className="text-xl text-white"
                  >
                    7 Days to Calm Conversations
                  </Text>
                  <Text className="text-white">
                    Transform daily interactions with your child
                  </Text>

                  <View className="flex-row justify-between items-center">
                    <Text className="text-white">
                      7 lessons . 35 mins total
                    </Text>

                    <ArrowRight
                      size={20}
                      color={"#fff"}
                    />
                  </View>
                </LinearGradient>
              </View>

              <View className="h-[140] w-[270]  rounded-[16] overflow-hidden ">
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  colors={["#3B82F6", "#9333EA"]}
                  style={{
                    flex: 1,
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    family="inter"
                    weight="bold"
                    className="text-xl text-white"
                  >
                    7 Days to Calm Conversations
                  </Text>
                  <Text className="text-white">
                    Transform daily interactions with your child
                  </Text>

                  <View className="flex-row justify-between items-center">
                    <Text className="text-white">
                      7 lessons . 35 mins total
                    </Text>

                    <ArrowRight
                      size={20}
                      color={"#fff"}
                    />
                  </View>
                </LinearGradient>
              </View>
            </ScrollView>
          </View>

          <View className="mb-[20]">
            <Text
              className="text-xl mb-[10]"
              family="inter"
              weight="bold"
            >
              Suggested for you
            </Text>

            <ScrollView
              horizontal
              contentContainerStyle={{ gap: 10 }}
            >
              <View
                className="min-h-[180] rounded-[16] w-[185] overflow-hidden"
                style={{ borderWidth: 1, borderColor: "#d1d5db" }}
              >
                <Image
                  source={require("@/src/assets/images/project-images/little-girl.svg")}
                  style={{ width: 185, height: 100 }}
                />
                <View className="p-[10]">
                  <Text
                    family="inter"
                    weight="bold"
                    className="mb-[5] text-lg"
                  >
                    Reading Together
                  </Text>
                  <Text
                    family="inter"
                    className="text-[#666666]"
                  >
                    Build literacy and connection
                  </Text>
                  <Text
                    family="inter"
                    className="text-[#2196F3] mt-[5]"
                  >
                    6 mins
                  </Text>
                </View>
              </View>

              <View
                className="min-h-[180] rounded-[16] w-[185] overflow-hidden"
                style={{ borderWidth: 1, borderColor: "#d1d5db" }}
              >
                <Image
                  source={require("@/src/assets/images/project-images/little-girl.svg")}
                  style={{ width: 185, height: 100 }}
                />
                <View className="p-[10]">
                  <Text
                    family="inter"
                    weight="bold"
                    className="mb-[5] text-lg"
                  >
                    Reading Together
                  </Text>
                  <Text
                    family="inter"
                    className="text-[#666666]"
                  >
                    Build literacy and connection
                  </Text>
                  <Text
                    family="inter"
                    className="text-[#2196F3] mt-[5]"
                  >
                    6 mins
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View className=" items-center gap-[7]">
            <Image
              source={require("@/src/assets/images/project-images/girl&mother.svg")}
              style={{ width: 120, height: 120 }}
            />

            <Text
              className="text-xl"
              family="inter"
              weight="bold"
            >
              Start with a 5-minute lesson
            </Text>
            <Text className="text-center text-[#666666]">
              Discover insights that will help you connect better with your
              child
            </Text>

            <TouchableOpacity
              //   style={{ borderWidth: 1 }}
              className="h-[55] rounded-[50] w-[100%] items-center justify-center bg-[#6A1B9A]"
            >
              <Text
                family="inter"
                weight="bold"
                className="text-lg text-white"
              >
                Add a child(optional)
              </Text>
            </TouchableOpacity>

            <Text className="text-center text-[#666666] text-sm">
              You can always add your child later to get personalized content
            </Text>
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
