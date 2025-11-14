import { InfoCircle } from "iconsax-react-nativejs";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";

const Insights = () => {
  return (
    <Screen>
      <View className=" bg-white p-[15] rounded-[12]">
        <View className="flex-row gap-[5] items-center">
          <Text
            className="text-xl"
            font="poppins-medium"
          >
            Mood Overview
          </Text>
          <InfoCircle
            size={15}
            variant="Bold"
          />
        </View>

        <View>
          <Text
            className="text-xl mt-[25] mb-[35]"
            font="poppins-medium"
          >
            Alerts
          </Text>

          <View className="h-[90] w-[90] overflow-hidden rounded-[45] self-center">
            <LinearGradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={["#2563EB", "#0F766E"]}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                className="h-[36] w-[36] rounded-[18] items-center justify-center"
                style={{
                  borderStyle: "dashed",
                  borderColor: "white",
                  borderWidth: 1,
                }}
              >
                <Text
                  className="text-2xl text-white"
                  font="poppins-medium"
                >
                  ?
                </Text>
              </View>
            </LinearGradient>
          </View>

          <Text className="text-center text-xl my-[15]">
            No alerts right now — you're all caught up!
          </Text>

          <Text className="text-[#4A90E2] text-lg text-center my-[10]">
            view alert history
          </Text>

          <TouchableOpacity className="bg-[#6A1B9A] h-[50] rounded-[50] items-center justify-center  mt-[10]">
            <Text className="text-lg text-white">view full chart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default Insights;
