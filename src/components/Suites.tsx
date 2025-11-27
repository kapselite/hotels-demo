import { motion } from 'framer-motion';
import { ArrowRight, Users, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

const suites = [
  {
    id: 'standard',
    name: 'Standard Suite',
    price: '$450',
    period: 'per night',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['King Bed', '45m²', '2 Guests', 'Garden View'],
    icon: Users,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: '$750',
    period: 'per night',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['King Bed', '70m²', '3 Guests', 'Savanna View', 'Private Deck'],
    icon: Maximize,
    featured: true,
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: '$1,200',
    period: 'per night',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['2 Bedrooms', '120m²', '4 Guests', 'Panoramic View', 'Private Pool', 'Butler Service'],
    icon: Maximize,
  },
];

export default function Suites() {
  return (
    <section className="bg-stone-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-stone-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-yellow-500">Suites</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Each suite is a masterpiece of comfort and elegance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group relative rounded-3xl overflow-hidden ${suite.featured ? 'lg:-mt-8' : ''}`}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-2">{suite.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-yellow-500">{suite.price}</span>
                      <span className="text-stone-400 text-sm">{suite.period}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {suite.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-stone-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/details/${suite.id}`}
                      className="inline-flex items-center gap-2 text-white font-medium group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
