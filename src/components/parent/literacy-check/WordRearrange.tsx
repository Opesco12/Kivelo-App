import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "../../ui/Text";

import { QuestionProps } from "@/src/types/literacy-check";

const WordRearrangeQuestion = ({
  question,
  onAnswer,
  onShowHint,
}: QuestionProps) => {
  const [arrangedWords, setArrangedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);

  useEffect(() => {
    // Shuffle words on mount
    const shuffled = [...question.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
  }, [question]);

  const handleWordPress = (word) => {
    const newArranged = [...arrangedWords, word];
    const newAvailable = availableWords.filter((w) => w !== word);

    setArrangedWords(newArranged);
    setAvailableWords(newAvailable);
    onAnswer(newArranged);
  };

  const handleArrangedWordPress = (word, index) => {
    const newArranged = arrangedWords.filter((_, i) => i !== index);
    const newAvailable = [...availableWords, word];

    setArrangedWords(newArranged);
    setAvailableWords(newAvailable);
    onAnswer(newArranged);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>{question.question}</Text>
      <Text style={styles.screenSubtitle}>{question.subtitle}</Text>

      <View style={styles.dropZone}>
        {arrangedWords.length === 0 && (
          <Text style={styles.dropZonePlaceholder}>
            Tap words below to build your sentence
          </Text>
        )}
        {arrangedWords.map((word, index) => (
          <TouchableOpacity
            key={`arranged-${index}`}
            style={styles.placedWordChip}
            onPress={() => handleArrangedWordPress(word, index)}
          >
            <Text style={styles.chipText}>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wordsPool}>
        {availableWords.map((word, index) => (
          <TouchableOpacity
            key={`available-${index}`}
            style={styles.wordChip}
            onPress={() => handleWordPress(word)}
          >
            <Text style={styles.chipText}>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.hintButton}
        onPress={onShowHint}
      >
        <Text style={styles.hintButtonText}>💡 Show Hint</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default WordRearrangeQuestion;
