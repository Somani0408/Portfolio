import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiCpu, FiGrid, FiBook, FiTerminal, FiMenu, FiX, FiMail } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: FiHome },
        { name: 'Projects', path: '/projects', icon: FiCpu },
        { name: 'Resources', path: '/resources', icon: FiBook },
        { name: 'Courses', path: '/courses', icon: FiGrid },
        { name: 'Lab', path: '/lab', icon: FiTerminal },
        { name: 'HIRE ME', path: '/contact', icon: FiMail },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'w-[90%] md:w-auto' : 'w-[95%] md:w-auto'
                    }`}
            >
                <div className={`backdrop-blur-md bg-white/5 border border-white/10 shadow-glass rounded-full px-6 py-3 flex items-center justify-between md:justify-center gap-8 ${isScrolled ? 'bg-cyber-black/80 backdrop-blur-xl border-neon-cyan/20 shadow-neon' : 'bg-transparent border-transparent'
                    }`}>
                    {/* Mobile Logo / Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <span className="font-display font-bold text-white"><span className="text-neon-cyan">&gt;_</span> Harshit Somani</span>
                    </div>

                    <button
                        className="md:hidden text-2xl text-text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => `
                                    relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300
                                    ${isActive ? 'text-cyber-black' : 'text-text-secondary hover:text-white'}
                                `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute inset-0 bg-neon-cyan rounded-full"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-cyber-black' : ''}`}>
                                                    <link.icon className="text-lg" />
                                                    {link.name}
                                                </span>
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden"
                    >
                        <div className="backdrop-blur-md bg-white/5 border border-white/10 shadow-glass rounded-2xl p-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${isActive ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20' : 'text-text-secondary hover:bg-white/5'}
                            `}
                                >
                                    <link.icon className="text-xl" />
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
