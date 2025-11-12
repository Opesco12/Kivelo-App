import { ChevronDown } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options?: SelectOption[];
  value: string | number;
  onValueChange: (value: string | number) => void;
  placeholder?: string;
  style?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  value,
  onValueChange,
  placeholder = "Select an option",
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const buttonRef = useRef<View>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (item: SelectOption) => {
    onValueChange(item.value);
    setIsOpen(false);
  };

  const measureButton = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      setDropdownTop(height);
      setDropdownWidth(width);
    });
  };

  useEffect(() => {
    if (isOpen) measureButton();
  }, [isOpen]);

  return (
    <View className={`relative ${style || ""}`}>
      <TouchableOpacity
        ref={buttonRef}
        onLayout={(e: LayoutChangeEvent) => {
          setDropdownWidth(e.nativeEvent.layout.width);
        }}
        className="flex-row items-end justify-between bg-white rounded-lg px-4 py-3"
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text
          className={`text-base ${
            selectedOption ? "text-gray-900" : "text-gray-500"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <ChevronDown size={15} />
      </TouchableOpacity>

      {isOpen && (
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View className="fixed inset-0" />
        </TouchableWithoutFeedback>
      )}

      {isOpen && (
        <View
          style={{
            position: "absolute",
            top: dropdownTop,
            left: 0,
            width: dropdownWidth,
            zIndex: 9999,
          }}
          className="bg-white rounded-lg max-h-60"
        >
          {options.map((item) => (
            <TouchableOpacity
              key={item.value.toString()}
              className={`flex-row items-center justify-between px-4 py-3 ${
                item.value === value ? "bg-[#4D81E7]" : ""
              }`}
              onPress={() => handleSelect(item)}
            >
              <Text
                className={`text-base ${
                  item.value === value
                    ? "text-primary font-semibold"
                    : "text-gray-900"
                }`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Select;
