import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiActivity, FiCode, FiShield, FiTarget } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Contact from '../components/Contact';


const Home = () => {
  const stats = [
    { label: 'TryHackMe Rooms', value: '50+', icon: FiTarget },
    { label: 'VulnHub CTF Solved', value: '20+', icon: FiShield },
    { label: 'Security Tools Built', value: 'Multiple', icon: FiCode },
    { label: 'Certifications', value: 'Ongoing', icon: FiActivity },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-screen lg:min-h-screen">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Badge variant="cyan">CYBER SECURITY STUDENT</Badge>
            <Badge variant="gray">PENETRATION TESTER</Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              HARSHIT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-blue-500 to-purple-600 animate-pulse-slow">
                SOMANI
              </span>
            </h1>
            <p className="text-xl text-text-primary font-bold">
              SOC Analyst | Penetration Tester | Red Teamer
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Cybersecurity student specializing in penetration testing, SIEM operations, and secure application design.
              Hands-on experience with real-world labs, CTFs, and security tooling for Red and Blue team workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <Button variant="primary" icon={FiArrowRight} onClick={() => window.location.href = '/projects'}>
              View Projects
            </Button>
            <Button variant="secondary" icon={FiDownload} onClick={() => window.open('https://linkedin.com/in/harshitsomani', '_blank')}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Visual (Profile Photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-sm md:max-w-md aspect-square flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Glow Behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-neon-cyan to-blue-600 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm shadow-glass overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Harshit Somani"
                className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110 grayscale-0 hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=Harshit+Somani&background=0D1117&color=00f0ff&size=512';
                }}
              />
            </div>

            {/* Orbiting Decor */}
            <div className="absolute -inset-8 border border-neon-cyan/20 rounded-full animate-[spin_12s_linear_infinite]" />
            <div className="absolute -inset-2 border border-blue-500/10 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </section>



      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="flex flex-col items-center justify-center text-center gap-4 py-8">
            <div className="p-4 rounded-full bg-neon-cyan/5 text-neon-cyan mb-2">
              <stat.icon className="text-3xl" />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-text-secondary text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
