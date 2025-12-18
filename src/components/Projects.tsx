import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    title: "BioGPT-DDI (Team Project)",
    description: "An AI-powered system for predicting drug–drug interactions using biomedical language models.",
    image: "image: "https://images.unsplash.com/photo-1581091012184-3c37c8e4f9ee?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    tags: ["AI/ML", "NLP", "Healthcare", "Team Project"],
    longDescription:
      "BioGPT-DDI is a collaborative AI research project focused on predicting drug–drug interactions using biomedical NLP models. The system leverages domain-specific language models to analyze drug pairs and generate interaction insights through a user-friendly web interface.",
    features: [
      "Drug–drug interaction prediction using NLP models",
      "Biomedical text understanding with BioGPT",
      "Web-based interface for interaction analysis",
      "Live deployed application",
      "Collaborative team-based development"
    ],
    techStack: [
      "Python",
      "BioGPT",
      "NLP",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    githubUrl: "https://github.com/TEKURU-ZENO/BioGPT-DDI",
    liveUrl: "https://bio-gpt-ddi.vercel.app"
  },
  {
    id: 2,
    title: "Swan Botanicals UI",
    description: "A responsive and modern UI for a botanical skincare & haircare brand.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1080&q=80",
    tags: ["Frontend", "UI Design", "Responsive"],
    longDescription:
      "Swan Botanicals UI is a front-end user interface designed to showcase natural skincare and haircare products. Built as part of a design challenge, it focuses on clean layouts, responsive design, and intuitive user experience.",
    features: [
      "Responsive product showcase layout",
      "Clean and minimal UI design",
      "Smooth hover interactions",
      "Mobile-first and accessible design"
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/TEKURU-ZENO/SwanBotanicalsUI",
    liveUrl: "https://swan-botanicals-ui.vercel.app/"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?w=1080&q=80",
    tags: ["React", "Framer Motion", "Tailwind"],
    longDescription:
      "A personal portfolio website built with performance and user experience in mind. It features smooth animations, responsive layouts, and clean design to effectively present projects and technical skills.",
    features: [
      "Smooth animations and micro-interactions",
      "Fully responsive across devices",
      "Dark and light mode support",
      "Optimized performance and accessibility"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vite"
    ],
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
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated selection of my technical and creative work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="group cursor-pointer overflow-hidden border-2 border-pink-100 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-pink-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <Dialog open onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80"
                >
                  <X size={20} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                <div className="p-6 space-y-6">
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.longDescription}</p>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button onClick={() => window.open(selectedProject.githubUrl, '_blank')}>
                      <Github size={16} /> View Code
                    </Button>
                    <Button variant="outline" onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                      <ExternalLink size={16} /> Live Demo
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
