'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин скролла
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ArchitectureSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", 
          }
        }
      );

      gsap.fromTo(cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", 
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="py-32 px-4 bg-transparent text-white min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light mb-16 border-b border-white/20 pb-8"
        >
          Архитектура и Наследие
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Карточка 1: Спасский собор */}
          <div 
            ref={(el) => { cardsRef.current[0] = el; }} 
            className="group"
          >
            <div className="w-full h-96 bg-neutral-800 rounded-lg overflow-hidden mb-6">
            
              <img
                src="/images/cathedral.jpg" 
                alt="Спасский кафедральный собор Пензы"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light mb-2">Спасский собор</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Величественный символ духовного возрождения. Один из самых масштабных храмов Поволжья, воссозданный в историческом облике.
            </p>
          </div>

          {/* Карточка 2: Драматический Театр */}
          <div 
            ref={(el) => { cardsRef.current[1] = el; }} 
            className="group mt-0 md:mt-24"
          >
            <div className="w-full h-96 bg-neutral-800 rounded-lg overflow-hidden mb-6">
             
              <img
                src="/images/theater.jpg"
                alt="Пензенский областной драматический театр"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light mb-2">Драматический Театр</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Центр культурной жизни города. Изящное здание в классическом стиле, которое особенно красиво в вечерней подсветке.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}