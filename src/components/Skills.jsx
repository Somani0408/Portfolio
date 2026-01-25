import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "HTML5/CSS3"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "REST APIs", "GraphQL"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Jest", "Figma", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-dark-bg/50 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center"
                >
                    <span className="text-accent mr-2">03.</span> Skills
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-600 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-900 border border-slate-700 text-slate-300 rounded-full px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
