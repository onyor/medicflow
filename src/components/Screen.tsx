// src/components/Screen.tsx

import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/useTheme';

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.colors.background }, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});