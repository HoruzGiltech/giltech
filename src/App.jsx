import FloatingWhatsApp from './data/components/layout/FloatingWhatsApp';
import Footer from './data/components/layout/Footer';
import Navbar from './data/components/layout/Navbar';
import { About } from './data/components/sections/About';
import { CTA } from './data/components/sections/CTA';
import Hero from './data/components/sections/Hero';
import Problems from './data/components/sections/Problems';
import Process from './data/components/sections/Process';
import Results from './data/components/sections/Results';
import Services from './data/components/sections/Services';
import Testimonials from './data/components/sections/Testimonials';

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-[#00CED1] selection:text-[#0F1E29]">
      <Navbar />
      
      <main>
        <Hero />
        <Problems />
        <Services />
        <Results />
        <Process />
        <About />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}