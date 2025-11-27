import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Wifi, Coffee, Wind, Monitor } from 'lucide-react';

export default function Details() {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API or Store
  const suite = {
    name: 'Presidential Suite',
    description: 'Experience the ultimate in luxury with our Presidential Suite. Featuring panoramic views of the savanna, a private infinity pool, and dedicated butler service.',
    price: 1200,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    amenities: [
      { icon: Wifi, label: 'High-Speed Wi-Fi' },
      { icon: Coffee, label: 'Premium Coffee Machine' },
      { icon: Wind, label: 'Climate Control' },
      { icon: Monitor, label: 'Smart Entertainment' },
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src={suite.image} alt={suite.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={`https://images.pexels.com/photos/27161${i}/pexels-photo-27161${i}.jpeg?auto=compress&cs=tinysrgb&w=400`} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-stone-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {suite.name}
              </h1>
              <p className="text-2xl text-yellow-500 font-light">${suite.price} <span className="text-sm text-stone-400">/ night</span></p>
            </div>

            <p className="text-stone-300 leading-relaxed text-lg">
              {suite.description}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-stone-100 font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {suite.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-400">
                    <item.icon className="w-5 h-5 text-yellow-500" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <Link 
                to="/booking" 
                className="block w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-stone-950 font-bold text-center py-4 rounded-full hover:from-yellow-500 hover:to-yellow-400 transform hover:scale-[1.02] transition-all shadow-lg shadow-yellow-500/20"
              >
                Book This Suite
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
