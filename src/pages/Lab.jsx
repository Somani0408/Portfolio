import React from 'react';
import { motion } from 'framer-motion';
import { FiTv, FiAward, FiServer, FiShield } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Lab = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-white">EXPERIENCE &</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">EDUCATION</span>
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    My academic journey and hands-on offensive security training.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Experience Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FiServer className="text-neon-cyan" /> Experience
                    </h2>

                    <Card className="h-fit">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">Ethical Hacking Labs (Hands-on Practice)</h3>
                            <Badge variant="cyan">Ongoing</Badge>
                        </div>
                        <p className="text-neon-cyan/80 text-sm mb-4">TryHackMe & VulnHub</p>
                        <ul className="space-y-2 text-text-secondary text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-neon-cyan mt-1">▹</span>
                                Completed 50+ TryHackMe rooms focused on web exploitation, Linux privilege escalation, and defensive fundamentals.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-neon-cyan mt-1">▹</span>
                                Practiced attacking vulnerable machines in controlled lab environments (VulnHub).
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-neon-cyan mt-1">▹</span>
                                Hands-on usage of tools like Nmap, Burp Suite, Metasploit, Gobuster, and Linux post-exploitation techniques.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-neon-cyan mt-1">▹</span>
                                Focused on learning attacker mindset and SOC-relevant detection concepts.
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* Education Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FiAward className="text-neon-cyan" /> Education
                    </h2>

                    <Card>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">BCA (Bachelor of Computer Applications)</h3>
                            <Badge variant="cyan">Ongoing</Badge>
                        </div>
                        <p className="text-text-dim text-sm">Maharshi Dayanand Saraswati University, Ajmer</p>
                        <p className="text-text-secondary text-sm mt-1 mb-4">
                            2023 – 2026
                        </p>
                        <p className="text-text-secondary text-sm">
                            Focusing on core computer science fundamentals, networking, and application development.
                        </p>
                    </Card>

                    <Card>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">Advanced Diploma in Cyber Defense</h3>
                            <Badge variant="cyan">Ongoing</Badge>
                        </div>
                        <p className="text-text-secondary text-sm mt-4">
                            Specialized training in network security, threat analysis, and defensive strategies.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Skills Positioning */}
            <div className="space-y-6 pt-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FiShield className="text-neon-cyan" /> Technical Arsenal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-lg font-bold text-white mb-3">Red Team / Offensive</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Penetration Testing', 'Web Exploitation', 'Privilege Escalation', 'Burp Suite', 'Metasploit', 'Nmap', 'SQLMap'].map(skill => (
                                <span key={skill} className="text-xs bg-neon-red/10 text-neon-red px-2 py-1 rounded border border-neon-red/20">{skill}</span>
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-bold text-white mb-3">Blue Team / Defensive</h3>
                        <div className="flex flex-wrap gap-2">
                            {['SIEM Operations', 'Log Analysis', 'MITRE ATT&CK', 'Threat Hunting', 'Incident Response', 'Network Security'].map(skill => (
                                <span key={skill} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">{skill}</span>
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-lg font-bold text-white mb-3">Languages & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Bash', 'JavaScript', 'Linux', 'Git', 'Wireshark', 'Docker'].map(skill => (
                                <span key={skill} className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded border border-neon-cyan/20">{skill}</span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Lab;
