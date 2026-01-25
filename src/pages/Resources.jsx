import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown, FiChevronRight, FiFolder, FiFileText, FiHash, FiMonitor, FiCpu, FiGlobe, FiServer, FiWifi, FiLayers, FiShield, FiCode } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import WriteupCard from '../components/WriteupCard';
import TableOfContents from '../components/TableOfContents';

const Resources = () => {
    const [activeSection, setActiveSection] = useState('Writeups/TryHackMe');
    const [expandedSections, setExpandedSections] = useState({ 'Writeups': true });
    const [searchQuery, setSearchQuery] = useState('');

    const sidebarItems = [
        { id: 'tryhackme', label: 'TryHackMe', icon: FiServer },
        { id: 'hacksmarter', label: 'HackSmarter', icon: FiCpu },
        { id: 'virtual-hacking-labs', label: 'Virtual Hacking Labs', icon: FiMonitor },
        { id: 'vulnlab', label: 'VulnLab', icon: FiShield },
        { id: 'proving-grounds-practice', label: 'Proving Grounds Practice', icon: FiLayers },
        { id: 'proving-grounds-play', label: 'Proving Grounds Play', icon: FiLayers },
        {
            id: 'Writeups',
            label: 'Writeups',
            icon: FiFileText,
            children: [
                { id: 'Writeups/TryHackMe', label: 'TryHackMe' },
                { id: 'Writeups/VulnHub', label: 'VulnHub' }
            ]
        },
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
    const tocItems = [
        { id: 'lazy-admin', title: 'Lazy Admin' },
        { id: 'blog-room', title: 'Blog Room' },
        { id: 'ua-highschool', title: 'U.A. Highschool' },
        { id: 'mr-robot-ctf', title: 'Mr Robot CTF' },
        { id: 'vulnnet-internal', title: 'VulnNet: Internal' },
    ];

    // Render Main Content based on selection
    const renderContent = () => {
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

                        {/* Placeholders for other TOC items to show structure */}
                        {['ua-highschool', 'mr-robot-ctf', 'vulnnet-internal'].map(id => (
                            <div key={id} id={id} className="opacity-50 pointer-events-none filter grayscale">
                                <WriteupCard
                                    platform="TRYHACKME"
                                    title={tocItems.find(t => t.id === id)?.title}
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
                        <h3 className="text-xs font-bold text-text-dim uppercase tracking-wider px-2 mb-2">Resources</h3>
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
            {activeSection === 'Writeups/TryHackMe' && (
                <aside className="hidden xl:block w-64 flex-shrink-0">
                    <TableOfContents items={tocItems} />
                </aside>
            )}
        </div>
    );
};

export default Resources;
