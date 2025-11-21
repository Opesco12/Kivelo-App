import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";

const Messages = () => {
  return (
    <Screen className="bg-[#E3F2FD] ">
      <Text
        family="inter"
        className="text-2xl"
      >
        Messages
      </Text>

      <TextInput
        className="rounded-[50] h-[50] bg-white px-[20] text-lg my-[15]"
        placeholder="Search messages or names"
      />

      <View className="flex-row gap-[30] items-center mb-[20] mt-[5]">
        <Text
          className="text-xl  underline "
          family="inter"
        >
          All
        </Text>
        <Text
          className="text-lg text-[#666666]"
          family="inter"
        >
          Archived
        </Text>
      </View>

      <Text
        className="text-[#666666] text-lg "
        family="inter"
      >
        Messages helps you stay connected. If a message feels off, pause and
        check in
      </Text>

      <View className="mt-[15] gap-[15]">
        <View className="bg-white p-[15] rounded-[16] flex-row justify-between ">
          <View className="relative h-[60] w-[60] ">
            <Image
              source={{ uri: "https://picsum.photos/40" }}
              className="h-[60] w-[60] rounded-[30]"
            />
            <View
              className="h-[18] w-[18] bg-[#22C55E] rounded-[8] absolute right-0 bottom-0"
              style={{ borderWidth: 3, borderColor: "#fff" }}
            />
          </View>

          <View className="w-[60%]">
            <Text
              className="text-2xl mb-[5]"
              numberOfLines={1}
            >
              Betty
            </Text>
            <Text
              // className="text-lg"
              numberOfLines={2}
            >
              Can we do a safety trip
            </Text>
          </View>

          <View>
            <Text className=" text-[#666666]">2:15pm</Text>
            <View className="h-[18] w-[18]  bg-[#3378FF] rounded-[9] items-center justify-center self-end">
              <Text className="text-white text-sm">2</Text>
            </View>
          </View>
        </View>

        <View className="bg-white p-[15] rounded-[16] flex-row justify-between ">
          <View className="relative h-[60] w-[60] ">
            <Image
              source={{ uri: "https://picsum.photos/40" }}
              className="h-[60] w-[60] rounded-[30]"
            />
            <View
              className="h-[18] w-[18] bg-[#22C55E] rounded-[8] absolute right-0 bottom-0"
              style={{ borderWidth: 3, borderColor: "#fff" }}
            />
          </View>

          <View className="w-[60%]">
            <Text
              className="text-2xl mb-[5]"
              numberOfLines={1}
            >
              Max
            </Text>
            <Text
              // className="text-lg"
              numberOfLines={2}
            >
              Thanks for the help with the homework!
            </Text>
          </View>

          <View>
            <Text className=" text-[#666666]">2:15pm</Text>
            <View className="h-[18] w-[18]  bg-[#3378FF] rounded-[9] items-center justify-center self-end">
              <Text className="text-white text-sm">2</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mt-[25]">
        <TouchableOpacity className="bg-[#3378FF] h-[56] rounded-[50] items-center justify-center">
          <Text
            family="inter"
            className="text-white"
          >
            Start New Chat
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Messages;
