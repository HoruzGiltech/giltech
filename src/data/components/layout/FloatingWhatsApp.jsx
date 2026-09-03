import { MessageCircle } from 'lucide-react';

const BRAND = {
  whatsapp: "https://wa.me/584126776419?text=Hola%20quiero%20agendar%20mi%20auditoria",
};

export default function FloatingWhatsApp() {
  return (
    <a 
      href={BRAND.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-[#0F1E29] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos?
      </span>
    </a>
  );
}