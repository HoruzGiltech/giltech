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