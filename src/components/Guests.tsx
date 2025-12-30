import { Feather, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'

export const Guests = () => {
  const { t } = useLanguage()

  const nobelGuests = [
    {
      name: t({ en: "Abdulrazak Gurnah", zh: "阿卜杜勒拉扎克·古尔纳" }),
      role: t({ en: "Nobel Prize in Literature 2021", zh: "2021年诺贝尔文学奖" }),
      detail: t({ 
        en: "Recipient of the 2nd International Bingxin Literary Award",
        zh: "第二届国际冰心文学奖获得者"
      })
    },
    {
      name: t({ en: "Wole Soyinka", zh: "沃莱·索因卡" }),
      role: t({ en: "Nobel Prize in Literature 1986", zh: "1986年诺贝尔文学奖" }),
      detail: t({ 
        en: "Recipient of the 2nd International Bingxin Literary Award",
        zh: "第二届国际冰心文学奖获得者"
      })
    }
  ]

  const distinguished = [
    { 
      name: t({ en: "Wu Qing", zh: "吴青" }),
      title: t({ en: "Daughter of renowned writer Bingxin", zh: "著名作家冰心之女" }),
      note: t({ 
        en: "Award presenter at the 1st, 2nd, and 3rd International Bingxin Literary Awards",
        zh: "第一、第二和第三届国际冰心文学奖颁奖嘉宾"
      })
    },
    { 
      name: t({ en: "Zhao Lihong", zh: "赵丽宏" }),
      title: t({ en: "Writer", zh: "作家" }),
      note: t({ en: "Gold Award recipient (2024)", zh: "金奖获得者（2024）" })
    },
    { 
      name: t({ en: "Zhang Kangkang", zh: "张抗抗" }),
      title: t({ en: "Writer", zh: "作家" }),
      note: t({ en: "Gold Award recipient (2025)", zh: "金奖获得者（2025）" })
    },
    { 
      name: t({ en: "Gu Yuehua", zh: "顾月华" }),
      title: t({ en: "Writer", zh: "作家" }),
      note: t({ en: "Gold Award recipient (2025)", zh: "金奖获得者（2025）" })
    },
    { 
      name: t({ en: "Yang Qingci", zh: "杨庆慈" }),
      title: t({ en: "Writer", zh: "作家" }),
      note: t({ en: "Recipient (2025)", zh: "获奖者（2025）" })
    },
    { 
      name: t({ en: "Xu Fuji", zh: "徐福基" }),
      title: t({ en: "Writer", zh: "作家" }),
      note: t({ 
        en: "Gold Award recipient of the 3rd International Bingxin Literary Award (2026)",
        zh: "第三届国际冰心文学奖金奖获得者（2026）"
      })
    },
  ]

  const officials = [
    t({ 
      en: "Hu Zhenmin, former Vice Minister of the Publicity Department of the CPC Central Committee",
      zh: "胡振民，中共中央宣传部原副部长"
    }),
    t({ 
      en: "Zhou Qifeng, former President of Peking University; Academician",
      zh: "周其凤，北京大学原校长；院士"
    }),
    t({ 
      en: "Wang Yuming, Advisor to the Chinese Poetry Society; Professor at Tsinghua University; Academician",
      zh: "王玉明，中国诗歌学会顾问；清华大学教授；院士"
    })
  ]

  return (
    <section id="guests" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            {t({ en: 'Distinguished Guests', zh: '尊贵嘉宾' })}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({ 
              en: 'We are honored to welcome literary giants and cultural ambassadors to Singapore.',
              zh: '我们荣幸地欢迎文学巨匠和文化大使莅临新加坡。'
            })}
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
                <Badge className="bg-primary text-primary-foreground mx-auto">
                  {t({ en: 'Nobel Laureate', zh: '诺贝尔奖得主' })}
                </Badge>
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
            <CardTitle className="text-xl font-serif border-b pb-2">
              {t({ en: 'Additional Distinguished Figures', zh: '其他杰出人士' })}
            </CardTitle>
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
