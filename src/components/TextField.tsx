// src/components/TextField.tsx

import React from 'react';
import { TextInput, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/useTheme';

type TextFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
};

export const TextField: React.FC<TextFieldProps> = ({ value, onChangeText, placeholder, style }) => {
  const { theme } = useTheme();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
      style={[styles.input, { borderColor: theme.colors.accent, color: theme.colors.text }, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
});