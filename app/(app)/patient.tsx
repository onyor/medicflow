import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../src/auth/auth';

export default function PatientDashboard() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hasta Dashboard</Text>
      <Text onPress={logout} style={{ marginTop: 16 }}>
        Logout
      </Text>
    </View>
  );
}
