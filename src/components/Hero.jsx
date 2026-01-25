import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0f14] to-black" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
              CYBER SECURITY STUDENT
            </span>
            <span className="px-4 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
              PENETRATION TESTER
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Harshit{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Somani
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Cybersecurity Student | Penetration Tester | SOC Analyst
          </p>

          <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
            Cybersecurity student specializing in penetration testing, SIEM
            operations, ethical hacking labs, CTFs, and security tooling for Red
            & Blue team workflows.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-md bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              View Projects
            </a>
            <a
              href="mailto:harshitsomani2005@gmail.com"
              className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
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
          className="flex justify-center lg:justify-end"
        >
          <img
            src="/profile.jpg"
            alt="Harshit Somani"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border border-cyan-400/40 shadow-[0_0_60px_rgba(0,255,255,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
