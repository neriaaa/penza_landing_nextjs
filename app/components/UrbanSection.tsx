'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UrbanSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      // Вычисляем, насколько далеко нужно прокрутить контейнер влево
      const getScrollAmount = () => {
        let containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      // Создаем анимацию горизонтального движения
      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none"
      });

      // Привязываем анимацию к скроллу
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1, 
        invalidateOnRefresh: true, 
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="urban" ref={sectionRef} className="h-screen bg-transparent text-white overflow-hidden flex items-center">
      {/* Контейнер, который будет уезжать влево */}
      <div ref={scrollContainerRef} className="flex h-full items-center px-10 md:px-32 w-[300vw]">
        
        {/* Заголовок секции */}
        <div className="w-[100vw] shrink-0 pr-20">
          <h2 className="text-5xl md:text-8xl font-light uppercase tracking-wide leading-tight">
            Развитие <br />
            <span className="text-white/40">и культура</span>
          </h2>
          <p className="mt-8 text-xl font-light text-white/60 max-w-md">
            Современные общественные пространства и инициативы, формирующие новый облик города.
          </p>
        </div>

        {/* Карточка 1 */}
        <div className="w-[80vw] md:w-[50vw] h-[60vh] shrink-0 mx-10 bg-neutral-800 rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-neutral-700">
             <img
                src="/penza_landing_nextjs/social_place.jpg"
                alt="Обновленные общественные пространства"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
          </div>
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <h3 className="text-3xl font-light mb-2">Общественные пространства</h3>
            <p className="text-white/70 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              Новые набережные и скверы становятся центром притяжения для жителей и гостей города.
            </p>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="w-[80vw] md:w-[50vw] h-[60vh] shrink-0 mx-10 bg-neutral-800 rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-neutral-700">
<img src="/penza_landing_nextjs/images/culture.jpg"
  alt="Культурные инициативы"
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
/>
          </div>
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <h3 className="text-3xl font-light mb-2">Культурный код</h3>
            <p className="text-white/70 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              Современные выставки, арт-пространства и фестивали, формирующие новый облик региона.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}