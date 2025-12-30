import { useLanguage } from '@/contexts/LanguageContext'

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-[oklch(0.22_0_0)] text-[oklch(0.55_0_0)] py-10 border-t border-[oklch(0.25_0_0)]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            {t({ 
              en: '© 2026 International Bingxin Literary Pen Conference.',
              zh: '© 2026 国际冰心文学笔会。'
            })}
          </p>
          <p className="text-xs mt-1">
            {t({ 
              en: 'Celebrating Literature & Peace.',
              zh: '庆祝文学与和平。'
            })}
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-white transition-colors">
            {t({ en: 'Home', zh: '首页' })}
          </a>
          <a href="#awards" className="hover:text-white transition-colors">
            {t({ en: 'Awards', zh: '奖项' })}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t({ en: 'Contact', zh: '联系我们' })}
          </a>
        </div>
      </div>
    </footer>
  )
}
