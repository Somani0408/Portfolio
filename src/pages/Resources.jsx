import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown, FiChevronRight, FiFolder, FiFileText, FiHash, FiMonitor, FiCpu, FiGlobe, FiServer, FiWifi, FiLayers, FiShield, FiCode, FiTarget, FiTerminal } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import WriteupCard from '../components/WriteupCard';
import TableOfContents from '../components/TableOfContents';

const Resources = () => {
    const [activeSection, setActiveSection] = useState('Introduction');
    const [expandedSections, setExpandedSections] = useState({ 'Writeups': true });
    const [searchQuery, setSearchQuery] = useState('');

    const sidebarItems = [
        { id: 'Introduction', label: 'Introduction', icon: null }, // No icon for Intro as per screenshot style usually
        { id: 'oscp-like-rooms', label: 'OSCP Like Rooms', icon: FiServer },
        {
            id: 'Writeups',
            label: 'Writeups',
            icon: FiFileText,
            children: [
                { id: 'Writeups/TryHackMe', label: 'TryHackMe' },
                { id: 'Writeups/VulnHub', label: 'VulnHub' }
            ]
        },
        { id: 'buffer-overflow', label: 'Buffer Overflow Guide', icon: FiCode },
        { id: 'active-directory', label: 'Active Directory and Windows', icon: FiMonitor },
        { id: 'osint', label: 'OSINT', icon: FiGlobe },
        { id: 'web', label: 'Web', icon: FiGlobe },
        { id: 'host-discovery', label: 'Host Discovery', icon: FiSearch },
        { id: 'pivoting', label: 'Pivoting and Portforwarding', icon: FiLayers },
        { id: 'linux', label: 'Linux', icon: FiMonitor },
        { id: 'ports', label: 'Ports', icon: FiHash },
        { id: 'metasploit', label: 'Metasploit', icon: FiTarget }, // Assuming FiTarget or similar
        { id: 'powershell', label: 'PowerShell', icon: FiTerminal }, // Assuming FiTerminal
    ];

    const toggleSection = (id) => {
        setExpandedSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleSectionClick = (item) => {
        if (item.children) {
            toggleSection(item.id);
        } else {
            setActiveSection(item.id);
        }
    };

    // Content for the right sidebar (On This Page)
    const getTocItems = () => {
        if (activeSection === 'Introduction') {
            return [
                { id: 'pentest-everything', title: 'Pentest Everything' },
                { id: 'important', title: 'Important' },
                { id: 'about-this-book', title: 'About this book' },
                { id: 'github', title: 'GitHub' },
                { id: 'contact', title: 'Contact' },
                { id: 'support-me', title: 'Support me' },
            ];
        }
        if (activeSection === 'Writeups/TryHackMe') {
            return [
                { id: 'lazy-admin', title: 'Lazy Admin' },
                { id: 'blog-room', title: 'Blog Room' },
                { id: 'ua-highschool', title: 'U.A. Highschool' },
                { id: 'mr-robot-ctf', title: 'Mr Robot CTF' },
                { id: 'vulnnet-internal', title: 'VulnNet: Internal' },
            ];
        }
        return [];
    };

    // Render Main Content based on selection
    const renderContent = () => {
        if (activeSection === 'Introduction') {
            return (
                <div className="space-y-12 max-w-4xl">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-text-dim mb-8">
                        <span>Pentest Everything</span>
                        <FiChevronRight className="text-xs" />
                        <span className="text-white font-medium">Introduction</span>
                    </div>

                    <div id="pentest-everything" className="space-y-6">
                        <h1 className="text-5xl font-display font-bold text-white">Pentest Everything</h1>

                        <div id="important" className="space-y-4 pt-8">
                            <h2 className="text-2xl font-bold text-white">Important</h2>
                            <div className="border-t border-white/10 my-4"></div>
                            <p className="text-text-secondary leading-relaxed">
                                Bookmark this page as other page links are likely to change or move over time. This page will always remain the same.
                            </p>
                        </div>

                        <div id="about-this-book" className="space-y-4 pt-8">
                            <h2 className="text-2xl font-bold text-white">About this book</h2>
                            <div className="border-t border-white/10 my-4"></div>
                            <p className="text-text-secondary leading-relaxed">
                                This book is my collection of notes and write-ups for various offensive security based topics and platforms. This book is generally updated most days and will continue to be for the foreseeable future.
                            </p>
                            <p className="text-text-secondary leading-relaxed mt-4">
                                If at any point this book stops being developed, I will leave a warning on this page.
                            </p>
                            <p className="text-text-secondary leading-relaxed mt-4">
                                This book is primarily developed for viewing on Gitbook. If you wish to fork this book please do so on GitHub.
                            </p>
                        </div>

                        <div id="github" className="space-y-4 pt-8">
                            <h2 className="text-2xl font-bold text-white">GitHub</h2>
                            <div className="border-t border-white/10 my-4"></div>
                            <p className="text-text-secondary">
                                URL: <a href="https://github.com/Somani0408" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">https://github.com/Somani0408</a>
                            </p>
                        </div>

                        <div id="contact" className="space-y-4 pt-8">
                            <h2 className="text-2xl font-bold text-white">Contact</h2>
                            <div className="border-t border-white/10 my-4"></div>
                            <p className="text-text-secondary">
                                Email: <a href="mailto:harshitsomani2005@gmail.com" className="text-neon-cyan hover:underline">harshitsomani2005@gmail.com</a>
                            </p>
                        </div>

                        <div id="support-me" className="space-y-4 pt-8">
                            <h2 className="text-2xl font-bold text-white">Support me</h2>
                            <div className="border-t border-white/10 my-4"></div>
                            <p className="text-text-secondary leading-relaxed">
                                If you find the work on here helpful, please consider supporting the project by checking out my portfolio and connecting with me via the <a href="/#contact" className="text-neon-cyan hover:underline">Contact page</a>.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeSection === 'Writeups/TryHackMe') {
            return (
                <div className="space-y-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-text-dim">
                        <span>Pentest Everything</span>
                        <FiChevronRight className="text-xs" />
                        <span>Writeups</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-display font-bold text-white">TryHackMe</h1>
                        <a href="#lazy-admin" className="block text-xl font-bold text-text-secondary hover:text-neon-cyan transition-colors">
                            <span className="text-neon-cyan">#</span> Lazy Admin
                        </a>
                    </div>

                    {/* Writeups List */}
                    <div className="space-y-6">
                        <div id="lazy-admin">
                            <WriteupCard
                                platform="TRYHACKME"
                                title="Lazy Admin"
                                description="A step-by-step walkthrough covering enumeration, credential discovery, privilege escalation, and root access."
                                image="/writeups/lazy-admin-header.png"
                                link="/resources/writeups/tryhackme/lazy-admin"
                            />
                        </div>

                        <div id="blog-room">
                            <WriteupCard
                                platform="TRYHACKME"
                                title="Blog"
                                description="A step-by-step walkthrough of the TryHackMe Blog room, covering WordPress enumeration, credential attacks, exploitation, and privilege escalation."
                                image="/writeups/tryhackme/blog.png"
                                link="/writeups/tryhackme/blog.pdf"
                            />
                        </div>

                        <div id="ua-highschool">
                            <WriteupCard
                                platform="TRYHACKME"
                                title="U.A Highschool"
                                description="A walkthrough of the U.A High School room, covering web enumeration, steganography, and privilege escalation."
                                image="/writeups/tryhackme/ua-highschool.png"
                                link="/writeups/tryhackme/ua-highschool.pdf"
                            />
                        </div>

                        <div id="mr-robot-ctf">
                            <WriteupCard
                                platform="TRYHACKME"
                                title="Mr Robot CTF"
                                description="Based on the Mr. Robot show, this room involves web exploitation, privilege escalation, and finding three hidden keys."
                                image="/writeups/tryhackme/mr-robot-ctf.png"
                                link="/writeups/tryhackme/mr-robot-ctf.pdf"
                            />
                        </div>

                        {/* Placeholders for other TOC items to show structure */}
                        {['vulnnet-internal'].map(id => (
                            <div key={id} id={id} className="opacity-50 pointer-events-none filter grayscale">
                                <WriteupCard
                                    platform="TRYHACKME"
                                    title={getTocItems().find(t => t.id === id)?.title}
                                    description="Content coming soon..."
                                    image=""
                                    link="#"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        // Placeholder for other sections
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-text-dim">
                <FiFolder className="text-6xl mb-4 opacity-20" />
                <p className="text-xl">Select a category to view resources.</p>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-screen pt-4 pb-20">
            {/* Left Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-28 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-cyber-light-gray/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:shadow-neon transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider px-2 mb-2">Everything</h3>
                        {sidebarItems.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => handleSectionClick(item)}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${activeSection === item.id && !item.children
                                        ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.icon && <item.icon className={activeSection === item.id ? 'text-neon-cyan' : ''} />}
                                        {item.label}
                                    </div>
                                    {item.children && (
                                        expandedSections[item.id] ? <FiChevronDown /> : <FiChevronRight />
                                    )}
                                </button>

                                {/* Nested Items */}
                                {item.children && expandedSections[item.id] && (
                                    <div className="ml-4 pl-2 border-l border-white/10 space-y-1 mt-1">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.id}
                                                onClick={() => setActiveSection(child.id)}
                                                className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all ${activeSection === child.id
                                                    ? 'text-neon-cyan bg-neon-cyan/5'
                                                    : 'text-text-dim hover:text-white'
                                                    }`}
                                            >
                                                {child.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Center Content */}
            <main className="flex-1 min-w-0">
                {renderContent()}
            </main>

            {/* Right Sidebar (Table of Contents) */}
            <aside className="hidden xl:block w-64 flex-shrink-0">
                <TableOfContents items={getTocItems()} />
            </aside>
        </div>
    );
};

export default Resources;
