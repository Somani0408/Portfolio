import React, { useEffect, useRef, useState } from 'react';

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);
    const [codeSnippets, setCodeSnippets] = useState([]);

    // Code snippets to display
    const snippets = [
        "const secure = true;",
        "hashcat -m 1000 hashes.txt --show",
        "SELECT * FROM users;",
        "sudo apt-get update",
        "nmap -sS -p- target_ip",
        "while(alive) { code(); }",
        "git commit -m 'initial commit'",
        "npm run build",
        "System.out.println('Hello World');",
        "01001000 01101001",
        "chmod +x script.sh",
        "TCP/IP handshake initialized"
    ];

    // Initialize code snippets with random positions
    useEffect(() => {
        const initialSnippets = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            text: snippets[Math.floor(Math.random() * snippets.length)],
            x: Math.random() * 100, // vw
            y: Math.random() * 100, // vh
            duration: 15 + Math.random() * 20, // seconds
            delay: Math.random() * 10,
            opacity: 0.05 + Math.random() * 0.05,
            scale: 0.8 + Math.random() * 0.4
        }));
        setCodeSnippets(initialSnippets);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 0.5 + 0.1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = '#00f0ff';
            }

            update() {
                this.y -= this.speedY;
                if (this.y < 0) {
                    this.y = height;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Grid properties
        const gridSize = 50;
        let offset = 0;

        const particles = [];
        const particleCount = 50;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Re-init particles on resize to avoid clustering
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawGrid = () => {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)'; // Very subtle cyan

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines (moving down for "scanning" effect)
            for (let y = offset; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw gradient background overlay (optional, if we want canvas to handle it)
            // ensuring it's transparent enough to see through to body bg

            // Update grid offset
            offset = (offset + 0.2) % gridSize;
            drawGrid();

            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Canvas for Grid and Particles */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

            {/* Overlay Gradient for Vignette/Depth */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-cyber-black opacity-80" />

            {/* Floating Code Snippets */}
            {codeSnippets.map((snippet) => (
                <div
                    key={snippet.id}
                    className="absolute whitespace-nowrap font-mono text-neon-cyan select-none pointer-events-none blur-[1px]"
                    style={{
                        left: `${snippet.x}vw`,
                        top: `${snippet.y}vh`,
                        opacity: snippet.opacity,
                        fontSize: `${snippet.scale}rem`,
                        animation: `drift ${snippet.duration}s linear infinite`,
                        animationDelay: `-${snippet.delay}s`,
                    }}
                >
                    {snippet.text}
                </div>
            ))}

            <style jsx>{`
                @keyframes drift {
                    0% { transform: translateX(-10%) translateY(0); }
                    50% { transform: translateX(10%) translateY(-20px); }
                    100% { transform: translateX(-10%) translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default BackgroundCanvas;
