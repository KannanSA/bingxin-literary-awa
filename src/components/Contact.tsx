import { MessageCircle, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { useLanguage } from '@/contexts/LanguageContext'

export const Contact = () => {
  const { t } = useLanguage()

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${label} ${t({ en: 'copied to clipboard!', zh: '已复制到剪贴板！' })}`)
      })
      .catch(() => {
        const textArea = document.createElement("textarea")
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          toast.success(`${label} ${t({ en: 'copied to clipboard!', zh: '已复制到剪贴板！' })}`)
        } catch (err) {
          toast.error(t({ en: 'Unable to copy', zh: '无法复制' }))
        }
        document.body.removeChild(textArea)
      })
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-8">
          {t({ en: 'Contact & Registration', zh: '联系与注册' })}
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          {t({ 
            en: 'Please contact the organising committee via WeChat for registration details, media inquiries, and further information.',
            zh: '请通过微信联系组委会了解注册详情、媒体咨询和更多信息。'
          })}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer" 
            onClick={() => copyToClipboard('13718976538', t({ en: 'Organising Committee WeChat ID', zh: '组委会微信号' }))}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">
              {t({ en: 'Organising Committee', zh: '组委会' })}
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-2">
              {t({ en: 'WeChat ID', zh: '微信号' })}
            </p>
            <p className="text-2xl font-mono">13718976538</p>
            <p className="text-xs mt-2 text-primary-foreground/70">
              {t({ en: '(Click to copy)', zh: '（点击复制）' })}
            </p>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer" 
            onClick={() => copyToClipboard('19001005', t({ en: 'Official Public Account WeChat ID', zh: '官方公众号微信号' }))}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">
              {t({ en: 'Official Public Account', zh: '官方公众号' })}
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-2">
              {t({ en: 'WeChat ID', zh: '微信号' })}
            </p>
            <p className="text-2xl font-mono">19001005</p>
            <p className="text-xs mt-2 text-primary-foreground/70">
              {t({ en: '(Click to copy)', zh: '（点击复制）' })}
            </p>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer" 
            onClick={() => copyToClipboard('bingxin19001005@126.com', t({ en: 'Email', zh: '电子邮件' }))}
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">
              {t({ en: 'Email', zh: '电子邮件' })}
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-2">
              {t({ en: 'Email Address', zh: '邮箱地址' })}
            </p>
            <p className="text-xl font-mono break-all">bingxin19001005@126.com</p>
            <p className="text-xs mt-2 text-primary-foreground/70">
              {t({ en: '(Click to copy)', zh: '（点击复制）' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
