import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarModern = () => {
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
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'System', path: '/system' },
        { name: 'Resources', path: '/resources' },
        { name: 'Lab', path: '/lab' },
        { name: 'Writeups', path: '/writeups' },
        { name: 'Hire Me', path: '/contact' }
    ];

    return (
        <div className={`w-full flex justify-center sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-background-dark/80 border-b border-border-dark shadow-neon' : 'bg-transparent border-transparent'}`}>
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 md:px-10">
                    <div className="flex items-center gap-3 text-slate-100 group cursor-pointer">
                        <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded border border-primary/20">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-wider uppercase">Harshit Somani</h2>
                            <span className="text-[10px] text-primary tracking-[0.2em] uppercase opacity-80">System.Root</span>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => `text-sm font-medium transition-colors relative group py-2 ${isActive ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="h-6 w-px bg-border-dark"></div>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-lg h-10 px-5 bg-secondary-dark border border-primary/30 hover:bg-primary/10 hover:border-primary text-primary text-sm font-bold transition-all duration-300 shadow-[0_0_10px_rgba(19,164,236,0.1)] hover:shadow-[0_0_20px_rgba(19,164,236,0.2)]">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            <span className="truncate">Download CV</span>
                        </a>
                    </div>

                    <button
                        className="md:hidden text-slate-100 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <span className="material-symbols-outlined text-2xl">close</span>
                        ) : (
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        )}
                    </button>
                </header>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-b border-border-dark md:hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) => `text-base font-medium py-2 border-b border-border-dark/50 ${isActive ? 'text-primary' : 'text-slate-300'}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center mt-4 rounded-lg h-12 bg-primary/10 border border-primary text-primary font-bold">
                                <span className="material-symbols-outlined">download</span>
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavbarModern;
