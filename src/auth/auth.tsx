// src/auth/auth.tsx
import React, { createContext, useContext, useMemo, useState } from 'react';
import { router } from 'expo-router';

export type Role = 'clinic' | 'doctor' | 'patient' | 'secretary';

type AuthState = {
  isAuthed: boolean;
  role: Role | null;
};

type AuthContextType = {
  auth: AuthState;
  login: (role: Role) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({ isAuthed: false, role: null });

  const login = (role: Role) => {
    setAuth({ isAuthed: true, role });

    // role'a göre dashboard
    router.replace(`/(app)/${role}`);
  };

  const logout = () => {
    setAuth({ isAuthed: false, role: null });
    router.replace('/(auth)/login');
  };

  const value = useMemo(() => ({ auth, login, logout }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
