import { StyleSheet, View } from "react-native";
import Text from "../../ui/Text";

import MultipleChoiceQuestion from "./MultipleChoice";
import WordMatchingQuestion from "./WordMatching";
import WordRearrangeQuestion from "./WordRearrange";

import { QuestionProps } from "@/src/types/literacy-check";

const QuestionRenderer = ({
  question,
  onAnswer,
  onShowHint,
}: QuestionProps) => {
  switch (question.type) {
    case "multiple-choice":
      return (
        <MultipleChoiceQuestion
          question={question}
          onAnswer={onAnswer}
          onShowHint={onShowHint}
        />
      );
    case "word-matching":
      return (
        <WordMatchingQuestion
          question={question}
          onAnswer={onAnswer}
          onShowHint={onShowHint}
        />
      );
    case "word-rearrange":
      return (
        <WordRearrangeQuestion
          question={question}
          onAnswer={onAnswer}
          onShowHint={onShowHint}
        />
      );
    default:
      return (
        <View style={styles.container}>
          <Text>Unknown question type</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },

  questionCard: {
    backgroundColor: "#FFE4CC",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
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

  // Screen Title Styles
  screenTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    lineHeight: 20,
  },

  // Options Styles (Multiple Choice)
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

  // Radio Button Styles
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

  // Matching Styles
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 10,
  },
  matchCard: {
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
  matchCardSelected: {
    borderColor: "#6366F1",
    backgroundColor: "#F5F5FF",
  },
  matchCardMatched: {
    borderColor: "#10B981",
    backgroundColor: "#F0FDF4",
  },
  matchText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
    lineHeight: 20,
  },

  // Word Rearrange Styles
  dropZone: {
    backgroundColor: "#FFE4CC",
    minHeight: 120,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  dropZonePlaceholder: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
    width: "100%",
    marginTop: 20,
  },
  wordsPool: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  wordChip: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  placedWordChip: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "#6366F1",
  },
  chipText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },

  // Hint Button
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

export default QuestionRenderer;
