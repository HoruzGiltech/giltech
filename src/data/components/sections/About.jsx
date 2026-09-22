import { Mail, Target } from "lucide-react";

const BRAND = {
  whatsapp:
    "https://wa.me/584126776419?text=Hola%20quiero%20agendar%20mi%20auditoria",
  email: "giltechnology.2025@gmail.com",
  linkedin: "http://linkedin.com/in/gilbert-mendoza-rodriguez-35ba32173",
};

export const About = () => (
  <section id="sobre-mi" className="py-24 bg-[#0F1E29] text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
        <div className="w-full md:w-2/5 relative">
          <div className="aspect-4/5 bg-linear-to-br from-[#1a2e3d] to-[#0a141b] rounded-2xl overflow-hidden border border-[#1a2e3d] shadow-2xl flex items-center justify-center relative z-10">
            <Target size={80} className="text-[#00CED1] opacity-20" />

            {/* aqui va la imagen de la foto cuando se tenga y comentar el target de la linea de arriba
            <img
              src="/ruta-de-tu-foto.jpg"
              alt="Gilbert Mendoza - CEO de Giltech"
              className="w-full h-full object-cover"
            />
            */}

            <div className="absolute bottom-4 left-4 right-4 bg-[#0F1E29]/80 backdrop-blur p-4 rounded-xl border border-white/10">
              <p className="font-bold text-[#00CED1]">Gilbert Mendoza</p>
              <p className="text-sm text-[#D1D8E0]">CEO de Giltech</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00CED1] opacity-20 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full md:w-3/5">
          <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-[#00CED1] text-sm font-semibold mb-6 border border-white/10">
            Sobre el Fundador
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transformando el caos en{" "}
            <span className="text-[#00CED1]">crecimiento escalable.</span>
          </h2>
          <p className="text-lg text-[#D1D8E0] mb-6 leading-relaxed">
            Soy especialista en productividad e implementación de IA para
            negocios remotos y convencionales. Mi misión es simple pero
            poderosa: ayudo a emprendedores y equipos a recuperar tiempo,
            eliminar el caos operativo y escalar sin necesidad de contratar más
            personas.
          </p>
          <p className="text-lg text-[#D1D8E0] mb-8 leading-relaxed">
            Creo firmemente que la tecnología debe trabajar para ti, y no al
            revés. A través de sistemas probados y herramientas de inteligencia
            artificial, construimos bases sólidas para que tu negocio funcione
            como un reloj suizo.
          </p>
          <div className="flex gap-4">
            <a
              href={BRAND.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00CED1] hover:text-[#0F1E29] hover:border-[#00CED1] transition-all"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00CED1] hover:text-[#0F1E29] hover:border-[#00CED1] transition-all"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
