import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            {...props}
            whileHover={hover ? { y: -5, boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)' } : {}}
            className={`backdrop-blur-xl bg-[#0a0a0a]/80 border border-white/10 hover:border-neon-cyan/30 shadow-glass rounded-xl p-6 relative overflow-hidden group transition-colors duration-300 ${className}`}
        >
            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-cyan/30 rounded-tl-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-cyan/30 rounded-tr-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon-cyan/30 rounded-bl-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-cyan/30 rounded-br-sm opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
