import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
            tech: ["React", "Tailwind CSS", "Recharts"],
            github: "#",
            demo: "#",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager with drag-and-drop functionality, team assignments, and progress tracking.",
            tech: ["Next.js", "Firebase", "Framer Motion"],
            github: "#",
            demo: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Weather Forecast API",
            description: "A robust weather dashboard providing accurate forecasts, historical data, and severe weather alerts using multiple APIs.",
            tech: ["React", "Node.js", "OpenWeatherMap"],
            github: "#",
            demo: "#",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-dark-bg text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center"
                >
                    <span className="text-accent mr-2">02.</span> Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
                        >
                            {/* Project Thumbnail Placeholder with Gradient */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 relative flex items-center justify-center`}>
                                <span className="text-white font-bold text-xl opacity-50 uppercase tracking-widest px-4 text-center">{project.title}</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.demo} className="text-slate-400 hover:text-white transition-colors">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
