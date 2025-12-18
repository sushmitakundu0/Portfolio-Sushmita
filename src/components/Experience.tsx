import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'schooling' | 'education';
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'B Tech Computer Science & Engineering',
    company: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2023 - 2027',
    description: [
      'Pursuing Bachelor of Technology in Computer Science and Engineering',
      'Relevant coursework: Data Structures & Algorithms, Web Development, Database Management,AI/ML Implementations , Cloud Computing',
      'Active participant in coding competitions and hackathons'
    ],
    technologies: ['Python', 'Java', 'C++', 'JavaScript', 'React', 'Node.js','NLP,'AI/ML Algorithms','Cloud Computing'],
    type: 'education'
  },
  {
    id: '2',
    title: 'Higher Secondary Education (12th)',
    company: 'St. Agnes Convent School',
    location: 'Kolkata, India',
    period: '2020 - 2022',
    description: [
      'Completed higher secondary education with focus on Science stream',
      'Studied Physics, Chemistry, Mathematics, and Computer Science',
      'Achieved excellent academic performance and developed strong analytical skills'
    ],
    technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    type: 'schooling'
  },
  {
    id: '3',
    title: 'Secondary Education (Class X)',
    company: 'Agrasain Balika Siksha Sadan',
    location: 'Kolkata , India',
    period: '2020 - 2021',
    description: [
    'Completed secondary education with a strong foundation in core academic subjects',
    'Developed analytical thinking, problem-solving skills, and logical reasoning',
    'Actively participated in academic and extracurricular activities'
  ],
    technologies: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
    type: 'schooling'
  }
];

const typeColors = {
  schooling: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800',
  education: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
  project: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
};

const typeIcons = {
  schooling: '📚',
  education: '🎓',
};

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
      
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-pink-200 dark:from-pink-600 to-transparent"></div>
      )}

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-600 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{typeIcons[experience.type]}</span>
              <Badge className={`px-3 py-1 text-xs rounded-full ${typeColors[experience.type]}`}>
                {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
              </Badge>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {experience.title}
            </h3>
            
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg text-pink-600 dark:text-pink-400 font-medium">
                {experience.company}
              </h4>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-pink-400 mt-1.5 text-xs">▪</span>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-2 py-1 text-xs border-pink-200 dark:border-pink-600 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gradient-to-br from-pink-50/30 to-green-50/30 dark:from-gray-900/30 dark:to-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my educational background, schooling, and key projects
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
