import React, { useEffect, useRef, useState } from 'react';

const CyberBackground = () => {
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
        "TCP/IP handshake initialized",
        "buffer_overflow_exploit()"
    ];

    // Initialize code snippets with random positions
    useEffect(() => {
        const initialSnippets = Array.from({ length: 4 }).map((_, i) => ({
            id: i,
            text: snippets[Math.floor(Math.random() * snippets.length)],
            x: Math.random() * 90, // vw
            y: Math.random() * 90, // vh
            duration: 20 + Math.random() * 20, // seconds
            delay: Math.random() * 10,
            opacity: 0.08, // Very subtle
            scale: 0.7 + Math.random() * 0.3
        }));
        setCodeSnippets(initialSnippets);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let mouse = { x: null, y: null };

        // Network Node Class
        class Node {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.baseColor = 'rgba(0, 240, 255,';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction (parallax/repulsion)
                if (mouse.x != null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (150 - distance) / 150;
                        const directionX = forceDirectionX * force * 0.5;
                        const directionY = forceDirectionY * force * 0.5;
                        this.x += directionX;
                        this.y += directionY;
                    }
                }

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
                if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.baseColor} 0.5)`;
                ctx.fill();
            }
        }

        // Binary Rain Class
        class BinaryDrop {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.text = Math.random() > 0.5 ? '1' : '0';
                this.speed = Math.random() * 1 + 0.5;
                this.opacity = Math.random() * 0.05 + 0.01; // Ultra faint
                this.size = Math.floor(Math.random() * 10) + 10;
            }

            update() {
                this.y += this.speed;
                if (this.y > height) {
                    this.y = 0;
                    this.x = Math.random() * width;
                }
                // Randomly flip bit
                if (Math.random() > 0.98) {
                    this.text = this.text === '1' ? '0' : '1';
                }
            }

            draw() {
                ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
                ctx.font = `${this.size}px monospace`;
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        const nodes = [];
        const nodeCount = 60; // Adjust for density
        const binaryDrops = [];
        const binaryCount = 50;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            nodes.length = 0;
            for (let i = 0; i < nodeCount; i++) {
                nodes.push(new Node());
            }

            binaryDrops.length = 0;
            for (let i = 0; i < binaryCount; i++) {
                binaryDrops.push(new BinaryDrop());
            }
        };

        const drawConnectionLines = () => {
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / 150 * 0.15})`; // Low opacity lines
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Binary Rain
            binaryDrops.forEach(drop => {
                drop.update();
                drop.draw();
            });

            // Update Nodes
            nodes.forEach(node => node.update());

            // Draw Connections
            drawConnectionLines();

            // Draw Nodes
            nodes.forEach(node => node.draw());

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-[#0b0f14]">
            {/* Canvas for Animation */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

            {/* Overlay Gradient for Fade-out/Depth - Balanced Dark Mode */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0b0f14] opacity-40" />

            {/* Floating Code Snippets (DOM for blur/text effects) */}
            {codeSnippets.map((snippet) => (
                <div
                    key={snippet.id}
                    className="absolute whitespace-nowrap font-mono text-neon-cyan select-none pointer-events-none blur-[2px]"
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

export default CyberBackground;
