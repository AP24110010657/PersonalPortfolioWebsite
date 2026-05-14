import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'CrowdSense',
      description: 'An intelligent crowd monitoring and analysis system that uses real-time data to track crowd density and provide insights for better crowd management.',
      technologies: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV'],
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/AP24110010657/CrowdSense.git',
      liveUrl: 'https://github.com/AP24110010657/CrowdSense.git',
    },
    {
      id: 2,
      title: 'Load Guard AI',
      description: 'AI-powered load management system that optimizes resource allocation and prevents system overload through predictive analytics and intelligent monitoring.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'Data Analytics'],
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/AP24110010657/Load-Guard-AI.git',
      liveUrl: 'https://github.com/AP24110010657/Load-Guard-AI.git',
    },
    {
      id: 3,
      title: 'Smart Route Planner',
      description: 'An efficient route planning application built in C that finds optimal paths using advanced algorithms and provides turn-by-turn navigation.',
      technologies: ['C', 'Data Structures', 'Algorithms', 'Graph Theory'],
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/DarkAngel-2007/Smart-Route-Planner-C.git',
      liveUrl: 'https://github.com/DarkAngel-2007/Smart-Route-Planner-C.git',
    },
    {
      id: 4,
      title: 'Doctor Appointment Booking System',
      description: 'A comprehensive healthcare management platform that enables patients to book appointments, manage medical records, and communicate with healthcare providers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/AP24110010657/doctor-appointment-booking-system.git',
      liveUrl: 'https://github.com/AP24110010657/doctor-appointment-booking-system.git',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl text-center mb-4 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
