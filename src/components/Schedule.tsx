import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export const Schedule = () => {
  const { t } = useLanguage()

  const events = [
    { 
      title: t({ en: "Literary Field Study Tour", zh: "文学实地考察" }),
      location: t({ 
        en: "Nanyang Technological University, Singapore",
        zh: "新加坡南洋理工大学"
      })
    },
    { 
      title: t({ en: "Literary Awards Ceremony", zh: "文学颁奖典礼" }),
      location: t({ 
        en: "Asian Civilisations Museum, Singapore",
        zh: "新加坡亚洲文明博物馆"
      })
    },
    { 
      title: t({ en: "International Study Tour", zh: "国际考察之旅" }),
      location: t({ en: "Singapore and Thailand", zh: "新加坡和泰国" })
    },
    { 
      title: t({ en: "New Book Launch Events", zh: "新书发布会" }),
      location: t({ en: "For Award-Winning Writers", zh: "获奖作家" })
    },
    { 
      title: t({ en: "Bingxin Literature Successors", zh: "冰心文学传承人" }),
      location: t({ en: "Announcement & Ceremony", zh: "公布及仪式" })
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-[oklch(0.22_0_0)] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-2">
              {t({ en: 'Major Events', zh: '主要活动' })}
            </h2>
            <p className="text-[oklch(0.65_0_0)]">
              {t({ en: 'January 15–20, 2026', zh: '2026年1月15日至20日' })}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-[oklch(0.55_0_0)] text-sm">
              {t({ en: '* Schedule subject to final updates', zh: '* 日程可能有最终调整' })}
            </span>
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
            <h4 className="text-lg font-bold mb-4 text-accent">
              {t({ en: 'Primary Venues', zh: '主要场地' })}
            </h4>
            <ul className="space-y-2 text-[oklch(0.75_0_0)]">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                {t({ 
                  en: 'Asian Civilisations Museum, Singapore',
                  zh: '新加坡亚洲文明博物馆'
                })}
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                {t({ 
                  en: 'Chinese Heritage Centre, Nanyang Technological University',
                  zh: '南洋理工大学中华文化中心'
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
