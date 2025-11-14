import { View } from "react-native";

const Progress = ({ progress }: { progress: string }) => {
  return (
    <View className="h-[8] my-[15] bg-[#E5E7EB]   overflow-hidden rounded-[50]">
      <View
        className="flex-1  bg-[#27AE60] rounded-[50]"
        style={{ width: progress }}
      />
    </View>
  );
};

export default Progress;
