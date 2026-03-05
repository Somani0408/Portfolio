import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalIntro = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const scrollRef = useRef(null);

    // Boot Sequence Data
    const bootSequence = [
        { text: "BIOS CHECK .......................... OK", delay: 100, color: "text-green-500" },
        { text: "LOADING KERNEL ...................... OK", delay: 150, color: "text-green-500" },
        { text: "MOUNTING FILE SYSTEM ................ OK", delay: 200, color: "text-green-500" },
        { text: "VERIFYING ENCRYPTION KEYS ........... OK", delay: 300, color: "text-green-500" },
        { text: "ESTABLISHING SECURE CONNECTION ......", delay: 400, color: "text-yellow-400" },
        { text: "ACCESSING MAINFRAME ................. SUCCESS", delay: 600, color: "text-cyan-400" },
        { text: "----------------------------------------", delay: 650, color: "text-gray-500" },
        { text: "USER DETECTED: VISITOR", delay: 800, color: "text-white" },
        { text: "TARGET IDENTIFIED: HARSHIT SOMANI", delay: 1000, color: "text-purple-400 font-bold" },
        { text: "ROLE: FULL STACK DEVELOPER", delay: 1200, color: "text-blue-400" },
        { text: "ROLE: CYBERSECURITY ANALYST", delay: 1400, color: "text-blue-400" },
        { text: "INITIALIZING PORTFOLIO UI ...........", delay: 1600, color: "text-yellow-400" },
        { text: "READY.", delay: 2000, color: "text-green-500 font-bold" }
    ];

    useEffect(() => {
        // Feature 1: Subtly play boot sound once when BootScreen appears
        try {
            const audio = new Audio('/sounds/boot.mp3');
            audio.volume = 0.2;
            audio.play().catch(e => console.warn('Audio autoplay blocked:', e));
        } catch (e) {
            // ignore silently
        }

        let timeouts = [];
        let accumulatedDelay = 0;

        bootSequence.forEach((line, index) => {
            const t = setTimeout(() => {
                setLines(prev => [...prev, line]);
                // Scroll to bottom
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            }, accumulatedDelay);
            timeouts.push(t);
            accumulatedDelay += line.delay - (index > 0 ? 0 : 0); // Logic fix: delays are essentially relative or absolute? 
            // The object 'delay' looks like relative duration. Let's confirm: 
            // 100ms for first line. Then 150ms for next. 
            // Wait, actually I set them as cumulative delays in my head but labelled them 'delay'.
            // Let's treat 'delay' as the time to wait AFTER the previous line.
        });

        // The delays in array above look like "time at which this line appears". 
        // Let's assume they are "Time from start".
        // 100, 150... wait, 150 is too fast if it's absolute. 
        // Let's re-map them to slightly better absolute times.

        const absoluteSequence = [
            { text: "BIOS CHECK .......................... OK", time: 100, color: "text-green-500" },
            { text: "LOADING KERNEL ...................... OK", time: 250, color: "text-green-500" },
            { text: "MOUNTING FILE SYSTEM ................ OK", time: 400, color: "text-green-500" },
            { text: "VERIFYING ENCRYPTION KEYS ........... OK", time: 600, color: "text-green-500" },
            { text: "ESTABLISHING SECURE CONNECTION ......", time: 900, color: "text-yellow-400" },
            { text: "CONNECTION ESTABLISHED", time: 1300, color: "text-green-500" },
            { text: "----------------------------------------", time: 1400, color: "text-gray-500" },
            { text: "LOADING PROFILE DATA...", time: 1600, color: "text-white" },
            { text: "> SUBJECT: HARSHIT SOMANI", time: 2000, color: "text-cyan-400 font-bold text-lg" },
            { text: "> SPECIALIZATION: RED TEAM / FULL STACK", time: 2400, color: "text-purple-400" },
            { text: "LAUNCHING INTERFACE...", time: 3000, color: "text-yellow-400" },
        ];

        // Clear previous timeouts
        timeouts.forEach(clearTimeout);
        timeouts = [];

        absoluteSequence.forEach((item) => {
            const t = setTimeout(() => {
                setLines(prev => [...prev, item]);
            }, item.time);
            timeouts.push(t);
        });

        // Completion
        const endTimeout = setTimeout(() => {
            onComplete();
        }, 3800);
        timeouts.push(endTimeout);

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    // Auto-scroll effect
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl bg-[#0c0c0c]/90 border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden font-mono"
            >
                {/* Window Header */}
                <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">root@harshit-system:~</div>
                    <div className="w-10"></div> {/* Spacer for center alignment */}
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    className="p-6 h-[300px] overflow-y-auto custom-scrollbar flex flex-col justify-start gap-1"
                >
                    {lines.map((line, index) => (
                        <div key={index} className={`${line.color} text-sm md:text-base font-medium tracking-wide`}>
                            <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                            {line.text}
                        </div>
                    ))}
                    <div className="animate-pulse text-cyan-500 font-bold mt-2">_</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TerminalIntro;
