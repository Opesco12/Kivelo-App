import BackButton from "@/src/components/ui/BackButton";
import { Image } from "expo-image";
import {
  ArrowRight2,
  Image as ImageIcon,
  ShieldTick,
} from "iconsax-react-nativejs";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "@/src/components/ui/Text";
import { ArrowRight } from "lucide-react-native";

const ChatInfo = () => {
  return (
    <View className="flex-1 bg-[#E3F2FD]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1 px-[15]">
          <View className="h-[45] justify-center">
            <BackButton
              style={{
                position: "absolute",
              }}
            />

            <Text
              className="text-center text-xl"
              font="poppins-medium"
            >
              Chat Info
            </Text>
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
            <Text className="text-[#5B5B7A]">Daughter, Age 10</Text>
            <View className="bg-[#F0FDF4] p-[10] rounded-[50] my-[10]">
              <Text
                className="text-[#15803D]"
                font="poppins-medium"
              >
                Safety Tips Enabled
              </Text>
            </View>

            <Text className="text-[#5B5B7A]">Last Active 5 mins ago</Text>
          </View>

          <View className="gap-[12] mt-[25]">
            <TouchableOpacity
              className="bg-white p-[20] rounded-[18] items-center flex-row gap-[10]"
              activeOpacity={0.6}
            >
              <View className="h-[44] w-[44] rounded-[22] items-center justify-center bg-[#EFF6FF]">
                <ImageIcon
                  size={20}
                  variant="Bold"
                  color="#007BFF"
                />
              </View>

              <View className="flex-row justify-between items-center flex-1">
                <Text
                  className="text-lg"
                  font="poppins-medium"
                >
                  View media gallery
                </Text>
                <ArrowRight2 size={20} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white p-[20] rounded-[18] items-center flex-row gap-[10]"
              activeOpacity={0.6}
            >
              <View className="h-[44] w-[44] rounded-[22] items-center justify-center bg-[#FAF5FF]">
                <ImageIcon
                  size={20}
                  variant="Bold"
                  color="#7C4DFF"
                />
              </View>

              <View className="flex-row justify-between items-center flex-1">
                <Text
                  className="text-lg"
                  font="poppins-medium"
                >
                  Shared Activities
                </Text>
                <ArrowRight2 size={20} />
              </View>
            </TouchableOpacity>

            <View className="bg-[#FAF5FF] rounded-[18] p-[15] mt-[15]">
              <View className="flex-row gap-[10]">
                <ShieldTick
                  size={20}
                  color="#007BFF"
                  variant="Bold"
                />
                <View className="flex-1">
                  <Text
                    className="text-xl mb-[5]"
                    font="poppins-medium"
                  >
                    Safety Tip
                  </Text>
                  <Text numberOfLines={2}>
                    If a message feels off, take a pause and check-in. Trust
                    your instincts.
                  </Text>
                </View>
              </View>

              <TouchableOpacity className="bg-white rounded-[16] py-[15] mt-[20] flex-row items-center justify-center gap-[5]">
                <Text
                  className="text-center text-[#007BFF]"
                  font="poppins-medium"
                >
                  View safety guide
                </Text>
                <ArrowRight
                  size={20}
                  color={"#007BFF"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-[#007BFF] py-[20] rounded-[50] mt-[20]">
            <Text
              font="poppins-medium"
              className="text-white text-center"
            >
              Done
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ChatInfo;
