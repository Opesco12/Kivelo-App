import { useState } from "react";
import { Alert } from "react-native";

import GradientButton from "@/src/components/form/GradientButton";
import QuestionRenderer from "@/src/components/parent/literacy-check/QuestionRenderer";
import Screen from "@/src/components/ui/Screen";

import questionsData from "@/src/utils/literacy-check-questions.json";

const LiteracyCheck = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const handleShowHint = () => {
    Alert.alert("Hint", currentQuestion.hint);
  };
  return (
    <Screen className="">
      <QuestionRenderer
        question={currentQuestion}
        onAnswer={handleAnswer}
        onShowHint={handleShowHint}
      />

      <GradientButton
        text="Submit Answer"
        onPress={() => {
          // Handle submit logic
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }}
      />
    </Screen>
  );
};

export default LiteracyCheck;
