import React, { useState, useEffect, useCallback, useRef } from 'react';

// Dados simulados para a galeria
const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1200",
    title: "Kata Training"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1200",
    title: "Kumite Practice"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544367563-12123d8366e3?auto=format&fit=crop&q=80&w=1200",
    title: "Dojo Spirit"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=1200",
    title: "Focus & Discipline"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=1200",
    title: "Black Belt Exam"
  }
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Intervalo de 5 segundos
  const AUTO_PLAY_INTERVAL = 5000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const getSlideStyles = (index) => {
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;

    const baseStyles = "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out object-cover rounded-sm shadow-2xl";
    
    if (index === currentIndex) {
      // Adicionado z-30 para garantir que fique acima e capture o mouse corretamente
      return `${baseStyles} left-1/2 -translate-x-1/2 w-[85%] md:w-[60%] h-[60vh] md:h-[70vh] z-30 opacity-100 scale-100 border border-white/10`;
    }
    
    if (index === prevIndex) {
      return `${baseStyles} left-0 md:left-[5%] -translate-x-[80%] md:translate-x-0 w-[85%] md:w-[60%] h-[60vh] md:h-[70vh] z-20 opacity-30 scale-[0.85] blur-[2px] grayscale-[50%] cursor-pointer hover:opacity-50`;
    }
    
    if (index === nextIndex) {
      return `${baseStyles} right-0 md:right-[5%] translate-x-[80%] md:translate-x-0 w-[85%] md:w-[60%] h-[60vh] md:h-[70vh] z-20 opacity-30 scale-[0.85] blur-[2px] grayscale-[50%] cursor-pointer hover:opacity-50`;
    }

    return "hidden";
  };

  return (
    <div 
      // REMOVIDO: onMouseEnter/onMouseLeave daqui do container principal
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-12"
      // Mantemos o touch para mobile, pois no mobile não tem "cursor parado"
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B22222]/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto h-[70vh]">
        {GALLERY_IMAGES.map((img, index) => (
          <div 
            key={img.id}
            className={getSlideStyles(index)}
            // ADICIONADO: O controle de pausa agora fica APENAS nas imagens
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => {
              if (index === (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length) {
                prevSlide();
                setIsPaused(true); 
                setTimeout(() => setIsPaused(false), 100);
              }
              if (index === (currentIndex + 1) % GALLERY_IMAGES.length) {
                nextSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 100);
              }
            }}
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 delay-300' : 'opacity-0'}`}>
               <div className="w-12 h-1 bg-[#B22222] mb-2"></div>
               <h3 className="text-white font-black uppercase text-xl md:text-3xl italic tracking-tighter">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 100);
            }}
            // Adicionado evento no botão também, para pausar se o usuário estiver tentando clicar na bolinha
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`h-1 transition-all duration-300 ${
              idx === currentIndex ? 'w-12 bg-[#B22222]' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;