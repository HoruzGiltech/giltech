import { Clock, Users, Zap } from 'lucide-react';

export default function Results() {
  const metrics = [
    {
      icon: <Clock size={28} className="text-[#00CED1]" />,
      stat: "+15h",
      label: "Recuperadas por semana",
      desc: "Tiempo libre de tareas repetitivas para los fundadores y directivos."
    },
    {
      icon: <Zap size={28} className="text-[#00CED1]" />,
      stat: "3x",
      label: "Velocidad operativa",
      desc: "Aceleración en la entrega de proyectos y flujos de trabajo automatizados."
    },
    {
      icon: <Users size={28} className="text-[#00CED1]" />,
      stat: "100%",
      label: "Claridad en el equipo",
      desc: "Cero fricción y un sistema centralizado donde todos saben qué hacer."
    }
  ];

  return (
    <section className="py-24 bg-[#0a141b] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-[#00CED1] text-sm font-semibold mb-4 border border-white/10">
            Impacto Comprobado
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados reales para <span className="text-[#00CED1]">negocios reales</span>
          </h2>
          <p className="text-lg text-[#D1D8E0]">
            El retorno de inversión de optimizar tus procesos con inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-[#1a2e3d]/30 p-8 rounded-2xl border border-white/10 text-center hover:border-[#00CED1]/50 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#0F1E29] border border-white/10 flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#00CED1] mb-2">{item.stat}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{item.label}</h3>
              <p className="text-[#D1D8E0] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}