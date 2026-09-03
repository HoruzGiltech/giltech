import { Briefcase, Clock, Layers } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: <Clock size={32} className="text-[#00CED1]" />,
      title: "Pasas más tiempo organizando que ejecutando",
      desc: "El trabajo operativo y la falta de procesos claros devoran tu agenda directiva diaria."
    },
    {
      icon: <Layers size={32} className="text-[#00CED1]" />,
      title: "Tu equipo usa 10 herramientas pero sigue perdiendo información",
      desc: "La falta de un sistema centralizado genera desconexión y fugas de datos importantes."
    },
    {
      icon: <Briefcase size={32} className="text-[#00CED1]" />,
      title: "Tienes reuniones infinitas y tareas que nunca terminan",
      desc: "Los cuellos de botella operativos frenan el crecimiento real de tu negocio remoto."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1E29]">
            El costo oculto de la desorganización
          </h2>
          <p className="text-lg text-slate-600">
            ¿Te resulta familiar alguna de estas situaciones en tu día a día?
          </p>
          <div className="w-20 h-1 bg-[#00CED1] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#D1D8E0]/30 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-[#0F1E29] flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F1E29] mb-3">{prob.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}