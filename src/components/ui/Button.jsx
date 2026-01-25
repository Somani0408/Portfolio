import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    icon: Icon
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium transition-all duration-300 rounded-full group";

    const variants = {
        primary: "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/20 hover:shadow-neon hover:border-neon-cyan",
        secondary: "bg-transparent text-text-secondary border border-cyber-light-gray hover:text-white hover:border-white/50",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <span className="relative flex items-center gap-2">
                {Icon && <Icon className="text-xl" />}
                {children}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 -z-10 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            )}
        </motion.button>
    );
};

export default Button;
