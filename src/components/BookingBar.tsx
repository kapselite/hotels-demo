import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Search, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';

export default function BookingBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { setCheckIn, setCheckOut, setGuests } = useBookingStore();

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight - 150;
      setIsExpanded(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    navigate('/booking');
  };

  return (
    <>
      <div className="h-24 pointer-events-none" />

      <motion.div
        layout
        className={`z-50 transition-all duration-500 ${
          isExpanded
            ? 'fixed top-0 left-0 right-0 py-4 bg-black/80 backdrop-blur-lg border-b border-white/10'
            : 'absolute bottom-12 left-1/2 -translate-x-1/2'
        }`}
      >
        <div className={`${isExpanded ? 'max-w-7xl mx-auto px-4' : ''}`}>
          <motion.div
            layout
            className={`${
              isExpanded
                ? 'bg-transparent'
                : 'bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.2)] p-2 pr-6 hover:bg-white/15 transition-colors cursor-pointer'
            }`}
            onClick={handleSearch}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center"
                >
                  <div className="relative group px-2 lg:px-6 border-b lg:border-b-0 border-white/10 pb-4 lg:pb-0">
                    <label className="text-stone-400 text-xs uppercase tracking-wider font-medium mb-1 block ml-1">
                      Check-in
                    </label>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                      <input
                        type="date"
                        onChange={(e) => setCheckIn(e.target.value ? new Date(e.target.value) : null)}
                        className="w-full bg-transparent border-none p-0 text-stone-100 focus:ring-0 text-sm font-medium placeholder-stone-500 cursor-pointer"
                      />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10 hidden lg:block" />
                  </div>

                  <div className="relative group px-2 lg:px-6 border-b lg:border-b-0 border-white/10 pb-4 lg:pb-0">
                    <label className="text-stone-400 text-xs uppercase tracking-wider font-medium mb-1 block ml-1">
                      Check-out
                    </label>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                      <input
                        type="date"
                        onChange={(e) => setCheckOut(e.target.value ? new Date(e.target.value) : null)}
                        className="w-full bg-transparent border-none p-0 text-stone-100 focus:ring-0 text-sm font-medium placeholder-stone-500 cursor-pointer"
                      />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10 hidden lg:block" />
                  </div>

                  <div className="relative group px-2 lg:px-6 pb-4 lg:pb-0">
                    <label className="text-stone-400 text-xs uppercase tracking-wider font-medium mb-1 block ml-1">
                      Guests
                    </label>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                      <select 
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full bg-transparent border-none p-0 text-stone-100 focus:ring-0 text-sm font-medium cursor-pointer [&>option]:bg-stone-900"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={handleSearch}
                    className="w-full lg:w-auto bg-gradient-to-r from-yellow-600 to-yellow-500 text-stone-950 font-bold px-8 py-4 rounded-full hover:from-yellow-500 hover:to-yellow-400 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)] flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    <span>Check Availability</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-yellow-500 p-3 rounded-full text-stone-900">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg tracking-wide">Check Availability</span>
                    <span className="text-yellow-500 text-xs uppercase tracking-wider font-medium flex items-center gap-1">
                      Best Rates Guaranteed <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
