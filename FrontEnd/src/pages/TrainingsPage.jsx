import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const TrainingsPage = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans text-gray-200 selection:bg-[#B22222] selection:text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* --- Cabeçalho da Página (Padrão do Projeto) --- */}
        <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div>
                    <div className="inline-block px-3 py-1 mb-4 border-l-2 border-[#B22222] bg-white/5">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#B22222] font-bold">Metodologia</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter text-white">
                        Nossos <span className="text-transparent" style={{ WebkitTextStroke: '1px #B22222' }}>Treinos</span>
                    </h1>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-light max-w-md text-right uppercase tracking-widest leading-relaxed hidden md:block">
                    Desenvolvimento técnico, físico e mental <br/> através do Goju-Ryu de Contato.
                </p>
            </div>
        </div>

        {/* --- Seção 1: Programas de Treinamento (Cards Grandes) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Card Adultos */}
                <div className="group relative h-[400px] md:h-[500px] border border-white/10 overflow-hidden bg-black">
                    <img 
                        src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000" 
                        alt="Treino Adultos" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="w-12 h-1 bg-[#B22222] mb-4 group-hover:w-24 transition-all duration-500"></div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-2">Turma Adulta</h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm mb-6">
                            Foco total em condicionamento físico, defesa pessoal real e aprofundamento técnico. Um ambiente de superação onde o limite é expandido a cada aula.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-300">
                                <span className="w-1 h-1 bg-[#B22222]"></span> Defesa Pessoal
                            </li>
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-300">
                                <span className="w-1 h-1 bg-[#B22222]"></span> Condicionamento Extremo
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Card Kids */}
                <div className="group relative h-[400px] md:h-[500px] border border-white/10 overflow-hidden bg-black">
                    <img 
                        src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1000" 
                        alt="Treino Kids" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="w-12 h-1 bg-[#B22222] mb-4 group-hover:w-24 transition-all duration-500"></div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-2">Turma Kids</h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm mb-6">
                            Muito além do esporte. Ensinamos disciplina, respeito e autoconfiança para crianças, canalizando energia através da metodologia tradicional.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-300">
                                <span className="w-1 h-1 bg-[#B22222]"></span> Disciplina & Foco
                            </li>
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-300">
                                <span className="w-1 h-1 bg-[#B22222]"></span> Coordenação Motora
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        {/* --- Seção 2: Estrutura da Aula (Grid Informativo) --- */}
        <section className="w-full bg-white/5 border-y border-white/5 py-16 md:py-24 mb-20 md:mb-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                        Estrutura do <span className="text-[#B22222]">Treino</span>
                    </h2>
                    <div className="h-px bg-white/10 w-full mt-6 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Passo 1 */}
                    <div className="group">
                        <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-[#B22222]/20 transition-colors">01</div>
                        <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-widest">Junbi Undo</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                            Aquecimento preparatório tradicional e fortalecimento físico específico para evitar lesões.
                        </p>
                    </div>

                    {/* Passo 2 */}
                    <div className="group">
                        <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-[#B22222]/20 transition-colors">02</div>
                        <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-widest">Kihon</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                            Repetição exaustiva dos fundamentos técnicos: bases, defesas, socos e chutes.
                        </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="group">
                        <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-[#B22222]/20 transition-colors">03</div>
                        <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-widest">Kata</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                            Prática das formas tradicionais, combinando respiração, foco e aplicação técnica (Bunkai).
                        </p>
                    </div>

                    {/* Passo 4 */}
                    <div className="group">
                        <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-[#B22222]/20 transition-colors">04</div>
                        <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-widest">Kumite</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                            Combate prático. Aplicação das técnicas em situações de luta real e controlada.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Seção 3: Diferenciais (Lista Vertical) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 relative h-[300px] md:h-[400px]">
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B22222]"></div>
                    <img 
                         src="https://images.unsplash.com/photo-1544367563-12123d8366e3?auto=format&fit=crop&q=80&w=800"
                         alt="Foco"
                         className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                
                <div className="md:col-span-7 space-y-8">
                    <h2 className="text-2xl md:text-4xl font-black uppercase italic text-white leading-tight">
                        Por que treinar <br/> <span className="text-[#B22222]">Conosco?</span>
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-px bg-[#B22222] mt-3 shrink-0"></div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Filiação Oficial</h4>
                                <p className="text-sm text-gray-400 font-light">Reconhecimento pela FBKGC, garantindo graduação válida e currículo técnico autêntico.</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-px bg-[#B22222] mt-3 shrink-0"></div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Ambiente Respeitoso</h4>
                                <p className="text-sm text-gray-400 font-light">Hierarquia e etiqueta (Reishiki) são seguidas rigorosamente, criando um ambiente seguro.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-px bg-[#B22222] mt-3 shrink-0"></div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Evolução Constante</h4>
                                <p className="text-sm text-gray-400 font-light">Acompanhamento individualizado do progresso de cada aluno, do faixa branca ao preta.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* --- Seção Final: Call to Action (Padrão Home/Academy) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-16">
            <div className="relative border border-white/5 p-10 md:p-16 text-center bg-gradient-to-b from-[#1a1a1a] to-black overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                     <span className="text-[150px] font-black italic uppercase">Oss</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase italic text-white mb-6 relative z-10">
                    Supere seus <span className="text-[#B22222]">Limites</span>
                </h2>
                <div className="flex justify-center relative z-10">
                    <Button variant="primary">Agendar Aula Experimental</Button>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default TrainingsPage;