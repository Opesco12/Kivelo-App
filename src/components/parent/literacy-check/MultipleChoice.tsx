import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "../../ui/Text";

import { QuestionProps } from "@/src/types/literacy-check";

const MultipleChoiceQuestion = ({
  question,
  onAnswer,
  onShowHint,
}: QuestionProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <View className="flex-1 bg-red-500">
      <View style={styles.questionCard}>
        <Text style={styles.cardTitle}>Multiple Choice Puzzle</Text>
        <Text style={styles.questionText}>{question.question}</Text>

        {question.imageUrl && (
          <View style={styles.imageBox}>
            <Image
              source={{ uri: question.imageUrl }}
              style={styles.questionImage}
              resizeMode="contain"
            />
          </View>
        )}

        {question.image && !question.imageUrl && (
          <View style={styles.imageBox}>
            <Text style={styles.placeholderEmoji}>🖼️</Text>
            <Text style={styles.placeholderText}>{question.image}</Text>
          </View>
        )}
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            {selectedOption === option && (
              <View style={styles.radioSelected}>
                <View style={styles.radioDot} />
              </View>
            )}
            {selectedOption !== option && (
              <View style={styles.radioUnselected} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.hintButton}
        onPress={onShowHint}
      >
        <Text style={styles.hintButtonText}>💡 Show Hint</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#FFE4CC",
    padding: 20,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6366F1",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
    lineHeight: 20,
  },
  imageBox: {
    backgroundColor: "#FFD9B3",
    height: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  questionImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  placeholderEmoji: {
    fontSize: 40,
  },
  placeholderText: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#FFF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  optionButtonSelected: {
    borderColor: "#6366F1",
    backgroundColor: "#F5F5FF",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  radioSelected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#6366F1",
    justifyContent: "center",
    alignItems: "center",
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#6366F1",
  },
  hintButton: {
    backgroundColor: "#FFF",
    paddingVertical: 14,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  hintButtonText: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default MultipleChoiceQuestion;
