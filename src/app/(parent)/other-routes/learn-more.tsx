import React from "react";
import { View } from "react-native";

import BackButton from "@/src/components/ui/BackButton";
import Screen from "@/src/components/ui/Screen";
import Text from "@/src/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";

const LearnMore = () => {
  return (
    <Screen>
      <View className="h-[45] justify-center">
        <BackButton style={{ position: "absolute", left: 0, top: 0 }} />
        <Text
          className="text-center"
          font="poppins-medium"
        >
          Learn More
        </Text>
      </View>

      <View className="my-[25]">
        <Text
          className="text-[#4A90E2]"
          style={{ fontSize: 20 }}
          font="poppins-medium"
        >
          What is This App About ?
        </Text>
        <Text className="text-[#26323873]">
          This app helps kids share their feelings safely, while parents stay
          connected in a supportive way.
        </Text>

        <View className="h-[220] rounded-[12] overflow-hidden mt-[15]">
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-1"
            colors={["#4988B9", "#5DADEC", "#5DADEC", "#356286"]}
          ></LinearGradient>
        </View>
      </View>

      <View className=" bg-white mb-[55] rounded-[12] p-[10]">
        <Text className="text-justify text-lg">
          Every child deserves to grow up feeling safe, supported, and
          understood. But as children get older, they often begin to keep more
          of their thoughts and feelings to themselves. Many young people
          naturally start sharing less with their parents, even though this is
          the time when guidance, reassurance, and emotional connection are
          needed the most. Research shows that children are often more
          expressive with their friends than with adults, and while friendships
          are very important, it can leave parents feeling left out and unsure
          of how their child is really doing. At the same time, children may
          face difficult emotions, confusing situations, or even experiences of
          abuse that they don’t know how to talk about. Fear, shame, or the
          simple lack of “how to begin” often keeps them silent. This silence
          can create emotional distance and, in the worst cases, leave children
          without the support they need. That is why creating a safe, trusted
          environment is so important. A child should always feel that they have
          a voice and that their voice will be heard with kindness, patience,
          and respect. Safety isn’t only about protection from harm, it is also
          about having a space where feelings are valued, where difficult
          experiences can be shared without fear of judgment, and where children
          know they are not alone. Parents play a vital role in this journey.
          When children feel they can share openly with their parents, they
          build stronger emotional resilience, confidence, and trust. But for
          this to happen, children need reassurance that they are in control of
          what they share, and that their privacy will be respected. By giving
          children choices and showing them that their emotions matter.
        </Text>
      </View>
    </Screen>
  );
};
export default LearnMore;
