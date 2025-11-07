import Text from "@/src/components/ui/Text";
import { Colors } from "@/src/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function LoginRoleSelection() {
  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient
        style={{ flex: 1, width: "100%", paddingHorizontal: 15 }}
        colors={["#76D7F7", Colors.light.white]}
      >
        <View className="mt-[15vh]">
          <Text
            className="font-bold text-4xl "
            style={{ marginBottom: 25 }}
            font="poppins-bold"
          >
            I Am a...
          </Text>

          <Pressable onPress={() => router.push("/(child)/auth/login")}>
            <View
              className="bg-white rounded-md flex-row items-center justify-between"
              style={styles.box}
            >
              <View className="w-[60%]">
                <Text
                  className="text-2xl  font-bold mb-4"
                  font="poppins-bold"
                >
                  Child / Teen
                </Text>
                <Text>
                  Play exciting games, make discoveries & stay safer while you
                  grow smarter.
                </Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/project-images/child-illustration.png")}
                />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push("/(parent)/auth/login")}>
            <View
              className="bg-white rounded-md flex-row items-center justify-between"
              style={styles.box}
            >
              <View className="w-[60%]">
                <Text
                  className="text-2xl font-bold mb-4"
                  font="poppins-bold"
                >
                  Parent
                </Text>
                <Text className="text-md">
                  Track, Understand & Support your child, emotionally and
                  otherwise.
                </Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/project-images/parent-illustration.png")}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 180,
    marginVertical: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
