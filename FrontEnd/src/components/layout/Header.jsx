// Importamos o logo como um módulo para o Vite processar corretamente
import logo from '../../assets/gojuryu.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
      <div className="container mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          {/* Usamos a variável 'logo' importada no src */}
          <img 
            src={logo} 
            alt="Logo Karatê Goju-Ryu de Contato" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <nav className="hidden lg:flex gap-10 items-center">
          {['Home', 'About Us', 'Classes', 'Schedule', 'Gallery'].map((item) => (
            <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#B22222] hover:translate-y-[-1px] transition-all">
              {item}
            </a>
          ))}
          <a href="https://gojuryudecontato.com" target="_blank" rel="noopener noreferrer" className="border border-[#B22222] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B22222] transition-all text-center">
            Portal FBKGC
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;