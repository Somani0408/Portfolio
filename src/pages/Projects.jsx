import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Projects = () => {
    const projects = [
        {
            title: "Nyay-AI (Legal AI Assistant)",
            date: "Completed",
            description: "AI-powered assistant for legal awareness and guidance. Focuses on accessibility, automation, and responsible AI usage, highlighting the intersection of AI, security, and real-world impact.",
            tech: ["AI/ML", "Python", "NLP", "Security"],
            status: "Completed",
            github: "https://github.com/Somani0408/Nyay-AI",
            demo: "#"
        },
        {
            title: "Mini SIEM",
            date: "Jan 2025",
            description: "Python-based Security Information and Event Management (SIEM) system for centralized log ingestion. Features detection rules for brute force attacks, port scanning, and anomalous logins with MITRE ATT&CK mapping and severity-based alerts.",
            tech: ["Python", "Log Analysis", "MITRE ATT&CK"],
            status: "Completed",
            github: "https://github.com/Somani0408",
            demo: "#"
        },
        {
            title: "Phishing Detection System",
            date: "Dec 2024",
            description: "Machine Learning powered Flask web application for detecting phishing URLs. Utilizes feature extraction techniques on URL structure and email content to classify potential threats with high confidence scoring.",
            tech: ["Python", "Flask", "Machine Learning", "Scikit-Learn"],
            status: "Completed",
            github: "https://github.com/Somani0408",
            demo: "#"
        },
        {
            title: "Secure Full-Stack Web App",
            date: "Dec 2024",
            description: "A security-focused web application implementing role-based access control (RBAC), secure BCrypt password hashing, and active protections against OWASP Top 10 vulnerabilities like CSRF and XSS.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            status: "Completed",
            github: "https://github.com/Somani0408",
            demo: "#"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-white">MY</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">PROJECTS</span>
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    A showcase of offensive security tools, research projects, and full-stack applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full hover:border-neon-cyan/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-lg bg-neon-cyan/5 text-neon-cyan">
                                <FiCpu className="text-2xl" />
                            </div>
                            <Badge variant={project.status === 'Completed' ? 'cyan' : 'gray'}>
                                {project.date}
                            </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-text-secondary mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-mono text-neon-cyan/80 bg-neon-cyan/5 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <a href={project.github} className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <FiGithub /> <span className="text-sm">GitHub</span>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
