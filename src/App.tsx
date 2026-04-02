import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import Home from './pages/Home';


// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';

gsap.registerPlugin(ScrollTrigger);

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Hash scrolling logic for anchor links
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        lenis.scrollTo(element as HTMLElement, { offset: -80 });
      }
    } else {
      lenis.scrollTo(0, { immediate: true });
    }

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Global reference for manual scroll
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
        <ScrollManager />
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
