import Text from "@/src/components/ui/Text";
import Slider from "@react-native-community/slider";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Mood = {
  label: string;
  value: string;
  color: string;
  lottieUrl: string;
  emotion: any;
};

// Import the same moods array
const moods: Mood[] = [
  {
    label: "Happy",
    value: "happy",
    color: "#7092CF",
    lottieUrl:
      "https://lottie.host/b6007160-be5b-46c5-94fd-434e6396863b/olxtUIt7YV.lottie",
    emotion: require("@/src/assets/images/project-images/happy-emotion.svg"),
  },
  {
    label: "Angry",
    value: "angry",
    color: "#EE7887",
    lottieUrl:
      "https://lottie.host/6a27e9e7-381f-4a04-b4e9-2a8bb28f769d/fY5LWu3bMY.lottie",
    emotion: require("@/src/assets/images/project-images/angry-emotion.svg"),
  },
  {
    label: "Suprised",
    value: "suprised",
    color: "#7092CF",
    lottieUrl:
      "https://lottie.host/9ffa63e4-7f42-4e66-aa6e-e7a0eb906fb1/dyorQjQxdR.lottie",
    emotion: require("@/src/assets/images/project-images/suprised-emotion.svg"),
  },
  {
    label: "Afraid",
    value: "afraid",
    color: "#FF966A",
    lottieUrl:
      "https://lottie.host/2c5f0be0-648f-4c5c-94b7-e84e956fd421/VHUIDi9Hi7.lottie",
    emotion: require("@/src/assets/images/project-images/afraid-emotion.svg"),
  },
];

const intensityLabels = ["A little", "Quite", "Very"];

const MoodIntensityScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [intensity, setIntensity] = useState(1); // Start at middle (Quite)

  const moodIndex = parseInt(params.moodIndex as string) || 0;
  const selectedMood = moods[moodIndex];

  const scale = useSharedValue(1);

  const handleSliderChange = (value: number) => {
    setIntensity(Math.round(value));
    scale.value = withSpring(1.1, {}, () => {
      scale.value = withSpring(1);
    });
  };

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleSaveMood = () => {
    console.log({
      mood: selectedMood.label,
      moodValue: selectedMood.value,
      intensity: intensityLabels[intensity],
      intensityValue: intensity,
    });

    router.back();
  };

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: selectedMood.color }}
    >
      <SafeAreaView className="flex-1 px-[20]">
        <Text
          className="mt-[20] text-2xl text-white text-center"
          font="poppins-bold"
        >
          {`How ${selectedMood.label} are you?`}
        </Text>

        <Image
          source={selectedMood.emotion}
          style={{
            height: 200,
            width: 260,
            alignSelf: "center",
            marginTop: 40,
          }}
          contentFit="contain"
        />

        <View className="flex-1 justify-end pb-[40]">
          <Animated.View style={animatedTextStyle}>
            <Text
              className="text-5xl text-white text-center mb-[40]"
              font="poppins-bold"
            >
              {intensityLabels[intensity]}
            </Text>
          </Animated.View>

          <View className="mb-[40]">
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={2}
              step={1}
              value={intensity}
              onValueChange={handleSliderChange}
              minimumTrackTintColor="#FFD700"
              maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
              thumbTintColor="#FFFFFF"
            />
          </View>

          <TouchableOpacity
            className="h-[60] rounded-[50] bg-black items-center justify-center"
            onPress={handleSaveMood}
          >
            <Text
              className="text-white text-lg"
              family="inter"
            >
              Save Mood
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MoodIntensityScreen;
