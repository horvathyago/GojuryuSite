import React from 'react';
import logo from '../../assets/gojuryu.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 w-full">
      <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-0">
        
        {/* GRUPO ESQUERDA: Logo + Copyright + Contatos */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full xl:w-auto justify-center xl:justify-start">
          
          {/* Logo e Copyright */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-5 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" 
            />
            <span className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">
              © 2025 Mauriti-CE
            </span>
          </div>

          {/* Divisor Vertical */}
          <div className="hidden md:block w-px h-3 bg-white/10"></div>

          {/* Contatos */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 text-[9px] font-medium tracking-wide text-gray-400">
            <a href="mailto:ac.karategojuryudecontato@gmail.com" className="hover:text-[#B22222] transition-colors">
              ac.karategojuryudecontato@gmail.com
            </a>
            <span className="hidden md:inline text-[#B22222]">•</span>
            <a href="https://wa.me/558896797494" target="_blank" rel="noopener noreferrer" className="hover:text-[#B22222] transition-colors">
              (88) 9679-7494
            </a>
          </div>
        </div>

        {/* GRUPO DIREITA: Frase + Botão */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full xl:w-auto justify-center xl:justify-end">
          
          <span className="text-[9px] italic text-gray-600 font-serif hidden md:inline-block">
            "Desperte sua verdadeira força."
          </span>

          <a 
            href="https://gojuryudecontato.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B22222] border border-[#B22222]/30 px-3 py-1.5 hover:bg-[#B22222] hover:text-white transition-all whitespace-nowrap"
          >
            Portal FBKGC
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;