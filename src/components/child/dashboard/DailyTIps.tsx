import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  runOnUI,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Text from "../../ui/Text";

const DailyTips = () => {
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
    <View className="mb-[5] mt-[20]">
      <Text
        className="text-xl text-[#4B2E83]"
        font="poppins-medium"
      >
        Daily TIps
      </Text>

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
            colors={["#4C90FF", "#9333EA"]}
          >
            <View className="w-[70%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 22 }}
              >
                Be kind to yourself
              </Text>
              <Text
                className="text-white my-[2]"
                style={{ fontSize: 14 }}
              >
                You are awesome just the way you are. its okay to make a mistake
              </Text>
            </View>
            <View className="w-[25%]">
              <Image
                className="h-[80] w-[80]"
                source={require("@/src/assets/images/onboarding-images/onboarding1-5.png")}
              />
            </View>
          </LinearGradient>
        </View>

        <View className="h-[130]  w-[300] rounded-[12] overflow-hidden mr-[15]">
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
            colors={["#6EC5E9", "#45A2EB"]}
          >
            <View className="w-[70%]">
              <Text
                className="text-white"
                font="poppins-bold"
                style={{ fontSize: 22 }}
              >
                Emotional Regulation
              </Text>
              <Text
                className="text-white my-[2]"
                style={{ fontSize: 14 }}
              >
                For better, tke a deep breath, when you feel angry, sad or
                worried
              </Text>
            </View>
            <View className="w-[25%]">
              <Image
                className="h-[72] w-[87]"
                source={require("@/src/assets/images/onboarding-images/onboarding1-6.png")}
                resizeMode="contain"
              />
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

export default DailyTips;
