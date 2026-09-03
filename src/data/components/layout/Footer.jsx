import { Cpu, Mail, MessageCircle } from 'lucide-react';

const BRAND = {
  whatsapp: "https://wa.me/584126776419?text=Hola%20quiero%20agendar%20mi%20auditoria",
  email: "contacto@giltech.com",
  linkedin: "http://linkedin.com/in/gilbert-mendoza-rodriguez-35ba32173"
};

export default function Footer() {
  return (
    <footer className="bg-[#0a141b] text-[#D1D8E0] py-12 border-t border-[#1a2e3d]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-[#00CED1] flex items-center justify-center">
              <Cpu size={14} className="text-[#0F1E29]" />
            </div>
            <span className="text-xl font-bold text-white">Gil<span className="text-[#00CED1]">tech</span></span>
          </div>
          <p className="text-sm max-w-xs mb-6">
            Optimizando y automatizando negocios para la nueva era digital con Inteligencia Artificial.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#servicios" className="hover:text-[#00CED1] transition-colors">Servicios</a></li>
            <li><a href="#proceso" className="hover:text-[#00CED1] transition-colors">Proceso de trabajo</a></li>
            <li><a href="#sobre-mi" className="hover:text-[#00CED1] transition-colors">Sobre Gilbert</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contacto Directo</h4>
          <div className="flex flex-col gap-3">
            <a href={BRAND.whatsapp} className="flex items-center gap-2 text-sm hover:text-[#00CED1] transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm hover:text-[#00CED1] transition-colors">
              <Mail size={18} /> Email
            </a>
            <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#00CED1] transition-colors">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> 
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-[#1a2e3d] text-center text-sm">
        <p>© {new Date().getFullYear()} Giltech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}