import { Search } from "lucide-react-native";
import { TextInput, TouchableOpacity, View } from "react-native";

import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";

const Chat = () => {
  return (
    <Screen padBottom>
      <View className="h-[50] rounded-[50] bg-white items-center flex-row pl-[15] overflow-hidden gap-[10]">
        <Search size={20} />
        <TextInput
          className="flex-1 "
          placeholder="Search name here"
        />
      </View>

      <Text
        className="text-2xl text-[#9333EA] mt-[20] text-center"
        font="poppins-bold"
      >
        Select who to chat with
      </Text>

      <Text className="text-lg text-[#9333EA] text-center mt-[5]">
        Choose a friend or support contact to start a conversation.
      </Text>

      <View className="my-[20] gap-[15]">
        <View className="p-[15] bg-white rounded-[16]">
          <View className="flex-row items-center gap-[8]">
            <View className="relative h-[60] w-[60] ">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
              <View
                className="h-[18] w-[18] bg-[#22C55E] rounded-[8] absolute right-0 bottom-0"
                style={{ borderWidth: 3, borderColor: "#fff" }}
              />
            </View>
            <View className="flex-row items-start justify-between flex-1">
              <View>
                <Text
                  className="text-2xl"
                  font="poppins-medium"
                >
                  Favour
                </Text>
                <Text className="text-lg text-[#1E1E1EBF]">
                  Can we talk for a bit?
                </Text>
              </View>
              <Text>8:00am</Text>
            </View>
          </View>

          <TouchableOpacity className="h-[50] rounded-[50] bg-[#3B82F6] items-center justify-center mt-[20]">
            <Text className="text-white text-lg">Chat now</Text>
          </TouchableOpacity>
        </View>

        <View className="p-[15] bg-white rounded-[16]">
          <View className="flex-row items-center gap-[8]">
            <View className="relative h-[60] w-[60] ">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
              <View
                className="h-[18] w-[18] bg-[#22C55E] rounded-[8] absolute right-0 bottom-0"
                style={{ borderWidth: 3, borderColor: "#fff" }}
              />
            </View>
            <View className="flex-row items-start justify-between flex-1">
              <View>
                <Text
                  className="text-2xl"
                  font="poppins-medium"
                >
                  Rachael
                </Text>
                <Text className="text-lg text-[#1E1E1EBF]">
                  I played a game today and it was fun
                </Text>
              </View>
              <Text>2:00pm</Text>
            </View>
          </View>

          <TouchableOpacity className="h-[50] rounded-[50] bg-[#3B82F6] items-center justify-center mt-[20]">
            <Text className="text-white text-lg">Chat now</Text>
          </TouchableOpacity>
        </View>

        <View className="p-[15] bg-white rounded-[16]">
          <View className="flex-row items-center gap-[8]">
            <View className="relative h-[60] w-[60] ">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
              <View
                className="h-[18] w-[18] bg-[#22C55E] rounded-[8] absolute right-0 bottom-0"
                style={{ borderWidth: 3, borderColor: "#fff" }}
              />
            </View>
            <View className="flex-row items-start justify-between flex-1">
              <View>
                <Text
                  className="text-2xl"
                  font="poppins-medium"
                >
                  Davidson
                </Text>
                <Text className="text-lg text-[#1E1E1EBF]">Hey Friend?</Text>
              </View>
              <Text>5:08pm</Text>
            </View>
          </View>

          <TouchableOpacity className="h-[50] rounded-[50] bg-[#3B82F6] items-center justify-center mt-[20]">
            <Text className="text-white text-lg">Chat now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default Chat;
