import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiChevronRight, FiFolder, FiFileText, FiHash, FiMonitor, FiGlobe, FiServer, FiLayers, FiCode, FiTerminal, FiExternalLink } from 'react-icons/fi';
import WriteupCard from '../components/WriteupCard';
import TableOfContents from '../components/TableOfContents';

const Resources = () => {
    const { section, subcategory } = useParams();
    const navigate = useNavigate();

    // Determine active content based on URL params
    const activeSlug = subcategory || section || 'introduction';

    // State for expanded sidebar groups
    const [expandedSections, setExpandedSections] = useState({ 'certifications': true, 'writeups': true });
    const [searchQuery, setSearchQuery] = useState('');

    // Sidebar structure matching the screenshots
    const sidebarItems = [
        {
            id: 'ctf-development',
            label: 'CTF Development',
            path: '/resources/ctf-development',
            icon: null
        },
        { type: 'divider', label: 'RESOURCES' },
        {
            id: 'certifications',
            label: 'Certifications',
            path: null,
            icon: null,
            children: [
                { id: 'ine-certifications', label: 'INE Certifications', path: '/resources/ine-certifications' },
                { id: 'ec-council-certifications', label: 'EC-Council Certifications', path: '/resources/ec-council-certifications' },
                { id: 'comptia-certifications', label: 'CompTIA Certifications', path: '/resources/comptia-certifications' }
            ]
        },
        { id: 'cheat-sheets', label: 'Cheat Sheets', path: '/resources/cheat-sheets', icon: null },
        { id: 'hashcat-word-lists', label: 'Hashcat Word lists and Rules', path: '/resources/hashcat-word-lists', icon: null },
        { id: 'misc-snippets', label: 'Misc Snippets', path: '/resources/misc-snippets', icon: null },

        // External Links with icons
        { id: 'gtfobins', label: 'GTFOBins', path: 'https://gtfobins.github.io/', icon: FiExternalLink, external: true },
        { id: 'lolbas', label: 'LOLBAS', path: 'https://lolbas-project.github.io/', icon: FiExternalLink, external: true },
        { id: 'wadcoms', label: 'WADCOMS', path: 'https://wadcoms.github.io/', icon: FiExternalLink, external: true },
        { id: 'reverse-shell-gen', label: 'Reverse Shell Generator', path: 'https://www.revshells.com/', icon: FiExternalLink, external: true },
        { id: 'osint-tools', label: 'OSINT Tools', path: 'https://osintframework.com/', icon: FiExternalLink, external: true },
        { id: 'weakpass', label: 'Weakpass', path: 'https://weakpass.com/', icon: FiExternalLink, external: true },

        // Keeping Writeups as it was requested to be reusable
        {
            id: 'writeups',
            label: 'Writeups',
            path: null,
            icon: null,
            children: [
                { id: 'tryhackme', label: 'TryHackMe', path: '/resources/writeups/tryhackme' },
                { id: 'vulnhub', label: 'VulnHub', path: '/resources/writeups/vulnhub' }
            ]
        },
        { id: 'password-filter-dll', label: 'Password Filter DLL', path: '/resources/password-filter-dll', icon: null },
        { id: 'dork-cheatsheet', label: 'Dork Cheatsheet', path: '/resources/dork-cheatsheet', icon: null },
        { id: 'discovering-email', label: 'Discovering Email Addresses', path: '/resources/discovering-email', icon: null },
        { id: 'dork-tools', label: 'Dork Tools', path: '/resources/dork-tools', icon: null },
    ];

    // Ensure groups expand if we are in them
    useEffect(() => {
        if (section === 'writeups') {
            setExpandedSections(prev => ({ ...prev, 'writeups': true }));
        }
        // Add more auto-expand logic if needed for new groups
    }, [section]);

    const toggleGroup = (id) => {
        setExpandedSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleNavigation = (item) => {
        if (item.external) {
            window.open(item.path, '_blank', 'noopener,noreferrer');
            return;
        }

        if (item.children) {
            toggleGroup(item.id);
        } else if (item.path) {
            navigate(item.path);
        }
    };

    const isActive = (item) => {
        if (item.external) return false;
        if (item.path === location.pathname) return true;
        if (item.id === activeSlug) return true;
        if (item.path === `/resources/${section}/${subcategory}`) return true;
        return false;
    };

    // Right Sidebar (TOC) Items
    const getTocItems = () => {
        if (activeSlug === 'introduction') {
            return [
                { id: 'pentest-everything', title: 'Pentest Everything' },
                { id: 'important', title: 'Important' },
                { id: 'about-this-book', title: 'About this book' },
                { id: 'github', title: 'GitHub' },
                { id: 'contact', title: 'Contact' },
                { id: 'support-me', title: 'Support me' },
            ];
        }

        // Writeups TOC
        if (section === 'writeups' && subcategory === 'tryhackme') {
            return [
                { id: 'lazy-admin', title: 'Lazy Admin' },
                { id: 'blog-room', title: 'Blog Room' },
                { id: 'ua-highschool', title: 'U.A. Highschool' },
                { id: 'mr-robot-ctf', title: 'Mr Robot CTF' },
                { id: 'vulnnet-internal', title: 'VulnNet Internal' },
            ];
        }

        return [];
    };

    // Render Content Logic
    const renderContent = () => {
        if (activeSlug === 'introduction') {
            return (
                <div className="space-y-12 max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-text-dim mb-8">
                        <span>Pentest Everything</span>
                        <FiChevronRight className="text-xs" />
                        <span className="text-white font-medium">Introduction</span>
                    </div>

                    <div id="pentest-everything" className="space-y-8">
                        {/* Title with slightly larger font to match screenshot */}
                        <h1 className="text-5xl font-display font-bold text-white tracking-tight">Pentest Everything</h1>

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
                                If you find the work on here helpful, please consider supporting the project by checking out my portfolio and connecting with me via the <Link to="/contact" className="text-neon-cyan hover:underline">Contact page</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeSlug === 'tryhackme' || (section === 'writeups' && subcategory === 'tryhackme')) {
            return (
                <div className="space-y-8">
                    <div className="flex items-center gap-2 text-sm text-text-dim">
                        <span>Pentest Everything</span>
                        <FiChevronRight className="text-xs" />
                        <span>Writeups</span>
                        <FiChevronRight className="text-xs" />
                        <span className="text-white font-medium">TryHackMe</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-display font-bold text-white">TryHackMe</h1>
                        <a href="#lazy-admin" className="block text-xl font-bold text-text-secondary hover:text-neon-cyan transition-colors">
                            <span className="text-neon-cyan">#</span> Lazy Admin
                        </a>
                    </div>

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

                        <div id="vulnnet-internal">
                            <WriteupCard
                                platform="TRYHACKME"
                                title="VulnNet Internal"
                                description="A realistic internal pentest involving multiple pivoting steps, Active Directory enumeration, and exploiting internal services."
                                image="/writeups/tryhackme/vulnnet-internal.png"
                                link="/writeups/tryhackme/vulnnet-internal.pdf"
                            />
                        </div>
                    </div>
                </div>
            );
        }

        // Default / Placeholder for empty or unconnected sections
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-text-dim">
                <div className="flex items-center gap-2 text-sm text-text-dim mb-8 self-start">
                    <span>Pentest Everything</span>
                    <FiChevronRight className="text-xs" />
                    <span className="text-white font-medium capitalize">{activeSlug.replace(/-/g, ' ')}</span>
                </div>
                <div className="text-center">
                    <FiFolder className="text-6xl mb-4 opacity-20 mx-auto" />
                    <h2 className="text-2xl font-bold text-white mb-2 capitalize">{activeSlug.replace(/-/g, ' ')}</h2>
                    <p className="text-text-secondary">Content for this section is under development.</p>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-screen pt-4 pb-20">
            {/* LEFT SIDEBAR - Fixed */}
            <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-28 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">

                    {/* Header with Profile Image & Search - Matching Sidebar Screenshot */}
                    <div className="space-y-4 mb-6">
                        <Link to="/resources/introduction" className="flex items-center gap-3 px-2 group">
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover border border-cyan-500/30 group-hover:border-neon-cyan transition-colors"
                            />
                            <h2 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">Resources</h2>
                        </Link>

                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-cyber-light-gray/30 border border-white/5 rounded-md pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-neon-cyan/50 transition-all placeholder:text-text-dim"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <span className="text-[10px] text-text-dim border border-white/10 px-1 rounded">Ctrl K</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        {sidebarItems.map((item, index) => {
                            if (item.type === 'divider') {
                                return (
                                    <h3 key={index} className="text-[10px] font-bold text-text-dim/50 uppercase tracking-widest px-2 pt-4 pb-2">
                                        {item.label}
                                    </h3>
                                );
                            }

                            return (
                                <div key={item.id}>
                                    <button
                                        onClick={() => handleNavigation(item)}
                                        className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm transition-all group ${isActive(item) && !item.children
                                            ? 'text-neon-cyan bg-neon-cyan/5'
                                            : 'text-text-secondary hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* Indication line for active item could go here if needed */}
                                            <span>{item.label}</span>
                                        </div>
                                        <div className="text-text-dim group-hover:text-white/70">
                                            {item.external && <item.icon className="text-xs" />}
                                            {item.children && (
                                                expandedSections[item.id] ? <FiChevronDown className="text-xs" /> : <FiChevronRight className="text-xs" />
                                            )}
                                        </div>
                                    </button>

                                    {item.children && expandedSections[item.id] && (
                                        <div className="ml-2 pl-2 border-l border-white/5 space-y-0.5 mt-0.5">
                                            {item.children.map((child) => (
                                                <button
                                                    key={child.id}
                                                    onClick={() => handleNavigation(child)}
                                                    className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all ${activeSlug === child.id || (section === 'writeups' && subcategory === child.id)
                                                        ? 'text-neon-cyan'
                                                        : 'text-text-dim hover:text-white'
                                                        }`}
                                                >
                                                    {child.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </aside>

            {/* CENTER CONTENT - Fluid */}
            <main className="flex-1 min-w-0 px-4 md:px-0">
                {renderContent()}
            </main>

            {/* RIGHT PANEL - Table of Contents (Hidden on mobile) */}
            <aside className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-28">
                    {/* On This Page Header */}
                    <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider mb-4 px-4">On This Page</h3>
                    <TableOfContents items={getTocItems()} />
                </div>
            </aside>
        </div>
    );
};

export default Resources;
