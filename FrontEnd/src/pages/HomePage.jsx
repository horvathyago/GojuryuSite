import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Schedule from '../components/home/Schedule';
// Importação do logo para o rodapé
import logo from '../assets/gojuryu.png';

const HomePage = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans text-gray-200 selection:bg-[#B22222] selection:text-white">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-8 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <section className="lg:col-span-5 space-y-12">
          <div className="relative">
            <span className="absolute -top-12 -left-8 text-[120px] font-black text-white/5 italic pointer-events-none select-none uppercase leading-none text-nowrap">Goju-Ryu</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white leading-none relative">
              FORÇA E <br /> <span className="text-[#B22222]">SUAVIDADE</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-400 font-light border-l border-[#B22222] pl-6">
              O Karatê Goju-Ryu de Contato expressa a eficiência de uma luta real. 
              O termo <strong>"GO"</strong> traduz-se como força, enquanto <strong>"JU"</strong> representa a flexibilidade ou suavidade. 
            </p>
            <p className="text-sm leading-relaxed text-gray-500 font-light pl-6">
              Nossa academia em Mauriti é orgulhosamente filiada à <strong>FBKGC</strong>. 
              Seguimos a doutrina que resgata as origens do Karatê de Okinawa, focada na autodefesa real.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 bg-white/5 p-8 border-t border-b border-white/5 relative overflow-hidden">
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#B22222]">FBKGC</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Unidade Filiada</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#B22222]">MAURITI</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Ceará - Brasil</div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-[0.02] font-black italic pointer-events-none">OSS</div>
          </div>
        </section>

        <div className="lg:col-span-7">
          <Schedule />
        </div>
      </main>

      <section className="bg-black py-32 relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">
              CONCEITOS DA <br /> <span className="text-[#B22222]">FEDERAÇÃO</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow mx-8 hidden md:block"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold whitespace-nowrap">Documentação Oficial</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-12 hover:bg-[#B22222]/5 transition-colors group">
              <div className="w-12 h-1 bg-[#B22222] mb-8 group-hover:w-20 transition-all"></div>
              <h4 className="text-white font-bold uppercase text-xs mb-4 tracking-widest">Karatê-Dô</h4>
              <p className="text-sm italic text-gray-400 leading-relaxed italic">"Caminho das mãos vazias". Uma arte de autodefesa que utiliza o corpo para proteger-se.</p>
            </div>
            <div className="bg-black p-12 hover:bg-[#B22222]/5 transition-colors group">
              <div className="w-12 h-1 bg-[#B22222] mb-8 group-hover:w-20 transition-all"></div>
              <h4 className="text-white font-bold uppercase text-xs mb-4 tracking-widest">Estilo de Contato</h4>
              <p className="text-sm italic text-gray-400 leading-relaxed">Focado na eficiência de uma luta real e autodefesa pessoal.</p>
            </div>
            <div className="bg-black p-12 flex flex-col justify-center items-center text-center space-y-6">
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

      <footer className="bg-black border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <img 
              src={logo} 
              alt="Logo Mauriti" 
              className="h-10 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
            />
            <p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">
              Academia filiada à Federação Brasileira de Karatê Goju-Ryu de Contato.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#B22222]">Endereço</h4>
            <p className="text-sm text-gray-400 font-light">Mauriti, Ceará<br />Unidade Operacional</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-black text-[#B22222]">Oficial</h4>
            <div className="flex flex-col gap-2 italic">
              <a href="https://gojuryudecontato.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-600 hover:text-[#B22222]">Site da Federação</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-12 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[8px] uppercase tracking-widest text-gray-600">© 2025 Academia de Karatê em Mauriti. Filiada à FBKGC.</p>
          <p className="text-[8px] uppercase tracking-widest text-gray-600">Oss! Respeito e Hierarquia</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;