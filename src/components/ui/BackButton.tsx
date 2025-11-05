import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="rounded-full bg-white"
      style={{ height: 60, width: 60 }}
    ></TouchableOpacity>
  );
};

export default BackButton;
