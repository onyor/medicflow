// app/_layout.tsx

import { ThemeProvider } from '../src/theme/useTheme';
import { LanguageProvider } from '../src/i18n/i18n';
import { AuthProvider } from '../src/auth/auth';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}