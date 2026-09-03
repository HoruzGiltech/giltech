import { CheckCircle2, Cpu, Search, Users } from 'lucide-react';

const WHATSAPP_NUMBER = "584126776419";

export default function Services() {
  const services = [
    {
      icon: <Search size={28} />,
      title: "Auditoría de Productividad",
      desc: "Análisis profundo de tus procesos actuales para detectar cuellos de botella y fugas de tiempo.",
      price: "Desde $150 USD",
      features: ["Mapeo de procesos", "Diagnóstico de herramientas", "Plan de acción de 30 días"]
    },
    {
      icon: <Cpu size={28} />,
      title: "Sistema de Productividad con IA",
      desc: "Diseño e implementación de un ecosistema automatizado y optimizado con Inteligencia Artificial.",
      price: "Desde $500 USD",
      features: ["Setup de herramientas", "Automatizaciones clave", "Capacitación al equipo"]
    },
    {
      icon: <Users size={28} />,
      title: "Acompañamiento Mensual",
      desc: "Gestión continua, optimización constante y soporte para asegurar que el sistema se mantenga escalable.",
      price: "Desde$250 USD / mes",
      features: ["Revisión semanal", "Ajuste de procesos", "Soporte prioritario"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0F1E29]">
            Soluciones diseñadas para <span className="text-[#00CED1]">escalar</span>
          </h2>
          <p className="text-lg text-slate-600">
            Sistemas claros y automatizados para que tu negocio funcione sin depender de ti el 100% del tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const message = encodeURIComponent(`Hola, quiero solicitar mi servicio de - ${srv.title}`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <div key={idx} className={`rounded-2xl p-8 border ${idx === 1 ? 'border-[#00CED1] shadow-xl relative bg-slate-50' : 'border-[#D1D8E0] shadow-sm hover:shadow-lg bg-white'} transition-all duration-300 flex flex-col`}>
                {idx === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00CED1] text-[#0F1E29] px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Más Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${idx === 1 ? 'bg-[#00CED1] text-[#0F1E29]' : 'bg-[#F5F7FA] text-[#0F1E29]'}`}>
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F1E29] mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{srv.desc}</p>
                
                <div className="mb-6 space-y-3">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#0F1E29]">
                      <CheckCircle2 size={16} className="text-[#00CED1]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-200">
                  <div className="text-3xl font-bold text-[#0F1E29] mb-4">{srv.price}</div>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${idx === 1 ? 'bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-md' : 'border border-[#0F1E29] text-[#0F1E29] hover:bg-[#0F1E29] hover:text-white'}`}
                  >
                    Solicitar Servicio
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}