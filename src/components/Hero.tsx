import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-4xl md:text-7xl lg:text-9xl text-stone-100 mb-6 tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Experience the<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600">Untamed Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-stone-200 text-lg md:text-2xl mb-12 max-w-2xl font-light tracking-wide"
        >
          Where wild elegance meets unparalleled sophistication
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32"
        >
          <ChevronDown className="w-10 h-10 text-yellow-500/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
