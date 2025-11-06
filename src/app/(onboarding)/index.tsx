import { useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import {
  runOnJS,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import ChildOnboarding1 from "@/src/components/onboarding/ChildOnboarding1";
import ChildOnboarding3 from "@/src/components/onboarding/ChildOnboarding3";
import ChildOnboarding2 from "@/src/components/onboarding/ChildOnboaring2";
import DotIndicator from "@/src/components/onboarding/DotIndicator";

const onboardingData = [1, 2, 3];

export default function ChildOnboarding() {
  const pagerRef = useRef(null);

  const currentPage = useSharedValue(0);

  const [pageIndex, setPageIndex] = useState(0);

  useDerivedValue(() => {
    const floorIndex = Math.floor(currentPage.value);
    if (floorIndex !== pageIndex) {
      runOnJS(setPageIndex)(floorIndex);
    }
  }, [pageIndex]);

  const handlePageScroll = (e) => {
    currentPage.value = e.nativeEvent.position + e.nativeEvent.offset;
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageScroll={handlePageScroll}
      >
        <ChildOnboarding1 />

        <ChildOnboarding2 key={"2"} />

        <ChildOnboarding3 key={"3"} />
      </PagerView>

      <View style={styles.dotContainer}>
        {onboardingData.map((_, index) => (
          <DotIndicator
            key={index}
            index={index}
            currentPage={currentPage}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pagerView: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 26,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%",
    justifyContent: "center",
    paddingBottom: 55,
  },
  imageBg: { flex: 1, justifyContent: "center", alignItems: "center" },
  textContainer: {
    paddingHorizontal: 15,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 12,
    position: "absolute",
    top: Platform.OS === "ios" ? 70 : 40,
    left: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    padding: 12,
  },
  skipText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    paddingVertical: 14,
    borderRadius: 25,
  },
  nextText: {
    fontSize: 16,
    color: "#667eea",
    fontWeight: "700",
  },
});
