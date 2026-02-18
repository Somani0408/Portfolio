import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration
        const config = {
            particleCount: 80, // Number of nodes
            connectionDistance: 120, // Distance to connect
            mouseDistance: 200, // Distance for mouse interaction
            baseColor: 'rgba(0, 240, 255, 0.2)', // Cyan - Reduced opacity
            accentColor: 'rgba(147, 51, 234, 0.2)', // Purple - Reduced opacity
        };

        // Mouse State
        const mouse = { x: null, y: null };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5; // Velocity X
                this.vy = (Math.random() - 0.5) * 0.5; // Velocity Y
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? config.baseColor : config.accentColor;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse Interaction
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (config.mouseDistance - distance) / config.mouseDistance;
                        const directionX = forceDirectionX * force * 0.5; // Push strength
                        const directionY = forceDirectionY * force * 0.5;

                        this.vx -= directionX;
                        this.vy -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 1; // Base alpha for particles
                ctx.fill();
            }
        }

        // Initialize Particles
        const particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

            // Update and Draw Particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw Connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = particles[i].color; // Use particle color for line
                        ctx.lineWidth = 0.5;
                        ctx.globalAlpha = 1 - distance / config.connectionDistance; // Fade out by distance
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1; // Reset alpha
                    }
                }
            }

            // Draw Mouse Connection
            if (mouse.x != null) {
                for (let i = 0; i < particles.length; i++) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.mouseDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Mouse lines are white
                        ctx.lineWidth = 0.5;
                        ctx.globalAlpha = 1 - distance / config.mouseDistance;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none bg-[#05060A]">
            {/* Base Gradient - Stronger to support the glow lines */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020305] via-[#05060A] to-[#0A0F1C] opacity-75" />

            {/* Canvas Layer */}
            <canvas ref={canvasRef} className="absolute inset-0 block" />

            {/* Vignette - Stronger focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>
    );
};

export default HeroBackground;
