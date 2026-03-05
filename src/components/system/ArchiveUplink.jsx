import React from 'react';

const ArchiveUplink = () => {
    return (
        <div id="archive-uplink-module" className="cyber-command-module relative flex w-full flex-col font-display bg-[#f6f8f8] dark:bg-[#101f22] text-slate-200 z-10 py-10">
            {/* Scanline Overlay */}
            <div className="archive-scanline"></div>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center w-full relative z-20">
                <div className="w-full max-w-7xl px-4 md:px-10 py-8 flex flex-col gap-12">

                    {/* Intro Section */}
                    <div className="flex flex-col gap-2 border-l-2 border-primary pl-6 py-2 animate-fade-in">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter uppercase">Encrypted Archive</h1>
                        <p className="text-slate-400 text-base md:text-lg font-normal font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Accessing secure research database. Decrypting knowledge nodes...
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col gap-6">
                        {/* Search Bar */}
                        <div className="relative w-full group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-600 rounded-lg opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                            <div className="relative flex w-full items-center bg-[#16282c] rounded-lg border border-[#1e363b] overflow-hidden h-14">
                                <div className="pl-4 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">terminal</span>
                                </div>
                                <input className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 font-mono text-base h-full outline-none" placeholder="> SEARCH_DATABASE // query_string..." type="text" />
                                <div className="pr-4 hidden sm:flex">
                                    <span className="text-xs text-slate-600 bg-[#1e363b] px-2 py-1 rounded font-mono">ENTER to execute</span>
                                </div>
                            </div>
                        </div>

                        {/* Filter Chips */}
                        <div className="flex gap-3 flex-wrap">
                            <button className="group flex h-9 items-center justify-center gap-x-2 rounded border border-primary/30 bg-primary/10 pl-3 pr-4 hover:bg-primary/20 transition-all">
                                <span className="material-symbols-outlined text-primary text-[18px]">hub</span>
                                <span className="text-primary text-xs font-bold tracking-wider uppercase">ALL_NODES</span>
                            </button>
                            <button className="group flex h-9 items-center justify-center gap-x-2 rounded border border-[#1e363b] bg-[#16282c] pl-3 pr-4 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[18px]">security</span>
                                <span className="text-slate-300 group-hover:text-white text-xs font-medium tracking-wider uppercase">CYBERSEC</span>
                            </button>
                            <button className="group flex h-9 items-center justify-center gap-x-2 rounded border border-[#1e363b] bg-[#16282c] pl-3 pr-4 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[18px]">view_quilt</span>
                                <span className="text-slate-300 group-hover:text-white text-xs font-medium tracking-wider uppercase">UI_PROTOCOLS</span>
                            </button>
                            <button className="group flex h-9 items-center justify-center gap-x-2 rounded border border-[#1e363b] bg-[#16282c] pl-3 pr-4 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[18px]">memory</span>
                                <span className="text-slate-300 group-hover:text-white text-xs font-medium tracking-wider uppercase">SYS_ARCH</span>
                            </button>
                            <button className="group flex h-9 items-center justify-center gap-x-2 rounded border border-[#1e363b] bg-[#16282c] pl-3 pr-4 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[18px]">deployed_code</span>
                                <span className="text-slate-300 group-hover:text-white text-xs font-medium tracking-wider uppercase">AI_AGENTS</span>
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <article className="flex flex-col bg-[#16282c] border border-[#1e363b] rounded-lg overflow-hidden hover:border-primary/50 transition-all group h-full">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10">
                                    <span className="text-[10px] font-mono text-primary">SECURE_LVL_01</span>
                                </div>
                                <img alt="Cyberpunk city digital rain interface" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSIE8qjL2xeLsWOKCrqDwRE0KMXo9eWO9dZtrKQOr9ACsJlbKXVSuZ48zCkkuUHsAkXisNWvOSFXj7XKloaGRW5KNQI2vspWwqWIPIMKVLGVtzrbSuP_GBeWicZDekj__6uxRsfQMmcEHfi2_AYv5nzLADgPupgXn-3Gtrnidqh-T7ul2LQ6OpWoyJWyYzbqKRz-IMumupInhrVPHo3V6EbbsnN-kBgr5aab9w05tIG6QLbkBHOSHYXXA9_VmwmFV_M495q58IKfc" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16282c] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow gap-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                    2023.10.24
                                    <span className="text-primary"> // </span>
                                    PROTOCOL_ZERO
                                </div>
                                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">The Future of Zero-Latency Interface</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">Analysis of critical user interactions in high-stakes environments where milliseconds determine outcome.</p>
                                <button className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase hover:gap-3 transition-all self-start mt-auto">
                                    Read_File
                                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </button>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="flex flex-col bg-[#16282c] border border-[#1e363b] rounded-lg overflow-hidden hover:border-primary/50 transition-all group h-full">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10">
                                    <span className="text-[10px] font-mono text-yellow-500">RESTRICTED</span>
                                </div>
                                <img alt="Abstract digital network nodes connecting" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKA1NY101ne6U1a9LM_QraL1mCdIbj5Bfhi4f6YBOmgD5AFtWjEYLAsx9pSp8-61RLsmSL0azcCDZKE_z7NY8K3Lu_1f2e1ptU26xdl8l0AG2WYf5iRdKvpj3ejbIBIotECotW5HEsA-bF6YfbmjMyWThCDm4DEF3eP1zSuVRYsrtWo-rRjscEJpzptsMijSneAlp0wl883d5X5jLt8QO2wSBUH-12q_EEtSlKrzVitWXAfVuUC52wpH6Y9dyGh7Pqm8BS1Aejwk0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16282c] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow gap-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                    2023.11.02
                                    <span className="text-primary"> // </span>
                                    NEURAL_LINK
                                </div>
                                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Neural Mapping in UX Design</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">Exploring how cognitive load theories can be applied directly to dashboard architecture for rapid data ingestion.</p>
                                <button className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase hover:gap-3 transition-all self-start mt-auto">
                                    Read_File
                                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </button>
                            </div>
                        </article>

                        {/* Card 3 */}
                        <article className="flex flex-col bg-[#16282c] border border-[#1e363b] rounded-lg overflow-hidden hover:border-primary/50 transition-all group h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img alt="Computer code on screen matrix style" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KdaiDr4ufCtvsvGxAcXwg67lsGFoeDAhdk0dPxMJN0vNcKQXMW9kjgNwVj9Hlc4uNxhrgT_wSryAbG4oRlYIhZ77UbktlWbl9eTFfpIHhlWhLoarVVXc3BfUiMYM_r2GIjw89JIG3nw9gHCHcd2f9t90tXp_ArU0zhFtcXFWZGAV-QHNxeBflb_2BXlcNz3e1LPgym8BjX7Q6shDeTnxvW20QbWsaoI58NPWT9m8oB6QvwmFTpAxhMLJBQBl4r6SedO2VAk4nGg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16282c] via-transparent to-transparent"></div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow gap-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                    2023.12.15
                                    <span className="text-primary"> // </span>
                                    CRYPTO_OPS
                                </div>
                                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Decentralized Identity Protocols</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">A deep dive into self-sovereign identity management and the UI patterns required for mass adoption.</p>
                                <button className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase hover:gap-3 transition-all self-start mt-auto">
                                    Read_File
                                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </button>
                            </div>
                        </article>
                    </div>

                    {/* Secure Uplink Section */}
                    <div className="mt-12 flex flex-col gap-8 mb-16">
                        <div className="flex flex-col gap-2 border-l-2 border-primary pl-6 py-2">
                            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tighter uppercase">Secure Uplink</h2>
                            <p className="text-slate-400 text-sm md:text-base font-normal font-mono">
                                Establish direct line. Encryption active.
                            </p>
                        </div>

                        <div className="relative bg-[#16282c] border border-[#1e363b] rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://placeholder.pics/svg/300')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                            <div className="absolute inset-0 bg-[#101f22]/80 backdrop-blur-sm pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row">
                                {/* Terminal Left Side */}
                                <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-[#1e363b] flex flex-col font-mono text-sm">
                                    <div className="mb-6 flex items-center gap-2 text-primary/70">
                                        <span className="w-3 h-3 rounded-full border border-primary animate-ping absolute"></span>
                                        <span className="w-3 h-3 rounded-full bg-primary relative z-10"></span>
                                        <span className="ml-2">CONNECTION_STABLE</span>
                                    </div>
                                    <div className="space-y-4 text-slate-400">
                                        <p>&gt; Initiating handshake...</p>
                                        <p>&gt; Determining location origin...</p>
                                        <p className="text-white">&gt; LOCATION: [REDACTED]</p>
                                        <p>&gt; LATENCY: 12ms</p>
                                        <br />
                                        <p className="text-primary">&gt; WAITING_FOR_INPUT_</p>
                                    </div>
                                    <div className="mt-auto pt-10">
                                        <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Direct Comms</h4>
                                        <ul className="space-y-2">
                                            <li><span className="flex items-center gap-2 hover:text-primary transition-colors text-slate-400 cursor-pointer"><span className="material-symbols-outlined text-[16px]">mail</span> encrypted@harshitsomani.cmd</span></li>
                                            <li><span className="flex items-center gap-2 hover:text-primary transition-colors text-slate-400 cursor-pointer"><span className="material-symbols-outlined text-[16px]">key</span> PGP_KEY_ID: 0x4A2B</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Form Right Side */}
                                <div className="lg:w-2/3 p-8 md:p-12">
                                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Identify Agent</label>
                                                <input className="bg-[#101f22] border border-[#1e363b] rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 font-mono text-sm" placeholder="NAME // ALIAS" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Return Frequency</label>
                                                <input className="bg-[#101f22] border border-[#1e363b] rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 font-mono text-sm" placeholder="EMAIL_ADDRESS" type="email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Transmission Payload</label>
                                            <textarea className="bg-[#101f22] border border-[#1e363b] rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 font-mono text-sm resize-none" placeholder="ENTER_MESSAGE_CONTENTS..." rows={4}></textarea>
                                        </div>
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2 gap-4">
                                            <div className="flex items-center gap-2">
                                                <input className="rounded bg-[#101f22] border-[#1e363b] text-primary focus:ring-offset-background-dark focus:ring-primary h-4 w-4" id="encrypt" type="checkbox" />
                                                <label className="text-xs text-slate-400 font-mono" htmlFor="encrypt">ENCRYPT_PACKET_DATA</label>
                                            </div>
                                            <button className="bg-primary hover:bg-cyan-400 text-[#101f22] font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(19,200,236,0.2)] w-full sm:w-auto" type="button">
                                                TRANSMIT
                                                <span className="material-symbols-outlined">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ArchiveUplink;
