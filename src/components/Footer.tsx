export const Footer = () => (
  <footer className="bg-[oklch(0.22_0_0)] text-[oklch(0.55_0_0)] py-10 border-t border-[oklch(0.25_0_0)]">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p className="text-sm">© 2026 International Bingxin Literary Pen Conference.</p>
        <p className="text-xs mt-1">Celebrating Literature & Peace.</p>
      </div>
      <div className="flex space-x-6">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#awards" className="hover:text-white transition-colors">Awards</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
)
