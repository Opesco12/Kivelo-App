import { Dimensions, ImageBackground, View } from "react-native";
import Text from "../ui/Text";

import { useEffect, useState } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const IMAGES = [
  require("@/src/assets/images/onboarding-images/onboarding1-1.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-2.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-3.png"),
];

const FADE_DURATION = 400;
const DISPLAY_DURATION = 3000 - FADE_DURATION * 2;

const ChildOnboarding1 = () => {
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
    <ImageBackground
      className="flex-1"
      source={require("@/src/assets/images/project-images/onboarding-bg.png")}
    >
      <View className="flex-1 justify-end items-center">
        <Text
          font="bauhaus-regular"
          style={{ fontSize: 50 }}
        >
          KIVELO
        </Text>
        <View className="h-[500] justify-end">
          <Animated.Image
            source={IMAGES[currentIndex]}
            style={[animatedStyle]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChildOnboarding1;
