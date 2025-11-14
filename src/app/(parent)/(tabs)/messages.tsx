import { Search } from "lucide-react-native";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";

const Messages = () => {
  return (
    <Screen className="bg-[#9691E5]/65 px-[5]">
      <Text
        className="text-3xl text-center text-white"
        font="poppins-medium"
      >
        Select Who to chat with
      </Text>
      <Text className="mt-[5] text-center text-lg text-white">
        Choose a child or support contact to start a conversation
      </Text>

      <View className="h-[70] my-[20] bg-white  rounded-[50] items-center justify-center flex-row overflow-hidden">
        <Search size={25} />
        <TextInput
          className="pl-[15] text-2xl  h-[70] w-[85%]"
          placeholder="Search by name"
          placeholderTextColor={"#666666"}
        />
      </View>

      <View className="gap-y-[15]">
        <View className="h-[190] bg-white rounded-[18] p-[15] justify-between">
          <View className="flex-row gap-[10] items-start">
            <View className="relative w-[48]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                className="h-[48] w-[48] rounded-[24]"
              />
              <View
                className="bg-[#22C55E] h-[16] w-[16] rounded-[8] absolute"
                style={{
                  bottom: -2,
                  right: -2,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
            </View>

            <View className="flex-1">
              <Text
                className="text-2xl mb-[5]"
                font="poppins-medium"
              >
                Liam
              </Text>
              <Text className="text-[#6A1B9A]">Son, Age 10</Text>

              <Text
                className="text-xl mt-[10] text-pretty"
                numberOfLines={2}
              >
                Can we talk for a bit?
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#3B82F6] h-[48] rounded-[100] items-center justify-center">
            <Text className="text-xl text-white">Chat Now</Text>
          </TouchableOpacity>
        </View>

        <View className="h-[190] bg-white rounded-[18] p-[15] justify-between">
          <View className="flex-row gap-[10] items-start">
            <View className="relative w-[48]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                className="h-[48] w-[48] rounded-[24]"
              />
              <View
                className="bg-[#22C55E] h-[16] w-[16] rounded-[8] absolute"
                style={{
                  bottom: -2,
                  right: -2,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
            </View>

            <View className="flex-1">
              <Text
                className="text-2xl mb-[5]"
                font="poppins-medium"
              >
                Betty
              </Text>
              <Text className="text-[#6A1B9A]">Daughter, Age 12</Text>

              <Text
                className="text-xl mt-[10] text-pretty"
                numberOfLines={2}
              >
                I learned about stranger danger today!!
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#3B82F6] h-[48] rounded-[100] items-center justify-center">
            <Text className="text-xl text-white">Chat Now</Text>
          </TouchableOpacity>
        </View>

        <View className="h-[190] bg-white rounded-[18] p-[15] justify-between">
          <View className="flex-row gap-[10] items-start">
            <View className="relative w-[48]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                className="h-[48] w-[48] rounded-[24]"
              />
              <View
                className="bg-[#22C55E] h-[16] w-[16] rounded-[8] absolute"
                style={{
                  bottom: -2,
                  right: -2,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
            </View>

            <View className="flex-1">
              <Text
                className="text-2xl mb-[5]"
                font="poppins-medium"
              >
                Emma
              </Text>
              <Text className="text-[#6A1B9A]">Son, Age 8</Text>

              <Text
                className="text-xl mt-[10] text-pretty"
                numberOfLines={2}
              >
                Hey Mom
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#3B82F6] h-[48] rounded-[100] items-center justify-center">
            <Text className="text-xl text-white">Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default Messages;
