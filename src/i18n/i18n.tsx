// src/i18n/i18n.ts
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const translations = {
  en: {
    login: 'Login',
    username: 'Username',
    password: 'Password',
    role: 'Role',
    clinic: 'Clinic',
    doctor: 'Doctor',
    patient: 'Patient',
    secretary: 'Secretary',
    signIn: 'Sign In',
    logout: 'Logout',
    dashboard: 'Dashboard',
    darkMode: 'Dark Mode',
    language: 'Language',
  },
  tr: {
    login: 'Giriş',
    username: 'Kullanıcı Adı',
    password: 'Şifre',
    role: 'Rol',
    clinic: 'Klinik',
    doctor: 'Doktor',
    patient: 'Hasta',
    secretary: 'Sekreter',
    signIn: 'Giriş Yap',
    logout: 'Çıkış',
    dashboard: 'Panel',
    darkMode: 'Karanlık Mod',
    language: 'Dil',
  },
} as const;

type Language = keyof typeof translations;          // 'en' | 'tr'
type I18nKey = keyof typeof translations['en'];     // tüm anahtarlar

interface LanguageContextType {
  t: (key: I18nKey) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('language');
      if (storedLanguage === 'en' || storedLanguage === 'tr') {
        setLanguageState(storedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    await AsyncStorage.setItem('language', lang);
  };

  const t = (key: I18nKey) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
