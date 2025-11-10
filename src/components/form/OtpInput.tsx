import { useField } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type OtpInputProps = {
  name: string;
  length?: number;
  inputProps?: TextInputProps;
};

export const OtpInput: React.FC<OtpInputProps> = ({
  name,
  length = 6,
  inputProps = {},
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    const otp = values.join("");
    helpers.setValue(otp);
  }, [values]);

  useEffect(() => {
    if (field.value && typeof field.value === "string") {
      const arr = field.value.padEnd(length, " ").split("").slice(0, length);
      setValues(arr.map((c) => (c === " " ? "" : c)));
    }
  }, [field.value, length]);

  const focusIndex = (idx: number) => {
    inputs.current[idx]?.focus();
  };

  const handleChange = (text: string, idx: number) => {
    if (!/^\d?$/.test(text)) return;

    const newValues = [...values];
    newValues[idx] = text;
    setValues(newValues);

    if (text && idx < length - 1) {
      focusIndex(idx + 1);
    }
  };

  const handleKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && !values[idx] && idx > 0) {
      focusIndex(idx - 1);
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }, (_, i) => (
        <TextInput
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          className="h-[48] w-[48] rounded-[5]  text-center text-lg font-medium"
          style={[
            styles.input,
            { borderColor: meta.touched && meta.error ? "#EF4444" : "#ACB5BB" },
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={values[i]}
          onChangeText={(text) => handleChange(text, i)}
          onKeyPress={(e) => handleKeyPress(e, i)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          {...inputProps}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});
