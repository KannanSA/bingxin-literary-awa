import { Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

export const Awards = () => {
  const { t } = useLanguage()

  const awardsList = [
    { 
      title: t({ 
        en: "The 3rd International Bingxin Literary Award",
        zh: "第三届国际冰心文学奖"
      }),
      desc: t({ 
        en: "Honoring excellence in prose and poetry in the spirit of Bingxin.",
        zh: "以冰心精神表彰散文与诗歌的卓越成就。"
      })
    },
    { 
      title: t({ 
        en: "The 3rd World Chinese-Language Literature Award",
        zh: "第三届世界华文文学奖"
      }),
      desc: t({ 
        en: "Celebrating global voices in Chinese literature.",
        zh: "表彰全球华文文学的杰出声音。"
      })
    },
    { 
      title: t({ 
        en: "The Gurnah Literary Award",
        zh: "古尔纳文学奖"
      }),
      desc: t({ 
        en: "Named after Nobel Laureate Abdulrazak Gurnah.",
        zh: "以诺贝尔文学奖得主阿卜杜勒拉扎克·古尔纳命名。"
      })
    },
    { 
      title: t({ 
        en: "The Soyinka Literary Award",
        zh: "索因卡文学奖"
      }),
      desc: t({ 
        en: "Named after Nobel Laureate Wole Soyinka.",
        zh: "以诺贝尔文学奖得主沃莱·索因卡命名。"
      })
    }
  ]

  return (
    <section id="awards" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            {t({ en: 'Awards Presented', zh: '颁发奖项' })}
          </h2>
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
          <h3 className="text-2xl text-white font-serif mb-2">
            {t({ en: 'Book Launch of New Perspectives', zh: '新书发布会' })}
          </h3>
          <p className="text-[oklch(0.65_0_0)]">
            {t({ 
              en: 'Celebrating the release of works by our award-winning writers.',
              zh: '庆祝获奖作家作品的发布。'
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
