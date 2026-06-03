'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Левая колонка (едет вверх)
      gsap.to(col1Ref.current, {
        y: -150, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", 
          end: "bottom top",   
          scrub: true,        
        }
      });

      // 2. Центральная колонка (едет вниз для контраста)
      gsap.to(col2Ref.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // 3. Правая колонка (едет вверх, быстрее чем левая)
      gsap.to(col3Ref.current, {
        y: -250,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-wide">
          Взгляд через объектив
        </h2>
        <p className="text-white/50 text-xl font-light max-w-2xl mx-auto">
          Архитектура, природа и детали города. Листайте вниз, чтобы почувствовать ритм.
        </p>
      </div>

      {/* Контейнер сетки (ограничиваем высоту, чтобы скрыть лишнее) */}
      <div className="flex gap-4 md:gap-8 justify-center h-[80vh] md:h-[120vh] max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
        
        {/* Левая колонка */}
        <div ref={col1Ref} className="flex flex-col gap-4 md:gap-8 w-1/3 mt-20">
          <div className="w-full h-[40vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/1.jpg" alt="Галерея 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="w-full h-[50vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/2.jpg" alt="Галерея 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
        </div>

        {/* Центральная колонка (изначально сдвинута вверх классом -mt-32) */}
        <div ref={col2Ref} className="flex flex-col gap-4 md:gap-8 w-1/3 -mt-32">
          <div className="w-full h-[50vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/3.jpg" alt="Галерея 3" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="w-full h-[40vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/4.jpg" alt="Галерея 4" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
        </div>

        {/* Правая колонка */}
        <div ref={col3Ref} className="flex flex-col gap-4 md:gap-8 w-1/3 mt-40">
          <div className="w-full h-[35vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/5.jpg" alt="Галерея 5" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="w-full h-[55vh] bg-neutral-800 rounded-xl overflow-hidden group">
            <img src="/penza_landing_nextjs/images/6.jpg" alt="Галерея 6" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
        </div>

      </div>
    </section>
  );
}