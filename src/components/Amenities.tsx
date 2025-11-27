import { motion } from 'framer-motion';
import { Wifi, Waves, Wine, Sparkles, Dumbbell, Car, Coffee, Shield } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Waves, label: 'Infinity Pool' },
  { icon: Wine, label: 'Premium Bar' },
  { icon: Sparkles, label: 'Luxury Spa' },
  { icon: Dumbbell, label: 'Fitness Center' },
  { icon: Car, label: 'Game Drives' },
  { icon: Coffee, label: 'Fine Dining' },
  { icon: Shield, label: '24/7 Concierge' },
];

export default function Amenities() {
  return (
    <section className="bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-stone-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class <span className="text-yellow-500">Amenities</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Every detail designed for your ultimate comfort and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-stone-100 font-semibold text-lg">{amenity.label}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
