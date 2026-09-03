import { Search, TrendingUp, Wrench } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <Search size={28} className="text-[#00CED1]" />,
      title: "Auditoría Operativa",
      desc: "Analizamos tus herramientas actuales, cuellos de botella y fugas de tiempo en una sesión estratégica."
    },
    {
      number: "02",
      icon: <Wrench size={28} className="text-[#00CED1]" />,
      title: "Diseño & Automatización",
      desc: "Implementamos sistemas a la medida e integraciones de IA para que tu operación fluya sin fricciones."
    },
    {
      number: "03",
      icon: <TrendingUp size={28} className="text-[#00CED1]" />,
      title: "Escalamiento & Control",
      desc: "Capacitamos a tu equipo, documentamos los procesos y te entregamos el control total de tu tiempo."
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-[#0F1E29] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-[#00CED1] text-sm font-semibold mb-4 border border-white/10">
            Metodología Probada
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cómo trabajamos en <span className="text-[#00CED1]">Giltech</span>
          </h2>
          <p className="text-lg text-[#D1D8E0]">
            Un camino claro y sin rodeos hacia la eficiencia operativa de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#1a2e3d]/50 p-8 rounded-2xl border border-white/10 relative flex flex-col justify-between hover:border-[#00CED1]/50 transition-all">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0F1E29] border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-extrabold text-[#00CED1]/20">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-[#D1D8E0] leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}