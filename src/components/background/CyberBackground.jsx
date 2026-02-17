import React, { useEffect, useRef, useState } from 'react';

const CyberBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    // Parallax Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // Max 10px shift
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Floating Nodes Data
    const nodes = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        width: Math.random() * 4 + 4 + 'px', // 4px - 8px
        height: Math.random() * 4 + 4 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: Math.random() * 9 + 6 + 's', // 6s - 15s
        delay: Math.random() * 5 + 's',
        color: Math.random() > 0.8 ? '#ff003c' : '#00f0ff', // Mostly cyan, some red
        boxShadow: Math.random() > 0.8 ? '0 0 10px #ff003c' : '0 0 10px #00f0ff'
    }));

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none bg-[#050505]"
        >
            {/* Parallax Container */}
            <div
                className="absolute inset-[-20px] transition-transform duration-200 ease-out will-change-transform"
                style={{
                    transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                }}
            >
                {/* 1. Animated Cyber Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                        animation: 'gridMove 20s linear infinite'
                    }}
                />

                {/* 2. Floating Network Nodes */}
                {nodes.map(node => (
                    <div
                        key={node.id}
                        className="absolute rounded-full opacity-60"
                        style={{
                            width: node.width,
                            height: node.height,
                            left: node.left,
                            top: node.top,
                            backgroundColor: node.color,
                            boxShadow: node.boxShadow,
                            animation: `floatNode ${node.duration} infinite alternate ease-in-out`,
                            animationDelay: node.delay
                        }}
                    />
                ))}
            </div>

            {/* Base Gradient Overlay for Depth (Static) */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#0a0f1a] opacity-80" />

            <style jsx>{`
                @keyframes gridMove {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(40px); }
                }
                @keyframes floatNode {
                    0% { transform: translateY(0); opacity: 0.4; }
                    100% { transform: translateY(-30px); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
};

export default CyberBackground;
