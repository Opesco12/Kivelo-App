import { useNavigation } from "expo-router";
import { ArrowLeft2 } from "iconsax-react-nativejs";
import { TouchableOpacity, ViewStyle } from "react-native";

const BackButton = ({ style }: { style?: ViewStyle }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="rounded-full bg-white justify-center items-center"
      style={[{ height: 45, width: 45 }, style]}
    >
      <ArrowLeft2
        size={25}
        color="#9ca3af"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
