import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export default function ParallaxHeroBackground() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 30, stiffness: 100 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Scroll Parallax Transforms
  const yBackground = useTransform(scrollY, [0, 1000], [0, 200]); // Slow
  const yMid = useTransform(scrollY, [0, 1000], [0, 400]); // Medium
  const yForeground = useTransform(scrollY, [0, 1000], [0, 600]); // Fast

  // Mouse Parallax Transforms (Inverse movement for depth)
  const xBackground = useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]);
  const yMouseBackground = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  
  const xMid = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const yMouseMid = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const xForeground = useTransform(mouseXSpring, [-0.5, 0.5], [40, -40]);
  const yMouseForeground = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Background Video (Furthest) */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBackground, x: xBackground, translateY: yMouseBackground, scale: 1.1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://videos.pexels.com/video-files/3629511/3629511-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Layer 2: Mid-ground Fog/Gradients */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-60 mix-blend-screen"
        style={{ y: yMid, x: xMid, translateY: yMouseMid }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* Layer 3: Foreground Particles (Closest) */}
      <motion.div 
        className="absolute inset-0 z-20"
        style={{ y: yForeground, x: xForeground, translateY: yMouseForeground }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </motion.div>
      
      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/30 via-transparent to-stone-950" />
    </div>
  );
}
