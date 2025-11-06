import { TouchableOpacity } from "react-native";
import Text from "../ui/Text";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const Button = ({ text, icon, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
      className={`${disabled ? "bg-buttonPrimary/30" : "bg-buttonPrimary"} justify-center items-center gap-1`}
      style={{ height: 60, borderRadius: 100 }}
    >
      {icon}
      <Text
        className="text-white"
        style={{ fontSize: 18 }}
        font="poppins-medium"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
