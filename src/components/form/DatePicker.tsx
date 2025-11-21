import DateTimePicker from "@react-native-community/datetimepicker";
import { useField } from "formik";
import React, { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";

interface DateOfBirthFieldProps {
  label: string;
  name: string;
}

const DateOfBirthField: React.FC<DateOfBirthFieldProps> = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) {
      helpers.setValue(selectedDate);
    }
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View>
      <Text className=" mb-[3]">{label}</Text>
      <TouchableOpacity
        onPress={() => setShow(true)}
        activeOpacity={0.7}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {field.value ? formatDate(field.value) : "DD/MM/YYYY"}
        </Text>
      </TouchableOpacity>

      {meta.touched && meta.error ? (
        <Text className="text-red-500 text-xs mt-1">{meta.error}</Text>
      ) : null}

      {show && (
        <DateTimePicker
          value={field.value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          maximumDate={new Date()} // No future dates
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    height: 60,
    paddingHorizontal: 25,
    backgroundColor: Colors.light.white,
    borderColor: "#D1D5DB",
    borderWidth: 2,
    fontSize: 18,
    fontFamily: "Poppins",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 16,
    color: "#1F2937",
    fontFamily: "poppins-medium",
  },
});

export default DateOfBirthField;
