// src/components/Card.tsx

import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/useTheme';

type CardProps = {
  title: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const Card: React.FC<CardProps> = ({ title, children, style }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.background, ...theme.shadow }, style]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});