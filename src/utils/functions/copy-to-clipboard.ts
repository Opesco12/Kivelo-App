import * as Clipboard from "expo-clipboard";
import { toast } from "sonner-native";

export const copyToClipboard = async (text: string) => {
  try {
    await Clipboard.setStringAsync(text);
    toast.success("copied");
  } catch (error) {
    toast.error("Failed to copy");
  }
};
