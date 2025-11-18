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
});

export default QuestionRenderer;
