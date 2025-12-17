const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-6 text-white uppercase text-sm tracking-widest">
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold leading-tight italic">
          GOJURYU <br/> <span className="text-[#B22222]">CONTACT</span> <br/> KARATE
        </div>
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#" className="bg-gray-500/50 px-4 py-1">Home</a>
        <a href="#" className="hover:text-gray-400">About Us</a>
        <a href="#" className="hover:text-gray-400">Classes</a>
        <a href="#" className="hover:text-gray-400">Schedule</a>
        <a href="#" className="hover:text-gray-400">Gallery</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </nav>
    </header>
  );
};

export default Header;