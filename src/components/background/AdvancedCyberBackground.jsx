import React, { useEffect, useState } from 'react';

const AdvancedCyberBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: Math.random() * 10 + 10 + 's',
        delay: Math.random() * 5 + 's',
        color: Math.random() > 0.5 ? 'bg-neon-cyan' : 'bg-purple-500',
    }));

    // Binary strings for background
    const binaryStrings = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        duration: Math.random() * 20 + 20 + 's',
        delay: Math.random() * 10 + 's',
        opacity: Math.random() * 0.05 + 0.02,
        text: Array.from({ length: 20 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')
    }));

    return (
        <div className={`fixed inset-0 z-[-50] overflow-hidden pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* Layer 1: Base Deep Navy Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#070b14] via-[#0b1622] to-[#0d1f2f]" />

            {/* Layer 2: Animated Cyber Grid */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #00f0ff 1px, transparent 1px),
                        linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    transform: 'perspective(500px) rotateX(10deg) scale(1.5)',
                    transformOrigin: 'top center',
                    animation: 'gridMove 30s linear infinite'
                }}
            />

            {/* Layer 3: Floating Particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    className={`absolute rounded-full ${p.color} blur-[1px] opacity-40`}
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top,
                        animation: `floatParticle ${p.duration} infinite alternate ease-in-out`,
                        animationDelay: p.delay
                    }}
                />
            ))}

            {/* Layer 4: Subtle Binary Rain */}
            {binaryStrings.map(b => (
                <div
                    key={b.id}
                    className="absolute font-mono text-xs text-neon-cyan/50 whitespace-nowrap writing-vertical-lr"
                    style={{
                        left: b.left,
                        top: '-10%',
                        opacity: b.opacity,
                        animation: `binaryFall ${b.duration} linear infinite`,
                        animationDelay: b.delay,
                        writingMode: 'vertical-rl'
                    }}
                >
                    {b.text}
                </div>
            ))}

            {/* Layer 5: Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-neon-cyan/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/5 blur-[100px] rounded-full" />

            {/* Animations */}
            {/* Animations defined in index.css */}
        </div>
    );
};

export default AdvancedCyberBackground;
