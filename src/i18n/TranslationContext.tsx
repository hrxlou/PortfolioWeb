import React, { useState, useEffect } from 'react';
import { getTranslation, type Language } from './translations';
import { TranslationContext } from './context';

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved && (saved === 'ko' || saved === 'en')) {
      return saved as Language;
    }
    // Detect system language
    const systemLang = navigator.language.split('-')[0];
    return systemLang === 'ko' ? 'ko' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const t = (path: string) => getTranslation(language, path);

  // setLanguage와 t는 메모이제이션하거나 고정된 헬퍼로 제공하여 
  // LanguageContainer에서 재사용 시에도 문제 없도록 함
  const setLang = (lang: Language) => setLanguage(lang);

  return (
    <TranslationContext.Provider value={{ language, setLanguage: setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
