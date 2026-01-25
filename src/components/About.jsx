import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Clients Worldwide', value: '20+' },
    ];

    return (
        <section id="about" className="py-24 bg-dark-bg/50 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden bg-slate-800">
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500 font-mono text-xl">
                                [Profile Image Placeholder]
                            </div>
                            {/* Replace the above div with an img tag when you have an image */}
                            {/* <img src="/path/to/image.jpg" alt="Profile" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" /> */}
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center">
                            <span className="text-accent mr-2">01.</span> About Me
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Hello! I'm a passionate developer who loves creating beautiful and functional things on the internet. My journey started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML/CSS is pretty fun!
                        </p>

                        <p className="text-lg leading-relaxed mb-8">
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <ul className="space-y-2 font-mono text-sm">
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> JavaScript (ES6+)</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> React</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> Node.js</li>
                            </ul>
                            <ul className="space-y-2 font-mono text-sm">
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> TypeScript</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> Tailwind CSS</li>
                                <li className="flex items-center"><span className="text-accent mr-2">▹</span> Next.js</li>
                            </ul>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                    <p className="text-sm text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
