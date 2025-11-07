import { useEffect, useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import Animated, {
  Easing,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Text from "../ui/Text";

const IMAGES = [
  require("@/src/assets/images/onboarding-images/onboarding1-7.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-8.png"),
  require("@/src/assets/images/onboarding-images/onboarding1-9.png"),
];

const FADE_DURATION = 400;
const DISPLAY_DURATION = 3000 - FADE_DURATION * 2;

const ChildOnboarding3 = () => {
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

  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <View className="flex-1 bg-[#DCE775]">
      <View className="flex-1 justify-end items-center">
        <View className="w-[75%] self-center">
          <Animated.View
            layout={LinearTransition}
            style={{ width: "100%", alignItems: "center", marginTop: 10 }}
          >
            <Text
              style={{ fontSize: 33 }}
              className="text-center text-[#1E1E1EBF] "
              font="poppins-bold"
            >
              {`Safe Fun \n Just For You!`}
            </Text>
            <Text
              style={{ fontSize: 16 }}
              className="px-5 mt-[5] leading-[2] text-center mb-[5]"
              font="poppins-medium"
            >
              Play exciting games, make discoveries and stay safe while you grow
              smarter
            </Text>

            {!isDisplayed && (
              <Button
                text="Get Started"
                onPress={() => setIsDisplayed(true)}
                style={{ marginBottom: 20 }}
              />
            )}
            {isDisplayed && (
              <>
                <Button
                  text="Create Your Profile"
                  onPress={() =>
                    router.push("/(onboarding)/sign-up-role-selection")
                  }
                />

                <TouchableOpacity
                  onPress={() =>
                    router.push("/(onboarding)/login-role-selection")
                  }
                  className="w-full h-[60] overflow-hidden my-[5] justify-center items-center"
                  style={{
                    borderRadius: 100,
                    borderColor: "#1E1E1EBF",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    font="poppins-medium"
                    className="text-xl"
                  >
                    I have an account
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Animated.View>
        </View>
        <View className="h-[400] justify-end">
          <Animated.Image
            source={IMAGES[currentIndex]}
            style={[animatedStyle]}
          />
        </View>
      </View>
    </View>
  );
};

const Button = ({
  text,
  onPress,
  style,
}: {
  text: string;
  onPress?: () => void;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full h-[60] overflow-hidden my-[5]"
      style={[{ borderRadius: 100 }, style]}
    >
      <LinearGradient
        colors={["#A5D22D", "#556C17"]}
        className="flex-1 justify-center items-center "
      >
        <Text
          font="poppins-medium"
          className="text-xl text-white "
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ChildOnboarding3;
