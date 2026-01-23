import React, { useState, useEffect, useCallback, useRef } from 'react';
import kumite from '../../assets/kumite.mp4';
import katar from '../../assets/katar.mp4';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: katar,
    title: "Kata Training",
    type: "video"
  },
  {
    id: 2,
    url: kumite, // CORRIGIDO: Removido as chaves {} que criavam um objeto inválido
    title: "Kumite Practice",
    type: "video" // Adicionado para identificar que é um vídeo
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544367563-12123d8366e3?auto=format&fit=crop&q=80&w=1200",
    title: "Dojo Spirit",
    type: "image"
  },
  {
    id: 4,
    url: "https://i.ibb.co/mVnb9y8j/imgemotion.jpg",
    title: "Focus & Discipline",
    type: "image"
  },
  {
    id: 5,
    url: "https://i.ibb.co/wZCj2Pjv/exameblack.png",
    title: "Black Belt Exam",
    type: "image"
  }
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
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
    const baseStyles = "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out rounded-sm shadow-2xl overflow-hidden";
    
    if (index === currentIndex) {
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
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-12"
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => {
              if (index === (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length) prevSlide();
              if (index === (currentIndex + 1) % GALLERY_IMAGES.length) nextSlide();
            }}
          >
            {/* LÓGICA DE RENDERIZAÇÃO: IMAGEM OU VÍDEO */}
            {img.type === "video" ? (
              <video 
                src={img.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            ) : (
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            )}

            <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 delay-300' : 'opacity-0'}`}>
               <div className="w-12 h-1 bg-[#B22222] mb-2"></div>
               <h3 className="text-white font-black uppercase text-xl md:text-3xl italic tracking-tighter">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`h-1 transition-all duration-300 ${
              idx === currentIndex ? 'w-12 bg-[#B22222]' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;