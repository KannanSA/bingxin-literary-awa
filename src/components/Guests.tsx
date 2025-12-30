import { Feather, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Guests = () => {
  const nobelGuests = [
    {
      name: "Abdulrazak Gurnah",
      role: "Nobel Prize in Literature 2021",
      detail: "Recipient of the 2nd International Bingxin Literary Award"
    },
    {
      name: "Wole Soyinka",
      role: "Nobel Prize in Literature 1986",
      detail: "Recipient of the 2nd International Bingxin Literary Award"
    }
  ]

  const distinguished = [
    { 
      name: "Wu Qing", 
      title: "Daughter of renowned writer Bingxin", 
      note: "Award presenter at the 1st, 2nd, and 3rd International Bingxin Literary Awards" 
    },
    { 
      name: "Zhao Lihong", 
      title: "Writer", 
      note: "Gold Award recipient (2024)" 
    },
    { 
      name: "Zhang Kangkang", 
      title: "Writer", 
      note: "Gold Award recipient (2025)" 
    },
    { 
      name: "Gu Yuehua", 
      title: "Writer", 
      note: "Gold Award recipient (2025)" 
    },
    { 
      name: "Yang Qingci", 
      title: "Writer", 
      note: "Recipient (2025)" 
    },
    { 
      name: "Xu Fuji", 
      title: "Writer", 
      note: "Gold Award recipient of the 3rd International Bingxin Literary Award (2026)" 
    },
  ]

  const officials = [
    "Hu Zhenmin, former Vice Minister of the Publicity Department of the CPC Central Committee",
    "Zhou Qifeng, former President of Peking University; Academician",
    "Wang Yuming, Advisor to the Chinese Poetry Society; Professor at Tsinghua University; Academician"
  ]

  return (
    <section id="guests" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Distinguished Guests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are honored to welcome literary giants and cultural ambassadors to Singapore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {nobelGuests.map((guest, idx) => (
            <Card key={idx} className="shadow-md border-border">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Feather className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{guest.name}</CardTitle>
                <Badge className="bg-primary text-primary-foreground mx-auto">Nobel Laureate</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground font-medium mb-1">{guest.role}</p>
                <CardDescription>{guest.detail}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {distinguished.map((guest, idx) => (
            <Card key={idx} className="border-l-4 border-l-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{guest.name}</CardTitle>
                <p className="text-primary text-sm font-medium">{guest.title}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs">{guest.note}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-serif border-b pb-2">Additional Distinguished Figures</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {officials.map((official, idx) => (
                <li key={idx} className="flex items-start text-foreground">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 mr-2" />
                  <span>{official}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
