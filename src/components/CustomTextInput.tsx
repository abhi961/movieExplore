import { View, TextInput } from 'react-native';
import React from 'react';
import { textInputStyle } from '../style/style';

interface CustomTextInputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
}) => {
  return (
    <View style={textInputStyle.inputContainer}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}

        style={textInputStyle.inputField}
      />
    </View>
  );
};

export default CustomTextInput;
