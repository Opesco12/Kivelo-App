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

      <View style={styles.section}>
        <Text
          style={styles.sectionLabel}
          className="font-bold"
          font="inter-medium"
        >
          Words
        </Text>
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
        <Text
          style={styles.sectionLabel}
          className="font-bold"
          font="inter-medium"
        >
          Meanings
        </Text>
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
  },
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
    lineHeight: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  matchCard: {
    backgroundColor: "#FFF",
    padding: 20,
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
    fontSize: 16,
    color: "#333",
    flex: 1,
    lineHeight: 20,
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
});

export default WordMatchingQuestion;
