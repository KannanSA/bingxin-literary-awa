import { Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Awards = () => {
  const awardsList = [
    { 
      title: "The 3rd International Bingxin Literary Award", 
      desc: "Honoring excellence in prose and poetry in the spirit of Bingxin." 
    },
    { 
      title: "The 3rd World Chinese-Language Literature Award", 
      desc: "Celebrating global voices in Chinese literature." 
    },
    { 
      title: "The Gurnah Literary Award", 
      desc: "Named after Nobel Laureate Abdulrazak Gurnah." 
    },
    { 
      title: "The Soyinka Literary Award", 
      desc: "Named after Nobel Laureate Wole Soyinka." 
    }
  ]

  return (
    <section id="awards" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Awards Presented</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsList.map((award, index) => (
            <Card key={index} className="border-t-4 border-t-primary hover:shadow-lg transition-all group bg-background">
              <CardHeader>
                <Award className="w-10 h-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl min-h-[3.5rem]">{award.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{award.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-[oklch(0.22_0_0)] rounded-xl text-center">
          <h3 className="text-2xl text-white font-serif mb-2">Book Launch of New Perspectives</h3>
          <p className="text-[oklch(0.65_0_0)]">Celebrating the release of works by our award-winning writers.</p>
        </div>
      </div>
    </section>
  )
}
