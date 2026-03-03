import React from 'react';

const SystemHeroInit = ({ onEnter }) => {
    const handleEnterMainframe = () => {
        if (onEnter) {
            onEnter();
        } else {
            // For manual navigation to /system later
            window.location.href = '/';
        }
    };

    return (
        <div id="system-hero-module" className="cyber-command-module relative h-[80vh] min-h-[600px] w-full flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden selection:bg-primary selection:text-background-dark">
            {/* Background Elements */}
            <div className="absolute inset-0 tech-bg-meta opacity-30 pointer-events-none z-0"></div>
            <div className="sys-scanline"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            {/* Header / Status Bar */}
            <header className="absolute top-0 left-0 w-full flex items-center justify-between border-b border-surface-border px-8 py-4 bg-background-dark/80 backdrop-blur-sm z-50">
                <div className="flex items-center gap-4 text-primary">
                    <span className="material-symbols-outlined text-xl">hub</span>
                    <h2 className="text-sm lg:text-base font-bold tracking-widest uppercase text-white">SYSTEM_OS_V1.0 // ONLINE</h2>
                </div>

                <div className="hidden md:flex gap-8">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span>NET_UPLINK: STABLE</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <span>ENCRYPTION: AES-256</span>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center w-full px-6 lg:px-20 h-full mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1400px] items-center">

                    {/* Left: Boot Sequence (Terminal) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-surface-dark border border-surface-border rounded-lg p-6 font-mono text-xs text-primary/80 h-auto max-h-[400px] overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
                            <p className="mb-2 text-white">&gt;&gt; INIT_SEQ_START</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between"><span>Checking Kernel...</span><span className="text-green-400">[OK]</span></div>
                                <div className="flex justify-between"><span>Mounting FileSystem...</span><span className="text-green-400">[OK]</span></div>
                                <div className="flex justify-between"><span>Loading Modules...</span><span className="text-green-400">[OK]</span></div>
                                <div className="w-full h-[1px] bg-surface-border my-2"></div>
                                <div className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined text-sm">memory</span>
                                    <span>CORE_KERNEL_LOADED</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined text-sm">verified_user</span>
                                    <span>SEC_PROTOCOL_ACTIVE</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined text-sm">network_check</span>
                                    <span>NEURAL_NET_SYNCED</span>
                                </div>
                                <div className="flex items-center gap-2 text-white animate-pulse">
                                    <span className="material-symbols-outlined text-sm">terminal</span>
                                    <span>AWAITING_INPUT...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center: Monogram & Identity */}
                    <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center text-center relative">
                        <div className="relative w-48 h-48 lg:w-80 lg:h-80 flex items-center justify-center mb-8 group cursor-default">
                            {/* Spinning Rings */}
                            <div className="absolute inset-0 rounded-full border border-primary/20 scale-75"></div>
                            <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border border-dotted border-primary/40 animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Text */}
                            <h1 className="text-[6rem] lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/20 select-none z-10 group-hover:scale-105 transition-transform duration-500" style={{ textShadow: "0 0 30px rgba(37, 209, 244, 0.3)" }}>
                                HS
                            </h1>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            HARSHIT SOMANI
                        </h1>
                        <p className="text-primary text-base lg:text-lg font-medium tracking-wide uppercase opacity-90">
                            SOC Analyst <span className="text-slate-600 mx-2">|</span> PenTester <span className="text-slate-600 mx-2">|</span> AI Developer
                        </p>

                        <button
                            onClick={handleEnterMainframe}
                            className="mt-8 group relative flex items-center justify-center overflow-hidden rounded-xl bg-cyan-500/10 px-10 py-4 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] backdrop-blur-sm cursor-pointer z-50">
                            <span className="mr-3 material-symbols-outlined text-xl">login</span>
                            <span className="relative font-bold tracking-[0.2em] text-sm md:text-base">ENTER MAINFRAME</span>

                            {/* Animated corners for cyber feel */}
                            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 group-hover:border-black transition-colors"></span>
                            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 group-hover:border-black transition-colors"></span>
                            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400 group-hover:border-black transition-colors"></span>
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 group-hover:border-black transition-colors"></span>
                        </button>
                    </div>

                    {/* Right: System Identity Module */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 justify-center items-end">
                        <div className="w-full max-w-xs bg-surface-dark/50 backdrop-blur-md border border-surface-border rounded-lg p-5 flex flex-col gap-4">
                            <div className="flex items-center justify-between border-b border-surface-border pb-2">
                                <span className="text-xs text-slate-400 uppercase tracking-wider">User Profile</span>
                                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#25d1f4]"></span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-16 h-16 rounded bg-cover bg-center border border-primary/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCXiJTquEQp5vYhsGVPLDUrlPs5HlcIc2Udt9y05IKZ5mmJBeY8PIwasZ5CG0lPYik3uhbJfkPLbHrBWiGNm-qMksa5VfFZNmuPmoIBKubSUNM-vTS2SXateDXpwJ-EP2fH28FaPByt8lr9cct68ag9xQD0-ONVbVV-D8KxnraaRmgap5NfeeqRlSscOBI9xF1PsrgbUNitQ_F72XreHuC_ZLUoEnTTcqViRdELauKDhSke9YDtQ2WKzm9acMnWjMcFxjXY22daco')" }}></div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-lg">ADMIN</span>
                                    <span className="text-xs text-slate-400">Level 5 Clearance</span>
                                </div>
                            </div>
                            <div className="space-y-2 mt-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Location</span>
                                    <span className="text-primary text-right">Cyber Command</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Uptime</span>
                                    <span className="text-primary text-right">99.9%</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Status</span>
                                    <span className="text-green-400 text-right">Active</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats / Graph Mock */}
                        <div className="w-full max-w-xs bg-surface-dark/50 backdrop-blur-md border border-surface-border rounded-lg p-4 flex flex-col gap-2">
                            <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">System Load</span>
                            <div className="flex items-end gap-1 h-12 w-full justify-between px-1">
                                <div className="w-2 bg-primary/20 h-[40%] rounded-t-sm"></div>
                                <div className="w-2 bg-primary/40 h-[70%] rounded-t-sm"></div>
                                <div className="w-2 bg-primary/60 h-[50%] rounded-t-sm"></div>
                                <div className="w-2 bg-primary/80 h-[90%] rounded-t-sm animate-pulse"></div>
                                <div className="w-2 bg-primary/50 h-[60%] rounded-t-sm"></div>
                                <div className="w-2 bg-primary/30 h-[45%] rounded-t-sm"></div>
                                <div className="w-2 bg-primary/20 h-[30%] rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default SystemHeroInit;
