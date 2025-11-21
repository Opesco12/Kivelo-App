import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LearningCategories2 from "@/src/components/parent/learning-hub/LearningCategories2";
import BackButton from "@/src/components/ui/BackButton";
import FilterChips from "@/src/components/ui/FilterChips";
import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";
import { ArrowRight, Search, Star } from "lucide-react-native";

const Learn = () => {
  const [selected, setSelected] = useState("All Topics");
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

      <View className="flex-1 px-[15]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
            paddingBottom: 35,
          }}
        >
          <View className="h-[100] bg-[#E3F2FD] rounded-[16] p-[15] flex-row justify-between">
            <View className="w-[75%] gap-[5]">
              <Text
                className="text-[#2196F3] text-lg"
                family="inter"
                weight="medium"
              >
                Your Progress
              </Text>
              <Text
                family="inter"
                style={{ fontSize: 15 }}
              >
                You've completed 2 lessons this week.
              </Text>
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
            <Search
              size={20}
              color={"#666666"}
            />
            <TextInput
              className="text-xl flex-1"
              placeholder="Search parenting lessons"
            />
          </View>

          <FilterChips
            onSelect={setSelected}
            options={["All Topics", "Communications", "Safety Skills"]}
            selected={selected}
          />

          <View className="h-[80]  my-[15] flex-row justify-between items-center border border-gray-300 px-[15] rounded-[12]">
            <View className="gap-[7]">
              <Text
                className="text-xl"
                family="inter"
                style={{ fontWeight: "700" }}
              >
                Setting Healty Boundaries
              </Text>
              <Text>3 mins left . 75% complete</Text>
            </View>
            <View className="h-[48] w-[48] rounded-[24] border border-dashed border-[#27AE60] items-center justify-center">
              <Text
                className=""
                font="poppins-medium"
              >
                75%
              </Text>
            </View>
          </View>

          <LearningCategories2 />

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
