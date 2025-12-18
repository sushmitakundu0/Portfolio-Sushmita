import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoTracker Dashboard",
    description: "A comprehensive environmental impact tracking application with data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY2NTU0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    longDescription: "EcoTracker is a full-stack web application designed to help individuals and organizations monitor their environmental impact. The dashboard provides real-time insights into carbon footprint, waste generation, and resource consumption.",
    features: [
      "Real-time data visualization with interactive charts",
      "Carbon footprint calculator with detailed breakdowns",
      "Goal setting and progress tracking",
      "Export reports in multiple formats",
      "Mobile-responsive design"
    ],
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "StudyBuddy Mobile App",
    description: "A collaborative study platform connecting students for group learning sessions.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2NzMwNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "UI/UX"],
    longDescription: "StudyBuddy is a mobile application that connects students based on their study preferences, subjects, and schedules. It facilitates group formation for collaborative learning and provides tools for effective study sessions.",
    features: [
      "Smart matching algorithm for study partners",
      "Virtual study rooms with video conferencing",
      "Shared note-taking and document collaboration",
      "Study session scheduling and reminders",
      "Achievement system and progress tracking"
    ],
    techStack: ["React Native", "Firebase", "WebRTC", "Redux", "Expo"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative development work.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzU2NzEyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    longDescription: "A modern portfolio website built with performance and user experience in mind. Features smooth animations, responsive design, and optimized loading for the best user experience.",
    features: [
      "Smooth scroll animations and micro-interactions",
      "Responsive design for all devices",
      "SEO optimized with meta tags",
      "Fast loading with optimized images",
      "Contact form with email integration"
    ],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="group cursor-pointer overflow-hidden border-2 border-pink-100 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/30 dark:hover:shadow-pink-800/30"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-pink-200 dark:border-pink-600 text-pink-600 dark:text-pink-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{selectedProject.longDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-pink-500 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={tech} className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex items-center gap-2 border-pink-300 dark:border-pink-600 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}