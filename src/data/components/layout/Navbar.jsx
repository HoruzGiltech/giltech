import { Cpu, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F1E29] py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#00CED1] flex items-center justify-center">
            <Cpu size={20} className="text-[#0F1E29]" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Gil<span className="text-[#00CED1]">tech</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-white hover:text-[#00CED1] transition-colors font-medium">Servicios</a>
          <a href="#proceso" className="text-white hover:text-[#00CED1] transition-colors font-medium">Proceso</a>
          <a href="#sobre-mi" className="text-white hover:text-[#00CED1] transition-colors font-medium">Sobre Mí</a>
          <button onClick={onOpenContact} className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)] px-4 py-2 text-sm">Auditoría Gratis</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F1E29] border-t border-[#1a2e3d] shadow-xl p-6 flex flex-col gap-4">
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#00CED1]">Servicios</a>
          <a href="#proceso" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#00CED1]">Proceso</a>
          <a href="#sobre-mi" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#00CED1]">Sobre Mí</a>
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)] w-full">Auditoría Gratis</button>
        </div>
      )}
    </nav>
  );
}