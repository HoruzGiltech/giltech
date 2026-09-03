import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Giltech transformó por completo nuestra forma de trabajar. Pasamos de apagar incendios diarios a tener procesos automatizados y claros.",
      author: "Carlos Ramírez",
      role: "Fundador de AgencyFlow",
      rating: 5
    },
    {
      quote: "La implementación de las herramientas de IA nos devolvió más de 15 horas a la semana. El retorno de inversión fue inmediato.",
      author: "Sofía Valenzuela",
      role: "CEO de RemoteOps",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#0a141b] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-[#00CED1] text-sm font-semibold mb-4 border border-white/10">
            Casos de Éxito
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que dicen <span className="text-[#00CED1]">nuestros clientes</span>
          </h2>
          <p className="text-lg text-[#D1D8E0]">
            Historias reales de fundadores que recuperaron el control de sus operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#1a2e3d]/30 p-8 rounded-2xl border border-white/10 relative flex flex-col justify-between hover:border-[#00CED1]/50 transition-all">
              <div className="absolute top-6 right-6 text-[#00CED1]/20">
                <Quote size={40} />
              </div>
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#00CED1] text-[#00CED1]" />
                  ))}
                </div>
                <p className="text-[#D1D8E0] leading-relaxed mb-8 relative z-10 italic">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold text-white text-lg">{item.author}</p>
                <p className="text-sm text-[#00CED1]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}