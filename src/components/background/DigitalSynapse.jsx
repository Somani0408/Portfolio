import React, { useEffect, useRef } from 'react';

const DigitalSynapse = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 200 };

        // Configuration
        const particleCount = 60; // Adjust for density
        const connectionDistance = 150;
        const pulseSpeed = 2;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.9 ? '#a855f7' : '#00f0ff'; // Purple or Cyan
                this.isSpecial = Math.random() > 0.9; // Special nodes (squares)
            }

            update() {
                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Mouse Interaction (Repel)
                if (mouse.x != null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * 1.5; // Strength
                        const directionY = forceDirectionY * force * 1.5;
                        this.x += directionX;
                        this.y += directionY;
                    }
                }

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;
            }

            draw() {
                ctx.beginPath();
                if (this.isSpecial) {
                    // Draw square for special nodes
                    ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                } else {
                    // Draw circle for normal nodes
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                }
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - distance / connectionDistance;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.2})`; // Low opacity cyan
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();

                        // Data Pulse (Travels along line)
                        // Simple random pulse effect: only draw on some connections based on time
                        // Using a deterministic way to make it look like travelling data
                        const time = Date.now() * 0.002;
                        const pulsePos = (time + (i * j) * 0.1) % 1; // 0 to 1 progress check

                        // Only show pulse if line is visible enough
                        if (opacity > 0.1) {
                            const pulseX = particles[i].x + (particles[j].x - particles[i].x) * pulsePos;
                            const pulseY = particles[i].y + (particles[j].y - particles[i].y) * pulsePos;

                            ctx.beginPath();
                            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                            ctx.fill();
                        }
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (containerRef.current) {
                width = containerRef.current.clientWidth;
                height = containerRef.current.clientHeight;
                canvas.width = width;
                canvas.height = height;
                init();
            }
        };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial sizing
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-50] bg-[#050505] overflow-hidden"
        >
            {/* 1. Hex Grid Background (Static Texture) */}
            <div
                className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.05] pointer-events-none animate-[hexRotate_120s_linear_infinite]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle, transparent 20%, #050505 20%, #050505 80%, transparent 80%, transparent),
                        radial-gradient(circle, transparent 20%, #050505 20%, #050505 80%, transparent 80%, transparent)
                    `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: '0 0, 30px 30px',
                    transform: 'rotate(15deg)',
                }}
            />
            {/* Use simple CSS grid for hex effect fallback/texture if complex gradient fails visibility */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(30deg, #00f0ff 12%, transparent 12.5%, transparent 87%, #00f0ff 87.5%, #00f0ff),
                     linear-gradient(150deg, #00f0ff 12%, transparent 12.5%, transparent 87%, #00f0ff 87.5%, #00f0ff),
                     linear-gradient(30deg, #00f0ff 12%, transparent 12.5%, transparent 87%, #00f0ff 87.5%, #00f0ff),
                     linear-gradient(150deg, #00f0ff 12%, transparent 12.5%, transparent 87%, #00f0ff 87.5%, #00f0ff),
                     linear-gradient(60deg, #00f0ff77 25%, transparent 25.5%, transparent 75%, #00f0ff77 75%, #00f0ff77), 
                     linear-gradient(60deg, #00f0ff77 25%, transparent 25.5%, transparent 75%, #00f0ff77 75%, #00f0ff77)`,
                    backgroundSize: '80px 140px',
                    backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
                }}
            />

            {/* 2. Interactive Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 block" />

            {/* 3. Vignette & Color Grading */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/60 to-[#050505] pointer-events-none" />
        </div>
    );
};

export default DigitalSynapse;
