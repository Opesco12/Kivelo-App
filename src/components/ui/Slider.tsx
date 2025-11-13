import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  StyleProp,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface StepMarkerProps {
  currentValue: number;
  index: number;
  max: number;
  min: number;
  stepMarked: number;
}

interface CustomSliderProps {
  minimumValue: number;
  maximumValue: number;
  step: number;
  value: number;
  onValueChange: (newValue: number) => void;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbTintColor?: string;
  draggerColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  trackHeight?: number;
  thumbSize?: number;
  showDragger?: boolean;
  StepMarker?: React.ComponentType<StepMarkerProps>;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  minimumValue,
  maximumValue,
  step,
  value,
  onValueChange,
  minimumTrackTintColor = "#1E90FF",
  maximumTrackTintColor = "#D3D3D3",
  thumbTintColor = "#1E90FF",
  draggerColor = "#FFFFFF",
  containerStyle,
  trackHeight = 6,
  thumbSize = 20,
  showDragger = true,
  StepMarker,
}) => {
  const trackWidth = SCREEN_WIDTH * 0.8; // 80% of screen width
  const range = maximumValue - minimumValue;
  const steps = Math.round(range / step) + 1;

  // Initial thumb position based on value
  const initialPosition =
    ((value - minimumValue) / range) * (trackWidth - thumbSize);
  const thumbPosition = useSharedValue(initialPosition);
  const dragOffset = useSharedValue(0); // For translation during drag

  // Animated style for the thumb
  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: thumbPosition.value + dragOffset.value }],
  }));

  // Animated style for the active track (left side)
  const activeTrackStyle = useAnimatedStyle(() => ({
    width: thumbPosition.value + dragOffset.value + thumbSize / 2,
  }));

  // Calculate snapped position and update value (run on JS thread)
  const updateSnappedPosition = (
    newX: number,
    stepsCount: number,
    minVal: number,
    rangeVal: number
  ) => {
    const stepWidth = (trackWidth - thumbSize) / (stepsCount - 1);
    const nearestStep = Math.round(newX / stepWidth);
    const snappedX = Math.max(
      0,
      Math.min(nearestStep * stepWidth, trackWidth - thumbSize)
    );
    thumbPosition.value = withSpring(snappedX);
    const newValue = minVal + (nearestStep * rangeVal) / (stepsCount - 1);
    onValueChange(Math.round(newValue));
  };

  // Gesture configuration (memoized to prevent recreation)
  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          dragOffset.value = 0;
        })
        .onUpdate((event) => {
          // Constrain drag to track bounds
          let newDragX = event.translationX;
          newDragX = Math.max(
            -thumbPosition.value,
            Math.min(newDragX, trackWidth - thumbSize - thumbPosition.value)
          );
          dragOffset.value = newDragX;
        })
        .onEnd(() => {
          runOnJS(updateSnappedPosition)(
            thumbPosition.value + dragOffset.value,
            steps,
            minimumValue,
            range
          );
        }),
    [steps, minimumValue, range, trackWidth, thumbSize]
  );

  // Generate step positions
  const stepPositions = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < steps; i++) {
      positions.push((i * (trackWidth - thumbSize)) / (steps - 1));
    }
    return positions;
  }, [steps, trackWidth, thumbSize]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.track,
          {
            height: trackHeight,
            backgroundColor: maximumTrackTintColor,
            width: trackWidth,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.activeTrack,
            {
              height: trackHeight,
              backgroundColor: minimumTrackTintColor,
            },
            activeTrackStyle,
          ]}
        />
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              styles.thumb,
              {
                width: thumbSize,
                height: thumbSize,
                borderRadius: thumbSize / 2,
                backgroundColor: thumbTintColor,
              },
              thumbStyle,
            ]}
          >
            {showDragger && (
              <View style={styles.draggerContainer}>
                <View
                  style={[
                    styles.draggerLine,
                    { backgroundColor: draggerColor },
                  ]}
                />
                <View
                  style={[
                    styles.draggerLine,
                    { backgroundColor: draggerColor },
                  ]}
                />
                <View
                  style={[
                    styles.draggerLine,
                    { backgroundColor: draggerColor },
                  ]}
                />
              </View>
            )}
          </Animated.View>
        </GestureDetector>
      </View>
      <View style={styles.stepMarkers}>
        {stepPositions.map((position, index) => {
          const stepValue = minimumValue + index * step;
          return (
            <View
              key={index}
              style={[
                styles.stepMarker,
                {
                  left: position + thumbSize / 2,
                  transform: [{ translateX: -10 }],
                },
              ]}
            >
              {StepMarker ? (
                <StepMarker
                  currentValue={value}
                  index={index}
                  max={maximumValue}
                  min={minimumValue}
                  stepMarked={stepValue}
                />
              ) : (
                <Text style={styles.stepText}>
                  {["Basic", "Moderate", "Advanced"][index] || stepValue}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  track: {
    borderRadius: 3,
    overflow: "hidden",
  },
  activeTrack: {
    borderRadius: 3,
    position: "absolute",
    left: 0,
    top: 0,
  },
  thumb: {
    position: "absolute",
    top: -7,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  draggerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  draggerLine: {
    width: 1.5,
    height: 8,
    borderRadius: 1,
  },
  stepMarkers: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  stepMarker: {
    position: "absolute",
    width: 20,
    alignItems: "center",
  },
  stepText: {
    fontSize: 12,
    color: "#333",
  },
});

export default CustomSlider;
