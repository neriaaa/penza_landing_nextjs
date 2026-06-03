'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const counterRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
        }
      });

      tl.to(counterRef.current, {
        textContent: 100,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power1.inOut",
      })
      .to({}, { duration: 0.2 })
      .to('.preloader-content', {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power3.out"
      })
      .to(overlayRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut"
      }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  if (isComplete) return null;

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center text-white touch-none"
    >
      <div className="preloader-content flex flex-col items-center">
        <div className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">
          Penza Modern Web
        </div>
        <div className="flex items-baseline text-6xl md:text-9xl font-light">
          <span ref={counterRef}>0</span> 
          <span className="text-3xl md:text-6xl text-white/30 ml-2">%</span>
        </div>
      </div>
    </div>
  );
}