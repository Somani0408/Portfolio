import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)' } : {}}
            className={`backdrop-blur-md bg-cyber-gray/50 border border-white/5 shadow-glass rounded-xl p-6 relative overflow-hidden group ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
