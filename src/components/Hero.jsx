import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "Cyber Security Researcher",
    "Penetration Tester",
    "Red Team Learner"
  ];
  const displayText = useTypewriter(roles);

  return (
    <section className="relative flex items-center overflow-hidden pt-24 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent z-0" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              CYBER SECURITY STUDENT
            </span>
            <span className="px-4 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
              PENETRATION TESTER
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Harshit{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              Somani
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-400 font-mono h-8 flex items-center">
            <span className="text-neon-cyan mr-2">&gt;</span>
            {displayText}
            <span className="animate-pulse text-neon-cyan">_</span>
          </p>

          <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
            Cybersecurity student specializing in penetration testing, SIEM
            operations, ethical hacking labs, CTFs, and security tooling for Red
            & Blue team workflows.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-md bg-neon-cyan/90 text-black font-semibold hover:bg-neon-cyan transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              View Projects
            </a>
            <a
              href="mailto:harshitsomani2005@gmail.com"
              className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Rotating Dashed Ring */}
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-neon-cyan/30 animate-[spin_10s_linear_infinite]" />

            {/* Pulse Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-neon-cyan/5 blur-xl animate-pulse" />

            <img
              src="/profile.jpg"
              alt="Harshit Somani"
              className="relative w-full h-full rounded-full object-cover border-2 border-neon-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.3)] transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
