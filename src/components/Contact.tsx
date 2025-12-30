import { MessageCircle } from 'lucide-react'
import { toast } from 'sonner'

export const Contact = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${label} copied to clipboard!`)
      })
      .catch(() => {
        const textArea = document.createElement("textarea")
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          toast.success(`${label} copied to clipboard!`)
        } catch (err) {
          toast.error('Unable to copy')
        }
        document.body.removeChild(textArea)
      })
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-8">Contact & Registration</h2>
        <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Please contact the organising committee via WeChat for registration details, media inquiries, and further information.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer" 
            onClick={() => copyToClipboard('13718976538', 'Organising Committee WeChat ID')}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Organising Committee</h3>
            <p className="text-primary-foreground/80 text-sm mb-2">WeChat ID</p>
            <p className="text-2xl font-mono">13718976538</p>
            <p className="text-xs mt-2 text-primary-foreground/70">(Click to copy)</p>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer" 
            onClick={() => copyToClipboard('19001005', 'Official Public Account WeChat ID')}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Official Public Account</h3>
            <p className="text-primary-foreground/80 text-sm mb-2">WeChat ID</p>
            <p className="text-2xl font-mono">19001005</p>
            <p className="text-xs mt-2 text-primary-foreground/70">(Click to copy)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
