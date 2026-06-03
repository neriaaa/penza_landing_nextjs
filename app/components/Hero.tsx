export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden  text-white">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513622470522-26c31154c1ff?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-light tracking-widest uppercase mb-6">
          Пенза
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-widest max-w-2xl opacity-90">
          Природа • Инновации • История
        </p>
      </div>
    </section>
  );
}