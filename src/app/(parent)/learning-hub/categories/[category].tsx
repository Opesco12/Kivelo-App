import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { useLocalSearchParams } from "expo-router";

import { categories } from "@/src/components/parent/learning-hub/LearningCategories2";
import Lesson from "@/src/components/parent/learning-hub/Lesson";
import FilterChips from "@/src/components/ui/FilterChips";
import { useState } from "react";

const Category = () => {
  const params = useLocalSearchParams();
  const category = categories.find((cat) => cat.name === params?.category);

  const [selected, setSelected] = useState("5 mins");
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
            {category?.name}
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
          <Text
            family="inter"
            className="text-[#666666] mb-[10]"
          >
            Learn how to identify and name emotions in everyday life
          </Text>

          <FilterChips
            selected={selected}
            onSelect={setSelected}
            options={["5 mins", "10 mins", "15 mins", "read", "bookmarked"]}
          />

          <View className="mt-[20]  ">
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
