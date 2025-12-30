import { Globe, Award, Users, BookOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export const Organizers = () => {
  const { t } = useLanguage()

  const hosts = [
    t({ 
      en: "International Bingxin Literary Award Organising Committee",
      zh: "国际冰心文学奖组委会"
    }),
    t({ 
      en: "International Bingxin Literary Pen Conference",
      zh: "国际冰心文学笔会"
    }),
    t({ 
      en: "World Chinese Literature Magazine",
      zh: "世界华文文学杂志"
    }),
    t({ 
      en: "Japan BEST Literary Pen Conference",
      zh: "日本BEST文学笔会"
    }),
    t({ 
      en: "Japan BEST International Trading Co., Ltd.",
      zh: "日本BEST国际贸易有限公司"
    }),
    t({ 
      en: "Chinese Heritage Centre, Nanyang Technological University (Singapore)",
      zh: "南洋理工大学中华文化中心（新加坡）"
    }),
    t({ 
      en: "Lianshisheng Cultural Foundation (Singapore)",
      zh: "连士升文化基金会（新加坡）"
    }),
    t({ 
      en: "Leshan Leshui Publishing House (USA)",
      zh: "乐山乐水出版社（美国）"
    }),
    t({ 
      en: "International Education Association of Singapore (IEAS)",
      zh: "新加坡国际教育协会（IEAS）"
    })
  ]

  const sponsors = [
    t({ 
      en: "Asian Civilisations Museum, Singapore",
      zh: "新加坡亚洲文明博物馆"
    }),
    t({ 
      en: "Chinese Heritage Centre, Nanyang Technological University",
      zh: "南洋理工大学中华文化中心"
    }),
    t({ 
      en: "Lianshisheng Cultural Foundation, Singapore",
      zh: "连士升文化基金会，新加坡"
    }),
    t({ 
      en: "International Education Association of Singapore (IEAS)",
      zh: "新加坡国际教育协会（IEAS）"
    })
  ]

  const partners = [
    t({ 
      en: "Shanghai International Poetry Festival Art Committee",
      zh: "上海国际诗歌节艺术委员会"
    }),
    t({ 
      en: '"Chinese Writers Headlines" public media platform',
      zh: "《中国作家头条》公共媒体平台"
    }),
    t({ 
      en: "Wenhu Network",
      zh: "文虎网络"
    }),
    t({ 
      en: "Fangcao Publishing House (Japan)",
      zh: "芳草出版社（日本）"
    }),
    t({ 
      en: "Chinese Monthly Editorial Office",
      zh: "华文月刊编辑部"
    })
  ]

  return (
    <section id="organizers" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-16 text-foreground">
          {t({ en: 'Organising Institutions', zh: '主办机构' })}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">
                {t({ en: 'Host Organisations', zh: '主办单位' })}
              </h3>
            </div>
            <ul className="space-y-3">
              {hosts.map((org, i) => (
                <li key={i} className="text-sm text-muted-foreground border-b border-border pb-2">{org}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">
                  {t({ en: 'Supporting Institution', zh: '支持机构' })}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground border-b border-border pb-2">
                {t({ en: 'UNESCO Peace Centre', zh: '联合国教科文组织和平中心' })}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">
                {t({ en: 'Host-Country Sponsors', zh: '主办国赞助商' })}
              </h3>
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
              <h3 className="text-xl font-bold text-foreground">
                {t({ en: 'Partner Organisations', zh: '合作机构' })}
              </h3>
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
