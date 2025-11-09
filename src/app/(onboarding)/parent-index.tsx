import { Colors } from "@/src/constants/colors";
import { Heart } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ParentIndex = () => {
  return (
    <View className="flex-1 bg-[#6EC5E9] px-[15]">
      <SafeAreaView>
        <View className="h-[45] w-[45] rounded-[22.5] bg-[#4A90E2] mt-[30] items-center justify-center">
          <Heart
            size={20}
            fill={Colors.light.white}
            color={Colors.light.white}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ParentIndex;
