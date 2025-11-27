import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, X, MoveHorizontal, Compass } from 'lucide-react';

const TourModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Calculate drag constraints based on image width vs container width
      // Assuming a wide image for the "panorama"
      const windowWidth = window.innerWidth;
      const imageWidth = windowWidth * 3; // We'll scale the image to 3x screen width
      setConstraints({ left: -(imageWidth - windowWidth), right: 0 });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="absolute top-6 left-6 z-50 flex items-center gap-3 px-4 py-2 bg-black/50 rounded-full backdrop-blur-md border border-white/10">
            <Compass className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Drag to explore 360°</span>
          </div>

          <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef}>
            <motion.img
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.1}
              style={{
                width: '300vw', // Make it wide to simulate panorama
                height: '100vh',
                objectFit: 'cover',
                x: 0,
              }}
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="360 View"
              className="max-w-none"
            />
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
             <MoveHorizontal className="w-8 h-8 text-white/50 animate-pulse" />
             <p className="text-white/50 text-sm uppercase tracking-widest">Pan to view</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function VirtualTour() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <>
      <TourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
      
      <section className="relative bg-stone-950 py-32 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden h-[700px] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md mb-8">
                <Camera className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Immersive Experience</span>
              </div>

              <h2 className="font-serif text-4xl md:text-7xl text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Step Inside <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600">
                  The Sanctuary
                </span>
              </h2>

              <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
                Explore our master suites, private lounges, and breathtaking views before you arrive. 
                Experience the atmosphere of true luxury.
              </p>

              <motion.button
                onClick={() => setIsTourOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 bg-white text-stone-950 font-bold px-12 py-6 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Play className="w-6 h-6 fill-current relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 tracking-wide">START VIRTUAL TOUR</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
