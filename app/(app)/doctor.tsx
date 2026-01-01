import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../src/auth/auth';

export default function DoctorDashboard() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Doktor Dashboard</Text>
      <Text onPress={logout} style={{ marginTop: 16 }}>
        Logout
      </Text>
    </View>
  );
}
