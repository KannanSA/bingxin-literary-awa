import { useState, useEffect } from 'react'
import { Menu, X, Feather, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: t({ en: 'Home', zh: '首页' }), href: '#home' },
    { name: t({ en: 'Awards', zh: '奖项' }), href: '#awards' },
    { name: t({ en: 'Nobel Laureates', zh: '诺贝尔奖得主' }), href: '#guests' },
    { name: t({ en: 'Events', zh: '活动' }), href: '#schedule' },
    { name: t({ en: 'Organizers', zh: '主办单位' }), href: '#organizers' },
    { name: t({ en: 'Contact', zh: '联系我们' }), href: '#contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Feather className="h-8 w-8 text-primary" />
          <span className="text-xl font-serif font-bold text-foreground">
            {t({ en: 'Bingxin Literary Awards', zh: '冰心文学奖' })}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="ml-4 gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === 'en' ? '中文' : 'EN'}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === 'en' ? '中文' : 'EN'}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-foreground hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
