import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalIntro = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const sequence = [
        "Initializing system...",
        "Loading Harshit Somani...",
        "Role: Full Stack Developer",
        "Role: Cybersecurity Student",
        "Specialization: Penetration Testing",
        "Security Mode: Active",
        "Access Granted."
    ];

    useEffect(() => {
        let currentLineIndex = 0;
        let currentCharIndex = 0;
        let timeout;

        const typeLine = () => {
            if (currentLineIndex >= sequence.length) {
                setTimeout(() => {
                    onComplete();
                }, 800); // Short delay after completion before unmount
                return;
            }

            const currentText = sequence[currentLineIndex];

            if (currentCharIndex <= currentText.length) {
                setLines(prev => {
                    const newLines = [...prev];
                    newLines[currentLineIndex] = currentText.substring(0, currentCharIndex);
                    return newLines;
                });
                currentCharIndex++;
                timeout = setTimeout(typeLine, 30); // Typing speed
            } else {
                currentLineIndex++;
                currentCharIndex = 0;
                setLines(prev => [...prev, ""]); // Prepare next line
                timeout = setTimeout(typeLine, 300); // Line delay
            }
        };

        // Initialize first line
        setLines([""]);
        timeout = setTimeout(typeLine, 500); // Initial start delay

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center font-mono text-neon-cyan"
        >
            <div className="w-full max-w-lg p-6">
                <div className="flex flex-col gap-2">
                    {lines.map((line, index) => (
                        <div key={index} className="flex items-center text-lg md:text-xl">
                            <span className="mr-2 text-gray-500">$</span>
                            <span>{line}</span>
                            {index === lines.length - 1 && (
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="ml-1 inline-block w-2.5 h-5 bg-neon-cyan"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TerminalIntro;
