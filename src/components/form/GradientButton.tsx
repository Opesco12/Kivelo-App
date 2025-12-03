import { Colors } from "@/src/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Text from "../ui/Text";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

const GradientButton = ({
  text,
  icon,
  onPress,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
      className={`overflow-hidden`}
      style={{ height: 60, borderRadius: 100 }}
    >
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#2563EB", "#6A1B9A"]}
        style={{
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          opacity: disabled ? 0.7 : 1,
        }}
      >
        {isLoading ? (
          <ActivityIndicator
            size={"small"}
            color={Colors.light.white}
          />
        ) : (
          <>
            {icon}
            <Text
              className="text-white"
              style={{ fontSize: 18 }}
              font="poppins-medium"
            >
              {text}
            </Text>
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
