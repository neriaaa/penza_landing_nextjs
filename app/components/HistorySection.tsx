'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HistorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="history" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/penza_landing_nextjs/videos/history.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div ref={textRef} className="relative z-20 max-w-4xl px-8 text-center text-white flex flex-col items-center">
        <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6 block border-b border-white/20 pb-4">
          Наследие
        </span>
        <h2 className="text-5xl md:text-8xl font-light mb-8 tracking-tight">
          1663
        </h2>
        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl">
          Основанная как крепость на юго-восточных рубежах, Пенза сквозь века пронесла свой уникальный характер, превратившись в город, где история живет на каждой улице.
        </p>
      </div>
    </section>
  );
}