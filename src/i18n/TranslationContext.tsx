import React, { useState, useEffect } from 'react';
import { translations, type Language } from './translations';
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

  const t = (path: string): any => {
    const keys = path.split('.');
    let result: any = translations[language];
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return path;
      }
    }
    
    return result !== undefined ? result : path;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
