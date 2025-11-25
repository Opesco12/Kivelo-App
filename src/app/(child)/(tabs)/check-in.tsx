import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Text from "@/src/components/ui/Text";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

type Mood = {
  label: string;
  value: string;
  color: string;
  lottieUrl: string;
  emotion: string;
};

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

const CheckIn = () => {
  const [moodIndex, setMoodIndex] = useState(0);
  const backgroundColor = useSharedValue(moods[0].color);

  useEffect(() => {
    backgroundColor.value = withTiming(moods[moodIndex].color, {
      duration: 500,
    });
  }, [moodIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Animated.View
      className="flex-1 justify-start"
      style={[animatedStyle]}
    >
      <SafeAreaView className="flex-1">
        <Text
          className="mt-[20] text-2xl text-white text-center"
          font="poppins-bold"
        >
          {`How Are You Feeling \nToday?`}
        </Text>
        <Animated.View entering={SlideInDown.springify().duration(500)}>
          <Image
            source={moods[moodIndex].emotion}
            style={{
              height: 230,
              width: 280,
              alignSelf: "center",
            }}
            contentFit="contain"
          />
        </Animated.View>

        <Text
          className="mt-[20] text-4xl  text-white text-center"
          font="poppins-bold"
        >
          {moods[moodIndex].label}
        </Text>
        <View
          className="flex-1 justify-end gap-[35] "
          style={{
            paddingBottom: Platform.OS === "ios" ? 60 : 120,
          }}
        >
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            >
              {moods.map((mood, index) => (
                <TouchableOpacity
                  onPress={() => setMoodIndex(index)}
                  key={index}
                  style={{
                    borderWidth: moodIndex === index ? 2 : 0,
                    borderColor: "#4A90E2",
                    marginLeft: index === 0 ? 15 : 0,
                  }}
                  className="h-[120] w-[100] bg-white rounded-[12] items-center justify-center"
                >
                  <LottieView
                    source={{
                      uri: mood.lottieUrl,
                    }}
                    loop
                    autoPlay
                    style={{ height: 80, width: 80, alignSelf: "center" }}
                  />

                  <Text
                    className="text-lg mt-[5]"
                    font="poppins-bold"
                  >
                    {mood.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View className="px-[15]">
            <TouchableOpacity className="h-[60] rounded-[50] bg-black items-center justify-center">
              <Text
                className="text-white text-lg"
                family="inter"
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default CheckIn;
