import { useState, useEffect } from 'react'
import { Menu, X, Feather } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Awards', href: '#awards' },
    { name: 'Nobel Laureates', href: '#guests' },
    { name: 'Events', href: '#schedule' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Contact', href: '#contact' },
  ]

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
            Bingxin Literary Awards
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a 
                key={link.name} 
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
