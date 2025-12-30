import { Toaster } from '@/components/ui/sonner'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Awards } from '@/components/Awards'
import { Guests } from '@/components/Guests'
import { Schedule } from '@/components/Schedule'
import { Organizers } from '@/components/Organizers'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Navigation />
      <Hero />
      <Awards />
      <Guests />
      <Schedule />
      <Organizers />
      <Contact />
      <Footer />
      <Toaster />
    </LanguageProvider>
  )
}

export default App