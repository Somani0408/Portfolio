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

        // Layer 3: Floating Particles System
        const particles = [];
        const particleCount = 35; // Minimal count for "clean" look

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5; // Tiny dots
                this.speedX = (Math.random() - 0.5) * 0.15; // Very slow horizontal
                this.speedY = (Math.random() - 0.5) * 0.15; // Very slow vertical
                this.opacity = Math.random() * 0.4 + 0.1; // Low opacity
                // Cyan or Purple (matches requested colors)
                this.color = Math.random() > 0.6 ? 'rgba(0, 240, 255,' : 'rgba(147, 51, 234,';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color}${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">

            {/* Layer 1: Deep Dark Gradient Base */}
            {/* From #05060A to #0A0F1C */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] to-[#0A0F1C]" />

            {/* Layer 2: Animated Subtle Grid */}
            {/* Opacity 5-8% max, faint cyan (#00f0ff) */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px', // Larger grid for cleaner look
                    maskImage: 'radial-gradient(circle at 50% 30%, black 50%, transparent 100%)' // Fade out edges
                }}
            />

            {/* Layer 3: Canvas Particles (Floating) */}
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Layer 4: Soft Radial Glow (Behind Profile Image Position) */}
            {/* Positioned approximately where the profile image is on desktop (right side) */}
            {/* On mobile it centers. Using a generic center-right glow usually works best */}
            <div className="absolute top-1/2 right-0 md:right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            {/* Secondary softer glow for balance */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[150px] pointer-events-none" />

        </div>
    );
};

export default HeroBackground;
