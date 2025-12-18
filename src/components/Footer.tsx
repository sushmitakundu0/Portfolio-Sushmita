import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sushmita-kundu',
    icon: Linkedin
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sushmita-kundu',
    icon: Github
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/sushmita_kundu',
    icon: Twitter
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-200 to-pink-300 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Sushmita Kundu</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            className="flex justify-center md:justify-end space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-pink-300/50 dark:border-gray-700/50 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Sushmita Kundu. Made with</span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Heart className="w-4 h-4 fill-current text-pink-500" />
            </motion.span>
            <span>and lots of coffee</span>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            BTech Computer Science Student at SRM Institute of Science and Technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
}