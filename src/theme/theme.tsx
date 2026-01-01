// src/theme/theme.ts

const lightTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#19b495',
    secondary: '#0167cc',
    accent: '#1990ff',
    danger: '#c41212',
  },
  borderRadius: 12,
  spacing: 8,
  shadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
};

const darkTheme = {
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#19b495',
    secondary: '#0167cc',
    accent: '#1990ff',
    danger: '#c41212',
  },
  borderRadius: 12,
  spacing: 8,
  shadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
};

export const themes = { light: lightTheme, dark: darkTheme };
export type Theme = typeof lightTheme;