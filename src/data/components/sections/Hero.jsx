import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0F1E29] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00CED1] opacity-5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00CED1] opacity-5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#1a2e3d] border border-[#00CED1]/30 rounded-full text-[#00CED1] text-sm font-semibold mb-6">
            🚀 IA & Productividad para Equipos Remotos
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Tu negocio más organizado.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] to-[#66e0e0]">Tu equipo más productivo.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#D1D8E0] mb-10 max-w-2xl mx-auto leading-relaxed">
            Soy Gestor de Productividad con IA. Optimizo y Automatizo los procesos de tu negocio para que recuperes horas, elimines el caos y te enfoques en lo que realmente genera dinero.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)] w-full sm:w-auto text-lg gap-2">
              Quiero una Auditoría Gratuita <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-transparent border-2 border-[#00CED1] text-[#00CED1] hover:bg-[#00CED1] hover:text-[#0F1E29] w-full sm:w-auto text-lg">
              Ver mis servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}