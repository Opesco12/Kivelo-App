import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

import BackButton from "@/src/components/ui/BackButton";
import LottieView from "lottie-react-native";

const { height, width } = Dimensions.get("screen");

const COLORS = ["#4A90E2", "#81D4FA", "#FFD54F", "#FF5F5F"];

export default function Draw() {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [strokeColor, setStrokeColor] = useState("#4A90E2");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [hasStartedDrawing, setHasStartedDrawing] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        setCurrentPath([{ x: locationX, y: locationY }]);
        if (!hasStartedDrawing) {
          setHasStartedDrawing(true);
        }
      },
      onPanResponderMove: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        setCurrentPath((prev) => [...prev, { x: locationX, y: locationY }]);
      },
      onPanResponderRelease: () => {
        if (currentPath.length > 0) {
          setPaths((prev) => [
            ...prev,
            {
              points: currentPath,
              color: strokeColor,
              width: strokeWidth,
            },
          ]);
          setCurrentPath([]);
        }
      },
    })
  ).current;

  const pathToSvgString = (points) => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  };

  const LottiePlaceholder = () => (
    <View style={styles.lottieContainer}>
      <LottieView
        source={{
          uri: "https://lottie.host/b16e1026-11c6-4367-ae8f-94dd509ef06e/V4I5HIXAsK.lottie",
        }}
        loop
        autoPlay
        style={{ height: 100, width: 100, alignSelf: "center" }}
      />
    </View>
  );

  return (
    <ImageBackground
      source={require("@/src/assets/images/project-images/child-chat-bg.svg")}
      style={{ height: height, width: width }}
    >
      <SafeAreaView style={styles.container}>
        <BackButton style={{ backgroundColor: "#F6EFEF" }} />

        <Text style={styles.title}>Draw what you feel here</Text>
        <Text style={styles.subtitle}>pick a color and draw what you feel</Text>

        <View
          style={styles.canvasWrapper}
          {...panResponder.panHandlers}
        >
          <Svg style={styles.canvas}>
            {paths.map((path, i) => (
              <Path
                key={i}
                d={pathToSvgString(path.points)}
                stroke={path.color}
                strokeWidth={path.width}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {currentPath.length > 0 && (
              <Path
                d={pathToSvgString(currentPath)}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </Svg>
          {!hasStartedDrawing && <LottiePlaceholder />}
        </View>

        <View style={styles.colorRow}>
          {COLORS.map((color) => (
            <TouchableOpacity
              key={color}
              activeOpacity={0.9}
              style={[
                styles.colorSwatch,
                { backgroundColor: color },
                strokeColor === color && styles.selectedSwatch,
              ]}
              onPress={() => setStrokeColor(color)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            console.log("Drawing saved!");
          }}
        >
          <LinearGradient
            style={styles.gradientButton}
            colors={["#4A90E2", "#294F7C"]}
          >
            <Text style={styles.saveButtonText}>Save Drawing</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  backButton: {
    backgroundColor: "#F6EFEF",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 24,
    color: "#333",
  },
  title: {
    fontSize: 24,
    color: "#9333EA",
    marginTop: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 25,
  },
  canvasWrapper: {
    flex: 0.8,
    marginVertical: 25,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    overflow: "hidden",
    position: "relative",
  },
  canvas: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  lottieContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  lottiePlaceholder: {
    alignItems: "center",
  },
  lottieText: {
    fontSize: 48,
  },
  lottieSubtext: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 8,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorSwatch: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "transparent",
  },
  selectedSwatch: {
    borderColor: "#9333EA",
    borderWidth: 4,
  },
  saveButton: {
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 20,
  },
  gradientButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
