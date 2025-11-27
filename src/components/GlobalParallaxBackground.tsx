import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function GlobalParallaxBackground() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 30, stiffness: 100 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Scroll Parallax Transforms
  const yBackground = useTransform(scrollY, [0, 1000], [0, 100]); 
  const yMid = useTransform(scrollY, [0, 1000], [0, 200]); 
  const yForeground = useTransform(scrollY, [0, 1000], [0, 300]); 

  // Mouse Parallax Transforms
  const xBackground = useTransform(mouseXSpring, [-0.5, 0.5], [5, -5]);
  const yMouseBackground = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  
  const xMid = useTransform(mouseXSpring, [-0.5, 0.5], [15, -15]);
  const yMouseMid = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);

  const xForeground = useTransform(mouseXSpring, [-0.5, 0.5], [30, -30]);
  const yMouseForeground = useTransform(mouseYSpring, [-0.5, 0.5], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Determine background style based on route
  const isBooking = location.pathname.includes('booking');

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Deep Background (Video or Gradient) */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBackground, x: xBackground, translateY: yMouseBackground, scale: 1.1 }}
      >
        {isBooking ? (
           <div className="absolute inset-0 bg-stone-950" />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            poster="https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://videos.pexels.com/video-files/3629511/3629511-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
      </motion.div>

      {/* Layer 2: Mid-ground Fog/Gradients */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-40 mix-blend-screen"
        style={{ y: yMid, x: xMid, translateY: yMouseMid }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-yellow-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-orange-600/10 rounded-full blur-[150px]" />
      </motion.div>

      {/* Layer 3: Foreground Particles */}
      <motion.div 
        className="absolute inset-0 z-20"
        style={{ y: yForeground, x: xForeground, translateY: yMouseForeground }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-[1px]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
