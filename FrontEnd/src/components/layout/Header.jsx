import { useState } from 'react';
// Importamos o logo como um módulo para o Vite processar corretamente
import logo from '../../assets/gojuryu.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About Us', 'Classes', 'Schedule', 'Gallery'];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/90 to-black/0 backdrop-blur-[2px]">
      {/* Alterado para py-0: Removemos todo o padding vertical para a barra ficar o mais fina possível */}
      <div className="container mx-auto px-6 md:px-12 py-0 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer z-[110]">
          {/* Mantendo o tamanho grande solicitado: h-16 (mobile) e md:h-24 (desktop) */}
          <img 
            src={logo} 
            alt="Logo Karatê Goju-Ryu de Contato" 
            className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navLinks.map((item) => (
            <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#B22222] hover:translate-y-[-1px] transition-all">
              {item}
            </a>
          ))}
          <a href="https://gojuryudecontato.com" target="_blank" rel="noopener noreferrer" className="border border-[#B22222] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B22222] transition-all text-center">
            Portal FBKGC
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-[110] text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-[2px] bg-[#B22222] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
          </div>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col justify-center items-center gap-8 transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-black uppercase tracking-widest text-white hover:text-[#B22222] transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://gojuryudecontato.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 border border-[#B22222] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B22222] transition-all"
          >
            Portal FBKGC
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;