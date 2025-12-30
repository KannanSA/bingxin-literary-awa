import { Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" className="text-primary" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,70.9,34.5C59.7,46.1,48.7,55.7,36.4,63.5C24.1,71.4,10.5,77.4,-2.3,81.4C-15.1,85.4,-27.1,87.4,-38.5,82.4C-49.9,77.4,-60.7,65.4,-70.3,52.3C-79.9,39.2,-88.3,25,-89.6,10.1C-90.9,-4.8,-85.1,-20.4,-75.7,-33.4C-66.3,-46.4,-53.3,-56.8,-39.9,-64.3C-26.5,-71.8,-12.7,-76.4,1.8,-79.5C16.3,-82.6,32.6,-84.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="inline-block border-b-2 border-primary pb-2 mb-6">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Singapore • January 15–20, 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
          Introduction to the International<br />
          <span className="text-primary">Bingxin Literary Pen Conference</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif italic">
          "Two Nobel Prize Laureates Gather for the Bingxin Literary Awards"
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-foreground bg-card px-6 py-3 rounded-full shadow-sm border">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Jan 15–20, 2026</span>
          </div>
          <div className="flex items-center space-x-2 text-foreground bg-card px-6 py-3 rounded-full shadow-sm border">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Asian Civilisations Museum, Singapore</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="shadow-lg">
            <a href="#contact">Connect on WeChat</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#awards">View Awards</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
