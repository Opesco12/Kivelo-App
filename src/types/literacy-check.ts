export type QuestionProps = {
  question: {
    id: number;
    type: "multiple-choice" | "word-matching" | "word-rearrange" | string;;
    question: string;
    image: string;
    imageUrl: string;
    options: string[];
    correctAnswer: string;
    hint: string;
  };
  onAnswer: (text: string) => void;
  onShowHint: () => void;
};
