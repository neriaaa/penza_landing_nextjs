'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineEvents = [
  { year: "1663", title: "Основание крепости", desc: "Указ царя Алексея Михайловича о строительстве города-крепости на реке Пензе для защиты юго-восточных рубежей." },
  { year: "1796", title: "Пензенская губерния", desc: "Учреждение губернии. Город получает регулярный план застройки и становится крупным центром." },
  { year: "1874", title: "Железная дорога", desc: "Открытие движения по Сызрано-Вяземской железной дороге, спровоцировавшее мощный экономический бум." },
  { year: "1939", title: "Областной центр", desc: "Официальное образование Пензенской области. Начало масштабной индустриализации города." },
  { year: "Наши дни", title: "Новый вектор", desc: "Развитие IT-кластера, современных технологий и полное обновление общественных городских пространств." }
];

export default function HistoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-neutral-950 flex flex-col justify-center overflow-hidden relative z-10 border-t border-white/10">
      
      <div className="px-10 md:px-32 mb-16 md:mb-24 w-full shrink-0">
        <h2 className="text-4xl md:text-7xl font-light text-white tracking-wide">
          Хроника столетий
        </h2>
        <p className="text-lg md:text-2xl font-light text-white/50 mt-4 max-w-2xl">
          Крутите вниз, чтобы пройти сквозь время и ключевые эпохи.
        </p>
      </div>

      <div ref={trackRef} className="flex pl-10 md:pl-32 gap-8 md:gap-16 w-[max-content] pr-[20vw] pb-10">
        {timelineEvents.map((item, index) => (
          <div key={index} className="w-[70vw] md:w-[30vw] shrink-0 border-l border-white/20 pl-8 group">
            <div className="text-5xl md:text-7xl font-light text-white/20 mb-6 transition-colors duration-500 group-hover:text-white">
              {item.year}
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              {item.title}
            </h3>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}