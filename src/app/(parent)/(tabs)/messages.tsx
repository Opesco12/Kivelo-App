import { ImageBackground } from "expo-image";
import React from "react";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const Messages = () => {
  return (
    <ImageBackground
      style={{ width: width, height: height }}
      source={require("@/src/assets/images/project-images/parent-chat-background.svg")}
    />
  );
};

export default Messages;
