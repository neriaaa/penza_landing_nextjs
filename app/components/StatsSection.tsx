'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  { id: 1, value: 1663, suffix: "", label: "Год основания", desc: "Исторический фундамент города и отправная точка." },
  { id: 2, value: 250, suffix: "+", label: "Памятников", desc: "Объектов культурного и архитектурного наследия." },
  { id: 3, value: 45, suffix: " км²", label: "Зеленых зон", desc: "Общая площадь лесов, парков и скверов." },
  { id: 4, value: 12, suffix: "", label: "Новых проектов", desc: "Масштабных инициатив по улучшению урбанистики." }
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el) => {
        if (!el) return;
        
        const target = parseFloat(el.getAttribute('data-target') || "0");
        
        gsap.fromTo(el, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2.5, 
            snap: { textContent: 1 }, 
            ease: "power3.out", 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%", 
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-32 px-4 md:px-8 bg-transparent relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-wide">
            Город в цифрах
          </h2>
          <p className="text-white/50 text-xl font-light mt-4">
            Точные данные, отражающие масштаб и динамику развития.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {statsData.map((stat, index) => (
            <div key={stat.id} className="border-t border-white/20 pt-8 group">
              <div className="flex items-baseline mb-4">

                <div 
                  ref={(el) => { numbersRef.current[index] = el; }}
                  data-target={stat.value}
                  className="text-6xl md:text-7xl font-light text-white tabular-nums tracking-tighter"
                >
                  0
                </div>
        
                <div className="text-3xl md:text-4xl font-light text-white/50 ml-2">
                  {stat.suffix}
                </div>
              </div>
              <h3 className="text-xl text-white font-medium mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-white/40 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}