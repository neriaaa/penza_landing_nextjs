import SmoothScroller from './components/SmoothScroller';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ArchitectureSection from './components/ArchitectureSection';
import TextRevealSection from './components/TextRevealSection';
import UrbanSection from './components/UrbanSection';
import HistorySection from './components/HistorySection';
import HistoryTimeline from './components/HistoryTimeline';
import ParallaxGallery from './components/ParallaxGallery';
import StatsSection from './components/StatsSection';
import Background from './components/Background';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      
      <SmoothScroller>
        <Background />
        <Header />
        
        <main className="min-h-screen overflow-hidden relative z-10">
          {/* 1. Главный экран */}
          <Hero />
          
          {/* 2. Архитектура */}
          <ArchitectureSection />
          
          {/* 3. Текстовая перебивка */}
          <TextRevealSection />
          
          {/* 4. Развитие (Горизонтальный скролл) */}
          <UrbanSection />
          
          {/* 5. Наследие (Секция с видео на фоне) */}
          <HistorySection />
          
          {/* 6. Хронология (Горизонтальный скролл истории) */}
          <HistoryTimeline />
          
          {/* 7. Фотогалерея (Параллакс) */}
          <ParallaxGallery />
          
          {/* 8. Статистика (Анимация цифр) */}
          <StatsSection />
          
          {/* 9. Подвал сайта */}
          <Footer />
        </main>
      </SmoothScroller>
    </>
  );
}