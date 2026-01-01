// app/(auth)/login.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../../src/auth/auth';
import { useLanguage } from '../../src/i18n/i18n';
import { Button } from '../../src/components/Button';
import { TextField } from '../../src/components/TextField';
import { Screen } from '../../src/components/Screen';

const roles = ['clinic', 'doctor', 'patient', 'secretary'] as const;
type Role = typeof roles[number];

export default function LoginScreen() {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role>(roles[0]);

  const handleLogin = () => {
    console.log('Logging in with:', { username, password, role: selectedRole });
    login(selectedRole);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <TextField
          value={username}
          onChangeText={setUsername}
          placeholder={t('username')}
          style={styles.input}
        />
        <TextField
          value={password}
          onChangeText={setPassword}
          placeholder={t('password')}
          style={styles.input}
        />

        <View style={styles.rolesContainer}>
          {roles.map((role) => (
            <Button
              key={role}
              title={t(role)}
              onPress={() => setSelectedRole(role)}
              // style array kullanacaksan Button bunu kabul etmeli (aşağıda #3)
              style={[styles.roleButton, selectedRole === role && styles.selectedRole]}
            />
          ))}
        </View>

        <Button title={t('signIn')} onPress={handleLogin} style={styles.loginButton} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { marginBottom: 16 },
  rolesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  roleButton: { flex: 1, marginHorizontal: 4 },
  selectedRole: { borderWidth: 2, borderColor: '#19b495' },
  loginButton: { marginTop: 16 },
});
