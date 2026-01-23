import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/gojuryu.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'A Academia', path: '/academy' }, 
    { name: 'Treinos', path: '/trainings' },
    { name: 'Galeria', path: '/gallery' }
  ];

  return (
    <>
      {/* HEADER - Altura corrigida para não cobrir o conteúdo */}
      <header className="fixed top-0 left-0 w-full z-[500] bg-gradient-to-b from-black/95 to-black/0 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 md:px-12 h-[70px] md:h-[80px] flex items-center justify-between lg:justify-center">

          {/* MENU DESKTOP - Dividido pelo Logo */}
          <nav className="hidden lg:flex items-center gap-12 xl:gap-20">
            
            {/* Lado Esquerdo */}
            <div className="flex gap-12 xl:gap-20">
              {navLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    location.pathname === item.path ? 'text-[#B22222]' : 'text-white/70 hover:text-[#B22222]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Logo Central - Flutuando para baixo */}
            <Link to="/" className="relative z-[600] flex-shrink-0">
              <img
                src={logo}
                alt="Logo Karatê Goju-Ryu"
                className="h-24 md:h-44 w-auto object-contain drop-shadow-lg translate-y-2 md:translate-y-6"
              />
            </Link>

            {/* Lado Direito */}
            <div className="flex gap-12 xl:gap-20">
              {navLinks.slice(2, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    location.pathname === item.path ? 'text-[#B22222]' : 'text-white/70 hover:text-[#B22222]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* VERSÃO MOBILE - Logo à esquerda e Botão à direita */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <Link to="/" className="relative z-[600]">
              <img
                src={logo}
                alt="Logo Karatê"
                className="h-20 w-auto object-contain drop-shadow-lg translate-y-2"
              />
            </Link>

            <button
              className="relative z-[600] text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-8 h-6 flex flex-col justify-between items-end">
                <span className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`block w-full h-[3px] bg-[#B22222] rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY E MENU MOBILE */}
      <div
        className={`fixed inset-0 z-[400] bg-black/80 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center pt-32 gap-8" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-black uppercase tracking-widest text-white hover:text-[#B22222]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://gojuryudecontato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#B22222] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B22222]"
          >
            Portal FBKGC
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;