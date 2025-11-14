import { View } from "react-native";

import Text from "../../ui/Text";
import LearningBox from "./LearningBox";

const ContinueLearning = () => {
  return (
    <View className="my-[15]">
      <Text
        className="text-xl"
        font="poppins-medium"
      >
        Continue Learning
      </Text>

      <View className="mt-[15]">
        <LearningBox
          title="Setting Healthy Boundaries"
          progress="75%"
          timeLeft="3 mins left"
        />

        <LearningBox
          title="Understanding Big Emotions"
          progress="60%"
          timeLeft="5 mins left"
        />

        <LearningBox
          title="Active Listening Techniques"
          progress="40%"
          timeLeft="8 mins left"
        />
      </View>
    </View>
  );
};

export default ContinueLearning;
