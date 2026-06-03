'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Архитектура', href: '#architecture' },
  { name: 'Развитие', href: '#urban' },
  { name: 'Наследие', href: '#history' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Цифры', href: '#stats' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Функция для плавного скролла к нужной секции
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-5 bg-black/20 backdrop-blur-md border-b border-white/5">
        
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-light tracking-[0.3em] text-white uppercase cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        >
          Пенза<span className="text-white/50">.</span>
        </div>

        {/* Навигационные ссылки */}
        <nav className="hidden lg:flex gap-8 text-xs font-light tracking-[0.15em] text-white/60 uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative py-2 group hover:text-white transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button 
          onClick={(e) => handleScrollTo(e as any, '#history')}
          className="relative overflow-hidden text-xs font-light tracking-[0.2em] text-white border border-white/20 px-8 py-3 rounded-full group transition-all duration-500 hover:border-white/60 uppercase"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-medium">
            Погрузиться
          </span>
          <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
        </button>
      </div>
    </header>
  );
}