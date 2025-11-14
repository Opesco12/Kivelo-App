import { Dot } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

import Text from "../../ui/Text";
import Progress from "./Progress";

type LearningBoxProp = {
  title: string;
  timeLeft: string;
  progress: string;
};

const LearningBox = ({ title, timeLeft, progress }: LearningBoxProp) => {
  return (
    <View className="h-[100]  bg-white p-[15] rounded-[12] my-[5]">
      <View className="flex-row justify-between">
        <View>
          <Text
            className="text-[#666666] text-lg"
            font="poppins-medium"
          >
            {title}
          </Text>
          <View className="flex-row items-center">
            <Text>{timeLeft}</Text>
            <Dot
              size={30}
              fill={"#666666"}
              strokeWidth={3}
            />
            <Text className="text-[#666666]">{progress} complete</Text>
          </View>
        </View>

        <TouchableOpacity className="h-[34] rounded-[8] bg-[#27AE60] w-[75] items-center justify-center">
          <Text className="text-white">Resume</Text>
        </TouchableOpacity>
      </View>

      <Progress progress={progress} />
    </View>
  );
};

export default LearningBox;
