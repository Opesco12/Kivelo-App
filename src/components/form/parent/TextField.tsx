import { useFormikContext } from "formik";
import { Eye, EyeSlash } from "iconsax-react-nativejs";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import Text from "../../ui/Text";

import { Colors } from "@/src/constants/colors";
import { useState } from "react";

interface Props extends TextInputProps {
  width?: ViewStyle["width"];
  label?: string;
  name: string;
  readonly?: boolean;
}

const TextField = ({
  placeholder,
  label,
  width,
  name,
  readonly,
  secureTextEntry,
  ...props
}: Props) => {
  const { values, errors, touched } = useFormikContext();

  const [isSecured, setIsSecured] = useState(true);

  return (
    <View style={[styles.container, { width: width ? width : "100%" }]}>
      {label && <Text style={{ marginBottom: 3 }}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#1E1E1E"}
        value={values[name]}
        readOnly={readonly}
        secureTextEntry={secureTextEntry && isSecured}
        {...props}
      />
      {secureTextEntry &&
        (isSecured ? (
          <Eye
            size={20}
            color="#d1d5db"
            variant="Bold"
            style={{ position: "absolute", right: 20, top: label ? 42 : 22 }}
            onPress={() => setIsSecured(!isSecured)}
          />
        ) : (
          <EyeSlash
            size={20}
            color="#d1d5db"
            variant="Bold"
            style={{ position: "absolute", right: 20, top: label ? 42 : 22 }}
            onPress={() => setIsSecured(!isSecured)}
          />
        ))}

      {touched[name] && errors[name] && (
        <Text className="text-red-500">{errors[name]}</Text>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 5,
  },
  input: {
    borderRadius: 12,
    height: 60,
    paddingHorizontal: 25,
    backgroundColor: Colors.light.white,
    borderColor: "#D1D5DB",
    borderWidth: 2,
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
