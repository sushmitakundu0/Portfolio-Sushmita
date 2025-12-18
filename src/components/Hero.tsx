import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { TypingAnimation } from './TypingAnimation';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey, I'm{' '}
            <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent">
              Sushmita
            </span>{' '}
            <motion.span
              className="inline-block"
              animate={{ 
                rotate: [0, 15, -15, 15, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-2">I'm a{' '}
              <TypingAnimation
                texts={[
                  'Frontend Developer',
                  'UI/UX Designer',
                  'Problem Solver',
                  'Creative Thinker'
                ]}
                className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent font-semibold"
                speed={80}
                pauseDuration={1500}
              />
            </p>
            <p>crafting beautiful, functional, and human-centered digital experiences.</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-300/50"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pink-400 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-lg hover:shadow-pink-300/30 px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl transform rotate-3 shadow-2xl"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl transform -rotate-2 shadow-xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/profileimg1.jpg"
                  alt="Sushmita Kundu - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-300 to-pink-400 rounded-2xl shadow-lg"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
