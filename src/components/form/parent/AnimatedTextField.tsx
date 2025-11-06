// components/form/AnimatedTextField.tsx
import { Colors } from "@/src/constants/colors";
import { useFormikContext } from "formik";
import { Eye, EyeSlash } from "iconsax-react-nativejs";
import React, { useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Text from "../../ui/Text";

interface Props extends TextInputProps {
  width?: ViewStyle["width"];
  label: string;
  name: string;
  secureTextEntry?: boolean;
}
const AnimatedTextField: React.FC<Props> = ({
  width = "100%",
  label,
  name,
  secureTextEntry,
  placeholder,
  ...props
}) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<any>();

  const [isSecured, setIsSecured] = React.useState(true);
  const isFocused = useSharedValue(0);
  const anim = useSharedValue(0);

  const value = values[name] || "";
  const error = touched[name] && errors[name];

  // Update animation based on focus state or value presence
  useEffect(() => {
    const shouldBeActive = isFocused.value === 1 || value.length > 0;
    anim.value = withTiming(shouldBeActive ? 1 : 0, {
      duration: 200,
    });
  }, [value, isFocused.value]);

  const labelStyle = useAnimatedStyle(() => ({
    top: interpolate(anim.value, [0, 1], [18, -10]),
    fontSize: interpolate(anim.value, [0, 1], [16, 12]),
    color: interpolateColor(anim.value, [0, 1], ["#999", "#1E1E1E80"]),
  }));

  const borderStyle = useAnimatedStyle(() => ({
    borderColor: error ? "#ef4444" : isFocused.value ? "#1E1E1E80" : "#D1D5DB",
    borderWidth: 2,
  }));

  return (
    <View style={[styles.container, { width }]}>
      <Animated.View style={[styles.inputWrapper, borderStyle]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {label}
        </Animated.Text>

        <TextInput
          style={styles.input}
          placeholder={anim.value === 0 ? placeholder : ""}
          placeholderTextColor="#666"
          value={value}
          onChangeText={handleChange(name)}
          onFocus={() => {
            isFocused.value = 1;
            anim.value = withTiming(1, { duration: 200 });
          }}
          onBlur={(e) => {
            handleBlur(name)(e);
            isFocused.value = 0;
            // Animation will be handled by useEffect based on value
            anim.value = withTiming(value.length > 0 ? 1 : 0, {
              duration: 200,
            });
          }}
          secureTextEntry={secureTextEntry && isSecured}
          {...props}
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setIsSecured(!isSecured)}
            style={styles.eye}
          >
            {isSecured ? (
              <Eye
                size={20}
                color="#666"
              />
            ) : (
              <EyeSlash
                size={20}
                color="#666"
              />
            )}
          </Pressable>
        )}
      </Animated.View>

      {error && (
        <Text
          font="poppins-medium"
          className="text-red-500 mt-1 text-sm"
        >
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputWrapper: {
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.light.white,
    justifyContent: "center",
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 25,
    backgroundColor: Colors.light.white,
    paddingHorizontal: 8,
    fontFamily: "Poppins-Medium",
  },
  input: {
    paddingHorizontal: 25,
    paddingTop: 10,
    fontSize: 19,
    fontFamily: "Poppins",
    color: "#000",
  },
  eye: {
    position: "absolute",
    right: 20,
    top: 18,
  },
});

export default AnimatedTextField;
