import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const AcademyPage = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans text-gray-200 selection:bg-[#B22222] selection:text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* --- Cabeçalho da Página (Padrão GalleryPage) --- */}
        <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div>
                    <div className="inline-block px-3 py-1 mb-4 border-l-2 border-[#B22222] bg-white/5">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#B22222] font-bold">Institucional</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter text-white">
                        O Nosso <span className="text-transparent" style={{ WebkitTextStroke: '1px #B22222' }}>Dojo</span>
                    </h1>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-light max-w-md text-right uppercase tracking-widest leading-relaxed hidden md:block">
                    Um ambiente sagrado de aprendizado, <br/> disciplina e superação.
                </p>
            </div>
        </div>

        {/* --- Seção 1: História e Propósito (Layout Misto) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Texto */}
                <div className="space-y-8 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight">
                        Tradição e <br/> <span className="text-[#B22222]">Excelência Técnica</span>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-sm md:text-base leading-relaxed text-gray-400 font-light border-l border-[#B22222] pl-6">
                            Fundada com o propósito de preservar a essência do Karatê de Okinawa, nossa academia em Mauriti-CE é mais do que um local de treino; é uma escola de vida. 
                        </p>
                        <p className="text-xs md:text-sm leading-relaxed text-gray-500 font-light pl-6">
                            Como unidade filiada à <strong>FBKGC</strong> (Federação Brasileira de Karatê Goju-Ryu de Contato), seguimos rigorosamente os padrões técnicos e filosóficos do estilo. Nosso foco não está apenas na formação de atletas campeões, mas na construção de cidadãos com caráter forte, mente focada e espírito indomável.
                        </p>
                    </div>
                    <div className="pt-4 pl-6">
                        <Button variant="primary">Agendar Visita</Button>
                    </div>
                </div>

                {/* Imagem com Elementos Visuais (Padrão Hero) */}
                <div className="relative group order-1 lg:order-2 h-[400px] md:h-[500px] w-full">
                    {/* Elementos Decorativos de Fundo */}
                    <div className="absolute top-0 right-0 w-2/3 h-2/3 border border-white/5 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[#B22222]/5 z-0"></div>
                    
                    {/* Imagem Principal */}
                    <div className="absolute inset-4 overflow-hidden border border-white/10 bg-black z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1000" 
                            alt="Interior do Dojo" 
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        
                        {/* Selo Flutuante */}
                        <div className="absolute bottom-6 right-6 bg-[#B22222] p-4 text-center shadow-lg shadow-[#B22222]/20">
                            <span className="block text-2xl font-black text-white leading-none">GO</span>
                            <span className="block text-2xl font-black text-white/70 leading-none">JU</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Seção 2: O Sensei (Background Dark) --- */}
        <section className="w-full bg-black border-y border-white/5 py-16 md:py-24 mb-20 md:mb-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-[100px] md:text-[200px] font-black text-white/[0.02] italic pointer-events-none select-none uppercase leading-none z-0 whitespace-nowrap">
                Sensei
            </div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 aspect-[3/4] relative border border-white/10 p-2">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B22222]"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B22222]"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=800" 
                            alt="Sensei" 
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                    
                    <div className="w-full md:w-2/3 space-y-6">
                        <div className="inline-block px-3 py-1 border border-white/20">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Responsável Técnico</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white">
                            Liderança <span className="text-[#B22222]">Exemplar</span>
                        </h3>
                        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-2xl">
                            Guiando nossos alunos através do caminho rigoroso do Goju-Ryu, nosso Sensei combina décadas de experiência prática com um profundo conhecimento filosófico. Dedicado ao desenvolvimento integral de cada praticante, ele mantém viva a chama da tradição enquanto adapta o ensino às necessidades modernas da defesa pessoal.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 mt-6">
                            <div>
                                <span className="block text-2xl md:text-3xl font-black text-white">15+</span>
                                <span className="text-[9px] uppercase tracking-wider text-gray-500">Anos de Experiência</span>
                            </div>
                            <div>
                                <span className="block text-2xl md:text-3xl font-black text-white">FBKGC</span>
                                <span className="text-[9px] uppercase tracking-wider text-gray-500">Certificação Oficial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Seção 3: Infraestrutura/Valores (Grid Padrão GalleryPage) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                    Estrutura & <span className="text-[#B22222]">Valores</span>
                </h2>
                <div className="h-px bg-white/10 flex-grow hidden md:block"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block md:inline">Ambiente Profissional</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Item 1 */}
                <div className="group bg-white/5 p-8 border border-white/5 hover:border-[#B22222]/30 transition-all duration-500">
                    <div className="w-10 h-10 mb-6 flex items-center justify-center bg-[#B22222]/10 rounded-sm">
                        <div className="w-1 h-4 bg-[#B22222]"></div>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[#B22222] transition-colors">Tatame Olímpico</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Área de treino segura e adequada para a prática de quedas e combate, seguindo os padrões oficiais de competição.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="group bg-white/5 p-8 border border-white/5 hover:border-[#B22222]/30 transition-all duration-500">
                     <div className="w-10 h-10 mb-6 flex items-center justify-center bg-[#B22222]/10 rounded-sm">
                        <div className="w-1 h-4 bg-[#B22222]"></div>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[#B22222] transition-colors">Equipamentos</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Aparadores, sacos de pancada e proteções de alta qualidade para garantir a evolução técnica com segurança máxima.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="group bg-white/5 p-8 border border-white/5 hover:border-[#B22222]/30 transition-all duration-500">
                     <div className="w-10 h-10 mb-6 flex items-center justify-center bg-[#B22222]/10 rounded-sm">
                        <div className="w-1 h-4 bg-[#B22222]"></div>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[#B22222] transition-colors">Metodologia</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                        Sistema de ensino progressivo, respeitando a individualidade biológica e o tempo de aprendizado de cada aluno.
                    </p>
                </div>
            </div>
        </section>

        {/* --- Seção Final: Call to Action (Estilo Footer Home) --- */}
        <section className="container mx-auto px-6 md:px-12 mb-16">
             <div className="relative border border-white/5 p-10 md:p-16 text-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#B22222] opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#B22222] opacity-50"></div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase italic text-white mb-6">
                    Sua jornada começa <span className="text-[#B22222]">hoje</span>
                </h2>
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mb-8 max-w-lg mx-auto">
                    Não é necessário experiência prévia. Apenas a vontade de evoluir.
                </p>
                <div className="flex justify-center">
                    <Button variant="primary">Matricule-se Agora</Button>
                </div>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AcademyPage;