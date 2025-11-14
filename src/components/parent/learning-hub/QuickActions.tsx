import { Bookmark, Mail, Wrench } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import { Book1 } from "iconsax-react-nativejs";
import Text from "../../ui/Text";

const QuickActions = () => {
  return (
    <View className="my-[15]">
      <Text
        className="text-xl"
        font="poppins-medium"
      >
        Quick Actions
      </Text>

      <View className="mt-[10] flex-wrap flex-row justify-between gap-y-[10]">
        <TouchableOpacity className="h-[100] w-[160] bg-[#4A90E2] rounded-[12] items-center justify-center">
          <Bookmark
            size={25}
            fill={"#FFFFFF"}
            stroke={"#FFFFFF"}
          />
          <Text
            className="text-white text-lg"
            font="poppins-medium"
          >
            Save for Later
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="h-[100] w-[160] bg-[#8E44AD] rounded-[12] items-center justify-center">
          <Mail
            size={25}
            color={"#FFFFFF"}
          />
          <Text
            className="text-white text-lg"
            font="poppins-medium"
          >
            Ask a Psychologist
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="h-[100] w-[160] bg-[#FF8C42] rounded-[12] items-center justify-center">
          <Wrench
            size={25}
            fill={"#FFFFFF"}
            stroke={"#FFFFFF"}
          />
          <Text
            className="text-white text-lg"
            font="poppins-medium"
          >
            Parent Tools
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="h-[100] w-[160] bg-[#FFD93B] rounded-[12] items-center justify-center">
          <Book1
            size={25}
            color="#FFF"
            variant="Bold"
          />
          <Text
            className="text-white text-lg"
            font="poppins-medium"
          >
            Resource Library
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActions;
