import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GallerySlider from '../components/gallery/GallerySlider';
import videoKarate from '../assets/vidiokarate.mp4';
import exameKarate from '../assets/examekarate.jpg'; // Nova importação da imagem

const GalleryPage = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans text-gray-200 selection:bg-[#B22222] selection:text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* Cabeçalho da Página */}
        <div className="container mx-auto px-6 md:px-12 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div>
                    <div className="inline-block px-3 py-1 mb-4 border-l-2 border-[#B22222] bg-white/5">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#B22222] font-bold">Registro Visual</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter text-white">
                        Nossa <span className="text-transparent" style={{ WebkitTextStroke: '1px #B22222' }}>Trajetória</span>
                    </h1>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-light max-w-md text-right uppercase tracking-widest leading-relaxed hidden md:block">
                    Momentos de dedicação, força e técnica <br/> capturados no dojo.
                </p>
            </div>
        </div>

        {/* Slider */}
        <section className="w-full mb-16 md:mb-32">
            <GallerySlider />
        </section>

        {/* Seção 1: Pilares do Treinamento */}
        <section className="container mx-auto px-6 md:px-12 mb-16 md:mb-32">
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                    Fundamentos <span className="text-[#B22222]">Essenciais</span>
                </h2>
                <div className="h-px bg-white/10 flex-grow hidden md:block"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block md:inline">Metodologia Goju-Ryu</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
                <div className="group">
                    <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-[#B22222]/10 transition-colors">01</div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 border-l-2 border-[#B22222] pl-4">Kihon</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed pl-4 border-l border-white/5">
                        A base de tudo. O treinamento repetitivo dos fundamentos técnicos para forjar o corpo e a memória muscular necessária para o combate real.
                    </p>
                </div>
                <div className="group">
                    <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-[#B22222]/10 transition-colors">02</div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 border-l-2 border-[#B22222] pl-4">Kata</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed pl-4 border-l border-white/5">
                        A luta imaginária. Sequências formais que preservam as técnicas letais dos antigos mestres de Okinawa, combinando respiração e foco.
                    </p>
                </div>
                <div className="group">
                    <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-[#B22222]/10 transition-colors">03</div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 border-l-2 border-[#B22222] pl-4">Kumite</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed pl-4 border-l border-white/5">
                        O combate. A aplicação prática da técnica com contato, onde se testa o espírito, a resistência e a eficácia dos golpes em situação real.
                    </p>
                </div>
            </div>
        </section>

        {/* Seção 2: Grid Visual de Categorias */}
        <section className="w-full bg-white/5 border-y border-white/5 py-12 md:py-32 mb-16 md:mb-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {/* Card Grande - ALTERADO AQUI (IMAGEM EXAME) */}
                    <div className="lg:col-span-8 relative h-[300px] md:h-[500px] group overflow-hidden bg-black border border-white/10">
                        <img src={exameKarate} alt="Exames" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                            <div className="w-12 h-1 bg-[#B22222] mb-4 group-hover:w-24 transition-all duration-500"></div>
                            <h3 className="text-2xl md:text-4xl font-black uppercase italic text-white mb-2">Exames de Faixa</h3>
                            <p className="text-xs md:text-sm text-gray-400 max-w-lg hidden md:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">O momento de provação.</p>
                        </div>
                    </div>
                    {/* Card Vertical - ALTERADO ANTERIORMENTE (VÍDEO) */}
                    <div className="lg:col-span-4 relative h-[300px] md:h-[500px] group overflow-hidden bg-black border border-white/10">
                        <video 
                            src={videoKarate} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <div className="w-8 h-1 bg-[#B22222] mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <h3 className="text-xl md:text-2xl font-black uppercase italic text-white">Competições</h3>
                        </div>
                    </div>
                    {/* Card Horizontal 1 */}
                    <div className="lg:col-span-5 relative h-[250px] md:h-[300px] group overflow-hidden bg-black border border-white/10">
                        <img src="https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=800" alt="Seminários" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-white mb-1">Seminários</h3>
                            <span className="text-[10px] text-[#B22222] font-bold uppercase tracking-widest">Aprimoramento Técnico</span>
                        </div>
                    </div>
                    {/* Card Horizontal 2 */}
                    <div className="lg:col-span-7 relative h-[250px] md:h-[300px] group overflow-hidden bg-black border border-white/10">
                        <img src="https://images.unsplash.com/photo-1544367563-12123d8366e3?auto=format&fit=crop&q=80&w=1200" alt="Cultura" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end items-start">
                             <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-white mb-1">Cultura & Respeito</h3>
                             <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">A hierarquia e a etiqueta do dojo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Seção 3: Filosofia Final */}
        <section className="container mx-auto px-6 md:px-12 mb-12">
             <div className="relative border border-white/5 p-8 md:p-16 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-[#B22222]"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-[#B22222]"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-6">Filosofia do Mestre</p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic text-white leading-tight md:leading-snug max-w-4xl mx-auto">
                    "O Karatê não é apenas sobre vencer o oponente, mas sobre <span className="text-[#B22222]">vencer a si mesmo</span> todos os dias."
                </h2>
                <div className="mt-8">
                     <div className="w-1 bg-[#B22222] h-12 mx-auto"></div>
                </div>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;