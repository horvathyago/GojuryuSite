const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-2 font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer text-xs";
  const variants = {
    primary: "bg-[#B22222] text-white hover:bg-[#8B0000]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;