import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalParallaxBackground from './components/GlobalParallaxBackground';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import Home from './pages/Home';
import Details from './pages/Details';
import Booking from './pages/Booking';
import ChatAssistant from './components/ChatAssistant';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-yellow-500/30">
      <MouseGlow />
      <GlobalParallaxBackground />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </AnimatePresence>

      <ChatAssistant />
      <Footer />
    </div>
  );
}

export default App;
