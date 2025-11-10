import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import Text from "../ui/Text";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const GradientButton = ({ text, icon, onPress, disabled }: ButtonProps) => {
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
        className={`flex-1 justify-center items-center gap-1 ${disabled && "bg-buttonPrimary/30"}`}
      >
        {icon}
        <Text
          className="text-white"
          style={{ fontSize: 18 }}
          font="poppins-medium"
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
