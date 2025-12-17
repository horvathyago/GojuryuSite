const Hero = () => {
  return (
    <section className="relative h-[600px] bg-[#631919] overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[500px] h-[500px] border-[40px] border-black rounded-full border-t-transparent -rotate-45"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-white text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-2 tracking-tighter">FORGE YOUR STRENGTH</h1>
          <p className="text-xl font-light opacity-90 italic">Traditional Roots, Modern Combat</p>
        </div>
        
        <div className="relative mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800" 
               alt="Karate Practitioners" 
               className="h-[400px] md:h-[500px] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;