
export function CTA() {
  return (
    <section className="py-24 bg-[#0F1E29] text-center border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para recuperar el control de tu tiempo?
        </h2>
        <p className="text-xl text-[#D1D8E0] mb-6 max-w-2xl mx-auto">
          Sin compromiso. Sin tecnicismos. Solo resultados.
        </p>
        <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)] text-lg px-8 py-4 mb-4 shadow-[0_0_30px_rgba(0,206,209,0.3)]">
          Agenda tu Auditoría Gratuita
        </button>
      </div>
    </section>
  );
}