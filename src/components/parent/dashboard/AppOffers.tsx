import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  runOnUI,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Colors } from "@/src/constants/colors";
import { ChartSpline } from "lucide-react-native";
import Text from "../../ui/Text";

const AppOffers = () => {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const targetScrollX = useSharedValue(0);

  const scrollToPosition = (position: number) => {
    "worklet";
    targetScrollX.value = withSpring(position);
  };

  useEffect(() => {
    const autoScroll = () => {
      setTimeout(() => {
        runOnUI(() => {
          scrollToPosition(315);
        })();
        scrollViewRef.current?.scrollTo({ x: 315, animated: true });
      }, 3000);

      setTimeout(() => {
        runOnUI(() => {
          scrollToPosition(630);
        })();
        scrollViewRef.current?.scrollTo({ x: 630, animated: true });
      }, 6000);

      setTimeout(() => {
        runOnUI(() => {
          scrollToPosition(0);
        })();
        scrollViewRef.current?.scrollTo({ x: 0, animated: true });
      }, 9000);
    };

    autoScroll();

    const interval = setInterval(autoScroll, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="mb-[25]">
      <Text
        className="text-[#4A90E2]"
        style={{ fontSize: 20 }}
        font="poppins-medium"
      >
        What The App Offers
      </Text>
      <Text className="text-[#4B5563]">Focus on what the app offers:</Text>

      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-[10] w-full"
        scrollEventThrottle={16}
      >
        <View className="h-[130] w-[300] rounded-[12] overflow-hidden mr-[15]">
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
            colors={["#4A90E2", "#5DADEC"]}
          >
            <View className="w-[70%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 22 }}
              >
                Trust & Privacy
              </Text>
              <Text
                className="text-white my-[2]"
                style={{ fontSize: 14 }}
              >
                Your child chooses what to share. You get only what they allow.
              </Text>
            </View>
            <View className="w-[25%]">
              <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                <Image
                  className="h-[50] w-[50]"
                  source={require("@/src/assets/images/project-images/padlock.png")}
                />
              </View>
            </View>
          </LinearGradient>
        </View>

        <View className="h-[130]  w-[300] rounded-[12] overflow-hidden mr-[15]">
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
            colors={["#4B2E83", "#9333EA"]}
          >
            <View className="w-[70%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 22 }}
              >
                Guided Insights
              </Text>
              <Text
                className="text-white my-[2]"
                style={{ fontSize: 14 }}
              >
                Simple trends and tips to understand your child better
              </Text>
            </View>
            <View className="w-[25%]">
              <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                <ChartSpline
                  size={25}
                  color={Colors.light.white}
                />
              </View>
            </View>
          </LinearGradient>
        </View>

        <View className="h-[130]  w-[300] rounded-[12] overflow-hidden mr-[15]">
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
            colors={["#7F753E", "#E5D370"]}
          >
            <View className="w-[70%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 20 }}
              >
                Family Connection
              </Text>
              <Text
                className="text-white my-[2]"
                style={{ fontSize: 14 }}
              >
                Strengthen bonds through understanding and communication
              </Text>
            </View>
            <View className="w-[25%]">
              <View className="h-[70] w-[70] rounded-[35] bg-[#D9D9D975] items-center justify-center">
                <Image
                  className="h-[45] w-[45]"
                  source={require("@/src/assets/images/project-images/family.png")}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    // padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AppOffers;
