import { createContext, useContext, ReactNode } from 'react'
import { useKV } from '@github/spark/hooks'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (translations: { en: string; zh: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useKV<Language>('language', 'en')
  const currentLanguage = language || 'en'

  const t = (translations: { en: string; zh: string }) => {
    return translations[currentLanguage]
  }

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
