import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/harshitsomani", label: "GitHub" },
        { icon: FiLinkedin, href: "https://linkedin.com/in/harshitsomani", label: "LinkedIn" },
        { icon: FiMail, href: "mailto:harshitsomani@email.com", label: "Email" },
    ];

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-cyber-black py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                            HARSHIT<span className="text-neon-cyan">SOMANI</span>
                        </h3>
                        <p className="text-text-secondary text-sm">
                            Securing the future, one byte at a time.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center text-text-dim text-sm">
                    &copy; {new Date().getFullYear()} Harshit Somani. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
