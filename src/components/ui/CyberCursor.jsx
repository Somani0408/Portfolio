import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CyberCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements
            if (
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.closest('.interactive') ||
                e.target.closest('.project-card') ||
                (window.getComputedStyle(e.target).cursor === 'pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            width: 8,
            height: 8,
            backgroundColor: '#0ff', // cyan-400 equivalent
            boxShadow: '0 0 10px #0ff, 0 0 20px #0ff',
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 1000,
                damping: 40,
                mass: 0.1
            }
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            width: 32,
            height: 32,
            backgroundColor: 'transparent',
            border: '2px solid #0ff',
            boxShadow: '0 0 15px #0ff',
            opacity: 0.8,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Note: To make this totally invisible to clicks we use pointer-events-none in Tailwind
    // We also use a smaller trailing effect if wanted, but framer motion handles the smooth movement.
    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen hidden md:block"
            variants={variants}
            animate={isHovering ? 'hover' : 'default'}
        />
    );
};

export default CyberCursor;
