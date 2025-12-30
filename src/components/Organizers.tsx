import { Globe, Award, Users, BookOpen } from 'lucide-react'

export const Organizers = () => {
  const hosts = [
    "International Bingxin Literary Award Organising Committee",
    "International Bingxin Literary Pen Conference",
    "World Chinese Literature Magazine",
    "Japan BEST Literary Pen Conference",
    "Japan BEST International Trading Co., Ltd.",
    "Chinese Heritage Centre, Nanyang Technological University (Singapore)",
    "Lianshisheng Cultural Foundation (Singapore)",
    "Leshan Leshui Publishing House (USA)",
    "International Education Association of Singapore (IEAS)"
  ]

  const sponsors = [
    "Asian Civilisations Museum, Singapore",
    "Chinese Heritage Centre, Nanyang Technological University",
    "Lianshisheng Cultural Foundation, Singapore",
    "International Education Association of Singapore (IEAS)"
  ]

  const partners = [
    "Shanghai International Poetry Festival Art Committee",
    '"Chinese Writers Headlines" public media platform',
    "Wenhu Network",
    "Fangcao Publishing House (Japan)",
    "Chinese Monthly Editorial Office"
  ]

  return (
    <section id="organizers" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-16 text-foreground">Organising Institutions</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">Host Organisations</h3>
            </div>
            <ul className="space-y-3">
              {hosts.map((org, i) => (
                <li key={i} className="text-sm text-muted-foreground border-b border-border pb-2">{org}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">Supporting Institution</h3>
              </div>
              <p className="text-sm text-muted-foreground border-b border-border pb-2">UNESCO Peace Centre</p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">Host-Country Sponsors</h3>
            </div>
            <ul className="space-y-3">
              {sponsors.map((org, i) => (
                <li key={i} className="text-sm text-muted-foreground border-b border-border pb-2">{org}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">Partner Organisations</h3>
            </div>
            <ul className="space-y-3">
              {partners.map((org, i) => (
                <li key={i} className="text-sm text-muted-foreground border-b border-border pb-2">{org}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
