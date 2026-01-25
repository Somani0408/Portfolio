import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Badge from './ui/Badge';

const WriteupCard = ({ title, description, platform, image, link }) => {
    const navigate = useNavigate();
    const isExternal = link?.startsWith('http') || link?.endsWith('.pdf');

    const handleClick = () => {
        if (isExternal) {
            window.open(link, '_blank');
        } else {
            navigate(link);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-xl bg-cyber-black border border-white/5 hover:border-neon-cyan/50 transition-colors duration-300"
        >
            <div className="flex flex-col md:flex-row h-full">
                {/* Left: Image */}
                <div className="w-full md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyber-black/80 z-10" />
                    <img
                        src={image || "/placeholder_writeup.jpg"}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Placeholder fallback visual */}
                    {!image && (
                        <div className="absolute inset-0 bg-cyber-light-gray flex items-center justify-center text-text-dim text-xs">
                            NO IMAGE
                        </div>
                    )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Badge variant="cyan">{platform}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                            {title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                        <Button
                            variant="primary"
                            icon={isExternal ? FiExternalLink : FiArrowRight}
                            onClick={handleClick}
                        >
                            EXPLORE WRITEUP
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 border-2 border-neon-cyan/0 group-hover:border-neon-cyan/20 rounded-xl pointer-events-none transition-all duration-300" />
        </motion.div>
    );
};

export default WriteupCard;
