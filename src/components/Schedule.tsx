import { MapPin } from 'lucide-react'

export const Schedule = () => {
  const events = [
    { 
      title: "Literary Field Study Tour", 
      location: "Nanyang Technological University, Singapore" 
    },
    { 
      title: "Literary Awards Ceremony", 
      location: "Asian Civilisations Museum, Singapore" 
    },
    { 
      title: "International Study Tour", 
      location: "Singapore and Thailand" 
    },
    { 
      title: "New Book Launch Events", 
      location: "For Award-Winning Writers" 
    },
    { 
      title: "Bingxin Literature Successors", 
      location: "Announcement & Ceremony" 
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-[oklch(0.22_0_0)] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-2">Major Events</h2>
            <p className="text-[oklch(0.65_0_0)]">January 15–20, 2026</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-[oklch(0.55_0_0)] text-sm">* Schedule subject to final updates</span>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row md:items-center bg-[oklch(0.25_0_0)] p-6 rounded-lg hover:bg-[oklch(0.28_0_0)] transition-colors cursor-default"
            >
              <div className="flex items-center mb-4 md:mb-0 md:w-1/3">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.22_0_0)] flex items-center justify-center border border-[oklch(0.35_0_0)] mr-4 text-[oklch(0.65_0_0)] font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-medium">{event.title}</h3>
              </div>
              <div className="md:w-2/3 flex items-center text-[oklch(0.65_0_0)]">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="border border-[oklch(0.35_0_0)] p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-4 text-accent">Primary Venues</h4>
            <ul className="space-y-2 text-[oklch(0.75_0_0)]">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                Asian Civilisations Museum, Singapore
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                Chinese Heritage Centre, Nanyang Technological University
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
