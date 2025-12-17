const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[60px] border-[#B22222]/5 rounded-full border-t-transparent -rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-8 md:px-12 relative z-20 grid md:grid-cols-2 gap-12 items-center pt-24">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border-l-2 border-[#B22222] bg-white/5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#B22222] font-bold">Unidade Filiada Mauriti - CE</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
            KARATÊ <br />
            <span className="text-transparent border-t-2 border-b-2 border-[#B22222] py-2 inline-block mt-2" style={{ WebkitTextStroke: '1px white' }}>DE CONTATO</span>
          </h1>
          <p className="text-lg text-gray-400 font-light italic max-w-md leading-relaxed">
            Representando oficialmente a Federação Brasileira de Karatê Goju-Ryu de Contato em nossa região.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-[#B22222] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D42A2A] transition-all cursor-pointer">Agendar Aula</button>
            <a 
              href="https://gojuryudecontato.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all text-center"
            >
              História FBKGC
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-[#B22222]/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800" 
            alt="Karatê Goju-Ryu" 
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-110 md:scale-125 transition-transform duration-700 hover:scale-[1.28]" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;