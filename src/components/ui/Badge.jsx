import React from 'react';

const Badge = ({ children, variant = 'cyan', className = '' }) => {
    const variants = {
        cyan: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]",
        red: "bg-neon-red/10 text-neon-red border-neon-red/30 shadow-[0_0_10px_rgba(255,0,60,0.2)]",
        gray: "bg-white/5 text-text-secondary border-white/10",
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border ${variants[variant]} ${className}`}>
            {variant !== 'gray' && (
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${variant === 'cyan' ? 'bg-neon-cyan animate-pulse' : 'bg-neon-red animate-pulse'}`} />
            )}
            {children}
        </span>
    );
};

export default Badge;
