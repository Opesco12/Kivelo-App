import Text from "@/src/components/ui/Text";
import { useField } from "formik";
import React, { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  placeholder = "Select an option",
  options,
  disabled = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasError = meta.touched && meta.error;
  const selectedOption = options.find((opt) => opt.value === field.value);

  const handleSelect = (value: string) => {
    helpers.setValue(value);
    helpers.setTouched(true);
    setIsModalOpen(false);
  };

  return (
    <View>
      <Text className="font-medium mb-1 text-gray-700">{label}</Text>
      <Pressable
        onPress={() => !disabled && setIsModalOpen(true)}
        disabled={disabled}
        style={[
          styles.selectButton,
          disabled && styles.disabled,
          hasError && styles.errorBorder,
        ]}
      >
        <Text
          style={[styles.selectText, !selectedOption && styles.placeholderText]}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
      </Pressable>

      {hasError && (
        <Text className="text-red-500 text-xs mt-1">{meta.error}</Text>
      )}

      <Modal
        visible={isModalOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsModalOpen(false)}
        >
          <View style={styles.modalContainer}>
            <Pressable onPress={(e) => e.stopPropagation()}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{label}</Text>
                  <Pressable
                    onPress={() => setIsModalOpen(false)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>✕</Text>
                  </Pressable>
                </View>

                <ScrollView style={styles.optionsScroll}>
                  <View style={styles.optionsContainer}>
                    {options.map((option) => (
                      <Pressable
                        key={option.value}
                        onPress={() => handleSelect(option.value)}
                        style={[
                          styles.option,
                          field.value === option.value && styles.selectedOption,
                        ]}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            field.value === option.value &&
                              styles.selectedOptionText,
                          ]}
                        >
                          {option.label}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectButton: {
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    minHeight: 60,
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  errorBorder: {
    borderColor: "#EF4444",
  },
  selectText: {
    fontSize: 18,
    color: "#000",
  },
  placeholderText: {
    fontSize: 15,
    color: "#9CA3AF",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
  },
  modalContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#6B7280",
  },
  optionsScroll: {
    maxHeight: 400,
  },
  optionsContainer: {
    paddingVertical: 16,
    gap: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedOption: {
    backgroundColor: "#EEF2FF",
    borderColor: "#6366F1",
  },
  optionText: {
    fontSize: 16,
    color: "#374151",
  },
  selectedOptionText: {
    color: "#6366F1",
    fontWeight: "600",
  },
  checkmark: {
    fontSize: 20,
    color: "#6366F1",
    fontWeight: "bold",
  },
});

export default SelectField;
