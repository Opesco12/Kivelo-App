import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  Add,
  Heart,
  InfoCircle,
  Link21,
  Send2,
  Shield,
  Star1,
} from "iconsax-react-nativejs";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "@/src/components/ui/BackButton";
import Text from "@/src/components/ui/Text";
import { router } from "expo-router";

const ChatScreen = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#E3F2FD", "#F3E5F5"]}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SafeAreaView className="flex-1 px-[15]">
            <View className="flex-row justify-between">
              <BackButton />

              <TouchableOpacity
                onPress={() => router.push("/chat/chat-info")}
                className="h-[45] w-[45] items-center justify-center rounded-[22.5] bg-white"
              >
                <InfoCircle
                  size={25}
                  variant="Bold"
                  color="#7C4DFF"
                />
              </TouchableOpacity>
            </View>

            <View className="items-center justify-center mt-[15]">
              <Image
                source={{ uri: "https://picsum.photos/40" }}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
              <Text
                className="text-2xl mt-[10]"
                font="poppins-medium"
              >
                Bella
              </Text>
            </View>

            <Text className="text-xl text-center mt-[25]">
              Start a conversation
            </Text>
            <Text className=" text-center mt-[10]">
              Check in with your child, ask how their day went, talk about
              safety, or just say hi.
            </Text>

            <View className="my-[25] gap-[12]">
              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row p-[15]  bg-white items-center gap-[10] rounded-[50]"
              >
                <View className="h-[32] w-[32] items-center justify-center rounded-[16] bg-[#E3F2FD]">
                  <Heart
                    size={20}
                    variant="Bold"
                    color="#007BFF"
                  />
                </View>

                <Text>How are you feeling today?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row p-[15]  bg-white items-center gap-[10] rounded-[50]"
              >
                <View className="h-[32] w-[32] items-center justify-center rounded-[16] bg-[#F3E5F5]">
                  <Star1
                    size={20}
                    variant="Bold"
                    color="#7C4DFF"
                  />
                </View>

                <Text>What was the best part of your day?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row p-[15]  bg-white items-center gap-[10] rounded-[50]"
              >
                <View className="h-[32] w-[32] items-center justify-center rounded-[16] bg-[#FFF9E6]">
                  <Link21
                    size={20}
                    variant="Bold"
                    color="#FFD700"
                  />
                </View>

                <Text>Want to play a quick quiz together?</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-1 justify-end">
              <View className="flex-row items-center gap-[5] justify-center">
                <Shield
                  color="#7C4DFF"
                  variant="Bold"
                  size={15}
                />
                <Text className="text-[#5B5B7A] text-sm">
                  {`Messages here are private and designed to \nhelp you build trustand connection.`}
                </Text>
              </View>

              <View className="bg-white rounded-[50] h-[50] mt-[20] mb-[10] flex-row items-center px-[15]">
                <Add
                  size={25}
                  color="#5B5B7A"
                />

                <TextInput className="flex-1" />

                <TouchableOpacity
                  activeOpacity={0.6}
                  className="h-[32] w-[32] rounded-[16] bg-[#FFD700] items-center justify-center"
                >
                  <Send2
                    variant="Bold"
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ChatScreen;
