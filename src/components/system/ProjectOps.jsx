import React from 'react';

const ProjectOps = () => {
    return (
        <div id="project-ops-module" className="cyber-command-module relative flex w-full flex-col font-display bg-[#f6f7f8] dark:bg-[#101c22] text-slate-900 dark:text-slate-100 pt-10">
            {/* Radar Sweep Background Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(19, 164, 236, 0.1) 50.5%, transparent 51%)" }}></div>

            <div className="z-10 flex flex-1 w-full justify-center py-5 px-4 md:px-10">
                <div className="flex flex-col max-w-[1400px] flex-1 w-full gap-6">

                    {/* Header */}
                    <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 dark:border-b-[#233c48] px-4 md:px-10 py-4 bg-white/5 dark:bg-[#111c22]/80 backdrop-blur-md rounded-xl">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white mb-4 md:mb-0">
                            <div className="size-8 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">terminal</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold leading-tight tracking-tight">PROJECT OPERATIONS</h2>
                                <span className="text-xs text-primary tracking-widest font-mono">COMMAND CENTER // ADMIN</span>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-end gap-4 md:gap-8 flex-wrap">
                            <div className="flex items-center gap-4 md:gap-9 hidden md:flex">
                                <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">DASHBOARD</span>
                                <span className="text-sm font-medium text-primary cursor-pointer">MODULES</span>
                                <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">LOGS</span>
                            </div>
                            <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(19,164,236,0.3)]">
                                <span className="material-symbols-outlined text-[18px]">power_settings_new</span>
                                <span className="truncate">INITIATE</span>
                            </button>
                        </div>
                    </header>

                    <main className="flex flex-col gap-6">
                        <div className="flex items-center justify-between px-2">
                            <h1 className="text-2xl md:text-[32px] font-bold leading-tight tracking-tight flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">radar</span>
                                ACTIVE OPERATIONS
                            </h1>
                            <span className="hidden md:block text-sm font-mono text-slate-500 dark:text-[#5f7a8a]">SYS.STATUS: <span className="text-green-400">ONLINE</span></span>
                        </div>

                        {/* Primary System (Zenox AI) */}
                        <div className="p-0">
                            <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-[#233c48] bg-white dark:bg-[#192b33] shadow-lg hover:shadow-[0_0_20px_rgba(19,164,236,0.15)] transition-all duration-300">
                                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full opacity-50"></div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-[320px] bg-black overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiXdaq6ylVLxYQTuEDXYL0ZnyXLttoPtTcfOc7vNoYZ-c6JUvkB4UB09LPmNwju8rInr6S_p06vG1CiaFHTCCjY8KvfjDR1SDN7ld3ZFzxW3VeiHc2K-nvH0KEgoR8HwbC4155vGt2jLc9G-2p1Y4rtc4YrbrAq6dCcidwottTls_safcKhmJ8QWxoc-Gqd3uDUd66RAJsLR2FMykjEQOh-XkbMgToXlTJKzmhSVXR--TouxNtaSsGbRPetcc9G3meN-drYq8Yhek')" }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#192b33] to-transparent"></div>
                                        {/* Pulsing Core Visualization */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute w-24 h-24 rounded-full border border-primary/30 animate-[ping_3s_ease-in-out_infinite]"></div>
                                                <div className="absolute w-32 h-32 rounded-full border border-primary/20 animate-[ping_4s_ease-in-out_infinite_0.5s]"></div>
                                                <span className="material-symbols-outlined text-6xl text-primary drop-shadow-[0_0_10px_rgba(19,164,236,0.8)] z-10">smart_toy</span>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 font-mono text-xs text-primary bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-primary/30">
                                            CORE: ACTIVE // 98.4%
                                        </div>
                                    </div>
                                    <div className="flex w-full md:w-3/5 flex-col justify-between p-6 md:p-8">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-primary/20 text-primary border border-primary/30">PRIMARY SYSTEM</span>
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                            ONGOING
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">ZENOX AI</h3>
                                                </div>
                                                <span className="material-symbols-outlined text-slate-400 dark:text-[#5f7a8a] text-4xl opacity-20">hub</span>
                                            </div>
                                            <p className="text-slate-600 dark:text-[#92b7c9] text-base md:text-lg leading-relaxed max-w-2xl">
                                                Autonomous Neural Network Core designed for predictive analysis and real-time decision making. Features a self-improving genetic algorithm layer.
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <div className="bg-slate-100 dark:bg-[#111c22] p-3 rounded border border-slate-200 dark:border-[#233c48]">
                                                    <div className="text-xs text-slate-500 dark:text-[#5f7a8a] font-mono mb-1">MODULE_TYPE</div>
                                                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Transformer Model</div>
                                                </div>
                                                <div className="bg-slate-100 dark:bg-[#111c22] p-3 rounded border border-slate-200 dark:border-[#233c48]">
                                                    <div className="text-xs text-slate-500 dark:text-[#5f7a8a] font-mono mb-1">LANGUAGE</div>
                                                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Python / TensorFlow</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-[#233c48]">
                                            <button className="flex items-center gap-2 px-5 h-10 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-all shadow-[0_4px_14px_0_rgba(19,164,236,0.39)]">
                                                <span className="material-symbols-outlined text-sm">open_in_full</span>
                                                EXPAND MODULE
                                            </button>
                                            <button className="flex items-center gap-2 px-5 h-10 bg-transparent hover:bg-slate-100 dark:hover:bg-[#233c48] text-slate-700 dark:text-[#92b7c9] border border-slate-300 dark:border-[#325567] rounded-lg font-medium text-sm transition-all">
                                                <span className="material-symbols-outlined text-sm">code</span>
                                                REPOSITORY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sub Systems Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0">
                            {/* Card 1 */}
                            <div className="group relative flex flex-col justify-end aspect-square p-6 rounded-xl overflow-hidden border border-slate-200 dark:border-[#233c48] bg-[#192b33] cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh43yxcUCD6kreNjqF3DMlnLpvGJVA2lB8oup1Xp8LuHuTck3UoR8apW-0qZhPUiMOi7Bt0caf96gV9Upz4_gaYccwNQXFEE4ZCy1M01Mmb_WKDAb2ieBenwixWyuMlg7S2vKUah51W4OKix8mnsOt8NiEwAg_gTppOxbnF00f6UexLbkLgri9Rb-NCvbjt-rxlfbwZAUHFqgu_ETYBc1j5XZgYSSLZyyP6CcUdW7pCub75e6F_oRmQAf1e6GHoebBdj9xi1RNkbw')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">security</span>
                                        <span className="text-[10px] font-mono text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/10">SECURE</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold leading-tight">CRYPTO SENTINEL</h4>
                                    <p className="text-slate-400 text-xs line-clamp-2">Real-time threat detection for decentralized exchanges.</p>
                                    <div className="w-full h-0.5 bg-slate-700 mt-2 overflow-hidden rounded-full">
                                        <div className="h-full bg-primary w-3/4"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative flex flex-col justify-end aspect-square p-6 rounded-xl overflow-hidden border border-slate-200 dark:border-[#233c48] bg-[#192b33] cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFS-T7OKonJXeCM2l1CI_JYjMDi6QbJxedHShqzc9tjsEZCrOm1j0MS6duRtbBN9WYnXsBnVnCCnnSFBAWWSxen1asB2agj7eIjgz6gsQTOADTwpoq4chHPNSD966byHKcrEY_6LUASzMzyYtcmElz79bQnN1reITI8sZf2jiQq-r2NzHOhY8j9gnbD2KxEQTVoTX6uimUvCQnQ_cxVuLi2cAJSvtsQbbFoO11QOzOhQuM8-oRSgXfhUTqRSkP76388o7K12N7Img')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">cloud_sync</span>
                                        <span className="text-[10px] font-mono text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded bg-blue-500/10">SYNCING</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold leading-tight">SKYNET CLOUD</h4>
                                    <p className="text-slate-400 text-xs line-clamp-2">Distributed file storage system with sharding protocols.</p>
                                    <div className="w-full h-0.5 bg-slate-700 mt-2 overflow-hidden rounded-full">
                                        <div className="h-full bg-primary w-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative flex flex-col justify-end aspect-square p-6 rounded-xl overflow-hidden border border-slate-200 dark:border-[#233c48] bg-[#192b33] cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZggFmcUrt_PWjPRG7gCQHbg4oncbuRmL08yzSKRY73DOYk5x8SvHHJCyUJqZd0WHh6M4fKQBLimsG7xxSfxZOJ4wl3occsUyvgeRJwoxuHk_Si-HKHBNH7WEJLyjr28Ic8mv_JbUkZDsZb8LRxhhyAOqc4l1SWZsDL39QTzIy-FzJzyrh98GUHNBojdVTysz_YdcbdJdzSjTsHKxA9LdyxyyCGS8OJxjMghJ2WtP9XbKM1rubHuGhS4s0ODmJWMWMGX6AUd-bto')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
                                        <span className="text-[10px] font-mono text-slate-400 border border-slate-500/30 px-1.5 py-0.5 rounded bg-slate-500/10">IDLE</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold leading-tight">BLOCKCHAIN LEDGER</h4>
                                    <p className="text-slate-400 text-xs line-clamp-2">High-throughput transaction processing engine.</p>
                                    <div className="w-full h-0.5 bg-slate-700 mt-2 overflow-hidden rounded-full">
                                        <div className="h-full bg-primary w-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="group relative flex flex-col justify-end aspect-square p-6 rounded-xl overflow-hidden border border-slate-200 dark:border-[#233c48] bg-[#192b33] cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDquYF-9hDVPkBYSUtogFMg3_X2IU-qOQXv1SSUJ8XtcCV3Zmo-GBFdLqflJ7dnGHfmbley3IbrCE-TubaKXkIHMyiKpoYdwMzRS0VR-u-jhIo0KCS9shJLiKmvPujGeS7GRlT8Ns4sb2SXQlfMbRWPnUwYweuhMrpUXSKmI2vH-xQKWB5tjh1Fx1y4XcSueeHvMslbfedZSAETW-yKvSgdwffocnlc6EO8fMMTtMIuuEzbtJDujC0zCECuWdqAQWxrf3znPR6B9GY')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">sensors</span>
                                        <span className="text-[10px] font-mono text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/10">LIVE</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold leading-tight">SMART CITY IOT</h4>
                                    <p className="text-slate-400 text-xs line-clamp-2">Sensor array dashboard for metropolitan data analysis.</p>
                                    <div className="w-full h-0.5 bg-slate-700 mt-2 overflow-hidden rounded-full">
                                        <div className="h-full bg-primary w-5/6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System Diagnostics Panel */}
                        <div className="mt-4 mb-16">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl border border-slate-200 dark:border-[#325567] bg-white dark:bg-[#111c22] p-6 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary hidden md:block">
                                        <span className="material-symbols-outlined text-2xl">monitoring</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">SYSTEM DIAGNOSTICS</h3>
                                        <p className="text-slate-500 dark:text-[#92b7c9] text-sm font-normal">Real-time performance metrics of all active modules.</p>
                                        <div className="flex gap-4 mt-2">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-slate-400 uppercase">Uptime</span>
                                                <span className="text-sm font-mono text-primary font-bold">99.9%</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-slate-400 uppercase">Load</span>
                                                <span className="text-sm font-mono text-green-400 font-bold">34%</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-slate-400 uppercase">Errors</span>
                                                <span className="text-sm font-mono text-slate-300 font-bold">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-[#233c48] hover:bg-[#2d4b5a] text-white text-sm font-medium transition-colors w-full sm:w-auto">
                                        <span className="material-symbols-outlined text-sm">history</span>
                                        VIEW LOGS
                                    </button>
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto">
                                        <span className="material-symbols-outlined text-sm">play_arrow</span>
                                        RUN DIAGNOSTICS
                                    </button>
                                </div>
                            </div>
                        </div>

                    </main>

                </div>
            </div>
        </div>
    );
};

export default ProjectOps;
