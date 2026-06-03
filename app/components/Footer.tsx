'use client';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-32 pb-10 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-24">
          <h2 className="text-5xl md:text-[8vw] font-light tracking-tighter leading-none uppercase">
            Давайте <br />
            <span className="text-white/40">создавать.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          
          <div>
            <div className="text-2xl font-light tracking-[0.3em] uppercase mb-6">
              Пенза<span className="text-white/50">.</span>
            </div>
            <p className="text-white/50 font-light leading-relaxed max-w-sm">
              Интерактивный веб-проект, объединяющий историческое наследие, архитектуру и современные технологии разработки.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-6">Профиль</h3>
            <ul className="space-y-4 font-light text-lg">
              <li>
                <a 
                  href="https://github.com/neriaaa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group inline-flex items-center hover:text-white transition-colors duration-300"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group inline-flex items-center hover:text-white transition-colors duration-300"
                >
                  Telegram
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Связь */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-6">Контакты</h3>
            <ul className="space-y-4 font-light text-lg">
              <li>
                <a 
                  href="mailto:твой_email@gmail.com" // Замени на свою почту
                  className="relative group inline-flex items-center hover:text-white transition-colors duration-300"
                >
                  Написать на почту
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

    
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-[0.2em] text-white/30 uppercase">
          <p>© {new Date().getFullYear()} Все права защищены.</p>
          <p className="mt-4 md:mt-0">Разработано с вниманием к деталям</p>
        </div>

      </div>
    </footer>
  );
}