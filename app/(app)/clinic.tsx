// app/(app)/clinic.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../src/auth/auth';

export default function ClinicDashboard() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Klinik Dashboard</Text>
      <Text onPress={logout} style={{ marginTop: 16 }}>Logout</Text>
    </View>
  );
}
