import { FiArrowLeft, FiServer, FiDatabase, FiHash, FiTerminal, FiGlobe, FiCpu, FiShield, FiLock, FiUpload } from 'react-icons/fi';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

const LazyAdminWriteup = () => {
    const sections = [
        { title: 'Target Enumeration', icon: FiServer },
        { title: 'Directory & File Discovery', icon: FiGlobe },
        { title: 'MySQL Backup Exposure', icon: FiDatabase },
        { title: 'Credential Extraction', icon: FiLock },
        { title: 'Login Access', icon: FiTerminal },
        { title: 'File Upload Bypass', icon: FiUpload },
        { title: 'Reverse Shell', icon: FiCpu },
        { title: 'Privilege Escalation', icon: FiShield },
        { title: 'Root Access', icon: FiHash },
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
                        src="/writeups/lazy-admin-header.png"
                        alt="Lazy Admin Attack Flow"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute bottom-0 left-0 p-8 z-20 space-y-4">
                        <div className="flex items-center gap-4">
                            <Badge variant="cyan">TRYHACKME</Badge>
                            <span className="text-white/80 font-mono text-sm">Linux • Easy</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Lazy Admin
                        </h1>
                        <div className="flex items-center gap-2 text-text-dim text-sm">
                            <span>By Harshit Somani</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Attack Flow Image */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-neon-cyan">#</span> Attack Flow
                </h2>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/50">
                    <img
                        src="/writeups/lazy-admin-flow.png"
                        alt="Full Attack Chain"
                        className="w-full h-auto opacity-90 transition-opacity hover:opacity-100"
                    />
                </div>
            </div>

            {/* Structured Sections (as requested by prompt structure) */}
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

                        {/* Since specific screenshots are not available, we refer to the flow image above 
                            or if the user intended for us to slice it, we would place slices here.
                            Given constraints, we keep the structure but reference the main flow. 
                        */}
                        <div className="text-text-dim px-4 py-2 border-l-2 border-neon-cyan/20">
                            Detailed execution of this step is visualized in the attack flow above.
                        </div>
                    </section>
                ))}
            </div>

        </div>
    );
};

export default LazyAdminWriteup;
