import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Infinity Pool',
    description: 'Overlook the endless savanna while floating in pure serenity',
    image: 'https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Fine Dining',
    description: 'Michelin-inspired cuisine under the African stars',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Game Drives',
    description: 'Witness the Big Five in their natural majesty',
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl h-[500px]"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${experience.image}')` }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="font-serif text-3xl md:text-4xl mb-3 text-yellow-500" style={{ fontFamily: "'Playfair Display', serif" }}>
          {experience.title}
        </h3>
        <p className="text-stone-200 text-lg">{experience.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
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
            The <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Immerse yourself in moments crafted for the discerning traveler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
