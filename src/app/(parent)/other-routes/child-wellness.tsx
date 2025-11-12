import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Select, { SelectOption } from "@/src/components/ui/Select";
import Text from "@/src/components/ui/Text";
import { Calendar } from "lucide-react-native";

const ChildWellness = () => {
  const [value, setValue] = useState<string | number>("");

  const options: SelectOption[] = [
    { label: "Emma", value: "1" },
    { label: "Shola", value: "2" },
  ];
  return (
    <View className="flex-1 bg-[#D1FAE5]">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="pt-[20] flex-1"
          contentContainerStyle={{ flex: 1 }}
        >
          <View className="px-[15] pb-[15]">
            <View className="flex-row gap-[10]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                className="h-[40] w-[40] rounded-[20]"
              />
              <View className="flex-row items-center justify-between flex-1">
                <View>
                  <Text
                    className="text-2xl"
                    font="poppins-medium"
                  >
                    Hi, Bella!
                  </Text>
                </View>

                <View className="flex-row items-center gap-[8]">
                  <Select
                    options={options}
                    value={value}
                    onValueChange={setValue}
                    placeholder="Pick a fruit"
                    style="w-[80]"
                  />

                  <View className="w-[36] h-[36] rounded-[8] bg-white items-center justify-center">
                    <Calendar
                      size={18}
                      strokeWidth={1}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-[8] flex-row justify-between">
              <View className="flex-row gap-[2] items-center">
                <View className="bg-[#22C55E] h-[8] w-[8] rounded-[4]" />
                <Text>Online</Text>
              </View>

              <Text>Last Sync: 2 mins ago</Text>
            </View>
          </View>

          <View className="bg-gray-50 flex-1 p-[15]">
            <View className="h-[140] bg-white rounded-[12] p-[12]">
              <Text
                className="text-xl "
                font="poppins-medium"
              >
                Trust Zone
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ChildWellness;
