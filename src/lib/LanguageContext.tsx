import React, { createContext, useContext, useState } from 'react';
export type Language = 'en' | 'ru' | 'zh';
interface LCT { language: Language; setLanguage: (l: Language) => void; }
export const LanguageContext = createContext<LCT>({ language: 'en', setLanguage: () => {} });
export function useLanguage() { return useContext(LanguageContext); }
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
