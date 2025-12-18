import { motion } from 'framer-motion';
import { Card } from './ui/card';

const funFacts = [
  {
    icon: '🎨',
    title: 'UX Enthusiast',
    description: 'Passionate about creating user-centered designs'
  },
  {
    icon: '🏆',
    title: 'Hackathon Builder',
    description: 'Love turning ideas into working prototypes'
  },
  {
    icon: '💻',
    title: 'Tech Explorer', 
    description: 'Always learning new technologies and frameworks'
  },
  {
    icon: '🎓',
    title: 'CS Student',
    description: 'BTech Computer Science at SRM Institute'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-80 h-96 lg:w-96 lg:h-[480px]"
              whileHover={{ 
                rotateY: 5,
                rotateX: -5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-2xl transform rotate-2 shadow-xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                <img
                  src="/profileimg2.jpg"
                  alt="Sushmita studying"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi there! I'm Sushmita Kundu, a passionate BTech Computer Science student at SRM Institute of Science and Technology. 
                I'm deeply fascinated by the intersection of technology and human experience.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a love for creating digital solutions that make a difference. 
                I believe in the power of clean code, beautiful design, and user-centered thinking.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or sketching out ideas for my next project.
              </p>
            </div>

            {/* Fun Facts Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 border-2 border-pink-100 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-600 hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-pink-800/50 transition-all duration-300 group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {fact.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{fact.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{fact.description}</p>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
