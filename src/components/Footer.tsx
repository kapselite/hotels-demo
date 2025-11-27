import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 pt-24 pb-12 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>
              SAVANNA <span className="text-yellow-500">LODGE</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Experience the pinnacle of luxury in the heart of the wild. 
              Where modern comfort meets untamed beauty.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#EAB308' }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-stone-100 font-semibold tracking-wider uppercase text-sm">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Suites', 'Amenities', 'Virtual Tour', 'Booking'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-stone-100 font-semibold tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>123 Future Avenue,<br />Innovation City</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>+2637 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>info@yourhotel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-stone-100 font-semibold tracking-wider uppercase text-sm">Newsletter</h4>
            <p className="text-stone-400 text-sm">Subscribe for exclusive offers and updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-stone-100 focus:outline-none focus:border-yellow-500/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 rounded-md text-stone-900 hover:bg-yellow-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © 2024 Savanna Lodge. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <span>Designed by</span>
            <span className="text-yellow-500 font-semibold">Kaps Elite Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
