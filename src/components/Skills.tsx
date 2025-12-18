import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },

  // Backend / Programming
  { name: 'Python', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },

  // AI / ML
  { name: 'Natural Language Processing (NLP)', category: 'backend' },
  { name: 'AI / ML Fundamentals', category: 'backend' },
  { name: 'BioGPT', category: 'backend' },

  // Cloud & Deployment
  { name: 'Cloud Computing', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Netlify', category: 'tools' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },

  // Design
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Responsive Design', category: 'design' },
  { name: 'Prototyping', category: 'design' }
];

const categoryStyles = {
  frontend:
    'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-900/30',
  backend:
    'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 dark:hover:bg-green-900/30',
  tools:
    'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800 dark:hover:bg-purple-900/30',
  design:
    'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800 dark:hover:bg-pink-900/30'
};

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable, and user-focused applications
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-default ${categoryStyles[skill.category]}`}
              >
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
