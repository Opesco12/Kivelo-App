import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import Text from "./Text";

type FilterChipsProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

const FilterChips = ({ options, selected, onSelect }: FilterChipsProps) => {
  return (
    <View className="w-full">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4, gap: 5 }}
      >
        {options.map((item) => {
          const isActive = item === selected;
          return (
            <TouchableOpacity
              className={`min-h-[40]  rounded-[50] px-[15] py-[8] ${isActive ? "bg-[#2196F3]" : "transparent"} ${!isActive && "border border-[#2196F3]"} `}
              key={item}
              onPress={() => onSelect(item)}
            >
              <Text
                font="inter-medium"
                className={`text-lg ${isActive ? "text-white" : "text-[#2196F3]"} `}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FilterChips;
