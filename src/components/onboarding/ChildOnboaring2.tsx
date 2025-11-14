import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import Text from "../ui/Text";

const IMAGES = [
  require("@/src/assets/images/onboarding-images/onboarding1-4.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-5.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-6.png"),
];

const FADE_DURATION = 400;
const DISPLAY_DURATION = 3000 - FADE_DURATION * 2;

const ChildOnboarding2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const timer = setInterval(
      () => {
        opacity.value = withSequence(
          withTiming(1, { duration: 0 }),
          withTiming(0, {
            duration: FADE_DURATION,
            easing: Easing.out(Easing.quad),
          }),
          withTiming(1, {
            duration: FADE_DURATION,
            easing: Easing.in(Easing.quad),
          })
        );

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, FADE_DURATION);
      },
      DISPLAY_DURATION + FADE_DURATION * 2
    );

    return () => clearInterval(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#76D7F7", "#FFFFFF"]}
    >
      <View className="flex-1 justify-end items-center">
        <View className="w-[75%] self-center">
          <Text
            style={{ fontSize: 33 }}
            className="text-center"
            font="poppins-bold"
          >
            Your Adventure Starts Here
          </Text>
          <Text
            style={{ fontSize: 16 }}
            className="px-5 mt-[5] leading-[2] text-center"
          >
            Solve Puzzles, win rewards and climb to new levels of learning
            everyday
          </Text>
        </View>
        <View className="h-[500] justify-end">
          <Animated.Image
            source={IMAGES[currentIndex]}
            style={[animatedStyle]}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ChildOnboarding2;
