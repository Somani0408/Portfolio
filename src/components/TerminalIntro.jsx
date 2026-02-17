import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalIntro = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const lines = [
        "Initializing system...",
        "Access Granted",
        "Loading Profile: Harshit Somani",
        "Role_1: Full Stack Developer",
        "Role_2: Cybersecurity Analyst",
        "Specialization: Offensive Security | Web Security | SIEM | Red Team"
    ];

    useEffect(() => {
        if (lineIndex >= lines.length) {
            setTimeout(onComplete, 1000); // Wait 1s before fading out
            return;
        }

        const currentLine = lines[lineIndex];

        if (charIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setText(prev => {
                    const linesCopy = [...lines];
                    // We only want to show the lines up to current index
                    // The current line is being typed
                    // But our display logic below iterates through 'lines' array up to lineIndex.
                    // Actually, simpler approach:
                    // Maintain an array of completed lines + current typing line
                    return prev;
                });

                // Let's just track state and derive render.
                setCharIndex(prev => prev + 1);
            }, 30 + Math.random() * 20); // Random typing speed

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 400); // Pause between lines

            return () => clearTimeout(timeout);
        }
    }, [charIndex, lineIndex, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05060A]/90 backdrop-blur-md"
        >
            <div className="w-full max-w-2xl p-6 bg-[#0A0F1C]/80 border border-cyan-500/20 rounded-lg shadow-[0_0_30px_rgba(0,240,255,0.1)] font-mono text-sm md:text-base relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-2 text-xs text-white/30">bash -- sys_init</span>
                </div>

                {/* Content */}
                <div className="space-y-2 h-[200px] flex flex-col justify-end">
                    {lines.map((line, i) => {
                        if (i > lineIndex) return null;

                        const isCurrent = i === lineIndex;
                        const content = isCurrent ? line.slice(0, charIndex) : line;

                        // Color logic
                        let colorClass = "text-gray-300";
                        if (line.includes("Initializing")) colorClass = "text-yellow-400";
                        if (line.includes("Access Granted")) colorClass = "text-green-400";
                        if (line.includes("Harshit")) colorClass = "text-cyan-400 font-bold";
                        if (line.includes("Role")) colorClass = "text-blue-300";
                        if (line.includes("Specialization")) colorClass = "text-purple-300";

                        return (
                            <div key={i} className={`${colorClass} flex items-center`}>
                                <span className="mr-2 text-gray-600">$</span>
                                {content}
                                {isCurrent && (
                                    <span className="w-2 h-4 bg-cyan-500 ml-1 animate-pulse inline-block align-middle" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default TerminalIntro;
