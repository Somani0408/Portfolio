import React from 'react';

const Experience = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 mx-auto px-6 py-12 md:py-20 md:px-10 min-h-screen">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-4 tracking-tight">EXPERIENCE</h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide max-w-2xl mb-16">
                A timeline of my professional journey, highlighting freelance projects and structured company roles.
            </p>

            {/* Freelance Work Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-primary/30 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary px-4 border border-primary/30 rounded-full py-2 bg-primary/5 uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">public</span>
                        Freelance Work
                    </h2>
                    <div className="h-px bg-primary/30 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project Card: Balaji Collection */}
                    <div className="group border border-border-dark bg-secondary-dark rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none transition-colors group-hover:bg-primary/10"></div>

                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Balaji Collection</h3>
                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded text-xs font-bold tracking-wider">COMPLETED</span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Business Website Development</h4>

                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                            Developed a structured business website for Balaji Collection, a rapidly scaling fabric enterprise. The platform is deeply focused on showcasing exclusive premium fabric collections, establishing a digital presence, and streamlining customer outreach operations.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-900/20 border border-cyan-800/40 rounded-full">React</span>
                            <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-900/20 border border-cyan-800/40 rounded-full">Tailwind CSS</span>
                            <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-900/20 border border-cyan-800/40 rounded-full">Responsive Design</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Experience Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-emerald-500/30 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-emerald-400 px-4 border border-emerald-500/30 rounded-full py-2 bg-emerald-500/5 uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">business_center</span>
                        Company Experience
                    </h2>
                    <div className="h-px bg-emerald-500/30 flex-1"></div>
                </div>

                <div className="flex flex-col items-center justify-center p-12 md:p-24 border border-dashed border-slate-700 rounded-2xl bg-black/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCA0MGw0MC00ME0wIDIwbDIwLTIwTTAgNjBsNjAtNjBNLTIwIDQwbDYwLTYwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity"></div>

                    <span className="material-symbols-outlined text-6xl text-slate-600 mb-4 font-light">hourglass_empty</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-300 mb-2 text-center">Awaiting Deployment</h3>
                    <p className="text-slate-500 text-center max-w-md">
                        Professional company experience will be added here in the future.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Experience;
