import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { StyleSheet } from "react-native";

export type DotIndicatorProps = {
  index: number;
  currentPage: any;
};

const DotIndicator = ({ index, currentPage }: DotIndicatorProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];

    const scale = interpolate(
      currentPage.value,
      inputRange,
      [1, 1.5, 1],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      currentPage.value,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolation.CLAMP
    );

    const width = interpolate(
      currentPage.value,
      inputRange,
      [8, 18, 8],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale: withSpring(scale) }],
      opacity: withSpring(opacity),
      width: withSpring(width),
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 4,
  },
});

export default DotIndicator;
