import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Schedule from '../components/home/Schedule';

const HomePage = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans text-gray-200 selection:bg-[#B22222] selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-6 md:px-12 py-12 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Seção de Introdução */}
        <section className="lg:col-span-5 space-y-8 md:space-y-12">
          <div className="relative mt-4 md:mt-0">
            {/* Texto de fundo controlado para não estourar no mobile */}
            <span className="absolute -top-6 -left-2 md:-top-12 md:-left-8 text-5xl md:text-[120px] font-black text-white/5 italic pointer-events-none select-none uppercase leading-none text-nowrap z-0">Goju-Ryu</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none relative z-10">
              FORÇA E <br /> <span className="text-[#B22222]">SUAVIDADE</span>
            </h2>
          </div>
          
          <div className="space-y-6 relative z-10">
            <p className="text-sm md:text-base leading-relaxed text-gray-400 font-light border-l border-[#B22222] pl-6">
              O Karatê Goju-Ryu de Contato expressa a eficiência de uma luta real. 
              O termo <strong>"GO"</strong> traduz-se como força, enquanto <strong>"JU"</strong> representa a flexibilidade ou suavidade. 
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-gray-500 font-light pl-6">
              Nossa academia em Mauriti é orgulhosamente filiada à <strong>FBKGC</strong>. 
              Seguimos a doutrina que resgata as origens do Karatê de Okinawa, focada na autodefesa real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 p-6 md:p-8 border-t border-b border-white/5 relative overflow-hidden">
            <div className="space-y-1 md:space-y-2 relative z-10">
              <div className="text-2xl md:text-3xl font-black text-[#B22222]">FBKGC</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Unidade Filiada</div>
            </div>
            <div className="space-y-1 md:space-y-2 relative z-10">
              <div className="text-2xl md:text-3xl font-black text-[#B22222]">MAURITI</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Ceará - Brasil</div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-8xl opacity-[0.02] font-black italic pointer-events-none">OSS</div>
          </div>
        </section>

        {/* Seção de Horários */}
        <div className="lg:col-span-7 w-full">
          <Schedule />
        </div>
      </main>

      {/* Seção de Conceitos */}
      <section className="bg-black py-12 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
              CONCEITOS DA <br /> <span className="text-[#B22222]">FEDERAÇÃO</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow mx-8 hidden md:block"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold whitespace-nowrap">Documentação Oficial</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-8 md:p-12 hover:bg-[#B22222]/5 transition-colors group">
              <div className="w-12 h-1 bg-[#B22222] mb-6 md:mb-8 group-hover:w-20 transition-all"></div>
              <h4 className="text-white font-bold uppercase text-xs mb-4 tracking-widest">Karatê-Dô</h4>
              <p className="text-sm italic text-gray-400 leading-relaxed italic">"Caminho das mãos vazias". Uma arte de autodefesa que utiliza o corpo para proteger-se.</p>
            </div>
            <div className="bg-black p-8 md:p-12 hover:bg-[#B22222]/5 transition-colors group">
              <div className="w-12 h-1 bg-[#B22222] mb-6 md:mb-8 group-hover:w-20 transition-all"></div>
              <h4 className="text-white font-bold uppercase text-xs mb-4 tracking-widest">Estilo de Contato</h4>
              <p className="text-sm italic text-gray-400 leading-relaxed">Focado na eficiência de uma luta real e autodefesa pessoal.</p>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6">
              <div className="text-4xl font-black italic text-white/10">OSS!</div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
                Acesse o portal oficial da <br /> Karatê Goju-Ryu de Contato
              </p>
              <a 
                href="https://gojuryudecontato.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] font-bold uppercase tracking-widest text-[#B22222] hover:text-white transition-colors underline underline-offset-8"
              >
                gojuryudecontato.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;