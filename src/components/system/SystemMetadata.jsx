import React from 'react';

const SystemMetadata = () => {
    return (
        <div id="system-metadata-module" className="cyber-command-module relative flex w-full flex-col bg-background-dark tech-bg-meta py-12">

            {/* Header / Top Ribbon */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-hud-border px-6 md:px-10 py-4 glass-panel sticky top-0 z-40 mx-4 md:mx-10 rounded-t-xl mb-6">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px]">security</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-base md:text-lg font-bold leading-tight tracking-wider uppercase">Cyber Command Center</h2>
                        <span className="text-hud-text-dim text-[10px] tracking-[0.2em] uppercase">System v4.2.0 // Connected</span>
                    </div>
                </div>
                <div className="hidden lg:flex flex-1 justify-center gap-12">
                    <span className="text-primary text-sm font-medium hover:text-white transition-colors uppercase tracking-widest border-b border-primary pb-1 cursor-pointer">System Status</span>
                    <span className="text-hud-text-dim text-sm font-medium hover:text-white transition-colors uppercase tracking-widest cursor-pointer">Neural Skills</span>
                    <span className="text-hud-text-dim text-sm font-medium hover:text-white transition-colors uppercase tracking-widest cursor-pointer">Threat Intel</span>
                </div>
                <div className="flex gap-4">
                    <button className="hidden sm:flex items-center justify-center rounded-lg h-10 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 transition-all">
                        <span className="material-symbols-outlined mr-2 text-[20px]">terminal</span>
                        <span className="text-sm font-bold tracking-wide">TERMINAL</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/50" data-alt="User avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCXiJTquEQp5vYhsGVPLDUrlPs5HlcIc2Udt9y05IKZ5mmJBeY8PIwasZ5CG0lPYik3uhbJfkPLbHrBWiGNm-qMksa5VfFZNmuPmoIBKubSUNM-vTS2SXateDXpwJ-EP2fH28FaPByt8lr9cct68ag9xQD0-ONVbVV-D8KxnraaRmgap5NfeeqRlSscOBI9xF1PsrgbUNitQ_F72XreHuC_ZLUoEnTTcqViRdELauKDhSke9YDtQ2WKzm9acMnWjMcFxjXY22daco")' }}></div>
                </div>
            </header>

            <div className="flex-1 flex flex-col px-4 md:px-10 gap-6 lg:flex-row relative">

                {/* Background Decorative Elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Left Column: User Profile Module */}
                <aside className="w-full lg:w-[360px] flex-shrink-0 flex flex-col gap-6 relative z-10">
                    {/* ID Card */}
                    <div className="glass-panel p-6 rounded-xl flex flex-col items-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <span className="material-symbols-outlined text-primary text-4xl">qr_code_2</span>
                        </div>

                        <div className="relative mb-6 mt-4 flex items-center justify-center">
                            <div className="w-40 h-44 hexagon-border flex items-center justify-center relative">
                                <div className="w-full h-full hexagon-clip bg-gray-800 relative overflow-hidden">
                                    <img alt="Harshit Somani Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCXiJTquEQp5vYhsGVPLDUrlPs5HlcIc2Udt9y05IKZ5mmJBeY8PIwasZ5CG0lPYik3uhbJfkPLbHrBWiGNm-qMksa5VfFZNmuPmoIBKubSUNM-vTS2SXateDXpwJ-EP2fH28FaPByt8lr9cct68ag9xQD0-ONVbVV-D8KxnraaRmgap5NfeeqRlSscOBI9xF1PsrgbUNitQ_F72XreHuC_ZLUoEnTTcqViRdELauKDhSke9YDtQ2WKzm9acMnWjMcFxjXY22daco" />
                                    <div className="scanner-line"></div>
                                </div>
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-background-dark border border-primary rounded-lg px-2 py-1 flex items-center gap-1 shadow-[0_0_10px_rgba(19,164,236,0.5)]">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Online</span>
                            </div>
                        </div>

                        <div className="text-center w-full border-b border-hud-border/50 pb-4 mb-4">
                            <h1 className="text-3xl font-bold text-white tracking-tight mb-1">Harshit Somani</h1>
                            <p className="text-primary font-medium tracking-widest text-xs uppercase">Operative ID: HS-001</p>
                        </div>

                        <div className="w-full flex flex-col gap-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-hud-text-dim">Role</span>
                                <span className="text-white font-medium text-right">Cybersecurity Specialist</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-hud-text-dim">Clearance</span>
                                <span className="text-purple-400 font-medium text-right shadow-purple-500/20 drop-shadow-sm">Level 5 (Top Secret)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-hud-text-dim">Location</span>
                                <span className="text-white font-medium text-right">India</span>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-2 mt-6 w-full">
                            <div className="flex-1 bg-background-dark/50 border border-hud-border rounded p-2 text-center">
                                <div className="text-xl font-bold text-primary">05+</div>
                                <div className="text-[10px] text-hud-text-dim uppercase">Years</div>
                            </div>
                            <div className="flex-1 bg-background-dark/50 border border-hud-border rounded p-2 text-center">
                                <div className="text-xl font-bold text-primary">20+</div>
                                <div className="text-[10px] text-hud-text-dim uppercase">Projects</div>
                            </div>
                            <div className="flex-1 bg-background-dark/50 border border-hud-border rounded p-2 text-center">
                                <div className="text-xl font-bold text-primary">15+</div>
                                <div className="text-[10px] text-hud-text-dim uppercase">Certs</div>
                            </div>
                        </div>
                    </div>

                    {/* Bio / Objective */}
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-l-purple-500">
                        <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm">psychology</span>
                            Mission Statement
                        </h3>
                        <p className="text-hud-text-dim text-sm leading-relaxed">
                            Securing digital frontiers through advanced threat detection and offensive security strategies. Bridging the gap between complex neural architectures and robust system defense protocols.
                        </p>
                    </div>
                </aside>

                {/* Right Column: Live Activity Feed */}
                <aside className="w-full lg:flex-1 flex flex-col h-full gap-4">
                    <div className="glass-panel flex-1 rounded-xl overflow-hidden flex flex-col border border-hud-border/50 min-h-[500px]">
                        <div className="p-4 border-b border-hud-border/30 bg-background-dark/80 flex items-center justify-between">
                            <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500 text-sm animate-pulse">emergency_recording</span>
                                Threat Intel Log
                            </h3>
                            <span className="text-[10px] text-hud-text-dim">LIVE FEED</span>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm custom-scrollbar max-h-[460px]">
                            {/* Log Item 1 */}
                            <div className="flex gap-3 items-start group">
                                <div className="flex flex-col items-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-primary mb-1"></div>
                                    <div className="w-[1px] h-full bg-hud-border group-last:hidden min-h-[40px]"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="text-[10px] text-hud-text-dim mb-1">Today, 10:42 AM</div>
                                    <h4 className="text-white font-bold text-xs mb-1">Certification Acquired</h4>
                                    <p className="text-hud-text-dim text-xs">OSCP (Offensive Security Certified Professional) verified.</p>
                                    <div className="mt-2 text-[10px] px-2 py-1 bg-primary/10 text-primary border border-primary/20 inline-block rounded">
                                        ID: OSCP-2291
                                    </div>
                                </div>
                            </div>

                            {/* Log Item 2 */}
                            <div className="flex gap-3 items-start group">
                                <div className="flex flex-col items-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mb-1"></div>
                                    <div className="w-[1px] h-full bg-hud-border group-last:hidden min-h-[40px]"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="text-[10px] text-hud-text-dim mb-1">Yesterday, 14:15 PM</div>
                                    <h4 className="text-white font-bold text-xs mb-1">Project Deployed</h4>
                                    <p className="text-hud-text-dim text-xs">Deployed "Sentinel", a real-time intrusion detection system on AWS.</p>
                                </div>
                            </div>

                            {/* Log Item 3 */}
                            <div className="flex gap-3 items-start group">
                                <div className="flex flex-col items-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mb-1"></div>
                                    <div className="w-[1px] h-full bg-hud-border group-last:hidden min-h-[40px]"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="text-[10px] text-hud-text-dim mb-1">2 Days Ago</div>
                                    <h4 className="text-white font-bold text-xs mb-1">Vulnerability Patched</h4>
                                    <p className="text-hud-text-dim text-xs">Identified and patched critical RCE vulnerability in legacy module.</p>
                                    <div className="mt-2 text-[10px] px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 inline-block rounded">
                                        CVE-2023-XXXX
                                    </div>
                                </div>
                            </div>

                            {/* Log Item 4 */}
                            <div className="flex gap-3 items-start group">
                                <div className="flex flex-col items-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-slate-500 mb-1"></div>
                                    <div className="w-[1px] h-full bg-hud-border group-last:hidden hidden"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="text-[10px] text-hud-text-dim mb-1">Last Week</div>
                                    <h4 className="text-white font-bold text-xs mb-1">Conference Speaker</h4>
                                    <p className="text-hud-text-dim text-xs">Keynote on "The Future of AI in Cyber Warfare" at BlackHat Asia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Console Input Simulation */}
                        <div className="p-3 bg-black/40 border-t border-hud-border flex items-center gap-2">
                            <span className="text-primary font-bold">&gt;</span>
                            <div className="w-2 h-4 bg-primary animate-pulse"></div>
                        </div>
                    </div>

                    {/* Mini Module: System Load */}
                    <div className="glass-panel p-4 rounded-xl border border-hud-border/50">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] uppercase text-hud-text-dim tracking-widest">Cognitive Load</span>
                            <span className="text-xs font-mono text-primary">42%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-purple-500 w-[42%]"></div>
                        </div>
                        <div className="flex justify-between items-center mt-4 mb-2">
                            <span className="text-[10px] uppercase text-hud-text-dim tracking-widest">Network Traffic</span>
                            <span className="text-xs font-mono text-green-400">890 Mb/s</span>
                        </div>
                        <div className="flex items-end gap-[2px] h-8 opacity-70">
                            {[30, 50, 80, 40, 60, 90, 45, 20, 50, 70, 60, 40, 80, 90, 30, 50, 80, 40, 60, 90].map((height, i) => (
                                <div key={i} className="w-1 bg-primary" style={{ height: `${height}%` }}></div>
                            ))}
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default SystemMetadata;
