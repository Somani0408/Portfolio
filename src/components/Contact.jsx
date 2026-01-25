import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark-bg text-slate-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Let's <span className="text-neon-cyan">Connect</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Open for collaborations, security audits, and training opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FaEnvelope className="text-neon-cyan text-xl" />
                            <h3 className="text-xl font-bold text-white">Contact Info</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-800 rounded-lg text-neon-cyan">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <a href="mailto:harshitsomani@email.com" className="text-slate-300 hover:text-white transition-colors">
                                    harshitsomani@email.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-800 rounded-lg text-neon-cyan">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <span className="text-slate-300">
                                    India
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FaGithub className="text-neon-cyan text-xl" />
                            <h3 className="text-xl font-bold text-white">Socials</h3>
                        </div>

                        <div className="space-y-4">
                            <a href="https://github.com/harshitsomani" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <FaGithub className="text-2xl text-slate-300 group-hover:text-white transition-colors" />
                                    <span className="font-medium text-slate-300 group-hover:text-white">GitHub</span>
                                </div>
                                <span className="text-sm text-slate-500 group-hover:text-neon-cyan transition-colors">harshitsomani</span>
                            </a>

                            <a href="https://linkedin.com/in/harshitsomani" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <FaLinkedin className="text-2xl text-slate-300 group-hover:text-white transition-colors" />
                                    <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
                                </div>
                                <span className="text-sm text-slate-500 group-hover:text-neon-cyan transition-colors">in/harshitsomani</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium">
                        Open to Work: <span className="text-white">VAPT / Red Teaming / SOC Analysis</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
