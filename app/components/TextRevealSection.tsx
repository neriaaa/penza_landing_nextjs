'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextRevealSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0.1 }, 
        {
          opacity: 1,   
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",   
            end: "center center", 
            scrub: true, 
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-8 flex items-center justify-center bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          ref={textRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-snug md:leading-tight text-white"
        >
          Город, который бережно хранит свое наследие, но смело смотрит в будущее, открывая новые горизонты.
        </h2>
      </div>
    </section>
  );
}