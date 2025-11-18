import { QuestionProps } from "@/src/types/literacy-check";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Text from "../../ui/Text";

const DraggableWordChip = ({
  word,
  onDrop,
  dropZoneLayout,
  isDragging,
  setIsDragging,
}: {
  word: string;
  onDrop: (word: string) => void;
  dropZoneLayout: { x: number; y: number; width: number; height: number };
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .minDistance(10)
    .onStart(() => {
      scale.value = withSpring(1.15);
      runOnJS(setIsDragging)(true);
    })
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd((e) => {
      const dropX = e.absoluteX;
      const dropY = e.absoluteY;

      const droppedInZone =
        dropX >= dropZoneLayout.x &&
        dropX <= dropZoneLayout.x + dropZoneLayout.width &&
        dropY >= dropZoneLayout.y &&
        dropY <= dropZoneLayout.y + dropZoneLayout.height;

      if (droppedInZone) {
        runOnJS(onDrop)(word);
      }

      // Smooth snap back
      translateX.value = withSpring(0, { damping: 20, stiffness: 180 });
      translateY.value = withSpring(0, { damping: 20, stiffness: 180 });
      scale.value = withSpring(1);
      runOnJS(setIsDragging)(false);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: isDragging ? 0.95 : 1,
    zIndex: isDragging ? 999 : 1,
    elevation: isDragging ? 10 : 1,
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.wordChip, animatedStyle]}>
        <Text style={styles.chipText}>{word}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

// Drop Zone Highlight
const DropZoneHighlight = ({ isActive }: { isActive: boolean }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(isActive ? 0.2 : 0, { duration: 250 });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.dropZoneHighlight, animatedStyle]}
    />
  );
};

const WordRearrangeQuestion = ({
  question,
  onAnswer,
  onShowHint,
}: QuestionProps) => {
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [isDraggingAnyWord, setIsDraggingAnyWord] = useState(false);

  const dropZoneRef = useRef<View>(null);
  const [dropZoneLayout, setDropZoneLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const shuffled = [...question.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
  }, [question]);

  const handleDrop = useCallback(
    (word: string) => {
      setArrangedWords((prev) => {
        const updated = [...prev, word];
        onAnswer(updated);
        return updated;
      });
      setAvailableWords((prev) => prev.filter((w) => w !== word));
    },
    [onAnswer]
  );

  const handleRemoveWord = useCallback(
    (word: string, index: number) => {
      setArrangedWords((prev) => prev.filter((_, i) => i !== index));
      setAvailableWords((prev) => [...prev, word]);
      onAnswer(arrangedWords.filter((_, i) => i !== index));
    },
    [arrangedWords, onAnswer]
  );

  const measureDropZone = useCallback(() => {
    dropZoneRef.current?.measureInWindow((x, y, width, height) => {
      setDropZoneLayout({ x, y, width, height });
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(measureDropZone, 150);
    return () => clearTimeout(timer);
  }, [measureDropZone]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={styles.screenTitle}
          font="inter-bold"
        >
          {question.question}
        </Text>
        <Text
          style={styles.screenSubtitle}
          font="inter-regular"
        >
          {question.subtitle}
        </Text>

        {/* DROP ZONE */}
        <View
          ref={dropZoneRef}
          onLayout={measureDropZone}
          style={[styles.dropZone, isDraggingAnyWord && styles.dropZoneActive]}
        >
          <DropZoneHighlight isActive={isDraggingAnyWord} />

          {arrangedWords.length === 0 && !isDraggingAnyWord && (
            <Text style={styles.dropZonePlaceholder}>
              Drag words here to build your sentence
            </Text>
          )}
          {arrangedWords.length === 0 && isDraggingAnyWord && (
            <Text style={styles.dropZonePlaceholderActive}>Drop here</Text>
          )}

          {/* Arranged Words with smooth enter/exit */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            {arrangedWords.map((word, index) => (
              <Animated.View
                key={word} // Important: stable key by word
                entering={FadeIn.springify().damping(20)}
                exiting={FadeOut.springify()}
                layout={LinearTransition.springify()}
              >
                <TouchableOpacity
                  style={styles.placedWordChip}
                  onPress={() => handleRemoveWord(word, index)}
                >
                  <Text style={styles.chipText}>{word}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>

        <Text style={styles.poolLabel}>Available Words</Text>

        <View style={styles.wordsPool}>
          {availableWords.map((word) => (
            <Animated.View
              key={word}
              layout={LinearTransition.springify()
                .mass(1)
                .damping(20)
                .stiffness(120)}
              exiting={FadeOut.springify().duration(200)}
            >
              <DraggableWordChip
                word={word}
                onDrop={handleDrop}
                dropZoneLayout={dropZoneLayout}
                isDragging={isDraggingAnyWord}
                setIsDragging={setIsDraggingAnyWord}
              />
            </Animated.View>
          ))}
        </View>

        {/* HINT BUTTON */}
        <TouchableOpacity
          style={styles.hintButton}
          onPress={onShowHint}
        >
          <Text style={styles.hintButtonText}>Show Hint</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
    lineHeight: 22,
  },
  dropZone: {
    backgroundColor: "#f8f9fa",
    padding: 24,
    borderRadius: 16,
    borderStyle: "dashed",
    borderWidth: 2.5,
    borderColor: "#9b59b6",
    minHeight: 140,
    marginBottom: 24,
    position: "relative",
    overflow: "hidden",
  },
  dropZoneActive: {
    borderColor: "#6366f1",
    backgroundColor: "#eef2ff",
  },
  dropZoneHighlight: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#6366f1",
    borderRadius: 16,
  },
  dropZonePlaceholder: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
    width: "100%",
    fontStyle: "italic",
  },
  dropZonePlaceholderActive: {
    color: "#6366f1",
    fontWeight: "700",
    fontSize: 16,
  },
  poolLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
    marginBottom: 12,
  },
  wordsPool: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 32,
  },
  wordChip: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  placedWordChip: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#6366f1",
    shadowColor: "#6366f1",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  chipText: {
    fontSize: 15,
    color: "#222",
    fontWeight: "600",
  },
  hintButton: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 18,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#ddd",
    alignItems: "center",
    marginTop: "auto",
  },
  hintButtonText: {
    color: "#555",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default WordRearrangeQuestion;
