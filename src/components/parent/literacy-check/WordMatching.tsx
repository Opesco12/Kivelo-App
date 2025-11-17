import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "../../ui/Text";

import { QuestionProps } from "@/src/types/literacy-check";

const WordMatchingQuestion = ({
  question,
  onAnswer,
  onShowHint,
}: QuestionProps) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedMeaning, setSelectedMeaning] = useState(null);
  const [matches, setMatches] = useState({});
  const [shuffledMeanings, setShuffledMeanings] = useState([]);

  useEffect(() => {
    // Shuffle meanings on mount
    const meanings = [...question.pairs.map((p) => p.meaning)];
    setShuffledMeanings(meanings.sort(() => Math.random() - 0.5));
  }, [question]);

  const handleWordPress = (word) => {
    if (matches[word]) {
      // If already matched, unselect
      const newMatches = { ...matches };
      delete newMatches[word];
      setMatches(newMatches);
      onAnswer(newMatches);
      return;
    }
    setSelectedWord(word);
    if (selectedMeaning) {
      // Make a match
      const newMatches = { ...matches, [word]: selectedMeaning };
      setMatches(newMatches);
      setSelectedWord(null);
      setSelectedMeaning(null);
      onAnswer(newMatches);
    }
  };

  const handleMeaningPress = (meaning) => {
    // Check if this meaning is already matched
    const alreadyMatched = Object.values(matches).includes(meaning);
    if (alreadyMatched) {
      // Find and remove the match
      const newMatches = { ...matches };
      const wordToRemove = Object.keys(newMatches).find(
        (key) => newMatches[key] === meaning
      );
      delete newMatches[wordToRemove];
      setMatches(newMatches);
      onAnswer(newMatches);
      return;
    }

    setSelectedMeaning(meaning);
    if (selectedWord) {
      // Make a match
      const newMatches = { ...matches, [selectedWord]: meaning };
      setMatches(newMatches);
      setSelectedWord(null);
      setSelectedMeaning(null);
      onAnswer(newMatches);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>{question.question}</Text>
      <Text style={styles.screenSubtitle}>{question.subtitle}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Words</Text>
        {question.pairs.map((pair, index) => {
          const isMatched = matches[pair.word];
          const isSelected = selectedWord === pair.word;

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.matchCard,
                isMatched && styles.matchCardMatched,
                isSelected && styles.matchCardSelected,
              ]}
              onPress={() => handleWordPress(pair.word)}
            >
              <Text style={styles.matchText}>{pair.word}</Text>
              <View
                style={
                  isMatched || isSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              >
                {(isMatched || isSelected) && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Meanings</Text>
        {shuffledMeanings.map((meaning, index) => {
          const isMatched = Object.values(matches).includes(meaning);
          const isSelected = selectedMeaning === meaning;

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.matchCard,
                isMatched && styles.matchCardMatched,
                isSelected && styles.matchCardSelected,
              ]}
              onPress={() => handleMeaningPress(meaning)}
            >
              <Text style={styles.matchText}>{meaning}</Text>
              <View
                style={
                  isMatched || isSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              >
                {(isMatched || isSelected) && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
          );
        })}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default WordMatchingQuestion;
