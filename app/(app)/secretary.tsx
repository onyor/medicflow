import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../src/auth/auth';

export default function SecretaryDashboard() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sekreter Dashboard</Text>
      <Text onPress={logout} style={{ marginTop: 16 }}>
        Logout
      </Text>
    </View>
  );
}
