import React from 'react';

const NeuralNetwork = () => {
    return (
        <section id="neural-network-module" className="cyber-command-module relative flex-1 flex flex-col glass-panel-neural rounded-xl overflow-hidden border border-primary/20 m-4 md:m-10 mt-0 min-h-[600px] font-display">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <div className="p-6 border-b border-hud-border/30 flex justify-between items-center bg-background-dark/40 z-10">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Neural Network Skills</h2>
                    <p className="text-hud-text-dim text-xs uppercase tracking-widest">Visualizing Technical Competencies</p>
                </div>
                <div className="hidden sm:flex gap-2">
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Backend</span>
                    <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">Security</span>
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20">DevOps</span>
                </div>
            </div>

            {/* Network Visualization Container */}
            <div className="relative flex-1 bg-[#0a0f14]/80 w-full min-h-[500px] overflow-hidden group/network">
                {/* Background Grid */}
                <div className="absolute inset-0 tech-bg-neural opacity-20"></div>

                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 w-48 h-[1px] bg-gradient-to-r from-primary/50 to-purple-500/30 -translate-y-1/2 rotate-[-25deg] origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-[1px] bg-gradient-to-l from-primary/50 to-blue-500/30 -translate-y-1/2 rotate-[-145deg] origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-56 h-[1px] bg-gradient-to-r from-primary/50 to-green-500/30 -translate-y-1/2 rotate-[35deg] origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-44 h-[1px] bg-gradient-to-l from-primary/50 to-cyan-500/30 -translate-y-1/2 rotate-[155deg] origin-left"></div>

                {/* Core Node (Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group">
                    <div className="w-24 h-24 rounded-full bg-[#101c22] border-2 border-primary flex items-center justify-center relative shadow-[0_0_30px_rgba(19,164,236,0.3)] node-pulse cursor-pointer transition-all hover:scale-110">
                        <span className="material-symbols-outlined text-4xl text-white">hub</span>
                        <div className="absolute inset-0 rounded-full border border-primary/30 w-32 h-32 -top-4 -left-4 animate-[spin_10s_linear_infinite]"></div>
                    </div>
                    <div className="mt-4 text-center bg-black/80 backdrop-blur px-3 py-1 rounded border border-primary/30">
                        <span className="text-white font-bold text-sm uppercase tracking-widest">Full Stack</span>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 p-3 glass-panel-neural rounded border border-primary text-xs text-hud-text-dim pointer-events-none">
                        <p><strong className="text-white">Core Proficiency:</strong> Architecture, System Design, API Development.</p>
                    </div>
                </div>

                {/* Offensive Security Node (Top Left) */}
                <div className="absolute top-[20%] left-[15%] flex flex-col items-center z-20 group">
                    <div className="w-16 h-16 rounded-full bg-[#101c22] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer hover:bg-purple-900/20 transition-all">
                        <span className="material-symbols-outlined text-2xl text-purple-400">bug_report</span>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-purple-300 font-bold text-xs uppercase tracking-wider">Offensive Sec</span>
                    </div>
                    {/* Hover Stack */}
                    <div className="absolute top-full mt-2 hidden group-hover:flex flex-col gap-1 w-40 animate-fade-in-up z-30">
                        <span className="bg-purple-900/80 text-purple-100 text-[10px] px-2 py-1 rounded border-l-2 border-purple-500">Penetration Testing</span>
                        <span className="bg-purple-900/80 text-purple-100 text-[10px] px-2 py-1 rounded border-l-2 border-purple-500">Metasploit</span>
                        <span className="bg-purple-900/80 text-purple-100 text-[10px] px-2 py-1 rounded border-l-2 border-purple-500">Burp Suite</span>
                    </div>
                </div>

                {/* Cloud Infra Node (Top Right) */}
                <div className="absolute top-[25%] right-[15%] flex flex-col items-center z-20 group">
                    <div className="w-14 h-14 rounded-full bg-[#101c22] border-2 border-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.3)] cursor-pointer hover:bg-blue-900/20 transition-all">
                        <span className="material-symbols-outlined text-2xl text-blue-400">cloud</span>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-blue-300 font-bold text-xs uppercase tracking-wider">Cloud Infra</span>
                    </div>
                    {/* Hover Stack */}
                    <div className="absolute top-full mt-2 hidden group-hover:flex flex-col gap-1 w-32 animate-fade-in-up z-30">
                        <span className="bg-blue-900/80 text-blue-100 text-[10px] px-2 py-1 rounded border-l-2 border-blue-500">AWS / Azure</span>
                        <span className="bg-blue-900/80 text-blue-100 text-[10px] px-2 py-1 rounded border-l-2 border-blue-500">Docker</span>
                        <span className="bg-blue-900/80 text-blue-100 text-[10px] px-2 py-1 rounded border-l-2 border-blue-500">Kubernetes</span>
                    </div>
                </div>

                {/* Frontend Node (Bottom Left) */}
                <div className="absolute bottom-[20%] left-[20%] flex flex-col items-center z-20 group">
                    <div className="w-14 h-14 rounded-full bg-[#101c22] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer hover:bg-cyan-900/20 transition-all">
                        <span className="material-symbols-outlined text-2xl text-cyan-400">code</span>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider">Frontend</span>
                    </div>
                    {/* Hover Stack */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col-reverse gap-1 w-32 animate-fade-in-up z-30">
                        <span className="bg-cyan-900/80 text-cyan-100 text-[10px] px-2 py-1 rounded border-l-2 border-cyan-500">React / Vue</span>
                        <span className="bg-cyan-900/80 text-cyan-100 text-[10px] px-2 py-1 rounded border-l-2 border-cyan-500">Tailwind CSS</span>
                        <span className="bg-cyan-900/80 text-cyan-100 text-[10px] px-2 py-1 rounded border-l-2 border-cyan-500">TypeScript</span>
                    </div>
                </div>

                {/* Data Science Node (Bottom Right) */}
                <div className="absolute bottom-[25%] right-[20%] flex flex-col items-center z-20 group">
                    <div className="w-12 h-12 rounded-full bg-[#101c22] border-2 border-green-400 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.3)] cursor-pointer hover:bg-green-900/20 transition-all">
                        <span className="material-symbols-outlined text-xl text-green-400">dataset</span>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-green-300 font-bold text-xs uppercase tracking-wider">Data Intel</span>
                    </div>
                    {/* Hover Stack */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col-reverse gap-1 w-32 animate-fade-in-up z-30">
                        <span className="bg-green-900/80 text-green-100 text-[10px] px-2 py-1 rounded border-l-2 border-green-500">Python</span>
                        <span className="bg-green-900/80 text-green-100 text-[10px] px-2 py-1 rounded border-l-2 border-green-500">Elasticsearch</span>
                    </div>
                </div>

                {/* Floating Particles (Simulated Nodes) */}
                <div className="absolute top-[10%] right-[40%] w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-[10%] left-[40%] w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-75"></div>
                <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-purple-500/30 rounded-full animate-pulse delay-150"></div>
            </div>
        </section>
    );
};

export default NeuralNetwork;
