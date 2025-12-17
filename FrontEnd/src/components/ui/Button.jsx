import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyles = "w-full md:w-auto px-6 md:px-8 py-3 font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-[10px] relative overflow-hidden group active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2 focus:ring-offset-[#333333] flex justify-center items-center";
  
  const variants = {
    primary: "bg-[#B22222] text-white hover:bg-[#D42A2A] shadow-lg shadow-[#B22222]/20",
    outline: "border border-white/30 text-white hover:bg-white hover:text-black hover:border-white"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className="relative z-10 text-center">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      )}
    </button>
  );
};

export default Button;