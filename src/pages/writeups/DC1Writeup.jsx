import React from 'react';
import { FiArrowLeft, FiServer, FiDatabase, FiHash, FiTerminal, FiGlobe, FiCpu, FiShield, FiLock, FiUpload } from 'react-icons/fi';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

const DC1Writeup = () => {
    const sections = [
        { title: 'Enumeration', icon: FiServer },
        { title: 'Exploitation', icon: FiTerminal },
        { title: 'Privilege Escalation', icon: FiShield },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            {/* Navigation */}
            <div className="pt-8">
                <Button
                    variant="secondary"
                    icon={FiArrowLeft}
                    onClick={() => window.history.back()}
                >
                    Back to Resources
                </Button>
            </div>

            {/* Header Section */}
            <div className="space-y-6">
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent z-10" />
                    <img
                        src="/writeups/VulnHub/dc-1.png"
                        alt="DC-1 Walkthrough"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute bottom-0 left-0 p-8 z-20 space-y-4">
                        <div className="flex items-center gap-4">
                            <Badge variant="cyan">VulnHub</Badge>
                            <span className="text-white/80 font-mono text-sm">Linux • Easy</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            DC-1 Walkthrough
                        </h1>
                        <div className="flex items-center gap-2 text-text-dim text-sm">
                            <span>By Harshit Somani</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-neon-cyan">#</span> Introduction
                </h2>
                <div className="prose prose-invert max-w-none text-text-secondary">
                    <p>
                        DC-1 is a purpose-built vulnerable lab for the purpose of gaining experience in the world of penetration testing.
                        It is designed to be beginner-friendly and outlines finding typical web exploits and privilege escalation paths.
                        This machine is hosted on the VulnHub platform.
                    </p>
                </div>
            </div>

            {/* Machine Information */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-neon-cyan">#</span> Machine Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-neon-cyan font-bold mb-2">Target IP</h3>
                        <p className="text-white font-mono">Dynamic (DHCP)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-neon-cyan font-bold mb-2">OS</h3>
                        <p className="text-white font-mono">Linux (Debian)</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-neon-cyan font-bold mb-2">Goal</h3>
                        <p className="text-white font-mono">Root Access / Flag</p>
                    </div>
                </div>
            </div>

            {/* Attack Path Summary */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-neon-cyan">#</span> Attack Path Summary
                </h2>
                <ul className="space-y-3 text-text-secondary list-disc list-inside">
                    <li><span className="text-white font-bold">Enumeration:</span> Identifying open ports (22, 80, 111) and discovering the Drupal CMS.</li>
                    <li><span className="text-white font-bold">Exploitation:</span> Leveraging a known Drupal SQL Injection vulnerability (CVE-2014-3704) to add an admin user or reset passwords.</li>
                    <li><span className="text-white font-bold">Access:</span> Logging into the Drupal dashboard and gaining a reverse shell or finding the first flag.</li>
                    <li><span className="text-white font-bold">Privilege Escalation:</span> Utilizing the SUID bit set on the `find` command to execute shell commands as root.</li>
                </ul>
            </div>

            {/* Structured Sections */}
            <div className="space-y-10">
                {sections.map((section, index) => (
                    <section key={section.title} className="space-y-4 group">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4 group-hover:border-neon-cyan/30 transition-colors">
                            <div className="p-3 bg-white/5 rounded-lg text-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                                <section.icon className="text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                {index + 1}. {section.title}
                            </h2>
                        </div>
                        <div className="text-text-dim px-4 py-2 border-l-2 border-neon-cyan/20">
                            See the full PDF walkthrough for detailed commands and screenshots for {section.title}.
                        </div>
                    </section>
                ))}
            </div>

            {/* Download Section */}
            <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-neon-cyan">#</span> Full Walkthrough
                </h2>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/20">
                    <p className="mb-6 text-text-secondary">
                        This is a summary of the approach. For the complete step-by-step guide with screenshots and commands, download the full PDF report.
                    </p>
                    <a
                        href="/writeups/VulnHub/dc-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neon-cyan text-cyber-black font-bold rounded-lg hover:bg-neon-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        <FiTerminal className="text-lg" />
                        Download Full Walkthrough (PDF)
                    </a>
                </div>
            </div>

        </div>
    );
};

export default DC1Writeup;
